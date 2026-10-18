# Melorite information architecture, content and SEO update

## Scope and design preservation

Updated the existing site in place. No dependencies were added. Global CSS, design tokens, typography rules, responsive breakpoints, animation primitives, illustrations, workspace scenes, buttons and CTA components remain unchanged. New editorial pages reuse InnerHero, Breadcrumbs, Reveal, PageTransition, existing glass cards and FinalCTA.

The About page keeps its existing composition and gains a customer-benefits section built from existing styles. Its timeline now explicitly covers Understand, Configure, Launch and Support. The existing untracked `src/components/company/` files were present before this task and were not changed.

## 1. Routes added

Resource destinations:

- `/resources`
- `/resources/blog`
- `/resources/guides`
- `/resources/case-studies`

Seven complete starter articles:

- `/resources/blog/what-is-crm-software`
- `/resources/blog/real-estate-enquiry-to-booking`
- `/resources/blog/reduce-appointment-no-shows`
- `/resources/blog/client-approval-workflows`
- `/resources/blog/manage-cod-orders`
- `/resources/blog/what-is-ai-voice-agent`
- `/resources/blog/shared-workflow-ownership`

Four workflow guides:

- `/resources/guides/crm-setup`
- `/resources/guides/real-estate-sales-workflow`
- `/resources/guides/agency-client-management`
- `/resources/guides/ai-calling-implementation`

## 2. Routes removed or redirected

No existing page was deleted. `/platform` remains accessible and self-canonicalized for continuity, with no public navigation or promotional links pointing to it. It remains in the sitemap at a reduced priority to preserve discovery of the legacy page while its future is decided.

Removed the previous redirects that sent `/resources` and all of its children to Home. Updated the legacy `/why-melorite` redirect to point directly to `/products`. Existing product URLs and other legacy redirects remain intact.

## 3. Navigation

Desktop: Products, Resources, Custom Solutions, Company, Book a demo. Removed the additional Contact us header button to match the requested primary architecture; Contact remains in Company, the footer and the mobile sales CTA.

Products dropdown: All Products followed by CRM & Growth, Real Estate, Clinic, Agency, Commerce and AI Calling.

Resources dropdown: Blog, Guides and Case Studies. Company dropdown: About Melorite and Contact.

Mobile uses the same existing drawer and accordions, with Resources added, Platform removed and the duplicated Overview/About links replaced by one About Melorite entry.

Floating navigation: Home, Products, Resources, Custom Solutions, Company and Book a demo. Mobile retains the compact Home, Products, Resources and demo set.

## 4. Footer

Replaced Explore/Platform with Resources links. Renamed About to About Melorite and CRM to CRM & Growth. Custom Solutions is available under Get started, preserving the existing four-column navigation grid rather than adding a new column. Legal links retain their existing environment-controlled behaviour.

## 5. Homepage copy

- “The software your business builds on” replaces the product-showcase platform heading.
- “Connected business software” and “Focused products. Shared ways of working.” replace the repeated Platform page promotion.
- The explore card now promotes Products and working together.
- Related CTAs point to Products.
- The hero, section order, preview scenes, industry selector, cards and animation implementations are retained.

## 6. Product content

Public product naming is now Melorite CRM & Growth, keeping `/products/crm` and internal identifiers intact. Its existing storytelling layout now covers lead sources, campaigns, scoring, assignment, contacts, accounts, opportunities, activities, sequences, quotations, sales orders, forecasting and reporting.

The Products overview explains starting with one focused product and adding other Melorite products as needs grow. Product pages link to a relevant guide or article in the existing Continue exploring section. Product-specific demo parameters are preserved.

Custom Solutions retains Discovery, Plan, Build, Launch and Support, with clearer workflow automation, custom CRM, portal, dashboard and integration language. Contact and demo forms remain unchanged.

## 7. Resources

One structured content source powers category listings, article pages, guide pages, related links and sitemap entries. All seven requested blog categories have an initial article. Four guides include workflow stages, setup decisions, responsibilities, validation and rollout guidance.

Case Studies is a public, crawlable empty state. There are no invented customers, quotes, metrics, popularity claims or publication dates.

## 8. SEO

Each new destination has a unique title and description, canonical URL, Open Graph metadata, Twitter metadata, one H1 and server-rendered content. Articles and guides include Article structured data, an Organization author and the existing publisher identity. Breadcrumb structured data follows the resource hierarchy. Product SoftwareApplication and visible FAQ schemas are retained.

The sitemap includes all 28 public pages, including the retained legacy Platform page. Robots configuration remains unchanged. Unknown resource sections and articles return real 404s.

## 9. Internal links

The resource hub links to categories and featured content; category pages link to full articles and guides; articles link to the relevant product and related resources. Product pages link back to relevant editorial content. Resource demo CTAs retain product context. All local links, fragment targets and rendered image assets are checked by the automated suite.

## 10. Platform references

Removed `/platform` links from desktop/mobile navigation, the floating dock, footer, homepage explore cards, homepage CTAs, Products and individual product pages. Remaining references are the retained route's metadata, its sitemap entry and its existing CTA colour mapping. Shared-foundation descriptions and internal component/CSS names remain where they explain the products or preserve the implementation.

## 11. Files changed
- `next.config.ts`
- `scripts/seo.test.mjs`
- `src/app/book-demo/page.tsx`
- `src/app/company/page.tsx`
- `src/app/custom-solutions/page.tsx`
- `src/app/products/page.tsx`
- `src/app/sitemap.ts`
- `src/components/home/ExploreCards.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/HomeSections.tsx`
- `src/components/layout/FloatingDemo.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MegaMenu.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/product/ProductPage.tsx`
- `src/data/navigation.ts`
- `src/data/product-details.ts`
- `src/data/product-pages.ts`
- `src/data/products.ts`
- `src/data/seo.ts`
- `src/data/showcase.ts`
- `src/components/site/VoiceDemo.tsx`
- `src/data/resources.ts`
- `src/components/resources/ResourceCards.tsx`
- `src/app/resources/page.tsx`
- `src/app/resources/[section]/page.tsx`
- `src/app/resources/[section]/[slug]/page.tsx`
- `docs/information-architecture-update.md`

A pre-existing AI Calling mobile overflow was traced to the waveform’s minimum content width expanding its grid column. Adding `min-w-0` to that content column lets the existing overflow-hidden waveform fit the viewport. No global style or animation changes were needed.

## 12. Validation

- Production build: passed.
- TypeScript check: passed.
- ESLint: passed.
- Automated tests: 8 passed, covering all 28 public pages, metadata uniqueness, social metadata, canonicals, headings, structured data, sitemap, redirects, 404s, local links, image assets, fragments, demo query variants and invalid enquiry rejection.
- Browser checks: all 27 primary pages at 390, 768, 1440 and 1920px (108 page/viewport combinations), with no document overflow or browser exceptions.
- Interaction checks: desktop Products/Resources/Company dropdowns; mobile accordions and navigation; floating Resources navigation; product showcase tabs; AI conversation and workflow tabs; product-context header/main demo links; Company product folder opening.
- Normal-motion check: AI waveform animation remains active, the mobile document fits 390px, and no browser exception occurs.
- Reviewed mobile and desktop screenshots of Home, Resources, About, CRM & Growth and the editorial template. Offscreen folder entrances were checked by scrolling to and opening the existing folder component.
- No CSS, animation-library configuration or workspace-scene implementation changed.
- No live enquiry was sent, and no commit or merge was made.

## 13. Real customer content needed later

Before publishing a case study, obtain approved customer/business identity, industry, challenge, product, implementation details, actual workflow and a verified outcome. Add metrics or quotations only with evidence and permission. The internal resource-data comment records these requirements; no example story is presented as a customer result.
