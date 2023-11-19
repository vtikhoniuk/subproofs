"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMermaidLiveUrl = generateMermaidLiveUrl;
var _core = /*#__PURE__*/require("@substreams/core");
var _pako = /*#__PURE__*/require("pako");
function generateMermaidLiveUrl(modules) {
  const mermaid = JSON.stringify({
    code: (0, _core.generateMermaidGraph)(modules),
    mermaid: `{"theme":"default"}`,
    autoSync: true,
    updateDiagram: true
  });
  const encoder = new TextEncoder();
  const data = encoder.encode(mermaid);
  const compressed = (0, _pako.deflate)(data, {
    level: 9
  });
  const serialized = btoa(String.fromCharCode(...compressed));
  return `https://mermaid.live/edit#pako:${serialized}`;
}
//# sourceMappingURL=generate-mermaid-live-url.js.map