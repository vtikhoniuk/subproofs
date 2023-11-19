import { generateMermaidGraph } from "@substreams/core";
import { deflate } from "pako";
export function generateMermaidLiveUrl(modules) {
  const mermaid = JSON.stringify({
    code: generateMermaidGraph(modules),
    mermaid: `{"theme":"default"}`,
    autoSync: true,
    updateDiagram: true
  });
  const encoder = new TextEncoder();
  const data = encoder.encode(mermaid);
  const compressed = deflate(data, {
    level: 9
  });
  const serialized = btoa(String.fromCharCode(...compressed));
  return `https://mermaid.live/edit#pako:${serialized}`;
}
//# sourceMappingURL=generate-mermaid-live-url.js.map