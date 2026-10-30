export type FeaturePage = {
  product: "crm" | "real-estate";
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  promise: string;
  workflow: string[];
  sections: { title: string; body: string; points: string[] }[];
  faqs: { question: string; answer: string }[];
};

const crm = (slug: string, title: string, description: string, promise: string, workflow: string[], sections: FeaturePage["sections"], faqs: FeaturePage["faqs"]): FeaturePage => ({ product: "crm", slug, eyebrow: "Melorite CRM", title, description, promise, workflow, sections, faqs });
const estate = (slug: string, title: string, description: string, promise: string, workflow: string[] = [], sections: FeaturePage["sections"] = [], faqs: FeaturePage["faqs"] = []): FeaturePage => ({ product: "real-estate", slug, eyebrow: "Melorite Real Estate", title, description, promise, workflow, sections, faqs });

export const featurePages: FeaturePage[] = [
  crm("lead-management", "Lead Management CRM Software", "Capture, qualify, assign and follow up every sales enquiry with Melorite lead management CRM software.", "Give every new enquiry an owner, useful context and a dated next action.", ["Capture", "Qualify", "Assign", "Follow up", "Convert"], [
    { title: "Capture the source and requirement", body: "Create leads manually, prepare existing data for import, and keep the campaign, referral or enquiry source on the record. A useful lead starts with enough context for the first conversation.", points: ["Manual lead creation", "Prepared imports", "Lead source and campaign context"] },
    { title: "Qualify before the pipeline gets noisy", body: "Use agreed fields and scoring rules to separate early enquiries from sales-ready opportunities. Keep qualification understandable so the team knows why a lead is being prioritised.", points: ["Qualification status", "Configurable lead scoring", "Clear conversion criteria"] },
    { title: "Assign ownership and protect the follow-up", body: "Route leads by the team or territory agreed during setup. Activities, reminders and history make the next promised action visible without relying on memory.", points: ["Owner and territory", "Tasks and reminders", "Complete activity history"] },
  ], [{ question: "Can existing leads be imported?", answer: "Yes. Existing lead data can be prepared and mapped for import during setup." }, { question: "Can assignment follow our territories?", answer: "Assignment can be configured around the agreed team and territory structure." }, { question: "What happens when a lead qualifies?", answer: "The lead can be converted into connected contact, account and opportunity records without losing its history." }]),

  crm("pipeline-management", "Sales Pipeline Management Software", "Track opportunities, stages, quotations and sales orders in a pipeline your sales team can understand and use.", "See deal value, stage, owner and next action in one working view.", ["Qualified lead", "Opportunity", "Pipeline", "Quote", "Won or lost", "Sales order"], [
    { title: "Model the stages your team actually uses", body: "Define a practical sales process with clear entry and exit criteria. Each opportunity keeps the contact, account, expected value and activity history close.", points: ["Configurable opportunity stages", "Contact and account context", "Expected value and close date"] },
    { title: "Keep quotations connected to the deal", body: "Products, price books, quotation revisions and commercial notes stay connected to the opportunity so the team can see what changed before a decision.", points: ["Products and price books", "Quotation revisions", "Commercial history"] },
    { title: "Record the outcome and what follows", body: "Won and lost outcomes improve reporting only when the reason is recorded consistently. A won opportunity can continue into an agreed sales order workflow.", points: ["Won and lost reasons", "Sales order handoff", "Pipeline and conversion reporting"] },
  ], [{ question: "Can stages match our process?", answer: "Yes. The stage structure and important fields are agreed during setup." }, { question: "Does the pipeline include quotations?", answer: "Quotations and revisions can remain connected to the relevant opportunity." }, { question: "Can managers forecast from the pipeline?", answer: "Pipeline values, stages and expected dates provide the operational inputs for forecasting and review." }]),

  crm("campaign-management", "CRM Campaign Management Software", "Connect campaign audiences, responses and resulting leads to the sales work that follows.", "Understand which campaigns create useful conversations—not only clicks or names.", ["Segment", "Plan", "Run", "Capture response", "Create lead", "Measure"], [
    { title: "Start with a clear audience", body: "Build segments from relevant customer and lead information. Keep the purpose, audience and owner clear before a campaign begins.", points: ["Customer and lead segments", "Campaign ownership", "Defined objective"] },
    { title: "Connect response to sales follow-up", body: "Campaign responses become useful when the right sales action follows. Keep the source on new leads and assign a dated next step.", points: ["Source attribution", "Response tracking", "Lead creation and assignment"] },
    { title: "Measure the path beyond response", body: "Review lead quality, opportunity progress and outcomes by campaign. The goal is a clearer commercial view, not another isolated marketing dashboard.", points: ["Lead and opportunity linkage", "Campaign performance views", "Customer history"] },
  ], [{ question: "Is this an advertising platform?", answer: "No. Melorite connects campaign records, audiences and responses to CRM and sales follow-up." }, { question: "Can campaigns use customer segments?", answer: "Segments can be prepared from the relevant lead and customer information available in the agreed setup." }, { question: "Can I see which campaign created a lead?", answer: "The campaign and source can stay connected to the lead and later opportunity." }]),

  crm("lead-scoring", "CRM Lead Scoring Software", "Prioritise leads with transparent scoring rules based on the information and activity your sales team trusts.", "Help salespeople focus without turning qualification into a black box.", ["Collect signals", "Apply rules", "Review score", "Assign", "Reassess"], [
    { title: "Choose signals that indicate fit", body: "Score only information your team can explain, such as requirement, territory, budget range or defined engagement. Avoid rules that create false precision.", points: ["Profile and requirement fields", "Source and territory context", "Agreed positive and negative signals"] },
    { title: "Keep the reason visible", body: "A score is useful when the salesperson can understand it. Pair the number with the underlying fields and qualification status.", points: ["Transparent rule inputs", "Qualification notes", "Manual review"] },
    { title: "Use score to guide—not replace—judgment", body: "Scores can support queues and assignment while people still handle exceptions. Revisit rules when lead quality or the sales process changes.", points: ["Priority views", "Assignment support", "Rule review"] },
  ], [{ question: "Is lead scoring automatic?", answer: "Rules can calculate a score from agreed fields and signals. The exact automation depends on the configured workflow." }, { question: "Can salespeople see why a lead scored highly?", answer: "The design keeps the supporting lead information and qualification context available for review." }, { question: "Can rules change later?", answer: "Yes. Rules should be reviewed as the business learns which signals are useful." }]),

  crm("sales-forecasting", "CRM Sales Forecasting Software", "Build a clearer sales forecast from opportunity stages, values, expected dates and team targets.", "Turn the live pipeline into a reviewable forecast with visible assumptions.", ["Set targets", "Review pipeline", "Check timing", "Forecast", "Compare outcome"], [
    { title: "Start with reliable opportunity data", body: "Forecasts depend on stage, amount, expected close date and ownership being kept current. Make data quality part of the sales review.", points: ["Opportunity value", "Expected close date", "Stage and owner"] },
    { title: "Review by team and period", body: "Compare the active pipeline with sales targets for the relevant month, quarter, team or territory. Keep late and stalled opportunities visible.", points: ["Sales targets", "Team and territory views", "Pipeline ageing"] },
    { title: "Learn from forecast versus outcome", body: "A forecast improves when the team reviews what actually closed, moved or was lost. Use the difference to improve dates and stage discipline.", points: ["Forecast snapshots", "Won and lost outcomes", "Manager dashboards"] },
  ], [{ question: "Does forecasting guarantee revenue?", answer: "No. It organises current pipeline information and assumptions so managers can review expected sales more clearly." }, { question: "Can targets be tracked by salesperson?", answer: "Targets and reporting can be structured around the agreed user and team setup." }, { question: "What data does forecasting need?", answer: "At minimum, opportunities need a realistic stage, value, expected date and owner." }]),

  crm("customer-360", "Customer 360 CRM Software", "Give sales and service teams one connected view of contacts, accounts, conversations, opportunities and orders.", "Let the next person understand the customer without reconstructing the history.", ["Contact", "Account", "Conversation", "Opportunity", "Quote", "Order"], [
    { title: "Connect people to the right account", body: "Keep contact details, roles and the organisation relationship clear. Multiple people can remain connected to the same account without duplicating the commercial history.", points: ["Contacts and accounts", "Roles and ownership", "Duplicate review"] },
    { title: "Keep activity beside the relationship", body: "Calls, meetings, notes, tasks and campaign responses form a usable timeline. The goal is context for action, not an archive nobody reads.", points: ["Activity timeline", "Tasks and reminders", "Campaign context"] },
    { title: "Follow the commercial journey", body: "See open opportunities, quotations, outcomes and sales orders from the same customer context. Access remains appropriate to the agreed role setup.", points: ["Opportunities and pipeline", "Quotes and sales orders", "Role-aware access"] },
  ], [{ question: "What does Customer 360 mean?", answer: "It means a connected view of the customer records and sales activity included in your Melorite setup; it does not imply access to unrelated external data." }, { question: "Can one account have multiple contacts?", answer: "Yes. Contacts can be connected to an account with their relevant roles and history." }, { question: "Can access be limited?", answer: "Access can be configured around roles and responsibilities agreed during setup." }]),

  estate("lead-management", "Real Estate Lead Management Software", "Capture, qualify, assign and follow up property enquiries with project, budget and buyer preferences in context.", "Move every property enquiry toward a useful conversation, visit or clear outcome.", ["Enquiry", "Qualification", "Assignment", "Follow-up", "Site visit"], [
    { title: "Capture buyer intent", body: "Keep project interest, location, configuration, budget, timeframe and source on the enquiry so the first response starts with context.", points: ["Buyer requirements", "Project interest", "Source and channel partner attribution"] },
    { title: "Assign the right salesperson", body: "Route enquiries by project, location, team or agreed territory. Ownership and response status stay visible to sales managers.", points: ["Project-based assignment", "Owner and response status", "Territory rules"] },
    { title: "Protect every follow-up", body: "Calls, notes, tasks and next actions remain connected to the buyer. Qualified interest can move into a site visit without creating a disconnected record.", points: ["Activity history", "Reminders", "Visit handoff"] },
  ], [{ question: "Can broker enquiries be identified?", answer: "Yes. Channel partner and source details can stay connected to the lead." }, { question: "Can leads be assigned by project?", answer: "Assignment can be configured around the project and team structure agreed during setup." }, { question: "Does this connect to site visits?", answer: "Yes. A qualified buyer can move into the visit workflow with requirements and history retained." }]),

  estate("inventory-management", "Property Inventory Management Software", "Manage projects, towers, floors, units, availability, holds and bookings in one real estate inventory view.", "Give sales teams a shared answer to the most important question: what is actually available?")
  ,
  estate("site-visit-management", "Site Visit Management Software", "Schedule property site visits, assign salespeople and keep buyer feedback and follow-up connected.", "Turn a calendar event into a complete buyer handoff.")
  ,
  estate("channel-partner-management", "Real Estate Channel Partner Management Software", "Keep broker records, lead attribution and project mapping connected throughout the property sales process.", "Make partner ownership and attribution clear before a booking is at stake.")
  ,
  estate("payment-management", "Real Estate Payment Management Software", "Track booking payment milestones, receipts, outstanding amounts and customer documents in context.", "Keep the post-booking promise visible to sales, collections and the buyer.")
];

const estateDefaults: Record<string, Pick<FeaturePage, "workflow" | "sections" | "faqs">> = {
  "inventory-management": {
    workflow: ["Project", "Tower", "Floor", "Unit", "Hold", "Booking"],
    sections: [
      { title: "Structure inventory the way the project is sold", body: "Organise projects into towers, floors and units with the configuration and pricing context the sales team needs.", points: ["Projects, towers and floors", "Unit configuration", "Pricing context"] },
      { title: "Keep status shared and current", body: "Available, held, booked and released states belong in one working view. Define who can change status and when a temporary hold expires.", points: ["Availability grid", "Hold controls", "Booking status"] },
      { title: "Connect inventory to the buyer journey", body: "Shortlisted and selected units stay connected to the buyer, quotation and booking workflow so the reason behind a status change is visible.", points: ["Buyer shortlists", "Quotation context", "Booking linkage"] },
    ],
    faqs: [{ question: "Can I manage multiple projects?", answer: "Yes. Projects and their towers, floors and units can be organised in one workspace." }, { question: "Can unit holds expire?", answer: "Hold rules and release steps can be agreed as part of the inventory workflow." }, { question: "Who can update availability?", answer: "Permissions can be configured around the responsibilities agreed during setup." }],
  },
  "site-visit-management": {
    workflow: ["Buyer", "Preferred time", "Assignment", "Visit", "Feedback", "Follow-up"],
    sections: [
      { title: "Schedule with the requirement in view", body: "Choose the buyer, project, preferred time and assigned host from the same context. Confirmation status tells the team whether the visit is ready.", points: ["Visit calendar", "Project and buyer context", "Confirmation status"] },
      { title: "Prepare the salesperson", body: "Give the assigned person the buyer's budget, configuration preference, earlier conversations and shortlisted units before the meeting.", points: ["Salesperson assignment", "Buyer preferences", "Visit history"] },
      { title: "Record feedback before interest fades", body: "Capture what the buyer liked, objections, selected units and the next promised action. Follow-up remains part of the same journey.", points: ["Visit outcome", "Unit interest", "Dated next action"] },
    ],
    faqs: [{ question: "Can visits be assigned to a salesperson?", answer: "Yes. Each visit can include the responsible salesperson and relevant project context." }, { question: "Can repeat visits be tracked?", answer: "Visit history can remain connected to the buyer record." }, { question: "Can AI Calling help book visits?", answer: "Where configured, an approved AI Calling flow can capture preferences and book or hand off a site visit request." }],
  },
  "channel-partner-management": {
    workflow: ["Partner", "Project mapping", "Lead", "Attribution", "Visit", "Booking"],
    sections: [
      { title: "Keep a usable partner record", body: "Maintain broker contact details, organisation context and the projects relevant to the relationship.", points: ["Partner and broker records", "Project mapping", "Relationship owner"] },
      { title: "Capture attribution at enquiry", body: "Record the channel partner when the buyer enters the workflow. Clear source information reduces disputes later in the sale.", points: ["Lead attribution", "Buyer linkage", "Source history"] },
      { title: "Follow the buyer without losing the partner", body: "Keep the partner visible through qualification, visits and booking while the internal sales owner handles the next action.", points: ["Sales ownership", "Visit and booking context", "Partner reporting"] },
    ],
    faqs: [{ question: "Can one partner work across projects?", answer: "Partners can be mapped to the projects relevant to the agreed setup." }, { question: "When is attribution recorded?", answer: "It should be captured at enquiry or the earliest verified point in the buyer journey." }, { question: "Does this calculate commissions?", answer: "Commission handling is not claimed as a standard capability here; discuss the required commercial workflow during discovery." }],
  },
  "payment-management": {
    workflow: ["Booking", "Milestone", "Amount due", "Receipt", "Outstanding", "Handover"],
    sections: [
      { title: "Start from the agreed booking", body: "Connect the buyer, unit, booking value and payment plan so every later milestone has the right commercial context.", points: ["Buyer and unit linkage", "Payment plan", "Booking value"] },
      { title: "Track what is due and what was received", body: "Keep milestone dates, expected amounts, receipts and outstanding balances visible without separating them from the booking record.", points: ["Payment milestones", "Receipts", "Outstanding amounts"] },
      { title: "Keep documents beside the timeline", body: "Customer documents and relevant receipt records stay organised for review. The exact accounting or statutory process should be confirmed during discovery.", points: ["Customer documents", "Payment history", "Operational reporting"] },
    ],
    faqs: [{ question: "Can payment milestones be tracked?", answer: "Yes. Agreed milestones, due dates and amounts can remain connected to the booking." }, { question: "Can receipts be stored?", answer: "Receipt records and relevant files can be organised with the customer and booking." }, { question: "Is this accounting software?", answer: "No accounting or statutory compliance capability is claimed by this page. Confirm any finance-system requirement during discovery." }],
  },
};

for (const page of featurePages) {
  const defaults = estateDefaults[page.slug];
  if (page.product === "real-estate" && defaults && page.sections.length === 0) Object.assign(page, defaults);
}

export function featurePage(product: string, slug: string) {
  return featurePages.find((page) => page.product === product && page.slug === slug);
}
