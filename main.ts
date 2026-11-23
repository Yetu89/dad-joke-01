// SPDX-License-Identifier: MIT
// Dad Joke Showdown entry: writes one dad joke to /output/entry.txt.
// Node 22, stdlib-only. Run: node main.ts
// Override the output directory for local testing with OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my son for the ladder and he said, 'Dad, you're raising the bar.' I said, 'Son, that's the whole point.'";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}.`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
