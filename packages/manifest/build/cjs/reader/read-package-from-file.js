"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPackageFromFile = readPackageFromFile;
var fs = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("node:fs"));
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
function readPackageFromFile(file) {
  const fileContents = fs.readFileSync(file);
  return (0, _core.createSubstream)(fileContents);
}
//# sourceMappingURL=read-package-from-file.js.map