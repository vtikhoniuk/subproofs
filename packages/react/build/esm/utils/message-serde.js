import { protoBase64 } from "@bufbuild/protobuf";
export function serializeMessage(message) {
  return protoBase64.enc(message.toBinary());
}
export function deserializeMessage(type, value) {
  return type.fromBinary(protoBase64.dec(value));
}
//# sourceMappingURL=message-serde.js.map