import * as Schema from "@effect/schema/Schema";
import { nameRegExp, semverRegExp } from "@substreams/core";
export const BinaryTypeSchema = /*#__PURE__*/Schema.literal("wasm/rust-v1");
export const ManifestSpecVersionSchema = /*#__PURE__*/Schema.literal("v0.1.0");
export const ProtobufSchema = /*#__PURE__*/Schema.struct({
  files: /*#__PURE__*/Schema.array( /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(/\.proto$/))),
  importPaths: /*#__PURE__*/Schema.array(Schema.string)
});
export const PackageSchema = /*#__PURE__*/Schema.struct({
  name: /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(nameRegExp)),
  version: /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(semverRegExp)),
  url: /*#__PURE__*/Schema.optional(Schema.string),
  doc: /*#__PURE__*/Schema.optional(Schema.string)
});
export const InputSchema = /*#__PURE__*/Schema.union( /*#__PURE__*/Schema.struct({
  map: Schema.string
}), /*#__PURE__*/Schema.struct({
  source: Schema.string
}), /*#__PURE__*/Schema.struct({
  params: Schema.string
}), /*#__PURE__*/Schema.struct({
  store: Schema.string,
  mode: /*#__PURE__*/Schema.optional(Schema.literal("get", "deltas")).withDefault(() => "get")
}));
export const InitialBlockSchema = /*#__PURE__*/Schema.compose( /*#__PURE__*/Schema.union(Schema.bigint, Schema.bigintFromSelf, Schema.BigintFromNumber), Schema.NonNegativeBigintFromSelf);
export const StoreModuleSchema = /*#__PURE__*/Schema.struct({
  kind: Schema.literal("store"),
  doc: Schema.optional(Schema.string),
  binary: Schema.optional(Schema.string),
  initialBlock: Schema.optional(Schema.lazy(() => InitialBlockSchema)),
  inputs: Schema.array(Schema.lazy(() => InputSchema)),
  name: Schema.string.pipe(Schema.pattern(nameRegExp)),
  valueType: Schema.union(Schema.literal("bytes", "string", "int64", "float64", "bigint", "bigfloat", "bigdecimal"), Schema.templateLiteral(Schema.literal("proto:"), Schema.string)),
  updatePolicy: Schema.literal("set", "set_if_not_exists", "append", "add", "min", "max")
}).pipe( /*#__PURE__*/Schema.filter(value => {
  const combinations = ["max:bigint", "max:int64", "max:bigdecimal", "max:bigfloat", "max:float64", "min:bigint", "min:int64", "min:bigdecimal", "min:bigfloat", "min:float64", "add:bigint", "add:int64", "add:bigdecimal", "add:bigfloat", "add:float64", "set:bytes", "set:string", "set:proto", "set:bigdecimal", "set:bigfloat", "set:bigint", "set:int64", "set:float64", "set_if_not_exists:bytes", "set_if_not_exists:string", "set_if_not_exists:proto", "set_if_not_exists:bigdecimal", "set_if_not_exists:bigfloat", "set_if_not_exists:bigint", "set_if_not_exists:int64", "set_if_not_exists:float64", "append:bytes", "append:string"];
  const valueType = value.valueType.startsWith("proto:") ? "proto" : value.valueType;
  const combination = `${value.updatePolicy}:${valueType}`;
  return combinations.includes(combination);
}));
export const MapModuleSchema = /*#__PURE__*/Schema.struct({
  kind: /*#__PURE__*/Schema.literal("map"),
  doc: /*#__PURE__*/Schema.optional(Schema.string),
  binary: /*#__PURE__*/Schema.optional(Schema.string),
  initialBlock: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.lazy(() => InitialBlockSchema)),
  inputs: /*#__PURE__*/Schema.array(Schema.lazy(() => InputSchema)).pipe( /*#__PURE__*/Schema.minItems(1)),
  name: /*#__PURE__*/Schema.string.pipe( /*#__PURE__*/Schema.pattern(nameRegExp)),
  output: /*#__PURE__*/Schema.struct({
    type: Schema.string
  })
});
export const ModuleSchema = /*#__PURE__*/Schema.union(StoreModuleSchema, MapModuleSchema);
export const BinarySchema = /*#__PURE__*/Schema.struct({
  file: Schema.string,
  type: /*#__PURE__*/Schema.lazy(() => BinaryTypeSchema),
  native: /*#__PURE__*/Schema.optional(Schema.string),
  content: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.instanceOf(Uint8Array)),
  entrypoint: /*#__PURE__*/Schema.optional(Schema.string),
  protoPackageMapping: /*#__PURE__*/Schema.optional( /*#__PURE__*/Schema.record(Schema.string, Schema.string))
});
export const SinkSchema = /*#__PURE__*/Schema.struct({
  type: Schema.string,
  module: Schema.string,
  config: Schema.any
});
export const ManifestSchema = /*#__PURE__*/Schema.struct({
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
export function parseManifestJson(input) {
  const parse = Schema.parseSync(ManifestSchema);
  return parse(input, {
    errors: "all"
  });
}
//# sourceMappingURL=manifest-schema.js.map