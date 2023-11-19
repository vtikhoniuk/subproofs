"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSubstream = useSubstream;
var _connect = /*#__PURE__*/require("@connectrpc/connect");
var _core = /*#__PURE__*/require("@substreams/core");
var _react = /*#__PURE__*/require("react");
function useSubstream({
  request,
  transport,
  handlers
}) {
  const abortRef = (0, _react.useRef)(() => {});
  const handlersRef = (0, _react.useRef)(handlers);
  handlersRef.current = handlers;
  (0, _react.useEffect)(() => {
    const controller = new AbortController();
    const stream = (0, _core.streamBlocks)(transport, request, {
      signal: controller.signal
    });
    abortRef.current = reason => controller.abort(reason);
    (async () => {
      try {
        for await (const response of stream) {
          handlersRef.current.onResponse?.(response);
        }
        handlersRef.current.onFinish?.();
      } catch (error) {
        if (error?.name === "ConnectError") {
          const cerror = error;
          if (cerror.code === _connect.Code.Aborted) {
            handlersRef.current.onAbort?.(cerror);
            return;
          }
        }
        handlersRef.current?.onError?.(error);
      }
      handlersRef.current.onClose?.();
    })();
    return abortRef.current;
  }, [request, transport]);
  return () => abortRef.current();
}
//# sourceMappingURL=use-substream.js.map