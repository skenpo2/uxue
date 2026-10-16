"""Crawl the site from / and the sitemap: report non-200 pages, missing #anchors and broken images.
Usage: python3 scripts/qa/crawl.py [base]   (default http://localhost:3000)"""
import re, sys, html, urllib.request, urllib.error, concurrent.futures as cf
from urllib.parse import urljoin, urlparse

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000'

def get(url):
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'uxue-qa'}), timeout=180)
        return r.status, r.headers.get('content-type', ''), r.read()
    except urllib.error.HTTPError as e:
        return e.code, '', b''
    except Exception as e:
        return str(e), '', b''

_, _, sitemap = get(BASE + '/sitemap.xml')
queue = ['/'] + [urlparse(u).path for u in re.findall(r'<loc>([^<]+)</loc>', sitemap.decode())]
seen, pages, images, anchors = set(queue), {}, {}, []
while queue:
    batch, queue = queue, []
    with cf.ThreadPoolExecutor(6) as ex:
        results = list(ex.map(lambda p: (p, get(BASE + p)), batch))
    for path, (status, ctype, body) in results:
        pages[path] = status
        if status != 200 or 'html' not in ctype:
            continue
        text = re.sub(r'<script.*?</script>', '', body.decode('utf-8', 'ignore'), flags=re.S)
        pages[path] = (status, set(re.findall(r'\sid="([^"]+)"', text)))
        for href in re.findall(r'<a[^>]+href="([^"]+)"', text):
            href = html.unescape(href)
            if href.startswith(('mailto:', 'tel:', 'http')):
                continue
            target, _, frag = href.partition('#')
            target = (urljoin(path, target) if target else path).split('?')[0]
            if frag:
                anchors.append((path, target, frag))
            if target not in seen:
                seen.add(target); queue.append(target)
        for tag in re.findall(r'<img[^>]+>', text):
            for attr in ('src', 'srcset'):
                m = re.search(attr + r'="([^"]+)"', tag)
                if m:
                    for part in html.unescape(m.group(1)).split(','):
                        url = part.strip().split(' ')[0]
                        if url:
                            images.setdefault(urljoin(BASE + path, url), path)

bad = [(p, s) for p, s in pages.items() if not isinstance(s, tuple)]
print('pages', len(pages), 'bad', bad)
for page, target, frag in anchors:
    entry = pages.get(target)
    if isinstance(entry, tuple) and frag not in entry[1]:
        print('MISSING ANCHOR', page, '->', f'{target}#{frag}')
with cf.ThreadPoolExecutor(8) as ex:
    checked = list(ex.map(lambda u: (u, get(u)), images))
broken = [(u, images[u]) for u, (s, ct, _) in checked if s != 200 or not ct.startswith('image')]
print('images', len(checked), 'bad', broken)
