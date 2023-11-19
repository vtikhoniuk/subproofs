import { Message, type MessageType } from "@bufbuild/protobuf";
export type SerializedMessage<TMessage extends Message<TMessage>> = string & {
    __type: TMessage;
};
export type MaybeSerializedMessage<TMessage extends Message<TMessage>> = TMessage | SerializedMessage<TMessage>;
export declare function serializeMessage<TMessage extends Message<TMessage>>(message: TMessage): SerializedMessage<TMessage>;
export declare function deserializeMessage<TMessage extends Message<TMessage>>(type: MessageType<TMessage>, value: SerializedMessage<TMessage>): TMessage;
//# sourceMappingURL=message-serde.d.ts.map