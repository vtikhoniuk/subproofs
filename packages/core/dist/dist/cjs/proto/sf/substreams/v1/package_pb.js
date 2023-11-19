"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackageMetadata = exports.Package = exports.ModuleMetadata = void 0;
var _protobuf = /*#__PURE__*/require("@bufbuild/protobuf");
var _modules_pb = /*#__PURE__*/require("./modules_pb.js");
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file sf/substreams/v1/package.proto (package sf.substreams.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message sf.substreams.v1.Package
 */
class Package extends _protobuf.Message {
  /**
   * Needs to be one so this file can be used _directly_ as a
   * buf `Image` andor a ProtoSet for grpcurl and other tools
   *
   * @generated from field: repeated google.protobuf.FileDescriptorProto proto_files = 1;
   */
  protoFiles = [];
  /**
   * @generated from field: uint64 version = 5;
   */
  version = _protobuf.protoInt64.zero;
  /**
   * @generated from field: sf.substreams.v1.Modules modules = 6;
   */
  modules;
  /**
   * @generated from field: repeated sf.substreams.v1.ModuleMetadata module_meta = 7;
   */
  moduleMeta = [];
  /**
   * @generated from field: repeated sf.substreams.v1.PackageMetadata package_meta = 8;
   */
  packageMeta = [];
  /**
   * Source network for Substreams to fetch its data from.
   *
   * @generated from field: string network = 9;
   */
  network = "";
  /**
   * @generated from field: google.protobuf.Any sink_config = 10;
   */
  sinkConfig;
  /**
   * @generated from field: string sink_module = 11;
   */
  sinkModule = "";
  /**
   * image is the bytes to a JPEG, WebP or PNG file. Max size is 2 MiB
   *
   * @generated from field: bytes image = 12;
   */
  image = new Uint8Array(0);
  constructor(data) {
    super();
    _protobuf.proto3.util.initPartial(data, this);
  }
  static runtime = _protobuf.proto3;
  static typeName = "sf.substreams.v1.Package";
  static fields = _protobuf.proto3.util.newFieldList(() => [{
    no: 1,
    name: "proto_files",
    kind: "message",
    T: _protobuf.FileDescriptorProto,
    repeated: true
  }, {
    no: 5,
    name: "version",
    kind: "scalar",
    T: 4 /* ScalarType.UINT64 */
  }, {
    no: 6,
    name: "modules",
    kind: "message",
    T: _modules_pb.Modules
  }, {
    no: 7,
    name: "module_meta",
    kind: "message",
    T: ModuleMetadata,
    repeated: true
  }, {
    no: 8,
    name: "package_meta",
    kind: "message",
    T: PackageMetadata,
    repeated: true
  }, {
    no: 9,
    name: "network",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 10,
    name: "sink_config",
    kind: "message",
    T: _protobuf.Any
  }, {
    no: 11,
    name: "sink_module",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 12,
    name: "image",
    kind: "scalar",
    T: 12 /* ScalarType.BYTES */
  }]);

  static fromBinary(bytes, options) {
    return new Package().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Package().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Package().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _protobuf.proto3.util.equals(Package, a, b);
  }
}
/**
 * @generated from message sf.substreams.v1.PackageMetadata
 */
exports.Package = Package;
class PackageMetadata extends _protobuf.Message {
  /**
   * @generated from field: string version = 1;
   */
  version = "";
  /**
   * @generated from field: string url = 2;
   */
  url = "";
  /**
   * @generated from field: string name = 3;
   */
  name = "";
  /**
   * @generated from field: string doc = 4;
   */
  doc = "";
  constructor(data) {
    super();
    _protobuf.proto3.util.initPartial(data, this);
  }
  static runtime = _protobuf.proto3;
  static typeName = "sf.substreams.v1.PackageMetadata";
  static fields = _protobuf.proto3.util.newFieldList(() => [{
    no: 1,
    name: "version",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 4,
    name: "doc",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }]);

  static fromBinary(bytes, options) {
    return new PackageMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new PackageMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new PackageMetadata().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _protobuf.proto3.util.equals(PackageMetadata, a, b);
  }
}
/**
 * @generated from message sf.substreams.v1.ModuleMetadata
 */
exports.PackageMetadata = PackageMetadata;
class ModuleMetadata extends _protobuf.Message {
  /**
   * Corresponds to the index in `Package.metadata.package_meta`
   *
   * @generated from field: uint64 package_index = 1;
   */
  packageIndex = _protobuf.protoInt64.zero;
  /**
   * @generated from field: string doc = 2;
   */
  doc = "";
  constructor(data) {
    super();
    _protobuf.proto3.util.initPartial(data, this);
  }
  static runtime = _protobuf.proto3;
  static typeName = "sf.substreams.v1.ModuleMetadata";
  static fields = _protobuf.proto3.util.newFieldList(() => [{
    no: 1,
    name: "package_index",
    kind: "scalar",
    T: 4 /* ScalarType.UINT64 */
  }, {
    no: 2,
    name: "doc",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }]);

  static fromBinary(bytes, options) {
    return new ModuleMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ModuleMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ModuleMetadata().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _protobuf.proto3.util.equals(ModuleMetadata, a, b);
  }
}
exports.ModuleMetadata = ModuleMetadata;
//# sourceMappingURL=package_pb.js.map