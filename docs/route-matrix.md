# UXUE route matrix

Audit basis: live homepage and sitemap inspected read-only on 11 September 2026; every template and content record inspected in the repository. Dynamic routes below represent all entries exposed by the sitemap.

| Route / template | Purpose | Primary action | Observed issue | Redesign / hero requirement | Status | QA |
|---|---|---|---|---|---|---|
| `/` | Corporate proposition and overview | Start a conversation | Decorative eyebrow labels, rotating hero, dense repeated grids, mobile first viewport is cramped | Asymmetric static editorial hero using real field image; capabilities as ruled index; selective evidence | In progress | Pending |
| `/solutions` | Capability overview | Explore a solution | Same hero mechanics as every index; taxonomy competes with labels | Split image/text hero; clear ruled capability list; process below | In progress | Pending |
| `/solutions/[physical-security\|networking\|automation\|ict-equipment\|cybersecurity]` | Service detail | Start a conversation | Repeated universal page rhythm, decorative capability codes and labels | Distinct approved image per service; narrative intro, scannable capabilities, restrained process | In progress | Pending |
| `/industries` | Sector overview | Explore an industry | Low-resolution sector images are presented too prominently; repeated project-card pattern | Editorial index with constrained thumbnails and context-led introduction | In progress | Pending |
| `/industries/[corporate\|financial-services\|government\|healthcare\|education\|industrial\|commercial-real-estate\|technology]` | Sector-specific context | Start a conversation | Same page structure as services; excess section labels | Sector image constrained to its true quality; priority list and related services in a distinct layout | In progress | Pending |
| `/projects` | Published deployment portfolio | View a project | Genuine field imagery is strong but crowded by labels and a rigid gallery mosaic | Documentary-first lead, varied editorial grid, clear disclosure text | In progress | Pending |
| `/projects/[corporate-office-security-deployment\|multi-branch-enterprise-networking\|data-centre-infrastructure-setup\|school-campus-surveillance-system\|cloud-migration-and-cybersecurity\|industrial-facility-security-integration]` | Disclosed project record | Start a conversation | Project caveats and technical story are visually fragmented | Documentary hero constrained to source aspect; clear challenge/response/implementation record | In progress | Pending |
| `/blog` | Insight index | Read an article | Hero + featured card duplicates emphasis; many uppercase labels | Compact editorial masthead, strong featured story, quiet article index | In progress | Pending |
| `/blog/[10 published slugs]` | Long-form guidance | Start a conversation | Oversized cover and sticky TOC compete with reading; label-heavy hero | Reading-first article masthead and constrained cover; accessible anchored contents | In progress | Pending |
| `/about` | Company profile, mission, vision and principles | Start a conversation | Page resembles service template; mission/vision treated as coded cards | Editorial company story, authentic/high-resolution environment image, balanced mission/vision | In progress | Pending |
| `/contact` | Direct contact and email-preparation form | Prepare email | Contact task follows an unnecessarily large slideshow hero; form note is easy to miss | Compact contact masthead, direct contact visible immediately, persistent labels and explicit email handoff | In progress | Pending |
| `/services` and `/services/*` | Legacy route compatibility | Redirect to canonical solution | No content issue; must preserve | Keep permanent redirects | Preserved | Build QA |

## Shared findings

- The identity is recognisably deep blue with a warm orange secondary mark; both logo variants are present as SVG and should remain crisp.
- Existing photography includes high-resolution licensed/editorial images and genuine field images. Several sector assets are only 171–735 px wide and must be constrained rather than enlarged.
- Plus Jakarta Sans is loaded through Google at build time. The redesign will use a licensed self-hosted/system stack to remove a runtime/build network dependency.
- Navigation opens mega menus on hover/focus but the top-level links do not expose `aria-expanded`/`aria-controls`; mobile navigation lacks focus containment and restoration.
- The contact form intentionally prepares a `mailto:` draft and has no web backend. That behavior and its disclosure must remain unchanged.
- SEO metadata, sitemap, robots, JSON-LD, canonical URLs and legacy redirects are implemented in the App Router and must remain intact.
- No analytics or consent integration is present in the repository or rendered homepage; none will be invented.
