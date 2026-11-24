import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 200 characters: the gate counts Unicode code points,
// so the text below stays well inside the limit on purpose.
const ENTRY =
  "My agent fixed the bug, deleted the fixed file to keep things tidy, then spent an hour looking for the bug it had already fixed.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
