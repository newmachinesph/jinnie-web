// Remove narration clips and manifest entries that no authored job references any more.
// Narration keys hash the authored text, so an edited sentence leaves its old clip behind.
// Run after generate-narration.py: node scripts/prune-narration.mjs
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const audio = join(root, 'assets/audio');
const jobs = JSON.parse(readFileSync(join(audio, 'jobs.json'), 'utf8'));
const keys = new Set(jobs.map(job => job.key));

const manifestPath = join(audio, 'manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
let entries = 0;
for (const key of Object.keys(manifest)) if (!keys.has(key)) { delete manifest[key]; entries++; }
writeFileSync(manifestPath, JSON.stringify(manifest));

let files = 0;
const walk = dir => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) { walk(path); continue; }
    const match = /^([0-9a-f]{24})(?:\.timing)?\.(?:mp3|json)$/.exec(name);
    if (match && !keys.has(match[1])) { rmSync(path); files++; }
  }
};
walk(audio);
console.log(`${entries} manifest entries and ${files} files removed; ${Object.keys(manifest).length} clips remain for ${jobs.length} jobs.`);
