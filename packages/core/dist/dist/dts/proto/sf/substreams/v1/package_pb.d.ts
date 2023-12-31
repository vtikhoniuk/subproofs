import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FileDescriptorProto, Message, proto3 } from "@bufbuild/protobuf";
import { Modules } from "./modules_pb.js";
/**
 * @generated from message sf.substreams.v1.Package
 */
export declare class Package extends Message<Package> {
    /**
     * Needs to be one so this file can be used _directly_ as a
     * buf `Image` andor a ProtoSet for grpcurl and other tools
     *
     * @generated from field: repeated google.protobuf.FileDescriptorProto proto_files = 1;
     */
    protoFiles: FileDescriptorProto[];
    /**
     * @generated from field: uint64 version = 5;
     */
    version: bigint;
    /**
     * @generated from field: sf.substreams.v1.Modules modules = 6;
     */
    modules?: Modules;
    /**
     * @generated from field: repeated sf.substreams.v1.ModuleMetadata module_meta = 7;
     */
    moduleMeta: ModuleMetadata[];
    /**
     * @generated from field: repeated sf.substreams.v1.PackageMetadata package_meta = 8;
     */
    packageMeta: PackageMetadata[];
    /**
     * Source network for Substreams to fetch its data from.
     *
     * @generated from field: string network = 9;
     */
    network: string;
    /**
     * @generated from field: google.protobuf.Any sink_config = 10;
     */
    sinkConfig?: Any;
    /**
     * @generated from field: string sink_module = 11;
     */
    sinkModule: string;
    /**
     * image is the bytes to a JPEG, WebP or PNG file. Max size is 2 MiB
     *
     * @generated from field: bytes image = 12;
     */
    image: Uint8Array;
    constructor(data?: PartialMessage<Package>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.v1.Package";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Package;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Package;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Package;
    static equals(a: Package | PlainMessage<Package> | undefined, b: Package | PlainMessage<Package> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.v1.PackageMetadata
 */
export declare class PackageMetadata extends Message<PackageMetadata> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string doc = 4;
     */
    doc: string;
    constructor(data?: PartialMessage<PackageMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.v1.PackageMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackageMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackageMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackageMetadata;
    static equals(a: PackageMetadata | PlainMessage<PackageMetadata> | undefined, b: PackageMetadata | PlainMessage<PackageMetadata> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.v1.ModuleMetadata
 */
export declare class ModuleMetadata extends Message<ModuleMetadata> {
    /**
     * Corresponds to the index in `Package.metadata.package_meta`
     *
     * @generated from field: uint64 package_index = 1;
     */
    packageIndex: bigint;
    /**
     * @generated from field: string doc = 2;
     */
    doc: string;
    constructor(data?: PartialMessage<ModuleMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.v1.ModuleMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleMetadata;
    static equals(a: ModuleMetadata | PlainMessage<ModuleMetadata> | undefined, b: ModuleMetadata | PlainMessage<ModuleMetadata> | undefined): boolean;
}
//# sourceMappingURL=package_pb.d.ts.map