import { Message, type MessageType } from "@bufbuild/protobuf";
import { type MaybeSerializedMessage } from "../utils/message-serde.js";
export declare function useRehydrateMessage<TMessage extends Message<TMessage>>(type: MessageType<TMessage>, message: MaybeSerializedMessage<TMessage>): TMessage;
//# sourceMappingURL=use-rehydrate-message.d.ts.map