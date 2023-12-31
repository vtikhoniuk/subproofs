import * as fs from "node:fs";
import * as path from "node:path";
export function isManifestFile(file) {
  if (isRemotePath(file)) {
    return false;
  }
  return file.endsWith(".yaml") || file.endsWith(".yml");
}
export function isPackageFile(path) {
  return path.endsWith(".spkg");
}
export function isRemotePath(path) {
  return path.startsWith("http://") || path.startsWith("https://");
}
export function isReadableLocalFile(filePath) {
  if (isRemotePath(filePath)) {
    return false;
  }
  try {
    if (path.isAbsolute(filePath)) {
      fs.accessSync(filePath, fs.constants.R_OK);
      return true;
    }
  } catch {}
  return false;
}
export function resolveLocalFile(file, cwd = process.cwd()) {
  if (isRemotePath(file)) {
    throw new Error(`Expected a local file path, but received ${file}`);
  }
  if (path.isAbsolute(file)) {
    return file;
  }
  return path.resolve(cwd, file);
}
//# sourceMappingURL=path-utils.js.map