import { useMemo } from "react";
import { deserializeMessage } from "../utils/message-serde.js";
export function useRehydrateMessage(type, message) {
  const rehydrated = useMemo(() => {
    if (message instanceof type) {
      return message;
    }
    return deserializeMessage(type, message);
  }, [message, type]);
  return rehydrated;
}
//# sourceMappingURL=use-rehydrate-message.js.map