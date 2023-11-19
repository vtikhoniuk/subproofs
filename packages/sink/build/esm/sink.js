import { toPlainMessage } from "@bufbuild/protobuf";
import { Data, Effect, Sink } from "effect";
export class SinkError extends Data.TaggedClass("SinkError") {}
export class BlockScopedDataSinkError extends Data.TaggedClass("SinkError") {}
export class BlockUndoSignalSinkError extends Data.TaggedClass("SinkError") {}
export function createSink({
  handleBlockScopedData,
  handleBlockUndoSignal
}) {
  return Sink.forEach(response => {
    const {
      value: message,
      case: kind
    } = response.message;
    switch (kind) {
      case "blockScopedData":
        {
          return handleBlockScopedData(message).pipe(Effect.catchAll(cause => Effect.fail(new SinkError({
            cause: new BlockScopedDataSinkError({
              cause,
              message: toPlainMessage(message)
            })
          }))));
        }
      case "blockUndoSignal":
        {
          return handleBlockUndoSignal(message).pipe(Effect.catchAll(cause => Effect.fail(new SinkError({
            cause: new BlockUndoSignalSinkError({
              cause,
              message: toPlainMessage(message)
            })
          }))));
        }
    }
    return Effect.unit;
  });
}
//# sourceMappingURL=sink.js.map