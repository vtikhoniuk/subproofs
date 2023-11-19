"use client";

import { Code } from "@connectrpc/connect";
import { streamBlocks } from "@substreams/core";
import { useEffect, useRef } from "react";
export function useSubstream({
  request,
  transport,
  handlers
}) {
  const abortRef = useRef(() => {});
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  useEffect(() => {
    const controller = new AbortController();
    const stream = streamBlocks(transport, request, {
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
          if (cerror.code === Code.Aborted) {
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