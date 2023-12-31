import * as fs from "node:fs";
import * as url from "node:url";
import { createSubstream } from "@substreams/core";
export function createSubstreamFixture(name) {
  const handle = fs.readFileSync(url.fileURLToPath(new URL(`./${name}.spkg`, import.meta.url)));
  return createSubstream(handle);
}
//# sourceMappingURL=create-substream-fixture.js.map