"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RetryableStreamError = exports.FatalStreamError = void 0;
exports.createStream = createStream;
var _connect = /*#__PURE__*/require("@connectrpc/connect");
var _core = /*#__PURE__*/require("@substreams/core");
var _proto = /*#__PURE__*/require("@substreams/core/proto");
var _effect = /*#__PURE__*/require("effect");
var Metrics = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("./metrics.js"));
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n.default = e, t && t.set(e, n), n;
}
class RetryableStreamError extends _effect.Data.TaggedClass("RetryableStreamError") {}
exports.RetryableStreamError = RetryableStreamError;
class FatalStreamError extends _effect.Data.TaggedClass("FatalStreamError") {}
exports.FatalStreamError = FatalStreamError;
function createStream({
  connectTransport,
  substreamPackage,
  outputModule,
  startBlockNum,
  stopBlockNum,
  startCursor,
  productionMode,
  maxRetrySeconds = 300
}) {
  const create = _effect.Effect.gen(function* (_) {
    const requestActiveStartBlock = yield* _(_effect.Ref.make(BigInt(0)));
    const currentCursor = yield* _(_effect.Ref.make(startCursor ? _effect.Option.some(startCursor) : _effect.Option.none()));
    const metrics = _effect.Sink.forEach(response => _effect.Effect.gen(function* (_) {
      const size = response.toBinary().byteLength;
      yield* _(_effect.Metric.incrementBy(Metrics.MessageSizeBytes, size));
      const {
        case: kind,
        value: message
      } = response.message;
      switch (kind) {
        case "blockScopedData":
          {
            yield* _(_effect.Metric.increment(Metrics.DataMessageCount));
            yield* _(_effect.Metric.incrementBy(Metrics.DataMessageSizeBytes, size));
            // TODO: Add support for bigint metrics to effect-ts.
            const block = Number(message.clock?.number ?? 0);
            const timestamp = Number(message.clock?.timestamp?.seconds ?? 0);
            const now = Date.now() / 1000;
            yield* _(_effect.Metric.set(Metrics.HeadBlockNumber, block));
            yield* _(_effect.Metric.set(Metrics.HeadBlockTime, timestamp));
            yield* _(_effect.Metric.set(Metrics.HeadBlockTimeDrift, now - timestamp));
            return;
          }
        case "blockUndoSignal":
          {
            yield* _(_effect.Metric.increment(Metrics.UndoMessageCount));
            yield* _(_effect.Metric.incrementBy(Metrics.UndoMessageSizeBytes, size));
            return;
          }
        case "progress":
          {
            yield* _(_effect.Metric.increment(Metrics.ProgressMessageCount));
            yield* _(_effect.Metric.incrementBy(Metrics.ProgressMessageSizeBytes, size));
            let totalProcessedBlocks = BigInt(0);
            const latestEndBlockPerStage = new Map();
            const jobsPerStage = new Map();
            for (const job of message.runningJobs) {
              totalProcessedBlocks += job.processedBlocks;
              const jobEndBlock = job.startBlock + job.processedBlocks;
              const prevEndBlock = latestEndBlockPerStage.get(job.stage) ?? BigInt(0);
              if (jobEndBlock > prevEndBlock) {
                latestEndBlockPerStage.set(job.stage, jobEndBlock);
              }
              jobsPerStage.set(job.stage, (jobsPerStage.get(job.stage) ?? BigInt(0)) + BigInt(1n));
            }
            for (const [i, block] of latestEndBlockPerStage) {
              // TODO: Add support for bigint metrics to effect-ts.
              const metric = _effect.Metric.tagged(Metrics.ProgressMessageLastBlock, "stage", `stage-${i}`);
              yield* _(_effect.Metric.set(metric, Number(block)));
            }
            for (const [i, jobs] of jobsPerStage) {
              // TODO: Add support for bigint metrics to effect-ts.
              const metric = _effect.Metric.tagged(Metrics.ProgressMessageRunningJobs, "stage", `stage-${i}`);
              yield* _(_effect.Metric.set(metric, Number(jobs)));
            }
            const startBlock = yield* _(_effect.Ref.get(requestActiveStartBlock));
            const stagesModules = new Map();
            for (const [i, stage] of message.stages.entries()) {
              stagesModules.set(i, stage.modules);
              for (const [j, range] of stage.completedRanges.entries()) {
                // The last stage in production is a mapper. There may be "completed ranges" below the one that includes our start block.
                if (productionMode && i === message.stages.length - 1) {
                  if (startBlock <= range.startBlock && range.endBlock >= startBlock) {
                    const metric = _effect.Metric.tagged(Metrics.ProgressMessageLastContiguousBlock, "stage", `stage-${i}`);
                    yield* _(_effect.Metric.set(metric, Number(range.endBlock)));
                  }
                } else {
                  if (j === 0) {
                    const metric = _effect.Metric.tagged(Metrics.ProgressMessageLastContiguousBlock, "stage", `stage-${i}`);
                    yield* _(_effect.Metric.set(metric, Number(range.endBlock)));
                  }
                }
                totalProcessedBlocks += range.endBlock - range.startBlock;
              }
            }
            // TODO: Add support for bigint metrics to effect-ts.
            _effect.Metric.set(Metrics.ProgressMessageTotalProcessedBlocks, Number(totalProcessedBlocks));
            return;
          }
        case "session":
          {
            const session = JSON.stringify({
              max_parallel_workers: String(message.maxParallelWorkers),
              resolved_start_block: String(message.resolvedStartBlock),
              trace_id: String(message.traceId)
            });
            yield* _(_effect.Effect.logInfo(`Session initialized with remote endpoint ${session}`));
            yield* _(_effect.Ref.set(requestActiveStartBlock, message.resolvedStartBlock));
            return;
          }
        case "debugSnapshotComplete":
        case "debugSnapshotData":
          {
            yield* _(_effect.Effect.logWarning("Received debug snapshot message, there is no reason to receive those here"));
            return;
          }
        case "fatalError":
          {
            yield* _(_effect.Effect.fail(new FatalStreamError({
              message: "Received fatal error message from the backend",
              cause: message
            })));
            return;
          }
        default:
          {
            yield* _(_effect.Effect.logWarning("Received unknown message type"));
            yield* _(_effect.Metric.increment(Metrics.UnknownMessageCount));
            yield* _(_effect.Metric.incrementBy(Metrics.UnknownMessageSizeBytes, size));
            return;
          }
      }
    }));
    const aquire = _effect.Ref.get(currentCursor).pipe(_effect.Effect.map(startCursor => _effect.Option.getOrUndefined(startCursor)), _effect.Effect.map(startCursor => {
      const client = (0, _connect.createPromiseClient)(_proto.Stream, connectTransport);
      const request = (0, _core.createRequest)({
        substreamPackage,
        productionMode,
        outputModule,
        startBlockNum,
        stopBlockNum,
        startCursor
      });
      const controller = new AbortController();
      const stream = _effect.Stream.fromAsyncIterable(client.blocks(request, {
        signal: controller.signal
      }), cause => {
        if (cause instanceof _connect.ConnectError) {
          // TODO: Cover all possible connect protocol error code cases.
          if (cause.code === _connect.Code.Unauthenticated || cause.code === _connect.Code.Canceled || cause.code === _connect.Code.InvalidArgument) {
            return new FatalStreamError({
              message: `Stream failed with unretryable error (code ${cause.code})`,
              cause
            });
          }
        }
        return new RetryableStreamError({
          message: "Stream failed with retryable error",
          cause
        });
      });
      return {
        controller,
        stream
      };
    }));
    const stream = _effect.Stream.acquireRelease(aquire, (scope, exit) => _effect.Effect.sync(() => scope.controller.abort(exit))).pipe(_effect.Stream.flatMap(scope => scope.stream), _effect.Stream.tapSink(metrics), _effect.Stream.tap(response => {
      if (response.message.case === "blockScopedData") {
        return _effect.Ref.set(currentCursor, _effect.Option.some(response.message.value.cursor));
      } else if (response.message.case === "blockUndoSignal") {
        return _effect.Ref.set(currentCursor, _effect.Option.some(response.message.value.lastValidCursor));
      }
      return _effect.Effect.unit;
    }), _effect.Stream.tapError(error => _effect.Effect.all([_effect.Metric.increment(Metrics.SubstreamsErrorCount), _effect.Effect.logWarning(`Encountered an error while streaming: ${String(error)}}`)])));
    return stream.pipe(_effect.Stream.retry(_effect.Schedule.exponential(_effect.Duration.millis(100), 2).pipe(
    // Retry with jittered exponential backoff.
    _effect.Schedule.jittered,
    // With a maximum delay of 10 seconds between retry.
    _effect.Schedule.either(_effect.Schedule.spaced(_effect.Duration.seconds(10))),
    // Retry for up to 3 minutes.
    _effect.Schedule.compose(_effect.Schedule.elapsed),
    // Retry for the specified maximum duration.
    _effect.Schedule.whileOutput(_effect.Duration.lessThanOrEqualTo(_effect.Duration.seconds(maxRetrySeconds ?? 300))),
    // Retry only on retryable errors.
    _effect.Schedule.whileInput(_effect.Predicate.isTagged("RetryableStreamError")),
    // TODO: There seems to be a bug with type inference here for the `Schedule` input.
    _effect.Schedule.tapInput(() => _effect.Effect.logWarning("Retrying after retryable stream error")))));
  });
  return _effect.Stream.unwrap(create);
}
//# sourceMappingURL=stream.js.map