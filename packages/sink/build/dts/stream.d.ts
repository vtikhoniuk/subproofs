import { type Transport } from "@connectrpc/connect";
import { type Module, type Package, type Response } from "@substreams/core/proto";
import { Data, Stream } from "effect";
export type StreamError = RetryableStreamError | FatalStreamError;
declare const RetryableStreamError_base: new <A extends Record<string, any>>(args: import("effect/Types").Equals<Omit<A, keyof import("effect/Equal").Equal>, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" | keyof import("effect/Equal").Equal ? never : P]: A[P]; }) => Data.Data<Readonly<A> & {
    readonly _tag: "RetryableStreamError";
}>;
export declare class RetryableStreamError extends RetryableStreamError_base<{
    readonly message: string;
    readonly cause: unknown;
}> {
}
declare const FatalStreamError_base: new <A extends Record<string, any>>(args: import("effect/Types").Equals<Omit<A, keyof import("effect/Equal").Equal>, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" | keyof import("effect/Equal").Equal ? never : P]: A[P]; }) => Data.Data<Readonly<A> & {
    readonly _tag: "FatalStreamError";
}>;
export declare class FatalStreamError extends FatalStreamError_base<{
    readonly message: string;
    readonly cause: unknown;
}> {
}
export type CreateStreamOptions = {
    /**
     * The transport to use to connect to the backend service.
     */
    connectTransport: Transport;
    /**
     * The substream package.
     */
    substreamPackage: Package;
    /**
     * The module to stream.
     */
    outputModule: string | Module;
    /**
     * The block number to start streaming from.
     *
     * @default undefined `start from the initial block of the selected module`
     */
    startBlockNum?: number | bigint | undefined;
    /**
     * The block number to stop streaming at.
     *
     * @default undefined (follow the chain indefinitely)
     */
    stopBlockNum?: number | bigint | `+${number}` | undefined;
    /**
     * The cursor to start streaming from.
     *
     * Useful for continuing a stream from a specific point.
     *
     * @default undefined (start from the beginning)
     */
    startCursor?: string | undefined;
    /**
     * The maximum number of seconds to retry the stream for on failure.
     *
     * We track the current cursor of the last emitted response internally. Whenever the source stream fails
     * it is automatically restarted from the last recorded cursor.
     *
     * We employ a jittered, exponential backoff strategy for retries.
     *
     * @default 300 (5 minutes)
     */
    maxRetrySeconds?: number | undefined;
    /**
     * Whether to use production mode.
     *
     * @default false
     */
    productionMode?: boolean | undefined;
};
export declare function createStream({ connectTransport, substreamPackage, outputModule, startBlockNum, stopBlockNum, startCursor, productionMode, maxRetrySeconds, }: CreateStreamOptions): Stream.Stream<never, StreamError, Response>;
export {};
//# sourceMappingURL=stream.d.ts.map