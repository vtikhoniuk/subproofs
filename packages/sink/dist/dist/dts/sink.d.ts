import { type PlainMessage } from "@bufbuild/protobuf";
import type { BlockScopedData, BlockUndoSignal, Response } from "@substreams/core/proto";
import { Data, Effect, Sink } from "effect";
declare const SinkError_base: new <A extends Record<string, any>>(args: import("effect/Types").Equals<Omit<A, keyof import("effect/Equal").Equal>, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" | keyof import("effect/Equal").Equal ? never : P]: A[P]; }) => Data.Data<Readonly<A> & {
    readonly _tag: "SinkError";
}>;
export declare class SinkError extends SinkError_base<{
    readonly cause: BlockScopedDataSinkError | BlockUndoSignalSinkError;
}> {
}
declare const BlockScopedDataSinkError_base: new <A extends Record<string, any>>(args: import("effect/Types").Equals<Omit<A, keyof import("effect/Equal").Equal>, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" | keyof import("effect/Equal").Equal ? never : P]: A[P]; }) => Data.Data<Readonly<A> & {
    readonly _tag: "SinkError";
}>;
export declare class BlockScopedDataSinkError extends BlockScopedDataSinkError_base<{
    readonly cause: unknown;
    readonly message: PlainMessage<BlockScopedData>;
}> {
}
declare const BlockUndoSignalSinkError_base: new <A extends Record<string, any>>(args: import("effect/Types").Equals<Omit<A, keyof import("effect/Equal").Equal>, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" | keyof import("effect/Equal").Equal ? never : P]: A[P]; }) => Data.Data<Readonly<A> & {
    readonly _tag: "SinkError";
}>;
export declare class BlockUndoSignalSinkError extends BlockUndoSignalSinkError_base<{
    readonly cause: unknown;
    readonly message: PlainMessage<BlockUndoSignal>;
}> {
}
export type CreateSinkOptions<R1, R2> = {
    handleBlockScopedData: (message: BlockScopedData) => Effect.Effect<R1, unknown, void>;
    handleBlockUndoSignal: (message: BlockUndoSignal) => Effect.Effect<R2, unknown, void>;
};
export declare function createSink<R1, R2>({ handleBlockScopedData, handleBlockUndoSignal }: CreateSinkOptions<R1, R2>): Sink.Sink<R1 | R2, SinkError, Response, never, void>;
export {};
//# sourceMappingURL=sink.d.ts.map