# UXUE website: handover

For any agent continuing the redesign. Read this whole file before changing anything; it records the design system, the owner's preferences and the working method that the finished home page was built with. Update the **Task list** at the bottom as you go, so the next agent knows exactly where you stopped.

## 1. The project

- **Site:** UXUE Company Ltd, a Nairobi security and ICT integrator. Solutions: Physical Security, Enterprise Networking, Security Automation, ICT Equipment Supply, Cybersecurity.
- **Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind 4 imported but **all styling is hand-written CSS in `app/globals.css`** (BEM-style class names). No component library.
- **Content lives in data files:** `lib/site.ts` (site details, services, industries, projects, brand and client logos), `lib/blog.ts` (articles), `lib/hero-images.ts` (inner-page hero images), `lib/chat-knowledge.ts` (chat widget answers).
- **Reference site:** the owner is modelling the design on https://callexperts.co.ke (bold, rounded cards, two-tone headings, dark grainy sections). Service pages there follow: photo banner, intro split, sub-services, capability checklist, process grid, service-specific call to action.

## 2. Hard rules from the owner

1. **Do not change the home page** (`app/page.tsx` and its components) unless asked. It is approved.
2. **Do not change the logo** or the "UXUE" wordmark. A bolder font was tried and firmly rejected.
3. **Never publish claude.ai Artifacts.** Deliver everything as files in the repo.
4. **No text tags or labels laid over photos.** No status pills, captions or badges on images.
5. **Simple, premium, corporate.** Short copy, no filler, no "AI slop", no over-explanation. Never describe the website itself ("this page shows…", "information from the company profile…").
6. **No em dashes** anywhere in copy. British English (organisation, centre, colour).
7. **Every page's closing call to action is specific to that page.** It talks about that service or topic, not a generic "book a free consultation". (The home page keeps its own.)
8. **No broken links, no orphan pages, no broken or blurry images.** The site is being prepared for Google submission.
9. **All images are downloaded into `public/images/`**. Never hot-link external image URLs.
10. Don't kill or restart the owner's dev server on port 3000. Test on your own copy (see section 6).

## 3. Design system

All tokens are on `:root` in `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0b1638` | Primary dark surface, headings on light backgrounds |
| `--navy-hover` | `#1a2a5c` | Hover states, the glow in navy gradients |
| `--navy-pale` | `#eef1f8` | Pale card backgrounds (e.g. industry cards) |
| `--orange` | `#fe941e` | Brand accent on dark backgrounds, primary buttons |
| `--orange-text` | `#b35c00` | Orange text on light backgrounds (accessible contrast) |
| `--surface` / `--surface-2` | `#f5f7fa` / `#eef0f6` | Light grey sections |
| `--radius` / `--radius-inner` | `24px` / `16px` | **Every** card and panel / photos nested inside a panel. 20px on phones. Never hard-code a radius. |
| `--grain` / `--grain-dark` | inline SVG noise | Film grain (see below) |

**Typography.** Font is Plus Jakarta Sans. Every section heading is a plain `<h2>` and inherits one size (`--fs-section`, 44px desktop / 28px phone). Do not give section headings custom sizes; the owner checks hierarchy. Card titles are `h3`.

**Two-tone headings.** One or two words of each heading are wrapped in `<span className="accent">`. `.accent` is darker orange on light grounds and bright orange on dark grounds automatically. Example: `Proven in <span className="accent">the field</span>`.

**Grain.** Every surface that is not pure white carries fine grain through a `::before` overlay. The list of selectors is under `/* Grain: … */` near the top of `globals.css`. New non-white surfaces must be added there (dark ones get `--grain`, light ones `--grain-dark`). Pure white stays clean. The owner tuned the strength (`opacity: .11` dark / `.075` light); do not change it.

**Surfaces.**
- `section--paper`: light grey section.
- `section--dark`: navy section.
- `section--ink`: near-black with a soft light from the left edge (projects, footer). Measured against the reference: left edge ~#4b4b4b, centre ~#1c1c1c, right ~#181818.
- `platforms`: navy band with a radial glow.

**Reusable components (prefer these over new ones).**
- `components/MediaCard.tsx`: image card (`project-tile`), used in `.project-cards` grids (3 columns; `.project-cards--four` for 4).
- `components/ProjectCarousel.tsx`: dark-background carousel of centred cards with orange round arrow buttons; swipeable on phones. **The owner wants Insights article cards in this style.**
- `components/CTASection.tsx`: closing call to action (full-width photo, white card, one bold underlined link). Takes `title`, `text`, `link`, `href` and `image`. **Every page passes its own copy and its own photo** from `lib/cta.ts` (`ctaImages[key]`, or `projectCta(i)` / `articleCta(i)` for detail pages). Each photo has a `side` (`left`/`right`) for the white card, chosen so the card never covers the subject. Photos live in `public/images/cta/`.
- `lib/industry-content.ts`: per-industry content (headline, intro, challenges, how each solution applies, typical deployment checklist, FAQs, CTA) used by `app/industries/[slug]/page.tsx`.
- `components/PageHero.tsx`: inner-page hero, a rounded photo banner with a navy wash. Takes `title` (ReactNode, use an accent span), `description` and one `image` `{ src, alt, position? }`.
- `components/ServiceDetailPage.tsx` + `lib/solutions.ts`: solution pages. All per-solution content (hero, intro, sub-services, capabilities, process, brands, FAQs, CTA) lives in `lib/solutions.ts`.
- `components/BlogCard.tsx`: article card in the carousel-card style (`carousel-card--light`).
- Card and panel styles to reuse: `.service-cards` / `.service-card` (rounded white cards; `--four` variant), `.steps` (rounded step cards on dark; `--four` variant), `.brief` (two large statements side by side; `--dark` variant), `.ticks` (orange tick list; `--large` two-column variant), `.faq-list`, `.brand-grid`.
- `components/DeliveryTabs.tsx`: expanding navy panels (home "How we deliver").
- `components/ChatWidget.tsx` + `lib/chat-knowledge.ts`: floating chat, mounted in `app/layout.tsx`. Add a topic to the knowledge base whenever a page adds a new service or fact.

**Links and buttons.** Text links are underlined in orange (`.text-link`, `.text-link--light` on dark). Pill buttons: `.button--orange` (primary on dark), `.button--navy`. Avoid arrows as decoration; the owner disliked them.

**Motion.** Gentle, `cubic-bezier(.65,0,.35,1)` around .6–.7s for layout changes. Respect `prefers-reduced-motion` (already handled globally).

## 4. Copy guidelines

- Lead with what the client gets, in plain words. Two short sentences beat four long ones.
- Hero subtitles: one or two lines.
- Never invent facts: no prices, warranty lengths, office hours, response times, client names or statistics that are not already in `lib/site.ts`. When a detail depends on the site, say so and point to an engineer.
- Client names that may be used: The National Treasury, University of Nairobi, African Wildlife Foundation, Kiriri Women's University of Science and Technology, Longhorn Publishers, Ivari Africa.
- Brands that may be named: those in `technologyPartners` in `lib/site.ts`.

## 5. Images

**Source:** Pexels (free licence). Unsplash blocks scripted access.

1. Find candidates: use WebFetch on a Pexels search page, e.g. `https://www.pexels.com/search/server%20room/`, asking for "every photo URL and its alt text". Each URL ends in a numeric ID.
2. Preview: `https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&w=480`. Put several on one contact sheet and look at them before choosing.
3. Download, crop and save: `python3 scripts/qa/fetch_pexels.py <ID> images/<folder>/<name>.jpg <ratio> <width> [focusX] [focusY]`. Heroes 2400px wide, cards 1200–1600px, quality 82.
4. **Check every image at full size** before using it: no logos or brand names (a real company logo on clothing or equipment is a reason to reject), no watermarks, sharp focus on the subject, nothing mirrored with backwards text.
5. Prefer African people where people appear. For abstract topics (industries, sectors) the owner prefers **places and equipment, not people**.
6. Next's image optimiser caches by URL. When replacing an image, **save it under a new filename** and update the reference, or the old version keeps showing.
7. Credit the Pexels IDs in a code comment next to where the image is used.

Known weak images still in use (replace): the school project cover `public/images/schoolcctv.jpg` (looks AI-generated; the owner may supply a real photo), and low-resolution project gallery photos.

## 6. Working method and testing

**Never** run `next build` inside the repo while the owner's dev server is running, and don't restart their server. Use a scratch copy:

```bash
B=/tmp/uxue-build && mkdir -p $B
rsync -a --delete --exclude .next --exclude node_modules --exclude qa --exclude assets ./ $B/
[ -d $B/node_modules ] || cp -r node_modules $B/     # a symlinked node_modules breaks Turbopack
(cd $B && npx next dev -p 3200 &)                    # or: npx next build && npx next start -p 3100
```

Re-run the `rsync` after edits. Checks before reporting work as done:

```bash
npx tsc --noEmit -p . && npx eslint app components lib
BASE=http://localhost:3200 node scripts/qa/screens.js 1440 900 /tmp/shots /solutions /solutions/networking
BASE=http://localhost:3200 node scripts/qa/screens.js 390 844 /tmp/shots /solutions /solutions/networking
python3 scripts/qa/crawl.py http://localhost:3200
```

- Look at the screenshots at **1440, 820 and 390 px** wide (and 360 for the tightest phones). `screens.js` reports horizontal scroll and broken images.
- `crawl.py` must report `bad []` for pages and images.
- **Turbopack quirk:** if a CSS change does not show, fetch the served stylesheet and grep for the new rule. If it is missing, make a real content edit to `globals.css` (touching the file is not enough). Avoid saving a `.tsx` file and `globals.css` in the same instant.
- `scripts/qa/screens.js` needs `playwright-core`; it defaults to `/home/micheal/my-gym-app/node_modules/playwright-core` and the system Chrome. Override with `PLAYWRIGHT_CORE` and `CHROME`.

## 7. Site map

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | **Finished. Do not touch.** |
| `/solutions` | `app/solutions/page.tsx` | Overview of the five solutions |
| `/solutions/[slug]` | `app/solutions/[slug]/page.tsx` → `components/ServiceDetailPage.tsx` | Five solution pages, data in `lib/site.ts` |
| `/industries`, `/industries/[slug]` | `app/industries/…` | Eight industries; no sub-industries wanted |
| `/projects`, `/projects/[slug]` | `app/projects/…` | Six projects |
| `/blog`, `/blog/[slug]` | `app/blog/…` | Insights; ten articles in `lib/blog.ts` |
| `/about`, `/contact` | `app/about`, `app/contact` | |
| `/services/*` | `app/services/…` | Permanent redirects to `/solutions/*`; keep them |

## 8. Task list (inner pages)

Status: `[ ]` to do, `[~]` in progress, `[x]` done. Add a dated note when you finish or stop.

**Solutions (highest priority).** Rebuild each solution page with a full sub-service breakdown, modelled on the Call Experts service pages:
- [x] Data: add `subServices` (title, description, what's included) and `capabilities` checklist per solution in `lib/site.ts` (or a new `lib/solutions.ts`).
  - Physical Security: IP video surveillance, access control and biometrics, intrusion and alarm systems, perimeter protection, video management and control rooms.
  - Enterprise Networking: structured cabling, fibre optic networks, LAN switching and routing, enterprise Wi-Fi, WAN and multi-branch connectivity, server rooms and data centres.
  - Security Automation: visitor management, automated gates and barriers, ANPR and RFID vehicle access, time and attendance, IoT and environmental monitoring, central and remote monitoring.
  - ICT Equipment Supply: computing, servers and storage, power protection, networking hardware, procurement and lifecycle.
  - Cybersecurity: next-generation firewalls, endpoint protection, cloud security, vulnerability assessment and penetration testing, secure remote access, security monitoring.
- [x] Page layout: photo-banner hero, intro split, sub-service cards, capability checklist, process grid (dark), brands for that solution, related projects, service FAQ, page-specific CTA.
- [x] One sharp, relevant photo per solution hero and intro (replace the AI concept renders).
- [x] `/solutions` overview: cards linking to each solution with real photos.
- [ ] Add each sub-service to `lib/chat-knowledge.ts` if not already covered.

**Every other page.**
- [x] Redesign `PageHero` (rounded photo banner in the Call Experts style, shorter ledes, sharp images).
- [x] Page-specific CTA copy on every page (About, Solutions, each solution, Industries, each industry, Projects, each project, Insights, each article, Contact if it has one).
- [x] Insights (`/blog`): article cards in the `ProjectCarousel` card style (centred text, rounded photo, orange category).
- [~] Projects: listing and detail pages restyled (banner, accents, brief panels, CTA). Still to do: replace the low-resolution gallery photos and the AI-looking `public/images/schoolcctv.jpg` cover (ask the owner for real site photos first).
- [x] Industries: tidy only (no sub-industries).
- [x] About, Contact: tidy to the design system.
- [x] Mobile pass: every inner page checked at 390, 360 and 820 px; card grids step 3 → 2 → 1 columns (articles 2 columns from 1023px, 1 column from 640px).
- [ ] Final: `tsc`, `eslint`, `crawl.py` clean; production build passes on the scratch copy.

### Progress notes

- 2026-10-15: Home page finished and approved. Chat widget with knowledge base added site-wide. This handover written. Starting on Solutions.
- 2026-10-15: Solutions rebuilt (all five pages: sub-services, capabilities, process, brands, FAQs, page-specific CTAs; new Pexels photos in `public/images/solutions/`). New `PageHero` banner applied to every inner page with new photos in `public/images/pages/`. Page-specific CTAs on every inner page. Insights cards restyled. About, Industries, Projects, Contact restyled with accents and rounded cards. AI concept renders, `HeroSlideshow` and unused `/media` files removed. Crawl clean (37 pages, 97 images). Next: tablet review, project gallery photos, add solution sub-services to `lib/chat-knowledge.ts` where missing.
- 2026-10-15 (later): Fixed article grids staying three columns on phones (a phone rule had been deleted). Added depth: About (facts, solutions, reasons, clients), Insights (featured article, topic sections, solution links), every industry page (challenges, how each solution helps, typical deployment, process, FAQs), solution pages (benefits, industries served) and Solutions overview (an index of every service). Every page now has its own CTA photo with the card on the left or right. Crawl clean (37 pages, 123 images).
