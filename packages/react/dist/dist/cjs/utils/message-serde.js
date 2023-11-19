"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deserializeMessage = deserializeMessage;
exports.serializeMessage = serializeMessage;
var _protobuf = /*#__PURE__*/require("@bufbuild/protobuf");
function serializeMessage(message) {
  return _protobuf.protoBase64.enc(message.toBinary());
}
function deserializeMessage(type, value) {
  return type.fromBinary(_protobuf.protoBase64.dec(value));
}
//# sourceMappingURL=message-serde.js.map