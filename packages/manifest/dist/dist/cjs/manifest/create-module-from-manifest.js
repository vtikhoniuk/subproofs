"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModuleFromManifest = createModuleFromManifest;
var _proto = /*#__PURE__*/require("@substreams/core/proto");
const MAX_UINT_64 = /*#__PURE__*/BigInt("18446744073709551615");
function createModuleFromManifest(module, index) {
  const out = new _proto.Module({
    name: module.name,
    binaryIndex: index,
    binaryEntrypoint: module.name,
    initialBlock: module.initialBlock ?? MAX_UINT_64
  });
  switch (module.kind) {
    case "map":
      {
        out.kind = {
          case: "kindMap",
          value: new _proto.Module_KindMap(module.output?.type ? {
            outputType: module.output.type
          } : {})
        };
        out.output = new _proto.Module_Output({
          type: module.output.type
        });
        break;
      }
    case "store":
      {
        let updatePolicy;
        switch (module.updatePolicy) {
          case "set":
            {
              updatePolicy = _proto.Module_KindStore_UpdatePolicy.SET;
              break;
            }
          case "set_if_not_exists":
            {
              updatePolicy = _proto.Module_KindStore_UpdatePolicy.SET_IF_NOT_EXISTS;
              break;
            }
          case "add":
            {
              updatePolicy = _proto.Module_KindStore_UpdatePolicy.ADD;
              break;
            }
          case "max":
            {
              updatePolicy = _proto.Module_KindStore_UpdatePolicy.MAX;
              break;
            }
          case "min":
            {
              updatePolicy = _proto.Module_KindStore_UpdatePolicy.MIN;
              break;
            }
          case "append":
            {
              updatePolicy = _proto.Module_KindStore_UpdatePolicy.APPEND;
              break;
            }
          default:
            {
              throw new Error(`Invalid update policy ${module.updatePolicy}`);
            }
        }
        out.kind = {
          case: "kindStore",
          value: new _proto.Module_KindStore({
            updatePolicy: updatePolicy,
            ...(module.valueType ? {
              valueType: module.valueType
            } : {})
          })
        };
        break;
      }
  }
  for (const [index, input] of module.inputs.entries()) {
    if ("source" in input) {
      out.inputs.push(new _proto.Module_Input({
        input: {
          case: "source",
          value: {
            type: input.source
          }
        }
      }));
      continue;
    }
    if ("map" in input) {
      out.inputs.push(new _proto.Module_Input({
        input: {
          case: "map",
          value: {
            moduleName: input.map
          }
        }
      }));
      continue;
    }
    if ("store" in input) {
      let mode;
      switch (input.mode) {
        case "get":
          {
            mode = _proto.Module_Input_Store_Mode.GET;
            break;
          }
        case "deltas":
          {
            mode = _proto.Module_Input_Store_Mode.DELTAS;
            break;
          }
        default:
          {
            throw new Error(`Invalid input mode ${input.mode}`);
          }
      }
      out.inputs.push(new _proto.Module_Input({
        input: {
          case: "store",
          value: {
            moduleName: input.store,
            mode: mode
          }
        }
      }));
      continue;
    }
    if (input.params) {
      if (index !== 0) {
        throw new Error("Params must be the first input");
      }
      out.inputs.push(new _proto.Module_Input({
        input: {
          case: "params",
          value: {
            value: ""
          }
        }
      }));
      continue;
    }
    throw new Error("Invalid input");
  }
  return out;
}
//# sourceMappingURL=create-module-from-manifest.js.map