"""Replace selected intro soundtracks while preserving their visual frames/text.

Use --previous-narration with the audio manifest saved before regenerating clips.
Existing caption words stay unchanged; cue times follow the updated narration.
"""
import argparse, hashlib, json, pathlib, re, subprocess
import imageio_ffmpeg

ROOT = pathlib.Path(__file__).resolve().parents[1]
FF = imageio_ffmpeg.get_ffmpeg_exe()

def run(args):
    subprocess.run([FF, '-y', '-hide_banner', '-loglevel', 'error', *args], check=True)

def seconds(timestamp):
    h, m, s = timestamp.split(':')
    return int(h) * 3600 + int(m) * 60 + float(s)

def stamp(value):
    ms = round(value * 1000)
    return f'{ms//3600000:02d}:{ms//60000%60:02d}:{ms//1000%60:02d}.{ms%1000:03d}'

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--previous-narration', required=True)
    parser.add_argument('--only', action='append', required=True, help='Video id.language, such as first.en')
    args = parser.parse_args()
    old = json.loads(pathlib.Path(args.previous_narration).read_text(encoding='utf-8'))
    audio = json.loads((ROOT / 'assets/audio/manifest.json').read_text(encoding='utf-8'))
    scenes = json.loads((ROOT / 'assets/audio/video-scenes.json').read_text(encoding='utf-8'))
    manifest_path = ROOT / 'assets/video/manifest.json'
    manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    selected = [v for v in scenes if f"{v['id']}.{v['lang']}" in args.only]
    if len(selected) != len(set(args.only)): raise ValueError('Unknown video key')
    temp = ROOT / '.tmp/video-audio-refresh'
    temp.mkdir(parents=True, exist_ok=True)
    for video in selected:
        key = f"{video['id']}.{video['lang']}"
        revision = hashlib.sha256(''.join(audio[s['audio']].get('speechHash', '') for s in video['scenes']).encode()).hexdigest()[:12]
        if manifest[key].get('narrationRevision') == revision:
            print(f'{key}: soundtrack already current.', flush=True)
            continue
        old_spoken = sum(old[s['audio']]['duration'] + .5 for s in video['scenes'])
        old_speed = max(1, old_spoken / 57)
        old_pad = max(0, 45 - old_spoken / old_speed) / len(video['scenes'])
        tracks, timings, elapsed, speeds = [], [], 0, []
        for i, scene in enumerate(video['scenes']):
            previous, current = old[scene['audio']], audio[scene['audio']]
            duration = (previous['duration'] + .5) / old_speed + old_pad
            speed = max(1, current['duration'] / max(.1, duration - .5))
            speeds.append(speed)
            track = temp / f'{key}-{i}.wav'
            run(['-i', str(ROOT/current['src']), '-af', f'atempo={speed},apad',
                 '-t', str(duration), '-ar', '24000', '-ac', '1', str(track)])
            tracks.append(track)
            old_voice = max(.1, (previous['duration'] - .4) / old_speed)
            new_voice = max(.1, (current['duration'] - .4) / speed)
            timings.append((elapsed, elapsed + duration, new_voice / old_voice))
            elapsed += duration
        listing = temp / f'{key}.txt'
        listing.write_text('\n'.join("file '" + str(p).replace('\\', '/') + "'" for p in tracks), encoding='utf-8')
        soundtrack = temp / f'{key}.wav'
        run(['-f', 'concat', '-safe', '0', '-i', str(listing), '-c', 'copy', str(soundtrack)])
        target = ROOT / manifest[key]['src']
        replacement = temp / f'{key}.mp4'
        run(['-i', str(target), '-i', str(soundtrack), '-map', '0:v:0', '-map', '1:a:0',
             '-c:v', 'copy', '-c:a', 'aac', '-b:a', '64k', '-ar', '24000', '-ac', '1',
             '-movflags', '+faststart', str(replacement)])
        if replacement.stat().st_size < 1000: raise RuntimeError('Empty video: ' + key)
        captions_path = ROOT / manifest[key]['captions']
        captions = captions_path.read_text(encoding='utf-8')
        def retime(match):
            start, end = seconds(match[1]), seconds(match[2])
            lower, upper, ratio = next((t for t in timings if t[0] <= start < t[1]), timings[-1])
            return stamp(min(upper, lower + (start-lower)*ratio)) + ' --> ' + stamp(min(upper, lower + (end-lower)*ratio))
        updated = re.sub(r'(\d\d:\d\d:\d\d\.\d{3}) --> (\d\d:\d\d:\d\d\.\d{3})', retime, captions)
        replacement.replace(target)
        captions_path.write_text(updated, encoding='utf-8')
        manifest[key]['bytes'] = target.stat().st_size
        manifest[key]['duration'] = round(elapsed, 2)
        manifest[key]['narrationRevision'] = revision
        manifest_path.write_text(json.dumps(manifest, indent=2), encoding='utf-8')
        print(f'{key}: soundtrack refreshed, visual frames and caption words preserved, max speech rate {max(speeds):.2f}x.', flush=True)

if __name__ == '__main__': main()
