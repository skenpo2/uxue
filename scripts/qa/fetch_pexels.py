"""Download a Pexels photo by ID, crop it to a ratio and save a web-sized JPEG into public/images.
Usage: python3 scripts/qa/fetch_pexels.py <pexels-id> <out-path-under-public> <ratio w:h> <width> [focus-x 0..1] [focus-y 0..1]
Example: python3 scripts/qa/fetch_pexels.py 4508751 images/solutions/networking-hero.jpg 16:9 2400 .5 .5"""
import sys, os, io, urllib.request
from PIL import Image, ImageOps

pid, out, ratio, width = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4])
fx = float(sys.argv[5]) if len(sys.argv) > 5 else .5
fy = float(sys.argv[6]) if len(sys.argv) > 6 else .5
rw, rh = (float(v) for v in ratio.split(':'))
url = f'https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg'
data = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=120).read()
im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert('RGB')
w, h = im.size
if w / h > rw / rh:
    nw = int(h * rw / rh); x = int(max(0, min(w - nw, fx * w - nw / 2))); im = im.crop((x, 0, x + nw, h))
else:
    nh = int(w * rh / rw); y = int(max(0, min(h - nh, fy * h - nh / 2))); im = im.crop((0, y, w, y + nh))
if im.width > width:
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
path = os.path.join(os.path.dirname(__file__), '..', '..', 'public', out)
os.makedirs(os.path.dirname(path), exist_ok=True)
im.save(path, 'JPEG', quality=82, optimize=True, progressive=True)
print(out, im.size, os.path.getsize(path) // 1024, 'KB', f'(source {w}x{h})')
