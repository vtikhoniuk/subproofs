"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;
var _service_pb = /*#__PURE__*/require("./service_pb.js");
var _protobuf = /*#__PURE__*/require("@bufbuild/protobuf");
// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file sf/substreams/sink/service/v1/service.proto (package sf.substreams.sink.service.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from service sf.substreams.sink.service.v1.Provider
 */
const Provider = exports.Provider = {
  typeName: "sf.substreams.sink.service.v1.Provider",
  methods: {
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Deploy
     */
    deploy: {
      name: "Deploy",
      I: _service_pb.DeployRequest,
      O: _service_pb.DeployResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Update
     */
    update: {
      name: "Update",
      I: _service_pb.UpdateRequest,
      O: _service_pb.UpdateResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Info
     */
    info: {
      name: "Info",
      I: _service_pb.InfoRequest,
      O: _service_pb.InfoResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.List
     */
    list: {
      name: "List",
      I: _service_pb.ListRequest,
      O: _service_pb.ListResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Pause
     */
    pause: {
      name: "Pause",
      I: _service_pb.PauseRequest,
      O: _service_pb.PauseResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Stop
     */
    stop: {
      name: "Stop",
      I: _service_pb.StopRequest,
      O: _service_pb.StopResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Resume
     */
    resume: {
      name: "Resume",
      I: _service_pb.ResumeRequest,
      O: _service_pb.ResumeResponse,
      kind: _protobuf.MethodKind.Unary
    },
    /**
     * @generated from rpc sf.substreams.sink.service.v1.Provider.Remove
     */
    remove: {
      name: "Remove",
      I: _service_pb.RemoveRequest,
      O: _service_pb.RemoveResponse,
      kind: _protobuf.MethodKind.Unary
    }
  }
};
//# sourceMappingURL=service_connect.js.map