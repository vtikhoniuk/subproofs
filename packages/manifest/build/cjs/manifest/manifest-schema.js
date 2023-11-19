"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreModuleSchema = exports.SinkSchema = exports.ProtobufSchema = exports.PackageSchema = exports.ModuleSchema = exports.MapModuleSchema = exports.ManifestSpecVersionSchema = exports.ManifestSchema = exports.InputSchema = exports.InitialBlockSchema = exports.BinaryTypeSchema = exports.BinarySchema = void 0;
exports.parseManifestJson = parseManifestJson;
var Schema = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("@effect/schema/Schema"));
var _core = /*#__PURE__*/require("@substreams/core");
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n.default = e, t && t.set(e, n), n;
}
const BinaryTypeSchema = exports.BinaryTypeSchema = /*#__PURE__*/Schema.literal("wasm/rust-v1");
const ManifestSpecVersionSchema = exports.ManifestSpecVersionSchema = /*#__PURE__*/Schema.literal("v0.1.0");
const ProtobufSchema = exports.ProtobufSchema = /*#__PURE__*/Schema.struct({
  files: /*#__PURE__*/Schema.array( /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(/\.proto$/))),
  importPaths: /*#__PURE__*/Schema.array(Schema.string)
});
const PackageSchema = exports.PackageSchema = /*#__PURE__*/Schema.struct({
  name: /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(_core.nameRegExp)),
  version: /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(_core.semverRegExp)),
  url: /*#__PURE__*/Schema.optional(Schema.string),
  doc: /*#__PURE__*/Schema.optional(Schema.string)
});
const InputSchema = exports.InputSchema = /*#__PURE__*/Schema.union( /*#__PURE__*/Schema.struct({
  map: Schema.string
}), /*#__PURE__*/Schema.struct({
  source: Schema.string
}), /*#__PURE__*/Schema.struct({
  params: Schema.string
}), /*#__PURE__*/Schema.struct({
  store: Schema.string,
  mode: /*#__PURE__*/Schema.optional(Schema.literal("get", "deltas")).withDefault(() => "get")
}));
const InitialBlockSchema = exports.InitialBlockSchema = /*#__PURE__*/Schema.compose( /*#__PURE__*/Schema.union(Schema.bigint, Schema.bigintFromSelf, Schema.BigintFromNumber), Schema.NonNegativeBigintFromSelf);
const StoreModuleSchema = exports.StoreModuleSchema = /*#__PURE__*/Schema.struct({
  kind: Schema.literal("store"),
  doc: Schema.optional(Schema.string),
  binary: Schema.optional(Schema.string),
  initialBlock: Schema.optional(Schema.lazy(() => InitialBlockSchema)),
  inputs: Schema.array(Schema.lazy(() => InputSchema)),
  name: Schema.string.pipe(Schema.pattern(_core.nameRegExp)),
  valueType: Schema.union(Schema.literal("bytes", "string", "int64", "float64", "bigint", "bigfloat", "bigdecimal"), Schema.templateLiteral(Schema.literal("proto:"), Schema.string)),
  updatePolicy: Schema.literal("set", "set_if_not_exists", "append", "add", "min", "max")
}).pipe( /*#__PURE__*/Schema.filter(value => {
  const combinations = ["max:bigint", "max:int64", "max:bigdecimal", "max:bigfloat", "max:float64", "min:bigint", "min:int64", "min:bigdecimal", "min:bigfloat", "min:float64", "add:bigint", "add:int64", "add:bigdecimal", "add:bigfloat", "add:float64", "set:bytes", "set:string", "set:proto", "set:bigdecimal", "set:bigfloat", "set:bigint", "set:int64", "set:float64", "set_if_not_exists:bytes", "set_if_not_exists:string", "set_if_not_exists:proto", "set_if_not_exists:bigdecimal", "set_if_not_exists:bigfloat", "set_if_not_exists:bigint", "set_if_not_exists:int64", "set_if_not_exists:float64", "append:bytes", "append:string"];
  const valueType = value.valueType.startsWith("proto:") ? "proto" : value.valueType;
  const combination = `${value.updatePolicy}:${valueType}`;
  return combinations.includes(combination);
}));
const MapModuleSchema = exports.MapModuleSchema = /*#__PURE__*/Schema.struct({
  kind: /*#__PURE__*/Schema.literal("map"),
  doc: /*#__PURE__*/Schema.optional(Schema.string),
  binary: /*#__PURE__*/Schema.optional(Schema.string),
  initialBlock: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.lazy(() => InitialBlockSchema)),
  inputs: /*#__PURE__*/Schema.array(Schema.lazy(() => InputSchema)).pipe( /*#__PURE__*/Schema.minItems(1)),
  name: /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(_core.nameRegExp)),
  output: /*#__PURE__*/Schema.struct({
    type: Schema.string
  })
});
const ModuleSchema = exports.ModuleSchema = /*#__PURE__*/Schema.union(StoreModuleSchema, MapModuleSchema);
const BinarySchema = exports.BinarySchema = /*#__PURE__*/Schema.struct({
  file: Schema.string,
  type: /*#__PURE__*/Schema.lazy(() => BinaryTypeSchema),
  native: /*#__PURE__*/Schema.optional(Schema.string),
  content: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.instanceOf(Uint8Array)),
  entrypoint: /*#__PURE__*/Schema.optional(Schema.string),
  protoPackageMapping: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.record(Schema.string, Schema.string))
});
const SinkSchema = exports.SinkSchema = /*#__PURE__*/Schema.struct({
  type: Schema.string,
  module: Schema.string,
  config: Schema.any
});
const ManifestSchema = exports.ManifestSchema = /*#__PURE__*/Schema.struct({
  network: /*#__PURE__*/Schema.optional(Schema.string),
  specVersion: /*#__PURE__*/Schema.lazy(() => ManifestSpecVersionSchema),
  binaries: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.record(Schema.string, /*#__PURE__*/Schema.lazy(() => BinarySchema))),
  imports: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.record( /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(/^[A-Za-z_][A-Za-z0-9_-]*$/)), Schema.string)),
  modules: /*#__PURE__*/Schema.array(Schema.lazy(() => ModuleSchema)).pipe( /*#__PURE__*/Schema.minItems(1)),
  package: /*#__PURE__*/Schema.lazy(() => PackageSchema),
  protobuf: /*#__PURE__*/Schema.lazy(() => ProtobufSchema),
  params: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.record(Schema.string, Schema.string)),
  sink: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.lazy(() => SinkSchema))
});
function parseManifestJson(input) {
  const parse = Schema.parseSync(ManifestSchema);
  return parse(input, {
    errors: "all"
  });
}
//# sourceMappingURL=manifest-schema.js.map