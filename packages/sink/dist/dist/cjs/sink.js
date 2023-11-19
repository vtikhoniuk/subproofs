"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SinkError = exports.BlockUndoSignalSinkError = exports.BlockScopedDataSinkError = void 0;
exports.createSink = createSink;
var _protobuf = /*#__PURE__*/require("@bufbuild/protobuf");
var _effect = /*#__PURE__*/require("effect");
class SinkError extends _effect.Data.TaggedClass("SinkError") {}
exports.SinkError = SinkError;
class BlockScopedDataSinkError extends _effect.Data.TaggedClass("SinkError") {}
exports.BlockScopedDataSinkError = BlockScopedDataSinkError;
class BlockUndoSignalSinkError extends _effect.Data.TaggedClass("SinkError") {}
exports.BlockUndoSignalSinkError = BlockUndoSignalSinkError;
function createSink({
  handleBlockScopedData,
  handleBlockUndoSignal
}) {
  return _effect.Sink.forEach(response => {
    const {
      value: message,
      case: kind
    } = response.message;
    switch (kind) {
      case "blockScopedData":
        {
          return handleBlockScopedData(message).pipe(_effect.Effect.catchAll(cause => _effect.Effect.fail(new SinkError({
            cause: new BlockScopedDataSinkError({
              cause,
              message: (0, _protobuf.toPlainMessage)(message)
            })
          }))));
        }
      case "blockUndoSignal":
        {
          return handleBlockUndoSignal(message).pipe(_effect.Effect.catchAll(cause => _effect.Effect.fail(new SinkError({
            cause: new BlockUndoSignalSinkError({
              cause,
              message: (0, _protobuf.toPlainMessage)(message)
            })
          }))));
        }
    }
    return _effect.Effect.unit;
  });
}
//# sourceMappingURL=sink.js.map