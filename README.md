# Melorite — marketing website

Five-page product marketing site for Melorite: **Home, Platform, Products, Solutions, Company**.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Lenis · shadcn/ui (Radix) · React Hook Form + Zod · Lucide.

```bash
npm install
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Design system

- **Tokens** live in `src/app/globals.css` (`@theme`): Melorite palette (blue `#2563EB`, navy `#0A2540`, text `#111827`, muted `#64748B`, border `#E2E8F0`, plum `#A0278C` used sparingly) mapped onto shadcn/ui semantic tokens (`primary`, `secondary`, `accent`, `border`, `ring`…). Type scale: `text-display` (home hero only) › `text-h1` (page heroes) › `text-h2` (sections) › `text-h3` (cards). Radii: 10px buttons, 16px cards, 20px product frames.
- **shadcn/ui** (`src/components/ui/`, configured by `components.json`): Button, Card, Badge, Tabs, Accordion, Navigation Menu, Sheet, Dialog, Input, Textarea, Select, Checkbox, Label, Tooltip, Separator, Skeleton — all restyled with Melorite variants (e.g. Button `primary | secondary | outline | ghost | text | dark | light | outline-light`, Card `default | interactive | muted | dark`, Badge `section | success | info | warning`).
- **21st.dev components** from the public registries of libraries published on 21st.dev, customised to the design system: Magic UI `AnimatedBeam` (connected workspace diagram), `BorderBeam` (hero frame), `DotPattern` (rewritten to a single SVG pattern for performance), `Marquee` (app strip); motion-primitives `TextEffect` (hero copy), `TransitionPanel` (product tabs), `AnimatedBackground`. The 21st.dev install registry itself requires an account login, so components were installed from these libraries' own public registries.
- **Product screenshots** share one frame (`MockFrame`): 20px bezel, light border, soft shadow. On phones, primary screenshots render at a legible scale inside a swipeable frame rather than shrinking.
- **Motion**: one heading reveal (line mask; word mask for heroes only), Motion for interactions, Lenis smooth scroll (off for reduced motion/touch). Nothing moves elements based on scroll position (parallax/scroll-scrubbed transforms caused jitter with smooth scrolling); scroll only drives progress lines.
- **Dev QA flag**: append `?qa` in development to complete Motion animations instantly and use native scrolling (useful for screenshots/automated checks). Ignored in production.

## Content architecture

All product, industry and page content is data-driven — adding an app or industry is a data change, not a component change.

| File | Holds |
| --- | --- |
| `src/data/products.ts` | 16 Business Apps: names, categories, modules, capabilities, use case, preview data, availability |
| `src/data/industries.ts` | 15 Industry Solutions: modules, dependent apps, workflows, use case, availability, optional `image` |
| `src/data/workflows.ts` | Cross-app flows with per-hand-off status (`available` / `rolling-out`) and shared records |
| `src/data/platform.ts` | Platform capabilities and implemented security measures |
| `src/data/navigation.ts`, `site.ts`, `faqs.ts`, `company.ts` | Navigation, site config, FAQs, principles, form options |

Names, descriptions and module lists mirror the platform's code-owned catalogue (`@melorite/core` in `melorite-platform`). When the platform catalogue changes, update these files.

**Availability labels** (review before launch — they are displayed publicly):
- Business Apps → `available`
- Industry Solutions → `early-access`
- Integrations capability → `early-access`
- Ledger postings from procurement/payroll and campaign → CRM activity/attribution hand-offs → `rolling-out`

## Product visuals

Product previews are **coded, illustrative mockups** of the real Client Workspace shell (utility bar, app switcher, global search, module sidebar, metric strip, tables/boards) rendered from catalogue data in `src/components/mockups/`. They scale with container-query units, so they stay crisp at any size and cause no layout shift. All figures are sample data and labelled as such. The internal Control Center screenshots were intentionally **not** used, because they expose internal admin UI and test data.

Industry imagery uses curated photographs from Unsplash (Unsplash License — free for commercial use, credited in `src/data/industries.ts`). Replace any photo with approved in-house photography by changing `image.src` (a `/public` path or an allowed remote host in `next.config.ts`).

## Enquiry handling

`POST /api/enquiries` (`src/app/api/enquiries/route.ts`) validates with the same Zod schema as the form (`src/lib/enquiry-schema.ts`), then:

1. **Production:** forwards the enquiry as JSON to `ENQUIRY_WEBHOOK_URL` (optionally HMAC-signed with `ENQUIRY_WEBHOOK_SECRET`). If it isn't configured or delivery fails, the visitor sees an error — never a false success.
2. **Development:** without a webhook, appends to `.data/enquiries.jsonl` (git-ignored).

Spam prevention: honeypot field, minimum fill time, and a best-effort per-IP rate limit (5 per 10 min per instance — use a shared store such as Redis if you run multiple instances). The public site never calls internal platform admin APIs.

Details chosen elsewhere (Workspace Builder, Solution Finder, product/industry demo buttons) carry into the form via `?enquiry=&apps=&industry=&challenges=`.

## Motion & accessibility

- Motion for component interactions; Lenis smooth scroll (disabled for reduced motion and touch). No scroll-linked element movement.
- `MotionConfig reducedMotion="user"` plus CSS reduced-motion overrides; autoplay (featured product tabs) stops under reduced motion.
- Page transitions use React `ViewTransition` (subtle fade; browsers without support navigate normally).
- Keyboard-operable tabs, accordions, builder and selectors; shadcn Sheet mobile menu and Navigation Menu mega menus (focus trap, Escape, focus return, arrow keys); skip link; visible focus rings.

## Before launch

- [ ] Confirm availability labels in `src/data/*`
- [ ] Set `ENQUIRY_WEBHOOK_URL` (and secret) to the approved CRM/intake endpoint
- [ ] Add verified contact details and official social links (`site.ts` / env)
- [ ] Publish Privacy Policy and Terms, then set `NEXT_PUBLIC_PRIVACY_URL` / `NEXT_PUBLIC_TERMS_URL` — the form collects personal data
- [ ] Review the industry photographs (or replace them with your own)
- [ ] Replace or approve the logo asset (`public/brand/`) — the platform app currently uses a different "bars" mark
