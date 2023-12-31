import { spawn } from "node:child_process";
import { FileDescriptorSet } from "@bufbuild/protobuf";
import { locateBufBinary } from "./locate-buf-binary.js";
export async function readLocalProtos(context, file) {
  const buf = await locateBufBinary();
  if (buf === undefined) {
    throw new Error("Buf is not installed");
  }
  const data = await new Promise((resolve, reject) => {
    const chunks = [];
    const spawned = spawn(buf, ["build", "--as-file-descriptor-set", "--path", file, "--output", "/dev/stdout"], {
      cwd: context
    });
    spawned.stdout.on("data", data => {
      chunks.push(data);
    });
    spawned.on("close", code => {
      if (code !== 0) {
        return reject(new Error(`Failed to read protobuf file ${file} in ${context}`));
      }
      resolve(Buffer.concat(chunks));
    });
  });
  return FileDescriptorSet.fromBinary(data);
}
//# sourceMappingURL=read-local-protos.js.map