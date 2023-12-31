import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message sf.substreams.FieldOptions
 */
export declare class FieldOptions extends Message<FieldOptions> {
    /**
     * this option informs the `substreams pack` command that it should treat the corresponding manifest value as a path to a file, putting its content as bytes in this field.
     * must be applied to a `bytes` or `string` field
     *
     * @generated from field: bool load_from_file = 1;
     */
    loadFromFile: boolean;
    /**
     * this option informs the `substreams pack` command that it should treat the corresponding manifest value as a path to a folder, zipping its content and putting the zip content as bytes in this field.
     * must be applied to a `bytes` field
     *
     * @generated from field: bool zip_from_folder = 2;
     */
    zipFromFolder: boolean;
    constructor(data?: PartialMessage<FieldOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.FieldOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldOptions;
    static equals(a: FieldOptions | PlainMessage<FieldOptions> | undefined, b: FieldOptions | PlainMessage<FieldOptions> | undefined): boolean;
}
//# sourceMappingURL=options_pb.d.ts.map