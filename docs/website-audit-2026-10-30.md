# Melorite website audit

**Audit date:** 30 October 2026  
**Primary scope:** live public website at `https://www.melorite.com/`  
**Repository reviewed:** Next.js 16.3.6 application in this workspace  
**Direction preserved:** existing products, layouts, visual language, typography, colors, motion, dashboard previews and premium minimal style

## Method and evidence boundaries

This report combines:

- a breadth-first live crawl seeded from the homepage and XML sitemap;
- direct HTTP status, redirect, header, robots, sitemap, canonical and exposure checks;
- rendered-DOM checks at 320, 375, 768 and desktop widths;
- Lighthouse 13.0.1 lab runs on Home, AI Calling and Book Demo;
- source review of routing, metadata, structured data, navigation, forms, spam controls, analytics and security configuration;
- a limited public search-presence check; and
- local TypeScript, lint and SEO test execution.

“Confirmed” means reproduced on the live site or directly in the current source. “Needs verification” means the answer requires Google Search Console, Bing Webmaster Tools, production analytics, real-user monitoring, legal review or company evidence not available publicly. No enquiry was submitted, no intrusive security testing was performed, and no production state was changed.

---

## 1. Executive Summary

Melorite already has a strong technical and editorial foundation for a young multi-product business-software site. The live crawl found **34 sitemap HTML pages, all returning 200**, no broken internal or sampled external links, real 404 responses for unknown URLs, one H1 on every important page, unique titles and descriptions, descriptive product content, working breadcrumbs, and valid-looking server-rendered JSON-LD. Mobile layouts did not create document-level horizontal overflow at the tested widths. Lab performance is good, with sampled mobile performance scores of **93–96**, CLS of **0**, and very low blocking time.

The largest confirmed issue is canonical inconsistency. The site serves on `https://www.melorite.com`, while every canonical, Open Graph URL, structured-data entity URL, sitemap entry and robots host declaration points to `https://melorite.com`, which permanently redirects back to `www`. The signals are individually valid but contradict one another. Fixing that single origin setting will align redirects, canonicals, sitemap URLs and schema identifiers across the whole site.

The second major opportunity is trust. The live site has no public Privacy Policy, Terms, Security or Pricing page; the form collects personal information without a nearby policy link; the footer has no legal links; no physical/company registration details are visible; and the company story does not identify a founder or named team member. The repository contains in-progress, untracked versions of Privacy, Terms, Security and Pricing pages, but they are **not live** and should not be counted as resolved.

Content quality is materially better than a generic SaaS site: each product has specific workflows, useful operational copy and an initial editorial cluster. However, topical authority is shallow. Three of seven product lines lack a dedicated guide, all six “case studies” are explicitly illustrative scenarios rather than real customer evidence, articles have no visible byline/reviewer/date, and several resource pages remain too small to build durable search authority. The solution is a measured, evidence-led publishing plan—not bulk keyword content.

No redesign is recommended. The priorities are origin consistency, trust/legal publication, internal discovery of the Platform page, genuine proof, accessible color/tap-target adjustments, field performance monitoring, and deeper product-specific content.

### Biggest opportunities

1. Align the entire site on one canonical origin—recommended: `https://www.melorite.com`, because that is the final serving host.
2. Publish reviewed Privacy, Terms and Security pages; link Privacy beside the consent checkbox and all three in the footer.
3. Decide whether `/platform` is a current strategic page. If yes, link it contextually; if no, remove it from the sitemap and redirect it to the closest equivalent. Do not leave it indexable and orphaned.
4. Replace or supplement illustrative “case studies” with approved customer stories; retain the current clear disclosure until real evidence exists.
5. Fix low-contrast secondary/footer text and 7×7 px AI Calling carousel controls without changing the visual system.
6. Build one practical topic cluster per product, with expert review, dates and links between informational and commercial pages.

---

## 2. Audit Scorecard

| Area | Score | Rationale |
|---|---:|---|
| Technical SEO | 6.5/10 | Strong status handling, robots, sitemap and server rendering; major host/canonical conflict and one orphan page. |
| On-page SEO | 8.0/10 | Unique metadata, one H1, strong product specificity and good headings; some titles can be sharper and resources need author/date signals. |
| Content | 6.5/10 | Good product copy and useful starter articles; limited depth, four guide gaps and no genuine customer cases. |
| Performance | 8.5/10 | Mobile lab scores 93–96, zero CLS and small blocking time; LCP is 2.7–3.0 s in sampled mobile runs and JS remains ~299–327 KB transferred. |
| Mobile | 8.5/10 | No global overflow at 320–768 px and forms fit; some small tap targets and horizontally clipped carousel content require intent/interaction review. |
| Accessibility | 7.0/10 | Landmarks, labels, skip link, headings and keyboard-aware tabs are present; contrast failures and undersized controls remain. |
| Internal Linking | 7.0/10 | Products/resources are well linked and breadcrumbs exist; `/platform` has zero discovered internal links and some content clusters are uneven. |
| Conversion | 7.5/10 | Consistent demo/contact journey and short forms; trust support near the form is weak and product preselection is invisible. |
| Trust | 5.5/10 | Honest sample-data and illustrative-case disclosures are excellent; legal/security/pricing pages and real customer proof are absent live. |
| Security | 7.0/10 | HTTPS, HSTS, safe 404s, hidden source maps and server validation are good; missing defense headers and process-local rate limiting lower the score. |
| **Overall Website** | **7.3/10** | A credible, polished foundation with a short list of high-leverage technical and trust fixes. |

---

## 3. Critical Issues

### C1. Canonicals and sitemap contradict the final host

**Confirmed affected scope:** every indexable page, `robots.txt`, `sitemap.xml`, Open Graph URLs and JSON-LD entity IDs.

Example:

- Requested/final URL: `https://www.melorite.com/products/crm` → 200
- Canonical: `https://melorite.com/products/crm`
- Canonical target status: 308 → `https://www.melorite.com/products/crm`
- Sitemap entry: `https://melorite.com/products/crm` → 308 to `www`

The source cause is `site.url = "https://melorite.com"`, while the hosting layer makes `www` canonical in practice. Redirects, canonical tags and sitemap inclusion are all canonicalization signals; they should reinforce the same URL rather than conflict.

**Fix:** choose one host. The least disruptive choice is `https://www.melorite.com` because it already returns 200 and the apex already redirects there. Update the site origin used by metadata, sitemap, robots and JSON-LD. Make `http://melorite.com/*` redirect directly to `https://www.melorite.com/*` in one hop. Rebuild and verify every sitemap URL returns 200 and self-canonicalizes.

**Acceptance criteria:**

- `https://www.melorite.com/path` returns 200 and canonicalizes to itself.
- `https://melorite.com/path`, `http://melorite.com/path` and `http://www.melorite.com/path` each reach the `https://www` URL with at most one permanent redirect.
- robots host/sitemap, XML sitemap, Open Graph URLs and schema IDs all use the same origin.

### C2. Personal-data form has no live privacy policy

`/contact` and `/book-demo` collect name, email, a free-text business message and consent to be contacted. `/privacy` is 404, the footer contains no legal links, and the consent copy has no policy link. This is a trust and compliance gap; exact legal requirements require counsel and depend on the operating entity and target markets.

**Fix:** have the in-progress Privacy Policy reviewed and approved, publish it at `/privacy`, add it next to the consent statement and in the footer, and explain retention/contact practices accurately. Publish reviewed Terms at `/terms`. Do not deploy placeholder legal language without business/legal approval.

### C3. Local pre-deployment checks currently fail

The live site itself is functioning, but the current workspace contains untracked routes and data for Pricing, Privacy, Terms, Security, comparisons, solutions and product-feature pages. Running the existing SEO suite returns **8 passes and 3 failures**:

- `/resources/case-studies` canonical expectation differs from the local page;
- the sitemap now contains 57 URLs while the test expects 34; and
- a legacy redirect test expects `/products` but local routing resolves `/solutions/sales-teams`.

**Fix:** before deploying the in-progress work, reconcile intended IA/canonicals/redirects, update tests to the approved public route set, then require `npm test`, `npm run typecheck`, `npm run lint` and `npm run build` to pass. Typecheck and lint currently pass.

---

## 4. High-Priority Improvements

### H1. Resolve the Platform page’s orphan status

`https://www.melorite.com/platform` is live, indexable, self-contained and in the sitemap, but the crawler found **zero internal links** to it in the current production site. That makes it an orphan page whose sitemap is its only discovery path.

Choose one intentional outcome:

- **Keep it strategic:** add one contextual link from the homepage “connected products” section, Products page and/or footer—not necessarily the primary navigation.
- **Retire it:** 308 it to `/products` or another direct equivalent, remove it from the sitemap, and update any old backlinks based on Search Console data.

### H2. Publish trust pages and verifiable company details

Essential:

- Privacy Policy and Terms;
- Security page describing only verified controls and scoping requirements;
- visible support/sales contact route plus a business-domain email where available;
- legal entity name and registered/business location where approved;
- clear response expectations for demo/contact submissions;
- data handling, hosting, backup, retention and subprocessors described in proposals or security material where relevant.

Optional but valuable:

- named founder/leadership or a real “who you will speak to” section;
- verified company registration details;
- support hours/SLA framing for customers;
- public status page when operationally warranted.

### H3. Turn case-study intent into genuine proof

The current case-study pages are responsibly marked “illustrative” and explicitly state that no customer metrics, testimonials or measured outcomes are claimed. Keep that honesty. However, “Case Studies” creates an expectation of real customer evidence.

Until approved customer stories exist, either:

- retain the section but make the “Illustrative workflow example” label dominant in title, H1 and snippet; or
- present them as “Workflow Examples” while keeping the current URLs/redirect plan stable.

Then publish real cases only with customer approval, the initial situation, implementation scope, timeline, verified outcome, quote ownership and measurement method. Never retrofit invented numbers into the current examples.

### H4. Correct accessibility contrast and tap targets

Lighthouse found repeated contrast failures in:

- footer description text using `#111735` around 55% opacity;
- footer column labels around 45% opacity;
- footer copyright/secondary text;
- Book Demo secondary copy around 55–62% opacity.

AI Calling also has two carousel-dot buttons measured at **7×7 px**, failing target-size guidance.

**Fix within the existing design:** raise text opacity/color only enough to meet WCAG AA; keep visual hierarchy through size/weight/spacing. Preserve the 7 px visible dots but place each inside an invisible/transparent 44×44 px button hit area with clear focus styling and spacing.

### H5. Improve resource E-E-A-T and maintenance signals

Articles and guides have Organization authors in JSON-LD but no visible author/editor, reviewed date, publication/update date or source notes. Add:

- visible “Reviewed by” or editorial owner when genuine;
- `datePublished` and `dateModified` only when accurate;
- citations for legal, medical, privacy, telephony or payments claims;
- a short editorial policy and correction/update process;
- Article schema fields matching visible content.

### H6. Make search engines recrawl the new site state

The public search snapshot still showed stale homepage/product copy and a stale `/why-melorite` result even though the live route now 308s to `/products`. After canonical repair:

1. verify both domain properties and the final URL-prefix property in Google Search Console;
2. submit the corrected `www` sitemap;
3. inspect Home, Products, all six product pages, Company and Resources;
4. request recrawl for the highest-value changed URLs;
5. monitor “Duplicate, Google chose different canonical,” “Page with redirect,” and soft-404 reports;
6. submit the same final-host sitemap in Bing Webmaster Tools and import from Search Console if appropriate.

---

## 5. Medium-Priority Improvements

### M1. Refine high-value titles around exact commercial intent

Current metadata is unique and generally strong. Improvements should focus on clarity rather than stuffing. The Page-Level SEO Table below provides exact recommendations.

### M2. Normalize the CRM product name

The current source and navigation use both “Melorite CRM & Growth” and “Melorite CRM,” while the declared product portfolio names it “Melorite CRM.” Pick one official display name and use it consistently in navigation, titles, H1 support copy, product cards, schema and forms. This is a naming consistency fix—not a product merge or removal.

### M3. Show product context on the demo form

Product CTAs pass `?product=<slug>` and the form stores the selection, but the short production form does not visibly show it. Add a small, editable “Demo for: Melorite CRM” summary or select field. Preserve the current short form.

### M4. Add trust immediately around conversion points

Near the contact/demo form, add concise verified reassurance:

- expected response window;
- who will contact the user;
- no obligation/no automatic subscription if true;
- Privacy Policy link;
- business-domain contact email or alternative direct channel;
- one approved proof element when available.

### M5. Reduce main-thread work on interactive product pages

The AI Calling mobile lab run transferred ~327 KB of JavaScript and spent ~2.8 s in main-thread work, even though TBT was only 50 ms under simulated conditions. Continue the current visual experience, but:

- keep static copy and noninteractive art as Server Components;
- lazy-load below-fold interactive demos when near the viewport;
- load motion/voice-demo code only on pages that use it;
- confirm Lenis/smooth-scroll value on low-power mobile devices;
- avoid hydrating purely decorative SVG/scene elements;
- profile interaction after hydration, not only initial load.

### M6. Improve LCP discovery and field measurement

Sampled lab LCP was 2.9 s on mobile Home, 3.0 s on mobile AI Calling, 2.7 s on mobile Book Demo and 2.6 s on desktop Home. CLS was 0. Lighthouse flagged LCP request discovery on Home/Book Demo.

Identify each real LCP element in DevTools, ensure it is present in initial HTML, avoid lazy-loading it, and give a hero image `priority`/preload only when it is truly LCP. The current hero is largely code/CSS driven, so verify whether delayed styling/animation rather than image delivery is the cause. Add real-user LCP, INP and CLS reporting and use the 75th percentile; lab runs do not establish field Core Web Vitals.

### M7. Harden security response headers

Live HTML includes HSTS (`max-age=63072000`) but did not return CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy or Permissions-Policy.

Recommended baseline, tested in staging:

- `Content-Security-Policy-Report-Only` first, then enforce; include `frame-ancestors 'none'` or the approved embedding policy;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- a minimal `Permissions-Policy` disabling unused capabilities;
- optionally `X-Frame-Options: DENY` for older clients when no framing is required.

Add `includeSubDomains`/preload to HSTS only after inventorying every subdomain and confirming HTTPS everywhere.

### M8. Use a shared abuse-control layer if enquiry volume grows

The form has good server-side schema validation, HTML escaping, header sanitization, a honeypot, a 2.5-second minimum fill time and a 5-submission/10-minute in-memory IP limit. In serverless/multi-instance hosting, the in-memory map is not a global limit. Move throttling to a shared edge/KV/Redis/provider control. Add a challenge only if abuse warrants it, to avoid unnecessary conversion friction.

---

## 6. Low-Priority / Optional Improvements

- Add a concise Pricing Approach page once commercial wording is approved; it can explain scoped pricing without publishing unsupported figures.
- Add `dateModified` to the sitemap only when sourced from real content change data; do not use build time.
- Add WebSite `potentialAction` only if a genuine site search exists. Do not invent one.
- Add Person schema only for real, publicly identified people with visible matching pages.
- Consider a Google Business Profile only if Melorite has a customer-facing or eligible verified business location/service-area presence.
- Confirm favicon rendering in Google after recrawl; the live site serves favicon, PNG icon and Apple icon correctly.
- Review the Facebook/Instagram/LinkedIn profiles periodically for branding and contact consistency.
- If comparison pages are published from the local in-progress work, institute a quarterly fact-check date and link every competitor claim to primary vendor sources.

---

## 7. Broken Links & Redirect Report

### Crawl summary

- 34 sitemap HTML URLs: **34 returned 200**.
- Internal broken links found: **0**.
- Sampled external links: Facebook, LinkedIn and Instagram all returned 200.
- Unknown route `/definitely-not-a-real-page`: **404**, not a soft 404.
- Sensitive-path checks `.env` and `.git/config`: **404**.
- Sample source-map request: **403**.
- Query variants for Book Demo: 200 with canonical to `/book-demo`—correct duplicate handling.
- Trailing-slash variants: permanent redirect to slashless URL—consistent.

| URL / pattern | Issue | Current status / destination | Recommended fix |
|---|---|---|---|
| `http://melorite.com/*` | Redirect chain | 308 to `https://melorite.com/*`, then 308 to `https://www.melorite.com/*` | Redirect directly to final `https://www` URL. |
| `https://melorite.com/*` | Sitemap/canonical target redirects | 308 to `https://www.melorite.com/*` | Use the final `www` host in canonicals/sitemap/schema or reverse hosting to make apex final. |
| `https://www.melorite.com/*/` | Trailing slash variant | 308 to slashless path | Keep; ensure internal links already use slashless paths. |
| `/why-melorite` | Stale indexed legacy URL | 308 to `/products` | Keep direct redirect if `/products` is the approved equivalent; request recrawl and monitor. |
| `/ai`, `/ai-calling` | Legacy aliases | 308 to `/products/ai-calling` | Keep; direct and relevant. |
| `/business-applications`, `/industries`, `/solutions` | Broad legacy aliases | 308 to `/products` | Check old clicks/backlinks in Search Console; retain only where intent is reasonably equivalent. |
| `/solutions/clinic` | Legacy solution URL | 308 to `/products/clinic` | Keep direct equivalent. Same principle for other industry aliases. |
| `/products/crm-growth` | Legacy product URL | 308 to `/products/crm` | Keep direct equivalent. |
| `/pricing` | Missing trust/commercial page | 404 live | Publish only approved pricing-approach content, then add to sitemap/internal links. |
| `/privacy` | Missing legal page | 404 live | Publish reviewed policy and link from form/footer. |
| `/terms` | Missing legal page | 404 live | Publish reviewed terms and link from footer. |
| `/security` | Missing trust page | 404 live | Publish verified controls only; link from footer/company/proposals. |
| `/login`, `/workspace`, `/dashboard`, `/admin`, `/app` | Private/app exposure check | 404 live | Good. Continue separating app/admin hosts and noindex/auth-protecting any future routes. |
| `/api/enquiries` GET | API behavior | 405; robots disallows `/api/` | Correct. Keep POST validation/rate limits and `no-store` responses. |

### Complete live URL inventory

All inventory URLs below returned 200 on 30 October 2026 unless noted otherwise.

**Core and company**

- `/`
- `/products`
- `/platform` — indexable but orphaned
- `/custom-solutions`
- `/company`
- `/contact`
- `/book-demo`

**Products**

- `/products/crm`
- `/products/real-estate`
- `/products/clinic`
- `/products/agency`
- `/products/commerce`
- `/products/ai-calling`

**Resource hubs**

- `/resources`
- `/resources/blog`
- `/resources/guides`
- `/resources/case-studies`

**Blog**

- `/resources/blog/what-is-crm-software`
- `/resources/blog/real-estate-enquiry-to-booking`
- `/resources/blog/reduce-appointment-no-shows`
- `/resources/blog/client-approval-workflows`
- `/resources/blog/manage-cod-orders`
- `/resources/blog/what-is-ai-voice-agent`
- `/resources/blog/shared-workflow-ownership`

**Guides**

- `/resources/guides/crm-setup`
- `/resources/guides/real-estate-sales-workflow`
- `/resources/guides/agency-client-management`
- `/resources/guides/ai-calling-implementation`

**Illustrative case-study pages**

- `/resources/case-studies/property-sales-desk`
- `/resources/case-studies/clinic-front-desk`
- `/resources/case-studies/agency-client-approvals`
- `/resources/case-studies/sales-follow-up`
- `/resources/case-studies/commerce-order-desk`
- `/resources/case-studies/calling-to-appointment`

**Machine endpoints**

- `/robots.txt` — 200
- `/sitemap.xml` — 200, 34 URLs, all currently use the redirecting apex host

No additional public live pages were discovered from HTML links or the sitemap. The local working tree contains additional unpublished routes; treat them as pre-deployment work, not part of the live inventory.

---

## 8. Page-Level SEO Table

Descriptions below are recommendations; retain current copy where it already communicates the same intent naturally.

| URL | Current title | Recommended title | Recommended meta description | H1 | Primary keyword | Main issue |
|---|---|---|---|---|---|---|
| `/` | Business Management Software for Growing Businesses \| Melorite | Business Management Software for Growing Teams \| Melorite | Run sales, property, clinic, agency, ecommerce and customer-calling workflows with focused Melorite business software. Explore products or book a demo. | Bring your business together. | business management software | Title is slightly long; canonical host conflict. |
| `/products` | Business Software Products \| Melorite | Business Software Products for Growing Teams \| Melorite | Compare Melorite CRM, Real Estate, Clinic, Agency, Commerce and AI Calling software, then choose the workspace that fits your workflow. | Different work. The right workspace. | business software products | Strong page; use official product naming consistently. |
| `/products/crm` | CRM Growth Software for Businesses in India \| Melorite | CRM Software for Lead Management & Sales \| Melorite | Manage leads, customer history, follow-ups and sales pipelines in one CRM workspace. Explore Melorite CRM and book a focused demo. | Never lose a lead again. | CRM software | “CRM & Growth” vs “CRM” inconsistency; title can map more directly to lead/sales intent. |
| `/products/real-estate` | Real Estate CRM Management Software \| Melorite | Real Estate CRM & Property Sales Software \| Melorite | Manage property leads, units, buyers, site visits, brokers, bookings and payment schedules with Melorite Real Estate. | From first enquiry to final booking. | real estate CRM | Strong intent; add India only if market targeting is deliberate. |
| `/products/clinic` | Clinic Management Software \| Melorite | Clinic Management Software for Appointments & Billing \| Melorite | Manage appointments, patient records, prescriptions, billing and reminders in one clinic operations workspace. | Less paperwork. More time with patients. | clinic management software | Current title is clear but broad; strengthen key workflows. |
| `/products/agency` | Agency Management Client Portal Software \| Melorite | Agency Management Software & Client Portal \| Melorite | Plan client work, tasks, content, approvals, retainers and invoices with Melorite Agency and its private client portal. | Run your agency smoothly. Keep clients in the loop. | agency management software | Add “&” for readability; strengthen retainers/billing intent. |
| `/products/commerce` | Ecommerce Store Order Management Software \| Melorite | Ecommerce Order & Inventory Management Software \| Melorite | Manage products, stock, orders, customers and UPI, card or COD payments with Melorite Commerce for D2C and retail operations. | Your online store. Made simple. | ecommerce order management software | Good page; title can foreground order/inventory intent. |
| `/products/ai-calling` | AI Calling Software Voice Agents for Business \| Melorite | AI Calling Software & Voice Agents for Business \| Melorite | Use AI voice agents for inbound calls, lead qualification, bookings, follow-ups and reminders, with summaries and human handoffs. | An extra team member on the phone, all day. | AI calling software | Add punctuation; small carousel controls fail target size. |
| `/platform` | Connected Business Management Platform \| Melorite | Connected Business Software Platform \| Melorite | See how Melorite connects records, permissions, automation, AI and reporting across focused business workflows. | The platform behind every Melorite product. | business software platform | Orphaned and strategically ambiguous. |
| `/custom-solutions` | Custom Business Software Development \| Melorite | Custom Business Software & Workflow Automation \| Melorite | Plan custom workflows, integrations, dashboards and portals, or extend a Melorite product around your business process. | Software built around exactly how you work. | custom business software | Strong; support with buy-vs-build and requirements content. |
| `/resources` | Business Software Resources, Articles Guides \| Melorite | Business Software Guides & Operations Resources \| Melorite | Practical guides for CRM, real estate, clinic, agency, commerce, AI calling and custom workflow decisions. | A little perspective. A better way to work. | business software guides | Current title punctuation is awkward; hub copy remains thin. |
| `/resources/blog` | Blog \| Melorite Business Resources | Business Operations & Software Blog \| Melorite | Practical articles about sales, property, clinic, agency, ecommerce and AI-calling workflows for growing teams. | Ideas for the everyday. | business operations blog | Generic title and short description. |
| `/resources/guides` | Guides \| Melorite Business Resources | Business Software Setup & Workflow Guides \| Melorite | Step-by-step guides for planning CRM, real estate, agency and AI-calling workflows before implementation. | Less guesswork. A clearer way forward. | business software guides | Missing Clinic and Commerce guides; Custom Solutions also needs a guide. |
| `/resources/case-studies` | Case Studies \| Melorite Business Resources | Business Workflow Examples \| Melorite | Explore clearly labelled, illustrative workflow examples for sales, property, clinics, agencies, ecommerce and customer calls. | Different businesses. A clearer working day. | business workflow examples | These are not customer case studies; snippet must keep the distinction explicit. |
| `/company` | About Melorite \| Business Software Company | About Melorite \| Business Software Company | Learn how Melorite builds focused software for sales, real estate, clinics, agencies, commerce and AI calling, with guided setup and support. | About Melorite | Melorite business software company | Needs named/entity trust details, not a title rewrite. |
| `/contact` | Contact Melorite \| Sales, Support Business Enquiries | Contact Melorite \| Sales, Support & Enquiries | Contact Melorite about product selection, sales, support or custom software. Share your workflow and the team will respond to your enquiry. | Let’s talk about what comes next. | contact Melorite | No Privacy link/direct verified company details near form. |
| `/book-demo` | Book a Melorite Product Demo | Book a Melorite Software Demo | Book a focused demo of Melorite CRM, Real Estate, Clinic, Agency, Commerce or AI Calling around your current workflow. | See Melorite in your workflow. | book software demo | Meta is 162 characters; visible product preselection would improve clarity. |

### Search intent and secondary-keyword map

| Page | Search intent | Secondary keywords |
|---|---|---|
| CRM | Commercial investigation | sales CRM, lead management, pipeline management, sales follow-up software, customer management |
| Real Estate | Commercial investigation | builder CRM, property sales management, unit inventory, site visit tracking, channel partner CRM |
| Clinic | Commercial investigation | appointment software, patient records, prescription software, clinic billing, patient reminders |
| Agency | Commercial investigation | client portal, content approval workflow, agency project management, retainer management, agency billing |
| Commerce | Commercial investigation | store management, inventory management, order management, COD confirmation, D2C operations |
| AI Calling | Commercial investigation | AI voice agent, inbound AI calls, outbound AI calls, lead qualification calls, appointment booking voice agent |
| Custom Solutions | Commercial investigation | workflow automation, software integrations, custom dashboards, customer portals, custom CRM development |

---

## 9. Product-by-Product SEO Analysis

### Melorite CRM

**What is strong:** lead capture, sources, scoring, assignment, pipeline, follow-ups, customer history, quotations, orders, reporting and forecasting are all represented. The page has enough specificity to avoid generic CRM positioning.

**Gaps:** official name inconsistency; limited proof; only one broad CRM explainer and one setup guide; little coverage of migration, pipeline design, lead response and reporting.

**Actions:** normalize to “Melorite CRM”; keep the benefit-led H1; add FAQ/content around imports, permissions, WhatsApp/website lead capture scope, pipeline customization and reporting boundaries only when verified; link the product page to focused CRM articles and vice versa.

### Melorite Real Estate

**What is strong:** unusually good workflow coverage—projects, towers/floors/units, availability, buyers, visits, brokers, bookings, payments and documents.

**Gaps:** no explicit buyer-to-booking process diagram in search-facing copy; no dedicated content on broker/channel partner operations, unit holds, payment schedules or developer-vs-broker use cases.

**Actions:** retain page structure; strengthen contextual links to the existing workflow guide; publish focused pages about site visits, inventory status governance, channel partners and booking/payment handoffs.

### Melorite Clinic

**What is strong:** clear appointments, patient history, prescriptions, billing, reminders, doctor schedules, visit types and multi-clinic coverage.

**Gaps:** no long-form clinic implementation guide; trust/security expectations are especially important for patient information; avoid implying medical compliance that has not been verified.

**Actions:** publish a clinic operations/setup guide, an appointment workflow piece and a carefully reviewed patient-data/security explainer. Add product-specific security wording only from verified architecture and legal review.

### Melorite Agency

**What is strong:** client records, content calendar, task ownership, version-aware approvals, client portal, retainers/invoices, status and reporting create a differentiated category story.

**Gaps:** limited content on onboarding, scope/retainers, profitability/capacity and approval governance.

**Actions:** keep the strong client-portal positioning; deepen the existing guide; add practical templates for onboarding, approval responsibility and retainer delivery.

### Melorite Commerce

**What is strong:** storefront, products/variants, stock, orders, UPI/card/COD, confirmation, delivery status, customer history and sales view align well with D2C operations.

**Gaps:** no Commerce setup guide; current content is weighted to COD but not catalog/inventory, returns, reconciliation or repeat-purchase operations.

**Actions:** publish an order-operations guide and inventory/order reconciliation content. Clarify exactly which payment/shipping integrations are native, configured or custom before naming providers.

### Melorite AI Calling

**What is strong:** inbound/outbound, natural conversation, bookings, summaries, handoff, CRM updates and after-hours use cases are well differentiated. The content correctly uses illustrative labels.

**Gaps:** high buyer concern around consent, recording, languages, latency, escalation, data retention, integration scope and human fallback is not yet fully answered. Do not make broad 24/7 or “natural” performance claims without operational qualification.

**Actions:** add a buyer guide covering workflow, knowledge, boundaries, human handoff, monitoring and failure handling. Publish India-specific calling/recording content only after legal review. Fix the tiny carousel-dot hit areas.

### Custom Solutions

**What is strong:** clear workflow, integration, dashboard, portal, extension and from-scratch build positioning; the page avoids pretending every request is included.

**Gaps:** limited evidence of delivery approach, ownership, integrations, maintenance and decision criteria; no supporting custom-software content cluster.

**Actions:** add a discovery brief/template, buy-vs-build guide, integration-readiness checklist and portal/dashboard scoping guide. Add real project proof only with permission.

---

## 10. Content & Keyword Opportunities

### Principles

- Publish from real sales/customer questions and implementation experience.
- Prefer one definitive guide plus two or three supporting articles per cluster.
- Link informational pages to the relevant product and product pages back to the best guide.
- Avoid city pages, mass “best software” lists, generic AI posts and unsupported competitor claims.
- Have healthcare, privacy, telephony, payments and legal topics reviewed by qualified people.

### Priority topic clusters

| Cluster | Pillar guide | Supporting high-intent articles |
|---|---|---|
| CRM | CRM implementation and sales workflow guide for growing businesses | How to design pipeline stages; lead assignment rules; CRM migration checklist; sales follow-up cadence; useful CRM reports |
| Real Estate | Real estate enquiry-to-booking operations guide | Unit hold vs booking states; site visit follow-up; broker/channel partner management; inventory governance; payment schedule tracking |
| Clinic | Clinic management software setup guide | Appointment status workflow; reducing no-shows responsibly; patient record handoffs; prescription/billing operations; multi-doctor scheduling |
| Agency | Agency operations and client portal guide | Client onboarding checklist; version-based approvals; retainer delivery tracking; content calendar ownership; invoice/work-status connection |
| Commerce | D2C order and inventory operations guide | COD confirmation workflow; order-to-dispatch checklist; returns/RTO reason tracking; variant stock reconciliation; repeat-customer operations |
| AI Calling | AI voice agent implementation and governance guide | Inbound vs outbound agents; lead qualification flow; appointment-booking handoff; human escalation; call QA; consent/recording considerations after legal review |
| Custom Solutions | Custom software discovery and scoping guide | Buy vs build; workflow requirements template; integration readiness; dashboard requirements; customer/partner portal scope; maintenance ownership |

### Practical 12-week editorial roadmap

**Weeks 1–4: commercial support**

- Publish Clinic and Commerce setup guides to close the largest guide gaps.
- Upgrade CRM and AI Calling guides with byline/reviewer/date and stronger product links.
- Add a clear “illustrative example” snippet/title treatment to all six example case pages.

**Weeks 5–8: operational depth**

- Publish one high-intent article each for Real Estate inventory/holds, Agency approvals, Commerce COD/RTO and CRM pipeline stages.
- Add related-reading modules based on product/topic, not only global recency.
- Create a source/editorial review standard.

**Weeks 9–12: proof and comparison**

- Publish the first approved customer case if evidence is available.
- Publish a custom-software discovery guide and downloadable brief.
- Launch factual comparison pages only after checking every claim against primary vendor sources and adding a visible “last checked” date.

---

## 11. Technical SEO Checklist

| Check | Status | Action |
|---|---|---|
| HTTPS | Pass | Keep. |
| HTTP → HTTPS | Pass, but apex uses two hops | Make apex HTTP redirect directly to final `https://www`. |
| www/non-www | Fail | Align final host, canonical, sitemap, robots, OG and schema. |
| robots.txt | Mostly pass | `/api/` disallowed; change Host/Sitemap to final origin. |
| sitemap.xml | Structurally pass | Change all 34 URLs to final origin; resolve Platform strategy; add approved new pages only after launch. |
| Canonicals | Fail globally | Self-canonicalize final `www` 200 URLs. |
| Meta robots | Pass | Important pages index/follow; 404 template noindex. |
| 404 handling | Pass | Unknown paths return real 404. |
| Redirect type | Pass | 308 permanent is appropriate for permanent moves. |
| Redirect chains | Partial fail | Remove HTTP apex two-hop chain. |
| Trailing slash | Pass | One consistent slashless form. |
| Query parameters | Pass | Demo/product parameters canonicalize to clean base URLs. |
| Pagination | Not present | No action. |
| Duplicate titles/descriptions | Pass in live inventory | Continue automated enforcement as routes grow. |
| H1 | Pass | Exactly one on important pages. |
| Internal broken links | Pass | None found. |
| External sampled links | Pass | Social destinations returned 200. |
| Orphan pages | Fail | `/platform` has no discovered internal links. |
| Private/app routes | Pass for sampled paths | Login/workspace/dashboard/admin/app all 404; keep future private apps auth-protected and noindex. |
| Structured data syntax | Pass in crawl | Validate with Rich Results Test after host fix. |
| Open Graph/Twitter | Pass except origin | Use final origin in URLs/images. |
| Favicon | Pass | Recheck search presentation after recrawl. |
| Search Console | Needs verification | Submit final sitemap, inspect canonical/index reports and Core Web Vitals. |
| Bing Webmaster Tools | Needs verification | Add/verify and submit final sitemap. |

### Structured data findings

- **Organization + WebSite:** present globally and sensibly centralized, but entity IDs/URLs use the redirecting apex host. Change them to the final canonical host.
- **BreadcrumbList:** present and visually matched on non-home pages. On product pages, breadcrumb schema is included in the product JSON-LD while the visible component suppresses its duplicate schema—good.
- **SoftwareApplication:** present on all six product pages with name, category, operating system, URL, description and publisher. It is useful for entity understanding but is **not eligible for Google’s software-app rich result** because it intentionally lacks `offers.price` and a valid `review` or `aggregateRating`. Do not fabricate price or reviews merely to satisfy rich-result requirements.
- **FAQPage:** visible FAQs match markup. Keep only if content stays visible and accurate. Do not expect a rich result; eligibility is limited and Google does not guarantee display.
- **Article:** present on articles/guides/examples with headline, description, main entity, Organization author, publisher and image. Add accurate visible dates and matching `datePublished`/`dateModified`; use `BlogPosting` only if it truthfully reflects the page type.
- **Person:** absent; correct until real named authors/team members are published.
- **Product:** do not add retail Product/Offer schema unless the page exposes a real purchasable offer and pricing details that match the markup.

---

## 12. Performance & Core Web Vitals Findings

### Lighthouse lab results

| Page / profile | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Home mobile | 93 | 97 | 100 | 100 | 1.3 s | 2.9 s | 10 ms | 0 | 4.1 s |
| Home desktop | 82 | 97 | 100 | 100 | 1.1 s | 2.6 s | 10 ms | 0 | 1.7 s |
| AI Calling mobile | 94 | 93 | 100 | 100 | 1.1 s | 3.0 s | 50 ms | 0 | 2.8 s |
| Book Demo mobile | 96 | 96 | 100 | 100 | 1.1 s | 2.7 s | 10 ms | 0 | 2.3 s |

Transferred JavaScript was approximately 299–327 KB and CSS 41–58 KB across the samples. Lighthouse estimated ~25–27 KB of unused JavaScript and 20–230 ms of render-blocking savings. No image-delivery savings were flagged.

### Interpretation

- **CLS is excellent** in the sampled templates.
- **TBT is excellent** under lab simulation, but this does not replace INP field data.
- **LCP is the main performance opportunity** and exceeds the 2.5 s “good” threshold in all four runs.
- Desktop Home’s 82 score is driven mainly by 2.6 s LCP and timing distribution, not layout instability or large images.
- The visual system can stay intact. Prioritize initial rendering, component boundaries and below-fold hydration before removing animations.

### Field-data limitation

The PageSpeed Insights API did not return CrUX data due to API quota, and public field data was not otherwise available in this audit. Confirm real 75th-percentile LCP, INP and CLS in Search Console/CrUX or your RUM platform before declaring Core Web Vitals pass/fail.

---

## 13. Conversion & Trust Improvements

### Current journey

Visitor → Products/Resources → Product page → Book Demo/Contact is clear and consistent. Product-specific CTAs preserve product context in the query string, the forms are short, labels and validation are accessible, and the copy is calm rather than aggressive.

### Friction and fixes

1. **Invisible product context:** show the preselected product and allow correction.
2. **No privacy link:** add policy context beside consent.
3. **No response expectation:** say when and how the team normally responds, only if operationally true.
4. **Limited proof near CTA:** add one approved case, logo or short verified customer statement when available.
5. **No alternative direct business contact:** show a verified domain email/phone or explain that the form is the official route.
6. **No pricing orientation:** a restrained “pricing approach” page can explain what determines a quote without publishing invented figures.
7. **Support ambiguity:** distinguish sales/demo enquiries from existing-customer support and provide the appropriate verified channel.

### Trust hierarchy

**Essential now:** Privacy, Terms, Security, legal/entity details, accurate contact route, form disclosure, honest case labeling.  
**Next:** real customer cases, named leadership, domain email, pricing approach, integration/security evidence.  
**Optional later:** public status page, formal trust center, downloadable security overview, partner badges only with authorization.

---

## 14. Recommended 30/60/90-Day Action Plan

### Days 0–30

- Fix canonical origin and the apex HTTP redirect chain.
- Regenerate robots, sitemap, Open Graph and JSON-LD on the final host.
- Publish legally reviewed Privacy and Terms; link Privacy from both forms.
- Publish the verified Security page or hold it until claims are approved.
- Decide `/platform` keep/link vs retire/redirect.
- Fix contrast and AI Calling dot hit areas.
- Reconcile local in-progress routes and restore all CI/test checks to green.
- Submit corrected sitemap and inspect priority URLs in Search Console/Bing.

### Days 31–60

- Add visible article authorship/reviewer/date standards.
- Publish Clinic and Commerce implementation guides.
- Normalize CRM naming site-wide.
- Add visible product context and response expectations to demo/contact flows.
- Add shared rate limiting for the enquiry endpoint.
- Deploy security headers in report-only/staged mode, then enforce after testing.
- Establish field Web Vitals reporting and a monthly CWV review.

### Days 61–90

- Publish four operational articles from the roadmap.
- Publish the first genuine, approved customer case or keep the illustrative disclosure dominant.
- Add approved company/entity/leadership details.
- Profile and reduce below-fold hydration on Home and AI Calling.
- Review Search Console canonical/index coverage, queries, CTR and stale redirected URLs.
- Decide whether factual comparison pages are ready for a monitored publishing process.

---

## 15. Developer Action Checklist

### Origin and crawling

- [ ] Set the production site origin to `https://www.melorite.com` (or deliberately reverse hosting so the apex is final—but do not mix the two).
- [ ] Configure `http://melorite.com/:path*` → `https://www.melorite.com/:path*` in one permanent hop.
- [ ] Verify `robots.txt` Host/Sitemap use the final origin.
- [ ] Verify every sitemap URL returns 200 and self-canonicalizes.
- [ ] Update Organization/WebSite/Breadcrumb/Article/SoftwareApplication entity URLs to the final origin.
- [ ] Add automated assertions that the canonical URL returns 200 and equals the final response URL.

### IA and metadata

- [ ] Resolve `/platform` strategy; link it or redirect/remove it from sitemap.
- [ ] Normalize “Melorite CRM” naming across data, navigation, forms, metadata and schema.
- [ ] Apply approved title/description changes from the table.
- [ ] Keep query variants canonicalized to clean base URLs.
- [ ] Keep unknown routes as real 404 + noindex.

### Trust and conversion

- [ ] Complete legal/business review of Privacy and Terms before deployment.
- [ ] Link Privacy beside the form consent checkbox and footer.
- [ ] Publish only verified Security claims.
- [ ] Show selected product visibly on Book Demo.
- [ ] Add an accurate response-time/contact expectation.
- [ ] Add approved entity/contact/leadership details.
- [ ] Do not publish fake testimonials, ratings, clients, statistics or certifications.

### Accessibility

- [ ] Raise low-opacity body/footer text to WCAG AA contrast.
- [ ] Expand AI Calling dot hit areas to at least 44×44 CSS px while preserving visible dots.
- [ ] Re-run automated axe/Lighthouse checks and keyboard-only walkthroughs.
- [ ] Verify focus visibility for menu, tabs, accordions, form controls and floating navigation.
- [ ] Test screen-reader announcement of validation, submit error and success states.

### Performance

- [ ] Identify Home/Product/Form LCP elements in a throttled trace.
- [ ] Ensure LCP content is server-rendered and not lazy/animation delayed.
- [ ] Lazy-load below-fold interactive demos and page-specific animation modules.
- [ ] Audit Client Component boundaries and remove hydration from decorative/static elements.
- [ ] Track real LCP/INP/CLS at the 75th percentile by page template and device.

### Security and forms

- [ ] Add CSP Report-Only, then enforce after reviewing violations.
- [ ] Add `nosniff`, strict referrer policy, frame protection and minimal permissions policy.
- [ ] Review HSTS subdomain/preload readiness before extending the directive.
- [ ] Replace process-local rate limiting with shared infrastructure if abuse/traffic warrants it.
- [ ] Verify SMTP/webhook delivery, error logging and secret management in production.
- [ ] Keep source maps private and sensitive files inaccessible.

### Content and schema

- [ ] Add visible accurate article dates/reviewers and matching Article fields.
- [ ] Keep FAQ markup synchronized with visible FAQ content.
- [ ] Do not add SoftwareApplication `offers` or ratings without real, visible supporting data.
- [ ] Add Clinic, Commerce and Custom Solutions pillar guides.
- [ ] Maintain explicit “illustrative” labeling until genuine cases are approved.

### Release gates

- [ ] Reconcile current untracked routes/data with the intended launch set.
- [ ] Make `npm test`, `npm run typecheck`, `npm run lint` and `npm run build` pass.
- [ ] Crawl the production preview and fail release on broken internal links, redirecting canonicals, duplicate metadata or sitemap non-200s.
- [ ] Run mobile checks at 320, 375/390, 768 and desktop widths.
- [ ] Validate deployed schema with Google Rich Results Test and Schema.org validator.

---

## Reference standards

- [Google: canonical URL methods](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: redirects and Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: SoftwareApplication structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [web.dev: Core Web Vitals thresholds](https://web.dev/articles/vitals)

## Final assessment

Melorite does not need a new product strategy or a visual redesign. It needs its technical signals to agree, its trust layer to become public and verifiable, and its useful product knowledge to be developed into a disciplined content system. Those changes preserve the current site’s strongest qualities—clarity, calm design, specific workflows and honest claims—while making the site easier to crawl, easier to trust and more likely to convert qualified visitors.
