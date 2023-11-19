"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreDeltas = exports.StoreDelta_Operation = exports.StoreDelta = exports.ModuleOutput = void 0;
var _protobuf = /*#__PURE__*/require("@bufbuild/protobuf");
// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file sf/substreams/intern/v2/deltas.proto (package sf.substreams.internal.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from message sf.substreams.internal.v2.StoreDeltas
 */
class StoreDeltas extends _protobuf.Message {
  /**
   * @generated from field: repeated sf.substreams.internal.v2.StoreDelta store_deltas = 1;
   */
  storeDeltas = [];
  constructor(data) {
    super();
    _protobuf.proto3.util.initPartial(data, this);
  }
  static runtime = _protobuf.proto3;
  static typeName = "sf.substreams.internal.v2.StoreDeltas";
  static fields = _protobuf.proto3.util.newFieldList(() => [{
    no: 1,
    name: "store_deltas",
    kind: "message",
    T: StoreDelta,
    repeated: true
  }]);
  static fromBinary(bytes, options) {
    return new StoreDeltas().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new StoreDeltas().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new StoreDeltas().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _protobuf.proto3.util.equals(StoreDeltas, a, b);
  }
}
/**
 * @generated from message sf.substreams.internal.v2.StoreDelta
 */
exports.StoreDeltas = StoreDeltas;
class StoreDelta extends _protobuf.Message {
  /**
   * @generated from field: sf.substreams.internal.v2.StoreDelta.Operation operation = 1;
   */
  operation = StoreDelta_Operation.UNSET;
  /**
   * @generated from field: uint64 ordinal = 2;
   */
  ordinal = _protobuf.protoInt64.zero;
  /**
   * @generated from field: string key = 3;
   */
  key = "";
  /**
   * @generated from field: bytes old_value = 4;
   */
  oldValue = new Uint8Array(0);
  /**
   * @generated from field: bytes new_value = 5;
   */
  newValue = new Uint8Array(0);
  constructor(data) {
    super();
    _protobuf.proto3.util.initPartial(data, this);
  }
  static runtime = _protobuf.proto3;
  static typeName = "sf.substreams.internal.v2.StoreDelta";
  static fields = _protobuf.proto3.util.newFieldList(() => [{
    no: 1,
    name: "operation",
    kind: "enum",
    T: _protobuf.proto3.getEnumType(StoreDelta_Operation)
  }, {
    no: 2,
    name: "ordinal",
    kind: "scalar",
    T: 4 /* ScalarType.UINT64 */
  }, {
    no: 3,
    name: "key",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 4,
    name: "old_value",
    kind: "scalar",
    T: 12 /* ScalarType.BYTES */
  }, {
    no: 5,
    name: "new_value",
    kind: "scalar",
    T: 12 /* ScalarType.BYTES */
  }]);

  static fromBinary(bytes, options) {
    return new StoreDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new StoreDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new StoreDelta().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _protobuf.proto3.util.equals(StoreDelta, a, b);
  }
}
/**
 * @generated from enum sf.substreams.internal.v2.StoreDelta.Operation
 */
exports.StoreDelta = StoreDelta;
var StoreDelta_Operation;
(function (StoreDelta_Operation) {
  /**
   * @generated from enum value: UNSET = 0;
   */
  StoreDelta_Operation[StoreDelta_Operation["UNSET"] = 0] = "UNSET";
  /**
   * @generated from enum value: CREATE = 1;
   */
  StoreDelta_Operation[StoreDelta_Operation["CREATE"] = 1] = "CREATE";
  /**
   * @generated from enum value: UPDATE = 2;
   */
  StoreDelta_Operation[StoreDelta_Operation["UPDATE"] = 2] = "UPDATE";
  /**
   * @generated from enum value: DELETE = 3;
   */
  StoreDelta_Operation[StoreDelta_Operation["DELETE"] = 3] = "DELETE";
})(StoreDelta_Operation || (exports.StoreDelta_Operation = StoreDelta_Operation = {}));
// Retrieve enum metadata with: proto3.getEnumType(StoreDelta_Operation)
_protobuf.proto3.util.setEnumType(StoreDelta_Operation, "sf.substreams.internal.v2.StoreDelta.Operation", [{
  no: 0,
  name: "UNSET"
}, {
  no: 1,
  name: "CREATE"
}, {
  no: 2,
  name: "UPDATE"
}, {
  no: 3,
  name: "DELETE"
}]);
/**
 * @generated from message sf.substreams.internal.v2.ModuleOutput
 */
class ModuleOutput extends _protobuf.Message {
  /**
   * @generated from field: string module_name = 1;
   */
  moduleName = "";
  /**
   * @generated from oneof sf.substreams.internal.v2.ModuleOutput.data
   */
  data = {
    case: undefined
  };
  /**
   * @generated from field: repeated string logs = 4;
   */
  logs = [];
  /**
   * @generated from field: bool debug_logs_truncated = 5;
   */
  debugLogsTruncated = false;
  /**
   * @generated from field: bool cached = 6;
   */
  cached = false;
  constructor(data) {
    super();
    _protobuf.proto3.util.initPartial(data, this);
  }
  static runtime = _protobuf.proto3;
  static typeName = "sf.substreams.internal.v2.ModuleOutput";
  static fields = _protobuf.proto3.util.newFieldList(() => [{
    no: 1,
    name: "module_name",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */
  }, {
    no: 2,
    name: "map_output",
    kind: "message",
    T: _protobuf.Any,
    oneof: "data"
  }, {
    no: 3,
    name: "store_deltas",
    kind: "message",
    T: StoreDeltas,
    oneof: "data"
  }, {
    no: 4,
    name: "logs",
    kind: "scalar",
    T: 9 /* ScalarType.STRING */,
    repeated: true
  }, {
    no: 5,
    name: "debug_logs_truncated",
    kind: "scalar",
    T: 8 /* ScalarType.BOOL */
  }, {
    no: 6,
    name: "cached",
    kind: "scalar",
    T: 8 /* ScalarType.BOOL */
  }]);

  static fromBinary(bytes, options) {
    return new ModuleOutput().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ModuleOutput().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ModuleOutput().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return _protobuf.proto3.util.equals(ModuleOutput, a, b);
  }
}
exports.ModuleOutput = ModuleOutput;
//# sourceMappingURL=deltas_pb.js.map