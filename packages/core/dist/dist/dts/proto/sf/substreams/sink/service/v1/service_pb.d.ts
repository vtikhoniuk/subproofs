import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Package } from "../../../v1/package_pb.js";
/**
 * @generated from enum sf.substreams.sink.service.v1.DeploymentStatus
 */
export declare enum DeploymentStatus {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: RUNNING = 1;
     */
    RUNNING = 1,
    /**
     * @generated from enum value: FAILING = 2;
     */
    FAILING = 2,
    /**
     * @generated from enum value: PAUSED = 3;
     */
    PAUSED = 3,
    /**
     * @generated from enum value: STOPPED = 4;
     */
    STOPPED = 4
}
/**
 * @generated from message sf.substreams.sink.service.v1.DeployRequest
 */
export declare class DeployRequest extends Message<DeployRequest> {
    /**
     * @generated from field: sf.substreams.v1.Package substreams_package = 1;
     */
    substreamsPackage?: Package;
    constructor(data?: PartialMessage<DeployRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.DeployRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeployRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeployRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeployRequest;
    static equals(a: DeployRequest | PlainMessage<DeployRequest> | undefined, b: DeployRequest | PlainMessage<DeployRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.DeployResponse
 */
export declare class DeployResponse extends Message<DeployResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus status = 1;
     */
    status: DeploymentStatus;
    /**
     * deployment_id is a short name (max 8 characters) that uniquely identifies your deployment
     *
     * @generated from field: string deployment_id = 2;
     */
    deploymentId: string;
    /**
     * @generated from field: map<string, string> services = 3;
     */
    services: {
        [key: string]: string;
    };
    /**
     * @generated from field: string reason = 4;
     */
    reason: string;
    constructor(data?: PartialMessage<DeployResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.DeployResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeployResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeployResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeployResponse;
    static equals(a: DeployResponse | PlainMessage<DeployResponse> | undefined, b: DeployResponse | PlainMessage<DeployResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.UpdateRequest
 */
export declare class UpdateRequest extends Message<UpdateRequest> {
    /**
     * @generated from field: sf.substreams.v1.Package substreams_package = 1;
     */
    substreamsPackage?: Package;
    /**
     * @generated from field: string deployment_id = 2;
     */
    deploymentId: string;
    /**
     * @generated from field: bool reset = 3;
     */
    reset: boolean;
    constructor(data?: PartialMessage<UpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.UpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRequest;
    static equals(a: UpdateRequest | PlainMessage<UpdateRequest> | undefined, b: UpdateRequest | PlainMessage<UpdateRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.UpdateResponse
 */
export declare class UpdateResponse extends Message<UpdateResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus status = 1;
     */
    status: DeploymentStatus;
    /**
     * @generated from field: map<string, string> services = 2;
     */
    services: {
        [key: string]: string;
    };
    /**
     * @generated from field: string reason = 3;
     */
    reason: string;
    constructor(data?: PartialMessage<UpdateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.UpdateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateResponse;
    static equals(a: UpdateResponse | PlainMessage<UpdateResponse> | undefined, b: UpdateResponse | PlainMessage<UpdateResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.InfoRequest
 */
export declare class InfoRequest extends Message<InfoRequest> {
    /**
     * @generated from field: string deployment_id = 1;
     */
    deploymentId: string;
    constructor(data?: PartialMessage<InfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.InfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoRequest;
    static equals(a: InfoRequest | PlainMessage<InfoRequest> | undefined, b: InfoRequest | PlainMessage<InfoRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.InfoResponse
 */
export declare class InfoResponse extends Message<InfoResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus status = 1;
     */
    status: DeploymentStatus;
    /**
     * @generated from field: map<string, string> services = 2;
     */
    services: {
        [key: string]: string;
    };
    /**
     * @generated from field: string reason = 3;
     */
    reason: string;
    /**
     * @generated from field: sf.substreams.sink.service.v1.PackageInfo package_info = 4;
     */
    packageInfo?: PackageInfo;
    /**
     * @generated from field: sf.substreams.sink.service.v1.SinkProgress progress = 5;
     */
    progress?: SinkProgress;
    constructor(data?: PartialMessage<InfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.InfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoResponse;
    static equals(a: InfoResponse | PlainMessage<InfoResponse> | undefined, b: InfoResponse | PlainMessage<InfoResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.SinkProgress
 */
export declare class SinkProgress extends Message<SinkProgress> {
    /**
     * @generated from field: uint64 last_processed_block = 1;
     */
    lastProcessedBlock: bigint;
    constructor(data?: PartialMessage<SinkProgress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.SinkProgress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SinkProgress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SinkProgress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SinkProgress;
    static equals(a: SinkProgress | PlainMessage<SinkProgress> | undefined, b: SinkProgress | PlainMessage<SinkProgress> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.PackageInfo
 */
export declare class PackageInfo extends Message<PackageInfo> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * @generated from field: string output_module_name = 3;
     */
    outputModuleName: string;
    /**
     * @generated from field: string output_module_hash = 4;
     */
    outputModuleHash: string;
    constructor(data?: PartialMessage<PackageInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.PackageInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackageInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackageInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackageInfo;
    static equals(a: PackageInfo | PlainMessage<PackageInfo> | undefined, b: PackageInfo | PlainMessage<PackageInfo> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.ListRequest
 */
export declare class ListRequest extends Message<ListRequest> {
    constructor(data?: PartialMessage<ListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.ListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest;
    static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.ListResponse
 */
export declare class ListResponse extends Message<ListResponse> {
    /**
     * @generated from field: repeated sf.substreams.sink.service.v1.DeploymentWithStatus deployments = 1;
     */
    deployments: DeploymentWithStatus[];
    constructor(data?: PartialMessage<ListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.ListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse;
    static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.DeploymentWithStatus
 */
export declare class DeploymentWithStatus extends Message<DeploymentWithStatus> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus status = 2;
     */
    status: DeploymentStatus;
    /**
     * @generated from field: string reason = 3;
     */
    reason: string;
    /**
     * @generated from field: sf.substreams.sink.service.v1.PackageInfo package_info = 4;
     */
    packageInfo?: PackageInfo;
    /**
     * @generated from field: sf.substreams.sink.service.v1.SinkProgress progress = 5;
     */
    progress?: SinkProgress;
    constructor(data?: PartialMessage<DeploymentWithStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.DeploymentWithStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeploymentWithStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeploymentWithStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeploymentWithStatus;
    static equals(a: DeploymentWithStatus | PlainMessage<DeploymentWithStatus> | undefined, b: DeploymentWithStatus | PlainMessage<DeploymentWithStatus> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.RemoveRequest
 */
export declare class RemoveRequest extends Message<RemoveRequest> {
    /**
     * @generated from field: string deployment_id = 1;
     */
    deploymentId: string;
    constructor(data?: PartialMessage<RemoveRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.RemoveRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveRequest;
    static equals(a: RemoveRequest | PlainMessage<RemoveRequest> | undefined, b: RemoveRequest | PlainMessage<RemoveRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.RemoveResponse
 */
export declare class RemoveResponse extends Message<RemoveResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus previous_status = 1;
     */
    previousStatus: DeploymentStatus;
    constructor(data?: PartialMessage<RemoveResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.RemoveResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveResponse;
    static equals(a: RemoveResponse | PlainMessage<RemoveResponse> | undefined, b: RemoveResponse | PlainMessage<RemoveResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.PauseRequest
 */
export declare class PauseRequest extends Message<PauseRequest> {
    /**
     * @generated from field: string deployment_id = 1;
     */
    deploymentId: string;
    constructor(data?: PartialMessage<PauseRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.PauseRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PauseRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PauseRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PauseRequest;
    static equals(a: PauseRequest | PlainMessage<PauseRequest> | undefined, b: PauseRequest | PlainMessage<PauseRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.PauseResponse
 */
export declare class PauseResponse extends Message<PauseResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus previous_status = 1;
     */
    previousStatus: DeploymentStatus;
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus new_status = 2;
     */
    newStatus: DeploymentStatus;
    constructor(data?: PartialMessage<PauseResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.PauseResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PauseResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PauseResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PauseResponse;
    static equals(a: PauseResponse | PlainMessage<PauseResponse> | undefined, b: PauseResponse | PlainMessage<PauseResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.StopRequest
 */
export declare class StopRequest extends Message<StopRequest> {
    /**
     * @generated from field: string deployment_id = 1;
     */
    deploymentId: string;
    constructor(data?: PartialMessage<StopRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.StopRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StopRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StopRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StopRequest;
    static equals(a: StopRequest | PlainMessage<StopRequest> | undefined, b: StopRequest | PlainMessage<StopRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.StopResponse
 */
export declare class StopResponse extends Message<StopResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus previous_status = 1;
     */
    previousStatus: DeploymentStatus;
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus new_status = 2;
     */
    newStatus: DeploymentStatus;
    constructor(data?: PartialMessage<StopResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.StopResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StopResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StopResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StopResponse;
    static equals(a: StopResponse | PlainMessage<StopResponse> | undefined, b: StopResponse | PlainMessage<StopResponse> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.ResumeRequest
 */
export declare class ResumeRequest extends Message<ResumeRequest> {
    /**
     * @generated from field: string deployment_id = 1;
     */
    deploymentId: string;
    constructor(data?: PartialMessage<ResumeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.ResumeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResumeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResumeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResumeRequest;
    static equals(a: ResumeRequest | PlainMessage<ResumeRequest> | undefined, b: ResumeRequest | PlainMessage<ResumeRequest> | undefined): boolean;
}
/**
 * @generated from message sf.substreams.sink.service.v1.ResumeResponse
 */
export declare class ResumeResponse extends Message<ResumeResponse> {
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus previous_status = 1;
     */
    previousStatus: DeploymentStatus;
    /**
     * @generated from field: sf.substreams.sink.service.v1.DeploymentStatus new_status = 2;
     */
    newStatus: DeploymentStatus;
    constructor(data?: PartialMessage<ResumeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "sf.substreams.sink.service.v1.ResumeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResumeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResumeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResumeResponse;
    static equals(a: ResumeResponse | PlainMessage<ResumeResponse> | undefined, b: ResumeResponse | PlainMessage<ResumeResponse> | undefined): boolean;
}
//# sourceMappingURL=service_pb.d.ts.map