# UXUE hero image collection

Status: five images generated through the authorised API/CLI fallback, visually reviewed, exported as website-ready WebPs and connected to the site's marketing hero rotations.

## Direction

An integrated enterprise environment, photographed with the precision of a premium architectural campaign. The image should communicate UXUE's work across physical security, enterprise networking, automation, cybersecurity and ICT infrastructure in one coherent scene.

Brand context comes from `app/page.tsx`, `app/about/page.tsx`, `lib/site.ts` and `app/globals.css`: UXUE serves organisations in Kenya and East Africa; its palette combines ink, blue, orange and warm white. This is a conceptual environment, not a depiction of a verified UXUE installation.

## Generation prompt

Use case: ads-marketing
Asset type: premium corporate homepage hero photograph, landscape, no embedded copy.

Primary request: Create an exceptionally refined, photorealistic architectural campaign image for UXUE, a Nairobi-based company that integrates enterprise security, networks, automation, cybersecurity and ICT infrastructure. Communicate the confidence of a complete, professionally engineered operating environment.

Scene: One believable contemporary enterprise facility in Nairobi. View from an immaculate access-controlled technical corridor into a glass-fronted network and operations room. The network room is the main visual subject: a small number of precision-installed graphite equipment racks, credible switches and servers, exceptionally tidy blue patch cabling and restrained status lights. Place an understated biometric access reader beside the glass doorway and one discreet ceiling-mounted security camera. Through the glass, a modest operations display has subtle, non-legible monitoring graphics. All equipment is physically installed and plausibly connected within the same architecture. These details should reward closer inspection without competing with the room's overall form.

Style: High-end commercial architectural photography. Understated, sophisticated, tangible and technically credible. Large-format photographic clarity, a corrected 35 mm architectural perspective, straight verticals, realistic scale, clean geometry and carefully resolved physical details. Brushed aluminium, finely textured graphite metal, clear glass and warm pale stone. Subtle real material variation and restrained reflections.

Composition: A spacious landscape frame with a strong focal grouping near the centre, slightly to the right. Keep the important rack, doorway, reader and camera grouping inside the middle half of the frame so a tall crop can retain the concept. The left third is quiet pale architecture with gentle tonal transitions, suitable beside homepage copy. Use architectural depth and a clean foreground to create calm authority. Keep critical details away from every outer edge. The scene should remain immediately legible at website scale.

Lighting and palette: Beautiful soft daylight with controlled highlights and deep but readable shadows. Warm off-white and pale stone balanced with graphite, muted enterprise blue and tiny warm orange accents in practical lighting or cable identification. Reference palette: ink #111820, blue #174f9c, orange #f58220, warm white #f6f5f1. Orange is a restrained accent. Natural glass reflections, realistic exposure and elegant tonal separation.

Text: None. No lettering, logos, slogans, watermark or readable screen text. The website will supply the headline and calls to action separately.

Constraints: One unified architectural photograph. No collage, floating devices, holograms, glowing connection lines, padlock or shield symbols, cyberpunk styling, neon blue wash, lens flares, exaggerated bloom, toy-like equipment, impossible cable routing, exaggerated wide-angle distortion or artificial plastic surfaces. No people. Do not imply a specific real client site or place a UXUE logo on the fictional facility.

## Intended files and review

- Master: `public/images/uxue-integrated-infrastructure-hero.png`, 3840 × 2160, RGB, 10,898,201 bytes.
- Website export: `public/images/uxue-integrated-infrastructure-hero.webp`, 2560 × 1440, quality 90, 458,596 bytes.
- The master passed PNG integrity validation; the WebP was decoded and its dimensions checked after export.
- Visually reviewed the landscape composition, materials, equipment, reflections and focal hierarchy. The scene combines server racks, an access reader, a surveillance camera and monitoring screens.
- Reviewed centred desktop (432 × 400) and mobile (390 × 760) image crops. Both retain the racks, access reader and camera. The monitoring screens remain visible in the landscape composition but fall outside the narrower crops.
- The original crop previews were followed by homepage integration and browser review. The current design places full-clarity photography beside the copy on a deep slate-teal background, stacking the photograph beneath the copy on smaller screens.
- Suggested alt text: "Conceptual enterprise facility integrating network infrastructure, access control and security monitoring."

## Generation record

- Mode: API/CLI fallback, explicitly authorised by the user.
- Implementation: the image-generation skill's bundled `scripts/image_gen.py`, using an isolated Python environment.
- Model: `gpt-image-2`.
- Settings: one image, `quality=high`, `size=3840x2160`, PNG output, `--no-augment`.
- Prompt: the complete "Generation prompt" section above, passed without additional augmentation.
- Result: one initial successful generation, followed by four companion generations and local resizing and WebP encoding with Pillow.

## Companion images and saved files

All five PNG masters are 3840 × 2160. All five WebP exports are 2560 × 1440, encoded at quality 90. Files are saved under `public/images/`.

| Subject | Website file | PNG master | WebP bytes |
| --- | --- | --- | ---: |
| Integrated infrastructure | `uxue-integrated-infrastructure-hero.webp` | `uxue-integrated-infrastructure-hero.png` | 458,596 |
| Physical security | `uxue-physical-security-hero.webp` | `uxue-physical-security-hero.png` | 270,050 |
| Enterprise networking | `uxue-enterprise-networking-hero.webp` | `uxue-enterprise-networking-hero.png` | 435,750 |
| Security automation | `uxue-security-automation-hero.webp` | `uxue-security-automation-hero.png` | 618,480 |
| Cybersecurity | `uxue-cybersecurity-hero.webp` | `uxue-cybersecurity-hero.png` | 465,342 |

The complete companion prompts are in `docs/uxue-hero-generation-prompts.jsonl`. They were sent through the skill's bundled `generate-batch` command with `gpt-image-2`, high quality, 3840 × 2160, no prompt augmentation and concurrency 2. Each job generated one distinct image; all four jobs succeeded.

## Website integration

- `lib/hero-images.ts` holds the image paths, individual descriptions, focal positions and related image collections.
- The homepage and solutions overview use the full five-image rotation.
- About and contact use the infrastructure, physical-security and cybersecurity scenes.
- Solution details begin with the relevant service image and rotate through related technology scenes.
- The industries overview, industry detail pages and insights overview use relevant selections from the collection.
- Hero slides use a six-second interval and a restrained crossfade. Clickable indicator dots support direct selection and keyboard navigation (left/right, Home and End). A text-only pause/play control manages automatic rotation; hover, keyboard focus, visibility and reduced-motion preferences are respected. Every generated slide has its own alternative description.
- Physical security, networking, automation and cybersecurity have individual focal positions for narrow crops.
- The white hero overlays were removed. The mobile layout separates copy and imagery so neither relies on a heavy overlay for legibility.
- Social preview metadata on updated pages uses the corresponding lead image.
- Project pages, project galleries and other documentary photographs retain their original images.
- Section eyebrow labels and decorative button/link arrows were removed throughout the site. Buttons use sentence-case text, and the mobile navigation has a text-only Menu/Close control.
- The footer was rebuilt without a brand image, with contact details, solution/industry/company navigation and a restrained legal/social row.
- The page palette combines deep slate-teal, warm neutral sections and a muted copper accent.

## Verification

- All ten image files passed image integrity checks.
- Desktop and mobile homepage layouts were visually reviewed in Chrome.
- `npm run lint` and `npm run build` passed after the final source changes; all 47 routes were generated.
- A production Chrome browser check observed all five distinct homepage slides in rotation and confirmed that their image requests loaded successfully.
- Checked the hero images on 12 representative routes: home, about, contact, solutions overview, all five solution details, industries overview, corporate industry and insights overview. No browser runtime errors or failing local responses were recorded.
- Checked 390 px mobile layouts for the homepage and networking solution page, with no horizontal overflow. The homepage stayed on its first slide for longer than the rotation interval when reduced motion was enabled.
- Browser screenshots are saved under `qa/generated-heroes/`.

## Current design verification

- The refined design passed `npm run lint` and `npm run build` (47 generated routes).
- Production Chrome checks passed for autoplay, pause/resume, direct dot selection, keyboard navigation and wrapping, and manual selection with reduced motion.
- Verified the homepage plus representative solution, company, contact, project and insights pages. No browser runtime errors or failing local responses were recorded.
- Checked widths of 320, 390, 768, 1024 and 1440 pixels without horizontal overflow. Mobile menu opening/closing and reduced-motion behavior passed.
- Updated previews: `qa/refined-homepage/home-desktop.png`, `home-mobile.png`, `home-full.png`, `footer-desktop.png`, `footer-mobile.png`, `networking-desktop.png` and `networking-mobile.png`.
