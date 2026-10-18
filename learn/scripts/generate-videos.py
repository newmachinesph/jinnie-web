"""Render 12 captioned motion-illustration intros from existing course words.
Requires Pillow and imageio-ffmpeg. Run generate-narration.py first.
"""
import json, math, pathlib, subprocess, re, os
from PIL import Image, ImageDraw, ImageFont
import imageio_ffmpeg

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/video'
TMP = ROOT / '.tmp/video-build'
OUT.mkdir(exist_ok=True); TMP.mkdir(exist_ok=True)
FF = imageio_ffmpeg.get_ffmpeg_exe()
FONT = os.environ.get('JINNIE_MEDIA_FONT', 'C:/Windows/Fonts/segoeui.ttf')
BOLD = os.environ.get('JINNIE_MEDIA_BOLD', 'C:/Windows/Fonts/segoeuib.ttf')
W, H = 720, 1280

def run(args):
    subprocess.run([FF, '-y', '-hide_banner', '-loglevel', 'error', *args], check=True)

def font(size, bold=False): return ImageFont.truetype(BOLD if bold else FONT, size)

def wrap(text, face, width):
    lines, line = [], ''
    for word in text.split():
        candidate = (line + ' ' + word).strip()
        if face.getlength(candidate) > width and line:
            lines.append(line); line = word
        else: line = candidate
    return lines + [line]

def stamp(seconds):
    ms = round(seconds * 1000)
    return f'{ms//3600000:02d}:{ms//60000%60:02d}:{ms//1000%60:02d}.{ms%1000:03d}'

def main():
    narration = json.loads((ROOT / 'assets/audio/manifest.json').read_text(encoding='utf-8'))
    videos = json.loads((ROOT / 'assets/audio/video-scenes.json').read_text(encoding='utf-8'))
    manifest = {}
    for v in videos:
        key = v['id'] + '.' + v['lang']
        if any(s['audio'] not in narration for s in v['scenes']):
            raise RuntimeError('Narration not ready: ' + key)
        segments, captions, elapsed = [], ['WEBVTT\n'], 0
        spoken = sum(narration[s['audio']]['duration'] + .5 for s in v['scenes'])
        # Keep every authored word, speeding only unusually long intros mildly.
        speed = max(1, spoken / 57)
        pad = max(0, 45 - spoken / speed) / len(v['scenes'])
        for i, scene in enumerate(v['scenes']):
            clip = narration[scene['audio']]
            duration = (clip['duration'] + .5) / speed + pad
            bg = Image.new('RGB', (W,H), '#F7F7FB')
            d = ImageDraw.Draw(bg)
            d.rounded_rectangle((32,32,W-32,H-32), radius=24, fill='#FFFFFF', outline='#E4E4ED', width=2)
            d.text((64,67), 'Jinnie', font=font(28, True), fill='#312E81')
            d.text((64,120), v['title'], font=font(45, True), fill='#312E81')
            for n in range(3):
                d.rounded_rectangle((64+n*201,206,64+n*201+184,212),radius=3,fill='#D4AF37' if n<=i else '#E4E4ED')
            face = font(31 if len(scene['text']) < 220 else 28)
            lines = wrap(scene['text'], face, W-136)
            for n,line in enumerate(lines): d.text((68,845+n*43),line,font=face,fill='#111827')
            if 845+len(lines)*43>1200: raise RuntimeError('Caption overflow: '+key)
            d.line((64,1220,656,1220),fill='#D4AF37',width=2)
            bg_file=TMP/f'{key}-{i}-bg.png';bg.save(bg_file)
            src = ROOT/'assets/characters/jinnie.png' if scene['art']=='jinnie' else ROOT/f'.tmp/media-art/{scene["art"]}.png'
            art=Image.open(src).convert('RGBA');art.thumbnail((576,576),Image.Resampling.LANCZOS)
            art_file=TMP/f'{key}-{i}-art.png';art.save(art_file)
            x=(W-art.width)//2;y=256+(560-art.height)//2
            segment=TMP/f'{key}-{i}.mp4'
            run(['-loop','1','-framerate','15','-i',str(bg_file),'-loop','1','-framerate','15','-i',str(art_file),'-i',str(ROOT/clip['src']),
                 '-filter_complex',f"[0:v][1:v]overlay=x={x}:y='{y}+5*sin(2*PI*t/6)':shortest=1,format=yuv420p[v];[2:a]atempo={speed},apad[a]",
                 '-map','[v]','-map','[a]','-t',str(duration),'-c:v','libx264','-preset','veryfast','-crf','24','-c:a','aac','-b:a','64k','-ar','24000','-ac','1',str(segment)])
            segments.append(segment)
            # Accurate word-derived caption groups, copied from synthesis timing.
            timing=json.loads((ROOT/f'assets/audio/{scene["audio"]}.timing.json').read_text(encoding='utf-8'))
            for k in range(0,len(timing),9):
                group=timing[k:k+9]
                start=elapsed+group[0]['offset']/10_000_000/speed
                end=elapsed+(group[-1]['offset']+group[-1]['duration'])/10_000_000/speed
                captions.append(f'{stamp(start)} --> {stamp(end)}\n'+ ' '.join(w['text'] for w in group)+'\n')
            elapsed+=duration
            if i==0:
                bg.paste(art,(x,y),art);bg.save(OUT/f'{key}.poster.jpg',quality=88)
        concat=TMP/f'{key}.txt';concat.write_text('\n'.join("file '"+str(p).replace('\\','/')+"'" for p in segments),encoding='utf-8')
        target=OUT/f'{key}.mp4'
        run(['-f','concat','-safe','0','-i',str(concat),'-c','copy','-movflags','+faststart',str(target)])
        (OUT/f'{key}.vtt').write_text('\n'.join(captions),encoding='utf-8')
        manifest[key]={'src':f'assets/video/{key}.mp4','captions':f'assets/video/{key}.vtt','poster':f'assets/video/{key}.poster.jpg','duration':round(elapsed,2),'bytes':target.stat().st_size,'kind':'motion-illustration'}
        (OUT/'manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
        print(f'{key}: {elapsed:.1f}s, {target.stat().st_size//1024} KB',flush=True)

if __name__=='__main__': main()
