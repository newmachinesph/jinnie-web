"""Build local narration, expanding Philippine peso amounts only in spoken text.
Requires edge-tts. No learner data is sent; this is an authoring-time task.
"""
import argparse, asyncio, hashlib, json, os, pathlib
import edge_tts

ROOT = pathlib.Path(__file__).resolve().parents[1]
VOICES = {'en': 'en-PH-RosaNeural', 'tl': 'fil-PH-BlessicaNeural'}
RATE = '-5%'

def write_json(path, value):
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False), encoding='utf-8')
    temporary.replace(path)

def speech_hash(job):
    text = job.get('spokenText', job['text'])
    return hashlib.sha256(('\0'.join([job['lang'], VOICES[job['lang']], RATE, text])).encode('utf-8')).hexdigest()[:24]

async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--only', action='append', help='Generate/check only this authored narration key; may be repeated.')
    parser.add_argument('--concurrency', type=int, default=4, choices=range(1, 9))
    args = parser.parse_args()
    jobs = json.loads((ROOT / 'assets/audio/jobs.json').read_text(encoding='utf-8'))
    if args.only:
        jobs = [job for job in jobs if job['key'] in args.only]
        if len(jobs) != len(set(args.only)): raise ValueError('Unknown narration key')
    manifest_path = ROOT / 'assets/audio/manifest.json'
    manifest = json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {}
    pending = []
    for job in jobs:
        file = ROOT / job['file']
        entry = manifest.get(job['key'], {})
        expected = speech_hash(job)
        unchanged_legacy = not entry.get('speechHash') and job.get('spokenText', job['text']) == job['text']
        if file.exists() and file.stat().st_size > 1000 and entry.get('voice') == VOICES[job['lang']] and (entry.get('speechHash') == expected or unchanged_legacy):
            entry.update(paths=job.get('paths', [job['path']]), speechHash=expected)
        else:
            pending.append(job)
    print(f'{len(pending)} clips need synthesis; {len(jobs) - len(pending)} unchanged clips reused.', flush=True)
    sem = asyncio.Semaphore(args.concurrency)
    finished = 0
    failures = []
    async def build(job):
        nonlocal finished
        file = ROOT / job['file']
        async with sem:
            file.parent.mkdir(parents=True, exist_ok=True)
            for attempt in range(3):
                try:
                    bounds, chunks = [], []
                    speech = edge_tts.Communicate(job.get('spokenText', job['text']), VOICES[job['lang']], rate=RATE, boundary='WordBoundary')
                    async for part in speech.stream():
                        if part['type'] == 'audio': chunks.append(part['data'])
                        elif part['type'] == 'WordBoundary': bounds.append({k:part[k] for k in ['offset','duration','text']})
                    data = b''.join(chunks)
                    if len(data) < 1000: raise ValueError('Empty audio')
                    temporary = file.with_suffix('.mp3.tmp')
                    temporary.write_bytes(data)
                    os.replace(temporary, file)
                    duration = (bounds[-1]['offset'] + bounds[-1]['duration']) / 10_000_000 + .4 if bounds else 0
                    write_json(ROOT / 'assets/audio' / (job['key'] + '.timing.json'), bounds)
                    manifest[job['key']] = {
                        'src': job['file'], 'lang': job['lang'], 'path': job['path'],
                        'paths': job.get('paths', [job['path']]), 'voice': VOICES[job['lang']],
                        'bytes': len(data), 'duration': round(duration, 3), 'speechHash': speech_hash(job),
                    }
                    break
                except Exception as error:
                    if attempt == 2: failures.append({'key': job['key'], 'error': str(error)})
                    else: await asyncio.sleep(2 * (attempt + 1))
            finished += 1
            if finished % 25 == 0:
                write_json(manifest_path, manifest)
                print(f'{finished}/{len(pending)} regenerated, {len(failures)} failed', flush=True)
    await asyncio.gather(*(build(job) for job in pending))
    write_json(manifest_path, manifest)
    write_json(ROOT / 'assets/audio/failures.json', failures)
    print(f'Finished: {len(manifest)} audio files; {len(pending) - len(failures)} regenerated; {len(failures)} failed.', flush=True)
    if failures: raise SystemExit(1)

if __name__ == '__main__': asyncio.run(main())
