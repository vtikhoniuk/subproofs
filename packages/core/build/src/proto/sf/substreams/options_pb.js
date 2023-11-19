// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file sf/substreams/options.proto (package sf.substreams, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message sf.substreams.FieldOptions
 */
export class FieldOptions extends Message {
  /**
   * this option informs the `substreams pack` command that it should treat the corresponding manifest value as a path to a file, putting its content as bytes in this field.
   * must be applied to a `bytes` or `string` field
   *
   * @generated from field: bool load_from_file = 1;
   */
  loadFromFile = false;
  /**
   * this option informs the `substreams pack` command that it should treat the corresponding manifest value as a path to a folder, zipping its content and putting the zip content as bytes in this field.
   * must be applied to a `bytes` field
   *
   * @generated from field: bool zip_from_folder = 2;
   */
  zipFromFolder = false;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "sf.substreams.FieldOptions";
  static fields = proto3.util.newFieldList(() => [{
    no: 1,
    name: "load_from_file",
    kind: "scalar",
    T: 8 /* ScalarType.BOOL */
  }, {
    no: 2,
    name: "zip_from_folder",
    kind: "scalar",
    T: 8 /* ScalarType.BOOL */
  }]);

  static fromBinary(bytes, options) {
    return new FieldOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new FieldOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new FieldOptions().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(FieldOptions, a, b);
  }
}
//# sourceMappingURL=options_pb.js.map