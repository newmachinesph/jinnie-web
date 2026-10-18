import assert from 'node:assert/strict';
import { readFile, lstat, readdir } from 'node:fs/promises';
import { resolve, relative, isAbsolute, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { paths } from '../learn/content/index.js';

const root = resolve(fileURLToPath(new URL('../public/learn-assets/', import.meta.url)));
const source = resolve(fileURLToPath(new URL('../learn/', import.meta.url)));
const readJson = async name => JSON.parse(await readFile(resolve(root, name), 'utf8'));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const build = await readJson('build-info.json').catch(() => {
  throw new Error('Missing Learn media. Run pnpm build:learn to generate public/learn-assets from learn/.');
});
const provenance = await readJson('integration-manifest.json');
assert.equal(build.renderer, 'nextjs');
assert.equal(provenance.renderer, 'nextjs', 'Next.js must render Learn; no static app may be published');
assert.equal(provenance.source, 'jinnie-web/learn', 'Learn must use the canonical web source');
assert.equal(provenance.assetBase, '/learn-assets/');
assert.equal(provenance.revision, build.revision);

async function fileExists(name, expectedBytes) {
  const path = resolve(root, name);
  const rel = relative(root, path);
  assert.ok(rel && !isAbsolute(rel) && !rel.split(sep).includes('..'), `Invalid course asset path: ${name}`);
  const file = await lstat(path);
  assert.ok(file.isFile() && !file.isSymbolicLink() && file.size > 0, `Missing or linked course asset: ${name}`);
  if (expectedBytes !== undefined) assert.equal(file.size, expectedBytes, `Truncated course asset: ${name}`);
}
function assetName(reference) {
  assert.ok(typeof reference === 'string' && reference.startsWith('assets/'), `Invalid media reference: ${reference}`);
  return reference.slice('assets/'.length);
}
const actualNames = [];
async function inventory(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = prefix + entry.name;
    if (entry.isDirectory()) await inventory(resolve(directory, entry.name), name + '/');
    else { assert.ok(entry.isFile(), `Linked or invalid generated asset: ${name}`); actualNames.push(name); }
  }
}
await inventory(root);
assert.deepEqual(actualNames.sort(), [...Object.keys(provenance.files), 'integration-manifest.json'].sort(), 'The complete published inventory must match provenance');
const mediaTypes = new Set(['.mp3', '.mp4', '.vtt', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.avif']);
for (const [name, expected] of Object.entries(provenance.files)) {
  assert.ok(mediaTypes.has(extname(name)) || ['audio/manifest.json', 'video/manifest.json', 'manifest.webmanifest', 'build-info.json'].includes(name), `Application code or authoring data must not be published: ${name}`);
  await fileExists(name);
  const actual = hash(await readFile(resolve(root, name)));
  assert.equal(actual, expected, `Changed or incomplete generated asset: ${name}`);
  if (name !== 'build-info.json') {
    const original = resolve(source, name === 'manifest.webmanifest' ? name : 'assets/' + name);
    assert.equal(actual, hash(await readFile(original)), `Published media must preserve canonical source bytes: ${name}`);
  }
}
const revisionFiles = Object.entries(provenance.files).filter(([name]) => name !== 'build-info.json').sort(([a], [b]) => a.localeCompare(b));
assert.equal(hash(JSON.stringify(revisionFiles)).slice(0, 12), build.revision, 'Media revision must cover the complete asset inventory');
const jobs = JSON.parse(await readFile(resolve(source, 'assets/audio/jobs.json'), 'utf8'));
const audio = await readJson('audio/manifest.json');
const videos = await readJson('video/manifest.json');
assert.equal(Object.keys(audio).length, jobs.length, 'Narration must cover every authored job');
assert.equal(Object.keys(audio).length, build.narrationClips);
assert.equal(Object.keys(videos).length, 12);
assert.equal(Object.keys(videos).length, build.videos);
assert.equal(build.paths, paths.length);
assert.equal(build.lessons, paths.reduce((total, path) => total + path.lessons.length, 0));
assert.equal(build.bites, paths.reduce((total, path) => total + path.lessons.reduce((sum, lesson) => sum + lesson.bites.length, 0), 0));
for (const job of jobs) {
  assert.ok(audio[job.key], `Missing narration: ${job.key}`);
  assert.equal(audio[job.key].lang, job.lang);
  await fileExists(assetName(audio[job.key].src), audio[job.key].bytes);
}
for (const video of Object.values(videos)) {
  await fileExists(assetName(video.src), video.bytes);
  await fileExists(assetName(video.captions));
  await fileExists(assetName(video.poster));
}
const manifest = await readJson('manifest.webmanifest');
assert.equal(manifest.start_url, '/');
assert.equal(manifest.scope, '/');
for (const icon of manifest.icons) {
  assert.ok(icon.src.startsWith('/learn-assets/'));
  await fileExists(icon.src.slice('/learn-assets/'.length));
}
await assert.rejects(lstat(resolve(root, '../learn-content')), { code: 'ENOENT' }, 'The retired static course output must not remain public');
console.log(`Learn media verified: ${Object.keys(audio).length} narration clips, ${Object.keys(videos).length} videos, ${actualNames.length} files; Next.js renderer.`);
