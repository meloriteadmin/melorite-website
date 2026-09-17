const team = (title, lede, benefits) => ({
  title,
  metaTitle: `${title} software`,
  lede,
  quote: "Melorite gives each team a focused workspace while keeping the records and workflows they depend on connected across the organisation.",
  quoteBy: "Melorite platform design",
  quoteRole: "Connected business operations",
  stat: { label: "Built to expand", value: "1", desc: "shared platform foundation" },
  benefitsHead: `Give ${title.toLowerCase()} teams a clearer way to work.`,
  benefits: benefits.map(([title, body]) => ({ title, body })),
  integrations: [["", "Shared customer and business data"], ["", "Documents and activities"], ["", "Automation and approvals"], ["", "Analytics and reporting"]],
});

export const TEAMS = {
  "sales-gtm": team("Sales and growth", "Connect CRM, quotations, orders, campaigns and customer context so commercial teams can turn interest into durable relationships.", [["See the complete customer story", "Work from the same account, contact, opportunity and interaction history."], ["Move opportunities with confidence", "Coordinate qualification, quote approvals, next actions and handoffs."], ["Connect marketing to revenue", "Bring audiences, campaigns and captured demand into the commercial workflow."], ["Make performance visible", "Use shared pipeline, conversion and revenue reporting."]]),
  marketing: team("Marketing", "Plan audiences, journeys, campaigns, content and attribution with the same customer context that sales and service teams use.", [["Build relevant audiences", "Create segments from trusted customer and business data."], ["Coordinate the campaign lifecycle", "Manage assets, calendars, approvals and launch work in one place."], ["Capture and nurture demand", "Connect landing pages, surveys and journeys to CRM records."], ["Measure what matters", "Understand campaign performance alongside commercial outcomes."]]),
  "in-house-operations": team("Internal operations", "Bring people, finance, procurement, documents, approvals and recurring operational work into a shared, auditable environment.", [["Create reliable requests and approvals", "Give every important operational action a clear owner and status."], ["Keep essential records connected", "Work from shared employee, vendor, asset and document data."], ["Automate repeatable process", "Use triggers, conditions and actions to reduce manual handoffs."], ["See operational health", "Surface pending work, exceptions and workload through reporting."]]),
  "customer-support": team("Customer service", "Give service teams tickets, knowledge, SLAs, appointments and connected customer context in one workspace.", [["Route every request clearly", "Capture, prioritise and assign cases through defined queues."], ["Deliver with full context", "See customer, contract, order and prior interaction information when it matters."], ["Manage service commitments", "Track SLAs, escalations, appointments and follow-up work."], ["Improve from connected insight", "Use service performance and customer history to find the next improvement."]]),
};

export const TEAM_SLUGS = Object.keys(TEAMS);
