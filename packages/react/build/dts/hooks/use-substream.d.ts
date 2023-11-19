import { ConnectError, type Transport } from "@connectrpc/connect";
import { Request, Response } from "@substreams/core/proto";
export interface UseSubstreamOptions {
    /**
     * The `sf.substreams.rpc.v2.Request` request to send.
     */
    request: Request;
    /**
     * The transport to use.
     */
    transport: Transport;
    handlers: {
        /**
         * Called when an error occurs.
         */
        onError?: (cause: unknown) => void;
        /**
         * Called when a new response is received.
         */
        onResponse?: (response: Response) => void;
        /**
         * Called when the stream is aborted.
         */
        onAbort?: (cause: ConnectError) => void;
        /**
         * Called when the stream is closed after it's finished.
         */
        onFinish?: () => void;
        /**
         * Called when the stream is closed after it's finished, failed or aborted.
         */
        onClose?: () => void;
    };
}
export declare function useSubstream({ request, transport, handlers }: UseSubstreamOptions): () => void;
//# sourceMappingURL=use-substream.d.ts.map