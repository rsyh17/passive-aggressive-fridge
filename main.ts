// Notes From a Passive-Aggressive Fridge — make.fun bounty entry.
// program/v1: writes the entry text to <output>/entry.txt
// Output dir resolves from MAKEFUN_OUTPUT_DIR, defaulting to /output.
// Byte-identical on every run: the note below is a fixed constant —
// no randomness, no timestamps, no network, no external input.
// The note is a single line (146 characters), inside the gate's
// 1–200 character limit for /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NOTE =
  "Day 214: He opened me at 3 AM, stared into the light for a full minute, and closed me empty-handed. Bold of him to window-shop in his own kitchen.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), NOTE, "utf8");
}

main();
