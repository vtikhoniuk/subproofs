import { fetchSubstream } from "@substreams/core";
import { isManifestFile, isPackageFile, isReadableLocalFile, isRemotePath } from "../utils/path-utils.js";
import { readPackageFromFile } from "./read-package-from-file.js";
import { readPackageFromManifest } from "./read-package-from-manifest.js";
export async function readPackage(file) {
  if (isRemotePath(file)) {
    if (isManifestFile(file)) {
      throw new Error("Remote manifest files are not supported");
    }
    return fetchSubstream(file);
  }
  if (!isReadableLocalFile(file)) {
    throw new Error("File is not readable");
  }
  return isPackageFile(file) ? readPackageFromFile(file) : readPackageFromManifest(file);
}
//# sourceMappingURL=read-package.js.map