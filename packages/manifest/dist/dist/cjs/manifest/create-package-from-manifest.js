"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPackageFromManifest = createPackageFromManifest;
var fs = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("node:fs"));
var path = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("node:path"));
var _proto = /*#__PURE__*/require("@substreams/core/proto");
var _createModuleFromManifest = /*#__PURE__*/require("./create-module-from-manifest.js");
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
function createPackageFromManifest(manifest, cwd, {
  skipSourceCodeImportValidation = false
} = {}) {
  const meta = new _proto.PackageMetadata({
    name: manifest.package.name,
    version: manifest.package.version,
    ...(manifest.package.url !== undefined ? {
      url: manifest.package.url
    } : undefined),
    ...(manifest.package.doc !== undefined ? {
      doc: manifest.package.doc
    } : undefined)
  });
  const pkg = new _proto.Package({
    version: BigInt(1),
    packageMeta: [meta],
    modules: new _proto.Modules(),
    ...(manifest.network !== undefined ? {
      network: manifest.network
    } : undefined)
  });
  // biome-ignore lint/style/noNonNullAssertion: guaranteed to be set above
  const modules = pkg.modules;
  const code = new Map();
  for (const module of manifest.modules) {
    pkg.moduleMeta.push(new _proto.ModuleMetadata({
      packageIndex: BigInt(0),
      ...(module.doc !== undefined ? {
        doc: module.doc
      } : undefined)
    }));
    const binaryDefinition = manifest.binaries?.[module.binary || "default"];
    if (!binaryDefinition) {
      const binary = module.binary ? `(implicit) binary "${module.binary}"` : "default binary";
      throw new Error(`Module "${module.name}" refers to the ${binary}, which is not defined in the "binaries" section of the manifest`);
    }
    let index = code.get(binaryDefinition.file);
    if (index === undefined) {
      index = modules.binaries.length;
      if (skipSourceCodeImportValidation) {
        modules.binaries.push(new _proto.Binary({
          type: binaryDefinition.type
        }));
      } else {
        const data = fs.readFileSync(path.join(cwd, binaryDefinition.file));
        modules.binaries.push(new _proto.Binary({
          type: binaryDefinition.type,
          content: new Uint8Array(data)
        }));
      }
      code.set(binaryDefinition.file, index);
    }
    modules.modules.push((0, _createModuleFromManifest.createModuleFromManifest)(module, index));
  }
  if (manifest.params) {
    for (const [moduleName, paramValue] of Object.entries(manifest.params)) {
      const matchingModule = modules.modules.find(mod => mod.name === moduleName);
      if (matchingModule === undefined) {
        throw new Error(`Params value defined for module ${moduleName}, but such module is not defined`);
      }
      const [firstInput] = matchingModule.inputs;
      if (firstInput === undefined) {
        throw new Error(`Params value defined for module ${moduleName} but module has no inputs defined, add 'params: string' to 'inputs' for module`);
      }
      if (firstInput.input.case !== "params") {
        throw new Error(`Params value defined for module ${moduleName} but module does not have 'params' as its first input type`);
      }
      firstInput.input.value.value = paramValue;
    }
  }
  return pkg;
}
//# sourceMappingURL=create-package-from-manifest.js.map