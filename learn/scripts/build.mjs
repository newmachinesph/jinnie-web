import { cp, mkdir, readFile, writeFile, stat, lstat, readdir, rm, rename, open, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, relative, isAbsolute, sep, extname } from 'node:path';
import { createHash } from 'node:crypto';
import { paths } from '../content/index.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const repository = resolve(root, '..');
// Next.js imports the authored content and renders every screen. Only media is public.
const output = resolve(repository, 'public/learn-assets');
const staging = resolve(root, '.tmp/build');
const backup = resolve(root, '.tmp/assets-backup');
const lockFile = resolve(root, '.tmp/media-build.lock');
const retiredOutput = resolve(repository, 'public/learn-content');
const managedDirectories = new Set([output, staging, backup, retiredOutput]);

async function exists(path) {
  try { await lstat(path); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

// Check exact destinations and every existing ancestor before each removal/move.
// In particular, a Windows junction must never redirect cleanup outside this repo.
async function verifyManagedDirectory(path) {
  const absolute = resolve(path);
  const withinRepository = relative(repository, absolute);
  if (!managedDirectories.has(absolute) || !withinRepository || isAbsolute(withinRepository) || withinRepository.split(sep).includes('..')) {
    throw new Error('Refusing to modify an unexpected course build directory: ' + path);
  }
  let ancestor = repository;
  for (const part of ['', ...withinRepository.split(sep)]) {
    ancestor = resolve(ancestor, part);
    let info;
    try { info = await lstat(ancestor); }
    catch (error) { if (error.code === 'ENOENT') return; throw error; }
    if (info.isSymbolicLink() || !info.isDirectory()) throw new Error('Unsafe course build directory: ' + ancestor);
  }
}

async function removeManagedDirectory(path) {
  await verifyManagedDirectory(path);
  await rm(path, { recursive: true, force: true });
}

async function moveManagedDirectory(from, to) {
  await verifyManagedDirectory(from);
  await verifyManagedDirectory(to);
  await rename(from, to);
}

async function publish() {
  // A leftover backup alongside a complete output is from interrupted cleanup.
  await removeManagedDirectory(backup);
  const hadOutput = await exists(output);
  if (hadOutput) await moveManagedDirectory(output, backup);
  try {
    await moveManagedDirectory(staging, output);
  } catch (error) {
    if (hadOutput) {
      try { await moveManagedDirectory(backup, output); }
      catch (rollbackError) {
        throw new AggregateError([error, rollbackError], `Course publication and rollback failed. The previous build is preserved at ${backup}.`);
      }
    }
    throw error;
  }
  // The new output is complete. Cleanup failure should not fail a valid release.
  try { await removeManagedDirectory(backup); }
  catch (error) { console.warn('Could not remove previous course build: ' + error.message); }
}

// Acquire before entering the cleanup block: a competing builder must never
// remove the active builder's staging directory. A crashed process leaves its
// PID here so an operator can verify that it exited before removing the lock.
await verifyManagedDirectory(staging);
await mkdir(resolve(root, '.tmp'), { recursive: true });
const lock = await open(lockFile, 'wx').catch(error => {
  if (error.code === 'EEXIST') throw new Error(`Another Learn media build owns ${lockFile}. Wait for it to finish; if it crashed, verify the recorded PID has exited before removing that lock.`);
  throw error;
});
try {
  await lock.writeFile(JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }) + '\n');
  await verifyManagedDirectory(output);
  await verifyManagedDirectory(staging);
  await verifyManagedDirectory(backup);
  // Recover if a previous process exited between the two publication renames.
  if (await exists(backup) && !(await exists(output))) await moveManagedDirectory(backup, output);
  await removeManagedDirectory(staging);
  await mkdir(staging, { recursive: true });
  await mkdir(resolve(repository, 'public'), { recursive: true });
  const jobs = JSON.parse(await readFile(resolve(root, 'assets/audio/jobs.json'), 'utf8'));
  const mediaTypes = new Set(['.mp3', '.mp4', '.vtt', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.avif']);
  await cp(resolve(root, 'assets'), staging, { recursive: true, filter: async path => {
    const info = await lstat(path);
    if (info.isSymbolicLink()) throw new Error('Refusing to publish a linked course asset: ' + path);
    if (info.isDirectory()) return true;
    const name = relative(resolve(root, 'assets'), path).replaceAll('\\', '/');
    return ['audio/manifest.json', 'video/manifest.json'].includes(name) || (mediaTypes.has(extname(name)) && name !== 'visual-assets.svg');
  } });
  await cp(resolve(root, 'manifest.webmanifest'), resolve(staging, 'manifest.webmanifest'));
  // Validate and hash the exact media being published, never a changing source.
  function stagedAsset(file) {
    if (typeof file !== 'string' || !file.startsWith('assets/')) throw new Error('Invalid course asset reference: ' + file);
    const path = resolve(staging, file.slice('assets/'.length));
    const rel = relative(staging, path);
    if (!rel || isAbsolute(rel) || rel.split(sep).includes('..')) throw new Error('Invalid course asset path: ' + file);
    return path;
  }
  const clips = JSON.parse(await readFile(resolve(staging, 'audio/manifest.json'), 'utf8'));
  if (Object.keys(clips).length !== jobs.length) throw new Error('Narration manifest must match all authored jobs');
  for (const job of jobs) {
    const clip = clips[job.key] && await stat(stagedAsset(clips[job.key].src));
    if (!clip?.isFile() || clip.size < 1000) throw new Error('Missing narration: ' + job.key);
    if (clip.size !== clips[job.key].bytes || clips[job.key].lang !== job.lang) throw new Error('Changed or truncated narration: ' + job.key);
  }
  const videos = JSON.parse(await readFile(resolve(staging, 'video/manifest.json'), 'utf8'));
  if (Object.keys(videos).length !== 12) throw new Error('Expected 12 localized videos');
  for (const video of Object.values(videos)) for (const file of [video.src, video.captions, video.poster]) {
    const info = await stat(stagedAsset(file));
    if (!info.isFile() || info.size === 0 || (file === video.src && info.size !== video.bytes)) throw new Error('Invalid or truncated video asset: ' + file);
  }
  const files = {};
  async function inventory(directory, prefix = '') {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const name = prefix + entry.name;
      if (entry.isDirectory()) await inventory(resolve(directory, entry.name), name + '/');
      else if (entry.isFile()) files[name] = createHash('sha256').update(await readFile(resolve(directory, entry.name))).digest('hex');
      else throw new Error('Unexpected course asset: ' + name);
    }
  }
  await inventory(staging);
  const revision = createHash('sha256').update(JSON.stringify(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)))).digest('hex').slice(0, 12);
  const builtAt = new Date().toISOString();
  const content = {
    paths: paths.length, lessons: paths.reduce((sum, path) => sum + path.lessons.length, 0),
    bites: paths.reduce((sum, path) => sum + path.lessons.reduce((total, lesson) => total + (lesson.bites || []).length, 0), 0),
    narrationClips: jobs.length, videos: Object.keys(videos).length,
  };
  const buildInfo = JSON.stringify({ renderer: 'nextjs', builtAt, revision, ...content }, null, 2) + '\n';
  await writeFile(resolve(staging, 'build-info.json'), buildInfo);
  files['build-info.json'] = createHash('sha256').update(buildInfo).digest('hex');
  await writeFile(resolve(staging, 'integration-manifest.json'), JSON.stringify({
    source: 'jinnie-web/learn', renderer: 'nextjs', assetBase: '/learn-assets/', revision, builtAt, bridgeVersion: 1,
    content,
    refresh: 'Run pnpm build:learn from jinnie-web to publish media. Next.js renders the course directly; Expo loads its hosted URL without a separate course bundle.',
    files,
  }, null, 2) + '\n');
  await publish();
  await removeManagedDirectory(retiredOutput);
  console.log(`Published ${output}: ${jobs.length} narration clips, 12 videos, ${Object.keys(files).length} assets. Renderer: Next.js.`);
} catch (error) {
  try { await removeManagedDirectory(staging); }
  catch (cleanupError) { console.warn('Could not remove incomplete course build: ' + cleanupError.message); }
  throw error;
} finally {
  await lock.close();
  await verifyManagedDirectory(staging);
  await unlink(lockFile);
}
