// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file sf/substreams/intern/v2/service.proto (package sf.substreams.internal.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { ProcessRangeRequest, ProcessRangeResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service sf.substreams.internal.v2.Substreams
 */
export const Substreams = {
  typeName: "sf.substreams.internal.v2.Substreams",
  methods: {
    /**
     * @generated from rpc sf.substreams.internal.v2.Substreams.ProcessRange
     */
    processRange: {
      name: "ProcessRange",
      I: ProcessRangeRequest,
      O: ProcessRangeResponse,
      kind: MethodKind.ServerStreaming
    }
  }
};
//# sourceMappingURL=service_connect.js.map