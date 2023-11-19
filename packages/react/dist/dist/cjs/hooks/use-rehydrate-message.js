"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRehydrateMessage = useRehydrateMessage;
var _react = /*#__PURE__*/require("react");
var _messageSerde = /*#__PURE__*/require("../utils/message-serde.js");
function useRehydrateMessage(type, message) {
  const rehydrated = (0, _react.useMemo)(() => {
    if (message instanceof type) {
      return message;
    }
    return (0, _messageSerde.deserializeMessage)(type, message);
  }, [message, type]);
  return rehydrated;
}
//# sourceMappingURL=use-rehydrate-message.js.map