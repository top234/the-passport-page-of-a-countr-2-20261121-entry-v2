import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "entry.png");
// OUTPUT_DIR override lets local tests run without touching /output;
// the sandbox run uses the default.
const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
const buf = readFileSync(src);
if (buf.length < 8 || buf[0] !== 0x89 || buf[1] !== 0x50 || buf[2] !== 0x4e || buf[3] !== 0x47) {
  throw new Error("entry.png is not a PNG");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}
copyFileSync(src, join(outDir, "entry.png"));
console.log(`wrote ${join(outDir, "entry.png")} (${width}x${height}, ${buf.length} bytes)`);
