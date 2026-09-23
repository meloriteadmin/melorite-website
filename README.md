# Melorite — marketing website

Five-page product marketing site for Melorite: **Home, Platform, Products, Solutions, Company**.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · GSAP ScrollTrigger · Lenis · Radix primitives (shadcn/ui-style) · React Hook Form + Zod · Lucide.

```bash
npm install
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

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

Industry cards use art-directed visuals built from each solution's modules and accent colour. To use approved photography, set `image: "/images/solutions/<file>.jpg"` on an industry.

## Enquiry handling

`POST /api/enquiries` (`src/app/api/enquiries/route.ts`) validates with the same Zod schema as the form (`src/lib/enquiry-schema.ts`), then:

1. **Production:** forwards the enquiry as JSON to `ENQUIRY_WEBHOOK_URL` (optionally HMAC-signed with `ENQUIRY_WEBHOOK_SECRET`). If it isn't configured or delivery fails, the visitor sees an error — never a false success.
2. **Development:** without a webhook, appends to `.data/enquiries.jsonl` (git-ignored).

Spam prevention: honeypot field, minimum fill time, and a best-effort per-IP rate limit (5 per 10 min per instance — use a shared store such as Redis if you run multiple instances). The public site never calls internal platform admin APIs.

Details chosen elsewhere (Workspace Builder, Solution Finder, product/industry demo buttons) carry into the form via `?enquiry=&apps=&industry=&challenges=`.

## Motion & accessibility

- Motion for component interactions; GSAP ScrollTrigger only for the hero convergence (`src/lib/gsap.ts`, loaded only there); Lenis smooth scroll (disabled for reduced motion and touch).
- `MotionConfig reducedMotion="user"` plus CSS reduced-motion overrides; autoplay (product tabs, solutions hero) stops under reduced motion.
- Page transitions use React `ViewTransition` (subtle fade; browsers without support navigate normally).
- Keyboard-operable tabs, accordions, builder and selectors; Radix Dialog mobile menu (focus trap, Escape, focus return); skip link; visible focus rings.

## Before launch

- [ ] Confirm availability labels in `src/data/*`
- [ ] Set `ENQUIRY_WEBHOOK_URL` (and secret) to the approved CRM/intake endpoint
- [ ] Add verified contact details and official social links (`site.ts` / env)
- [ ] Publish Privacy Policy and Terms, then set `NEXT_PUBLIC_PRIVACY_URL` / `NEXT_PUBLIC_TERMS_URL` — the form collects personal data
- [ ] Replace or approve the logo asset (`public/brand/`) — the platform app currently uses a different "bars" mark
