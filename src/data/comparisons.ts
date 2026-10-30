export type Comparison = {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  summary: string;
  sources: { label: string; href: string }[];
  rows: { area: string; melorite: string; competitor: string }[];
  chooseMelorite: string[];
  chooseCompetitor: string[];
};

export const comparisons: Comparison[] = [
  {
    slug: "melorite-vs-zoho-crm", competitor: "Zoho CRM", title: "Melorite vs Zoho CRM", description: "Compare Melorite and Zoho CRM across sales workflow, real estate operations, AI calling, customisation and pricing approach.",
    summary: "Zoho CRM is a broad, established CRM with five editions and extensive configuration options. Melorite is a more focused option for teams evaluating connected CRM, real estate operations, AI calling and guided workflow setup.",
    sources: [{ label: "Zoho CRM specifications", href: "https://help.zoho.com/portal/en/kb/crm/crm-reference/introduction-to-zoho-crm/articles/specifications-zoho-crm" }, { label: "Zoho CRM documentation", href: "https://www.zoho.com/crm/help/" }],
    rows: [
      { area: "Core CRM", melorite: "Leads, contacts, accounts, opportunities, pipeline, quotations, sales orders, activities, campaigns and reporting in the agreed setup.", competitor: "Zoho documents leads, contacts, accounts, deals, activities, automation, analytics and many additional CRM capabilities across editions." },
      { area: "Real estate workflow", melorite: "A dedicated product for projects, towers, units, visits, channel partners, bookings and payments.", competitor: "Zoho is a general CRM; evaluate the edition, configuration and extensions needed for a developer or broker workflow." },
      { area: "AI calling", melorite: "Inbound and outbound calling flows, supported languages, bookings, summaries and CRM handoff where configured.", competitor: "Zoho documents telephony, omnichannel and Zia AI capabilities; verify the exact calling provider, edition and workflow needed." },
      { area: "Pricing approach", melorite: "Scoped by users, product modules, implementation and any usage-based calling requirements.", competitor: "Five editions with per-user monthly or yearly billing; features and limits vary by edition." },
      { area: "Setup", melorite: "Guided discovery and configuration around the agreed process.", competitor: "Self-service and partner-led options exist; evaluate the administration and implementation effort your design needs." },
    ],
    chooseMelorite: ["You want real estate and AI calling considered with the CRM workflow", "You prefer a guided, scoped implementation conversation", "You need custom workflow or portal work discussed with the product"],
    chooseCompetitor: ["You want a mature general CRM with many published editions and capabilities", "You need the wider Zoho ecosystem", "Your team is ready to administer a deeply configurable CRM"],
  },
  {
    slug: "melorite-vs-telecrm", competitor: "TeleCRM", title: "Melorite vs TeleCRM", description: "Compare Melorite and TeleCRM for lead management, calling, WhatsApp-led sales, pipelines, real estate and pricing approach.",
    summary: "TeleCRM publicly positions itself around Indian sales teams, calling, WhatsApp, lead capture, automation and reporting. Melorite combines a full CRM sales journey with dedicated real estate workflows and configurable AI calling.",
    sources: [{ label: "TeleCRM features", href: "https://telecrm.in/features" }, { label: "TeleCRM pricing", href: "https://telecrm.in/pricing" }],
    rows: [
      { area: "Lead management", melorite: "Lead qualification can continue into contacts, accounts, opportunities, quotations and sales orders.", competitor: "TeleCRM lists lead capture, distribution, follow-up reminders, calling, WhatsApp, automation and sales reporting." },
      { area: "Calling", melorite: "AI calling is a separate configured product for inbound and outbound conversations, booking, summary and CRM handoff.", competitor: "TeleCRM lists one-click dialling, click-to-call, call recording and calling campaign management for sales teams." },
      { area: "Real estate", melorite: "Dedicated projects, tower, floor and unit inventory, site visits, channel partners, bookings and payment workflows.", competitor: "TeleCRM should be evaluated as a sales CRM against the specific property inventory and post-booking workflow you need." },
      { area: "Pricing approach", melorite: "A scoped quote based on users, product and implementation; AI calling also depends on usage and flow.", competitor: "TeleCRM publishes per-user quarterly and annual pricing for Core CRM plus separate add-ons and consultation." },
      { area: "Best fit to test", melorite: "End-to-end commercial records, property operations and AI call actions in one Melorite setup.", competitor: "High-volume sales follow-up with calling and WhatsApp at the centre of the representative's day." },
    ],
    chooseMelorite: ["You need opportunity, quotation or sales order depth", "You need dedicated real estate operations", "You want AI conversations to book or update an agreed workflow"],
    chooseCompetitor: ["Your sales motion is strongly call- and WhatsApp-led", "Published per-user Core CRM pricing helps your initial shortlist", "You prioritise representative calling productivity"],
  },
  {
    slug: "melorite-vs-leadsquared", competitor: "LeadSquared", title: "Melorite vs LeadSquared", description: "Compare Melorite and LeadSquared for lead management, sales execution, automation, reporting, AI calling and implementation scope.",
    summary: "LeadSquared offers a broad sales, marketing, service and field platform for high-volume sales execution. Melorite is a focused alternative built around CRM, real estate, AI calling and custom workflow delivery.",
    sources: [{ label: "LeadSquared lead management guide", href: "https://help.leadsquared.com/lead-management-feature-guide/" }, { label: "LeadSquared product overview", href: "https://www.leadsquared.com/" }],
    rows: [
      { area: "Lead management", melorite: "Capture, qualify, score and assign leads before conversion to account, contact and opportunity records.", competitor: "LeadSquared documents customisable leads, scoring, prioritisation, activities, tasks and conversion workflows." },
      { area: "Platform breadth", melorite: "Focused public portfolio: CRM, Real Estate, AI Calling and Custom Solutions.", competitor: "LeadSquared presents sales, marketing, service, field operations and AI products for multiple industries." },
      { area: "Real estate", melorite: "Dedicated property inventory, visits, channel partners, booking and payment workflow.", competitor: "Evaluate LeadSquared's industry setup and implementation proposal against the exact inventory and post-sales depth required." },
      { area: "AI calling", melorite: "Configurable inbound and outbound flows with bookings, summaries and CRM updates where supported.", competitor: "LeadSquared publicly lists Invorto voice AI for calls, qualification and follow-ups; confirm packaging and implementation scope." },
      { area: "Pricing approach", melorite: "Scoped by users, modules, setup and calling usage.", competitor: "Official help states actual pricing depends on the LeadSquared plan; request a current proposal for licenses, add-ons and services." },
    ],
    chooseMelorite: ["You want a focused product and guided workflow conversation", "Dedicated real estate operations matter", "You want custom work considered alongside the core product"],
    chooseCompetitor: ["You are evaluating a wider sales, service, marketing or field platform", "You have a high-volume enterprise sales execution requirement", "You need capabilities documented across LeadSquared's broader suite"],
  },
  {
    slug: "melorite-vs-sell-do", competitor: "Sell.Do", title: "Melorite vs Sell.Do", description: "Compare Melorite and Sell.Do for real estate CRM, inventory, channel partners, post-sales, AI calling and pricing approach.",
    summary: "Both products address real estate workflows. Sell.Do publicly presents a broad, mature real estate suite from marketing through post-sales. Melorite combines a focused real estate product with CRM, AI calling and custom software options.",
    sources: [{ label: "Sell.Do real estate CRM", href: "https://www.sell.do/real-estate-crm" }, { label: "Sell.Do pricing", href: "https://www.sell.do/pricing" }],
    rows: [
      { area: "Real estate workflow", melorite: "Enquiries, projects, towers, floors, units, visits, partners, bookings, milestones and documents.", competitor: "Sell.Do lists marketing, sales and pre-sales, inventory, channel partners, post-sales, collections, communication and analytics modules." },
      { area: "General CRM", melorite: "Melorite CRM also supports broader lead-to-order sales workflows outside property sales.", competitor: "Sell.Do centres its public positioning and module structure on real estate developers and brokers." },
      { area: "AI calling", melorite: "A dedicated AI Calling product can be scoped for conversations, booking, summaries and CRM handoff.", competitor: "Sell.Do lists Jarvis voice agents and call analysis as AI capabilities; verify volumes, add-ons and supported workflows." },
      { area: "Pricing approach", melorite: "Scoped by users, projects, modules, implementation and calling usage.", competitor: "Sell.Do states pricing is per active user, starts at a five-user minimum, and varies by modules, AI and communication usage." },
      { area: "Custom work", melorite: "Product extensions, portals, integrations and complete custom applications can be scoped separately.", competitor: "Evaluate Sell.Do's published modules, integrations and enterprise options against any requirements beyond the standard suite." },
    ],
    chooseMelorite: ["You want CRM, real estate and AI calling evaluated together", "You need a custom portal or adjacent business application", "You prefer a focused scope around your current process"],
    chooseCompetitor: ["You want a broad, real-estate-first suite with published modules", "You need to evaluate established post-sales and channel partner depth", "A minimum five-user, module-led proposal matches your buying process"],
  },
];

export function comparisonBySlug(slug: string) { return comparisons.find((comparison) => comparison.slug === slug); }
