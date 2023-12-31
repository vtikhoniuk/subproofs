"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.semverRegExp = exports.nameRegExp = void 0;
exports.validatePackage = validatePackage;
var _isMapModule = /*#__PURE__*/require("../../utils/is-map-module.js");
var _isStoreModule = /*#__PURE__*/require("../../utils/is-store-module.js");
var _storeModeName = /*#__PURE__*/require("../../utils/store-mode-name.js");
const nameRegExp = exports.nameRegExp = /*#__PURE__*/new RegExp(/^([a-zA-Z][a-zA-Z0-9_-]{0,63})$/);
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const semverRegExp = exports.semverRegExp = /*#__PURE__*/new RegExp(/^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/);
function validatePackage(pkg, {
  skipModuleOutputTypeValidation = false
} = {}) {
  if (pkg.modules === undefined || pkg.modules.modules.length === 0) {
    throw new Error("Package doesn't contain any modules");
  }
  if (pkg.moduleMeta.length !== pkg.modules.modules.length) {
    throw new Error("Package metadata length inconsistent with length of module list");
  }
  if (pkg.version < 1) {
    throw new Error(`Unrecognized package version: ${pkg.version}`);
  }
  if (pkg.packageMeta.length === 0) {
    throw new Error("Missing package metadata");
  }
  for (const spkg of pkg.packageMeta) {
    if (!nameRegExp.test(spkg.name)) {
      throw new Error(`Package "${spkg.name}": name must be a valid module name`);
    }
    if (!semverRegExp.test(spkg.version)) {
      throw new Error(`Package "${spkg.name}": version "${spkg.version}" should match semver`);
    }
  }
  for (const mod of pkg.modules.modules) {
    if ((0, _isMapModule.isMapModule)(mod)) {
      const outputType = mod.kind.value.outputType;
      if (!skipModuleOutputTypeValidation) {
        if (!outputType.startsWith("proto:")) {
          throw new Error(`Module "${mod.name}": output type "${outputType}" is not a proto message`);
        }
      }
    } else if ((0, _isStoreModule.isStoreModule)(mod)) {
      const valueType = mod.kind.value.valueType;
      if (!skipModuleOutputTypeValidation) {
        if (valueType.startsWith("proto:")) {
          // Any store with a proto type is considered valid.
        } else if (!storeValidTypes.includes(valueType)) {
          throw new Error(`Module "${mod.name}": invalid value type "${valueType}"`);
        }
      }
    }
    const seen = [];
    for (const input of mod.inputs) {
      const current = duplicateStringInput(input);
      if (seen.includes(current)) {
        throw new Error(`Module "${mod.name}": duplicate input "${current}"`);
      }
      seen.push(current);
    }
  }
  if (pkg.sinkModule) {
    if (!pkg.modules.modules.some(mod => mod.name === pkg.sinkModule)) {
      throw new Error(`Sink module "${pkg.sinkModule}" not found in package`);
    }
  }
}
function duplicateStringInput(input) {
  if (input.input.case === "source") {
    return `source: ${input.input.value.type}`;
  } else if (input.input.case === "map") {
    return `map: ${input.input.value.moduleName}`;
  } else if (input.input.case === "store") {
    const mode = (0, _storeModeName.storeModeName)(input.input.value.mode);
    return `store: ${input.input.value.moduleName}, mode: ${mode}`;
  } else if (input.input.case === "params") {
    return "params";
  }
  throw new Error(`Unknown input type: ${input.input.case}`);
}
const storeValidTypes = ["bigint", "int64", "float64", "bigdecimal", "bigfloat", "bytes", "string", "proto"];
//# sourceMappingURL=validate-package.js.map