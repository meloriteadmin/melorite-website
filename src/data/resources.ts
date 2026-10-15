export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  productHref: string;
  takeaways: string[];
  sections: { title: string; paragraphs: string[] }[];
};

export const resourceCategories = [
  { title: "Blog", href: "/resources/blog", description: "Clear thinking on sales, service and everyday business operations." },
  { title: "Guides", href: "/resources/guides", description: "Practical, step-by-step resources for improving the way work moves." },
  { title: "Case Studies", href: "/resources/case-studies", description: "Verified customer stories, published only when real evidence is available." },
] as const;

export const resourceTopics = ["CRM & Sales", "Real Estate", "Clinic", "AI Calling", "Agency", "Commerce", "Business Operations"] as const;

export const articles: Article[] = [
  {
    slug: "sales-follow-up-process",
    category: "CRM & Sales",
    title: "How to Build a Sales Follow-Up Process That Actually Works",
    excerpt: "A practical way to give every lead an owner, a next action and a reason to follow up.",
    date: "8 October 2026",
    readTime: "7 min read",
    productHref: "/products/crm",
    takeaways: ["Define a next action before ending every conversation.", "Separate urgent follow-ups from long-term nurturing.", "Review the process, not just individual effort."],
    sections: [
      { title: "Why follow-up breaks", paragraphs: ["Most follow-up problems are not caused by a lack of effort. They start when leads arrive through different channels, ownership is unclear and the next action lives in somebody’s memory.", "A useful process makes the state of every lead visible. Anyone looking at the record should understand what happened, who owns it and what is expected next."] },
      { title: "Start with a small set of stages", paragraphs: ["Use stages that describe a meaningful change in the conversation: new enquiry, contacted, qualified, proposal shared and decision pending. Avoid creating a stage for every minor activity.", "Each stage should have a clear entry condition and a sensible next action. This keeps reporting understandable and gives the team a shared language."] },
      { title: "Make the next action unavoidable", paragraphs: ["A lead without a next action is a lead at risk. Before a call or meeting is closed, record the follow-up date, owner and purpose.", "Daily views should place due and overdue actions first. Managers can then coach around bottlenecks instead of asking the team to rebuild an update manually."] },
    ],
  },
  {
    slug: "real-estate-lead-journey",
    category: "Real Estate",
    title: "The Real Estate Lead Journey: From Enquiry to Booking",
    excerpt: "Map the decisions, visits and unit context that turn property interest into a confident booking.",
    date: "1 October 2026",
    readTime: "8 min read",
    productHref: "/products/real-estate",
    takeaways: ["Connect every enquiry to a project and preference.", "Treat the site visit as a decision point.", "Keep unit status and payment context current."],
    sections: [
      { title: "Begin with buyer intent", paragraphs: ["A property enquiry is more useful when budget, location, configuration and timing are captured early. These details guide the first response and prevent irrelevant follow-up.", "Keep the original source and campaign beside the buyer record so the sales team can understand context without switching tools."] },
      { title: "Use the visit to create momentum", paragraphs: ["A site visit is not simply an appointment. Record which units were discussed, the buyer’s concerns and the next promised action while the conversation is fresh.", "A clear visit workflow also helps the on-site and central sales teams work from the same information."] },
      { title: "Protect the booking", paragraphs: ["Once a unit is selected, availability, token payment, payment schedule and documents should move together. A single booking timeline reduces conflicting updates and awkward buyer conversations."] },
    ],
  },
  {
    slug: "reduce-missed-clinic-appointments",
    category: "Clinic",
    title: "How Clinics Can Reduce Missed Appointments",
    excerpt: "Small scheduling and reminder improvements that make the day calmer for patients and front desks.",
    date: "24 September 2026",
    readTime: "6 min read",
    productHref: "/products/clinic",
    takeaways: ["Confirm the right appointment details at booking.", "Use reminders at useful moments, not constantly.", "Make rescheduling simple and visible."],
    sections: [
      { title: "Capture the details that prevent confusion", paragraphs: ["Confirm the doctor, location, visit type, date and expected arrival time when the appointment is booked. A short, complete confirmation prevents many avoidable calls.", "If preparation is needed, include only the instructions relevant to that visit."] },
      { title: "Design a considerate reminder sequence", paragraphs: ["A reminder should arrive early enough for the patient to act. For many clinics, one earlier reminder and one closer confirmation are more useful than repeated messages.", "Give patients a clear way to confirm or request a change, then make that response visible to the front desk."] },
      { title: "Learn from the schedule", paragraphs: ["Review missed and late appointments by visit type and time of day. Patterns can suggest where buffers, different reminder timing or clearer instructions would help."] },
    ],
  },
  {
    slug: "ai-calling-indian-businesses",
    category: "AI Calling",
    title: "A Simple Guide to AI Calling for Indian Businesses",
    excerpt: "Where an AI phone assistant helps, where a person should step in, and how to define a useful first workflow.",
    date: "17 September 2026",
    readTime: "9 min read",
    productHref: "/products/ai-calling",
    takeaways: ["Start with one repeatable call outcome.", "Define clear human-transfer rules.", "Review outcomes and exceptions before expanding."],
    sections: [
      { title: "Choose a narrow, useful starting point", paragraphs: ["The strongest first use case has a clear reason for the call and a small set of useful outcomes. Appointment booking, visit confirmation and lead qualification are easier to define than an open-ended support line.", "Write down what information the assistant may use and what it should never guess."] },
      { title: "Design the human hand-off", paragraphs: ["AI calling works best when the boundary is clear. Decide which requests need a person, when a live transfer is appropriate and what context should accompany the hand-off.", "The caller should not have to repeat information the assistant already captured."] },
      { title: "Measure operational quality", paragraphs: ["Review completed outcomes, transfers, unanswered questions and next actions. These signals improve the flow more meaningfully than call volume alone."] },
    ],
  },
  {
    slug: "faster-client-approvals",
    category: "Agency",
    title: "How Agencies Can Make Client Approvals Faster",
    excerpt: "Replace scattered feedback with one review path that protects versions, deadlines and client clarity.",
    date: "10 September 2026",
    readTime: "6 min read",
    productHref: "/products/agency",
    takeaways: ["Show one review-ready version.", "Ask for a clear approve or revise decision.", "Keep feedback attached to the work."],
    sections: [
      { title: "Separate internal review from client review", paragraphs: ["The client should receive work that is ready for a decision. Complete internal checks first and identify the single version under review.", "This reduces mixed feedback and avoids accidental approval of an older file."] },
      { title: "Make the decision explicit", paragraphs: ["Ask the reviewer to approve or request revisions. If changes are needed, keep the comments connected to the specific asset and version.", "A deadline and visible owner prevent the review from disappearing into a message thread."] },
      { title: "Close the loop", paragraphs: ["Once approved, mark the item clearly and carry that state into scheduling or delivery. The client and team should see the same outcome."] },
    ],
  },
  {
    slug: "what-to-track-in-crm",
    category: "Business Operations",
    title: "What Growing Businesses Should Track in Their CRM",
    excerpt: "The small set of customer, opportunity and activity details that supports better decisions.",
    date: "3 September 2026",
    readTime: "7 min read",
    productHref: "/products/crm",
    takeaways: ["Track fields only when they support action.", "Keep source and owner reliable.", "Use activity history to preserve context."],
    sections: [
      { title: "Start with identity and source", paragraphs: ["A useful record identifies the customer, how to reach them and where the enquiry came from. Source data helps the team respond appropriately and improves future marketing decisions."] },
      { title: "Track commercial intent", paragraphs: ["Capture what the customer needs, the expected value, the current stage and any important timing. These fields should help the next conversation—not create administrative work."] },
      { title: "Preserve the conversation", paragraphs: ["Notes, calls, meetings, quotes and next actions form the working history. When that context is current, another team member can help without asking the customer to start again."] },
    ],
  },
  {
    slug: "customer-data-without-spreadsheets",
    category: "Business Operations",
    title: "How to Organize Customer Data Without Another Spreadsheet",
    excerpt: "Move from scattered rows to customer records the team can use during real work.",
    date: "27 August 2026",
    readTime: "8 min read",
    productHref: "/platform",
    takeaways: ["Clean data around the workflow, not perfection.", "Choose one owner for each record.", "Move history and next actions together."],
    sections: [
      { title: "Decide what the record is for", paragraphs: ["Before moving data, identify the decisions the team needs to make. A sales record, patient record and buyer record require different information even when they share a name and phone number."] },
      { title: "Prepare the useful fields", paragraphs: ["Remove obvious duplicates, standardize essential values and identify missing ownership. Do not delay the move while trying to perfect information nobody uses."] },
      { title: "Change the daily habit", paragraphs: ["A new system helps only when new enquiries, updates and next actions go there first. Make the expected workflow clear and review it regularly during the first weeks."] },
    ],
  },
];

export const guides = [
  { category: "Getting Started", title: "The Business Workflow Audit", summary: "Map owners, hand-offs and delays before choosing software.", href: "/resources/blog/customer-data-without-spreadsheets" },
  { category: "CRM", title: "A Practical CRM Setup Checklist", summary: "Prepare stages, fields, ownership and imports for a cleaner launch.", href: "/resources/blog/what-to-track-in-crm" },
  { category: "Real Estate", title: "The Buyer Journey Workbook", summary: "Define the information needed from enquiry through handover.", href: "/resources/blog/real-estate-lead-journey" },
  { category: "Clinic", title: "A Calmer Front Desk Guide", summary: "Review schedules, patient arrival and follow-up routines.", href: "/resources/blog/reduce-missed-clinic-appointments" },
  { category: "AI Calling", title: "Planning Your First AI Call Flow", summary: "Choose an outcome, boundaries and human hand-off rules.", href: "/resources/blog/ai-calling-indian-businesses" },
  { category: "Agency", title: "The Client Approval Playbook", summary: "Create a review process that protects versions and deadlines.", href: "/resources/blog/faster-client-approvals" },
  { category: "Commerce", title: "Order Operations Checklist", summary: "Clarify payment, packing, dispatch and delivery stages.", href: "/products/commerce" },
] as const;

export const caseStudyThemes = [
  ["Sales operations", "A future story about clearer lead ownership, follow-up and pipeline visibility."],
  ["Real estate", "A future story following enquiries, visits, inventory and booking operations."],
  ["Clinic automation", "A future story about a calmer appointment, consultation and follow-up journey."],
  ["AI calling", "A future story about a defined phone workflow and its verified operational outcome."],
] as const;

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
