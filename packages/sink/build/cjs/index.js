"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BlockScopedDataSinkError", {
  enumerable: true,
  get: function () {
    return _sink.BlockScopedDataSinkError;
  }
});
Object.defineProperty(exports, "BlockUndoSignalSinkError", {
  enumerable: true,
  get: function () {
    return _sink.BlockUndoSignalSinkError;
  }
});
Object.defineProperty(exports, "FatalStreamError", {
  enumerable: true,
  get: function () {
    return _stream.FatalStreamError;
  }
});
exports.Metrics = void 0;
Object.defineProperty(exports, "RetryableStreamError", {
  enumerable: true,
  get: function () {
    return _stream.RetryableStreamError;
  }
});
Object.defineProperty(exports, "SinkError", {
  enumerable: true,
  get: function () {
    return _sink.SinkError;
  }
});
Object.defineProperty(exports, "createSink", {
  enumerable: true,
  get: function () {
    return _sink.createSink;
  }
});
Object.defineProperty(exports, "createStream", {
  enumerable: true,
  get: function () {
    return _stream.createStream;
  }
});
var _sink = /*#__PURE__*/require("./sink.js");
var _stream = /*#__PURE__*/require("./stream.js");
var _Metrics = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("./metrics.js"));
exports.Metrics = _Metrics;
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
//# sourceMappingURL=index.js.map