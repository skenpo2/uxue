// Full-page screenshots of the given paths at one viewport width, with lazy images loaded.
// Usage: node scripts/qa/screens.js <width> <height> <outDir> /path [/path ...]
// Env: BASE (default http://localhost:3000), PLAYWRIGHT_CORE (path to a playwright-core install),
//      CHROME (default /usr/bin/google-chrome).
const { chromium } = require(process.env.PLAYWRIGHT_CORE || '/home/micheal/my-gym-app/node_modules/playwright-core');
const fs = require('fs');

(async () => {
  const [w, h, out, ...paths] = process.argv.slice(2);
  const base = process.env.BASE || 'http://localhost:3000';
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--hide-scrollbars'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  for (const path of paths) {
    await page.goto(base + path, { waitUntil: 'networkidle', timeout: 120000 });
    // Load off-screen lazy images (e.g. carousel cards) so only real failures are reported.
    await page.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach((img) => { img.loading = 'eager'; }));
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 500) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(80); }
    await page.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 60000 }).catch(() => {});
    await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(800);
    const name = `${path === '/' ? 'home' : path.slice(1).replace(/\//g, '_')}-${w}`;
    await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
    const scroll = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const broken = await page.evaluate(() => [...document.images].filter((i) => !i.naturalWidth).map((i) => i.currentSrc || i.src));
    console.log(name, scroll > 0 ? `HORIZONTAL SCROLL ${scroll}px` : 'ok', broken.length ? `BROKEN ${broken.join(' ')}` : '');
  }
  await browser.close();
})().catch((error) => { console.error(error); process.exit(1); });
