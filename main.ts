import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_NAME = 'entry.txt';

// Keep the report's bytes intact.
const summary = readFileSync(new URL('./summary.txt', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Prepare the destination before writing.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUT_NAME), summary);
