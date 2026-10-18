export type ProductDetail = {
  workflow: string[];
  workflowTitle: string;
  audiences: string[];
  chapters: { eyebrow: string; title: string; body: string; points: string[] }[];
  perspectives?: { label: string; title: string; items: string[] }[];
  related: { label: string; title: string; body: string; href: string };
  faqs: { question: string; answer: string }[];
};

export const productDetails: Record<string, ProductDetail> = {
  crm: {
    workflowTitle: "From first enquiry to customer.",
    workflow: ["Enquiry", "Lead", "Follow-up", "Opportunity", "Quote", "Won", "Customer"],
    audiences: ["Sales teams", "Consultants", "Service businesses", "Growing companies"],
    chapters: [
      { eyebrow: "Lead capture", title: "Every new enquiry starts in the right place.", body: "Bring website, campaign, referral and WhatsApp enquiries into one working queue. Agree on lead scoring and assignment so the source, priority and first action are clear.", points: ["Source-aware lead records", "Assignment by team or territory", "Duplicate and incomplete-record review"] },
      { eyebrow: "Contacts & pipeline", title: "One customer history. One clear next step.", body: "Keep people, companies, opportunities, notes and quotations connected. Move deals through stages the team understands without losing the conversation behind them.", points: ["Contact and company records", "Custom sales stages", "Quotes and opportunity values"] },
      { eyebrow: "Activities & reporting", title: "Know what needs attention today.", body: "Calls, meetings and sales sequences give follow-ups a clear rhythm. Reports connect campaign management, lead tracking and forecasting so managers can review progress without another spreadsheet.", points: ["Due and overdue activities", "Sales and source reporting", "Repeatable follow-up automation"] },
    ],
    related: { label: "Connect every call", title: "Let AI Calling answer, qualify and update the CRM.", body: "Turn phone conversations into bookings, lead updates and clear next actions for the sales team.", href: "/products/ai-calling" },
    faqs: [
      { question: "How does CRM & Growth support a business in India?", answer: "Melorite combines CRM software for businesses with lead management, campaign tracking and sales automation. During a demo, we review your sales process, channels and setup requirements before agreeing the scope." },
      { question: "Can I import existing leads?", answer: "Yes. Existing lead and customer data can be prepared for import during setup." },
      { question: "Can multiple salespeople use it?", answer: "Yes. Leads can have clear owners so each salesperson and manager sees the work relevant to them." },
      { question: "Can leads be assigned automatically?", answer: "Assignment rules can be configured around the agreed sales workflow." },
      { question: "Can I track follow-ups and quotations?", answer: "Yes. Follow-ups, activity history and quotation stages stay connected to the customer and opportunity." },
      { question: "Can the pipeline match our sales process?", answer: "Stages and important fields can be configured around the process agreed during setup." },
      { question: "Does it connect with AI Calling?", answer: "AI Calling can be configured to create or update relevant CRM records, outcomes and next actions." },
    ],
  },
  "real-estate": {
    workflowTitle: "From first enquiry to final booking.",
    workflow: ["Enquiry", "Lead", "Site Visit", "Unit Selection", "Booking", "Payment", "Documents", "Handover"],
    audiences: ["Builders", "Developers", "Brokers", "Property sales teams", "Real estate organizations"],
    chapters: [
      { eyebrow: "Projects & inventory", title: "See every project, tower and unit clearly.", body: "A live inventory grid helps teams answer availability questions with confidence. Holds, bookings and releases stay visible to everyone who needs them.", points: ["Tower and floor views", "Available, held and booked status", "Unit configuration and pricing context"] },
      { eyebrow: "Buyers & site visits", title: "Carry buyer context into every visit.", body: "Keep requirements, budgets, preferred units and conversations on the buyer record. Schedule visits and capture what should happen next before interest fades.", points: ["Buyer preference records", "Visit calendar and ownership", "Channel partner attribution"] },
      { eyebrow: "Bookings & payments", title: "Keep the promise after the booking.", body: "Connect selected units, payment schedules, receipts and documents to one booking timeline from token amount through handover.", points: ["Payment schedule tracking", "Document checklist", "Project and sales reporting"] },
    ],
    related: { label: "Never miss an enquiry", title: "Answer project calls and schedule site visits automatically.", body: "Melorite AI Calling can handle common questions, qualify interest and pass the full context to your team.", href: "/products/ai-calling" },
    faqs: [
      { question: "Can I manage multiple projects?", answer: "The product is designed to organize multiple projects and their inventory in one shared workspace." },
      { question: "Can teams track site visits?", answer: "Yes. Visits can be scheduled with the buyer, project and responsible salesperson in context." },
      { question: "Can I see unit availability?", answer: "Yes. Inventory views keep unit status visible to the sales team." },
      { question: "Can it track payment schedules?", answer: "Payment schedules, paid amounts and outstanding amounts can stay connected to the booking." },
      { question: "Can channel partner enquiries be tracked?", answer: "Partner and source details can stay connected to the buyer and opportunity for clearer attribution." },
      { question: "Can AI Calling book site visits?", answer: "Where configured, AI Calling can qualify an enquiry and schedule a visit in the agreed workflow." },
    ],
  },
  clinic: {
    workflowTitle: "A clearer patient journey.",
    workflow: ["Appointment", "Check-in", "Consultation", "Prescription", "Billing", "Follow-up"],
    audiences: ["General clinics", "Dental clinics", "Skin clinics", "Physiotherapy", "Specialty practices"],
    chapters: [
      { eyebrow: "Schedules & appointments", title: "Give the front desk one calm view of the day.", body: "See each doctor’s availability, book the right visit type and keep waiting or rescheduled patients visible without relying on a paper register.", points: ["Doctor and location schedules", "Appointment status", "Visit reminders"] },
      { eyebrow: "Patient timeline", title: "The right context before the consultation begins.", body: "Earlier visits, notes, treatments and prescriptions stay together in a readable patient timeline, ready for the clinical team when needed.", points: ["Visit and treatment history", "Clinical notes", "Prescription records"] },
      { eyebrow: "Billing & follow-up", title: "Care continues after the patient leaves.", body: "Keep billing connected to the visit and make the next review, test result or treatment follow-up visible to the responsible person.", points: ["Visit-linked billing", "Pending follow-up queue", "Operational clinic overview"] },
    ],
    related: { label: "A better phone experience", title: "Answer calls and book appointments while the desk is busy.", body: "Use Melorite AI Calling for common questions, confirmations, reminders and approved booking flows.", href: "/products/ai-calling" },
    faqs: [
      { question: "Can the front desk manage appointments?", answer: "Yes. The appointment view is designed for booking, rescheduling and tracking visit status." },
      { question: "Can doctors see patient history?", answer: "Yes. Earlier visits, clinical notes and prescriptions can be reviewed from the patient record." },
      { question: "Does it support prescriptions and billing?", answer: "Prescription and billing workflows can be kept alongside the consultation record." },
      { question: "Can it work for my type of clinic?", answer: "Melorite Clinic is intended for general and specialty practices. We confirm the exact workflow during the demo." },
      { question: "Can we manage more than one doctor or location?", answer: "Schedules and access can be planned for multiple doctors or locations during setup." },
      { question: "Can patients receive reminders?", answer: "Reminder workflows can be configured around appointments and relevant follow-ups." },
    ],
  },
  agency: {
    workflowTitle: "From brief to approval, without the chase.",
    workflow: ["Brief", "Plan", "Create", "Internal Review", "Client Approval", "Revision", "Approved"],
    audiences: ["Social media agencies", "Creative agencies", "Performance agencies", "Digital agencies"],
    perspectives: [
      { label: "Your team", title: "A working space for delivery.", items: ["Clients and projects", "Tasks and owners", "Content calendars", "Campaigns and deadlines", "Invoices"] },
      { label: "Your client", title: "A focused portal for decisions.", items: ["Strategy and progress", "Content preview", "Approval and revisions", "Project updates", "Billing"] },
    ],
    chapters: [
      { eyebrow: "Planning", title: "Your client work should not live across five places.", body: "Bring the brief, project plan, calendar and current status into one workspace. The team can see what is due without reconstructing the project from chat.", points: ["Client and project records", "Task ownership", "Campaign and content calendars"] },
      { eyebrow: "Review & approval", title: "Feedback becomes a decision, not another thread.", body: "Show the right version in a focused client portal. Approve and revise actions stay attached to the work so nobody has to search email for the answer.", points: ["Version-aware previews", "Approve or revise actions", "Feedback in context"] },
      { eyebrow: "Delivery & billing", title: "Let clients see progress without asking again.", body: "Share relevant milestones, updates and billing while the internal team keeps control of assignments, deadlines and delivery detail.", points: ["Client-facing progress", "Invoices and payment status", "Delivery overview"] },
    ],
    related: { label: "Need a different portal?", title: "Shape Melorite around your agency model.", body: "Custom Solutions can extend workflows, dashboards, approvals or client experiences when your process needs more.", href: "/custom-solutions" },
    faqs: [
      { question: "What can clients see?", answer: "The client portal can bring together calendars, progress, previews, approvals, revisions and relevant updates." },
      { question: "Can clients approve work?", answer: "Yes. Approval and revision decisions stay attached to the relevant work and version." },
      { question: "Can we manage projects and tasks?", answer: "Projects, assignments, deadlines and responsibility can be organized in one team workspace." },
      { question: "Is it only for social media agencies?", answer: "No. It is designed for social, creative, performance and broader digital agencies." },
      { question: "Can each client have a separate portal?", answer: "Client access can be kept focused on the information and work relevant to that client." },
      { question: "Can the workflow be customized?", answer: "We can discuss custom stages, approvals, dashboards or portal needs during discovery." },
    ],
  },
  commerce: {
    workflowTitle: "From product to repeat customer.",
    workflow: ["Product", "Store", "Order", "Payment", "Packing", "Shipping", "Delivery", "Repeat Customer"],
    audiences: ["D2C brands", "Fashion brands", "Retail stores", "Online sellers"],
    chapters: [
      { eyebrow: "Products & storefront", title: "Keep the catalogue ready to sell.", body: "Organize products, variants, pricing and available stock in one place while presenting a storefront that feels consistent with your brand.", points: ["Product and variant records", "Stock visibility", "Brand-ready storefront"] },
      { eyebrow: "Orders & payments", title: "Give every order a visible next step.", body: "See new, confirmed, paid, COD and attention-needed orders in one desk so the team knows what can move to packing.", points: ["Payment and COD status", "Address and confirmation checks", "Order ownership"] },
      { eyebrow: "Fulfilment & customers", title: "Follow delivery—and remember who comes back.", body: "Track an order through packing, shipping and delivery while keeping the customer’s earlier purchases close for future service.", points: ["Dispatch and delivery stages", "Customer order history", "Sales overview"] },
    ],
    related: { label: "Confirm more orders", title: "Use AI Calling for COD checks and customer updates.", body: "Automate approved confirmation and follow-up conversations while keeping outcomes visible to the team.", href: "/products/ai-calling" },
    faqs: [
      { question: "Can I manage product variants?", answer: "Yes. Products can be organized with relevant options such as sizes, colours and stock." },
      { question: "Can I track orders end to end?", answer: "The order desk is designed to keep each order and its current stage visible through fulfilment." },
      { question: "Does it support cash on delivery?", answer: "COD status and confirmation can be included in the order workflow." },
      { question: "Can I see repeat customers?", answer: "Customer records connect order history so returning buyers are easier to recognize." },
      { question: "Can stock be tracked by variant?", answer: "Relevant options such as size or colour can have their own stock visibility." },
      { question: "Can AI Calling confirm orders?", answer: "Approved outbound calling flows can help confirm COD orders or collect a defined next action." },
    ],
  },
  "ai-calling": {
    workflowTitle: "A conversation that ends in action.",
    workflow: ["Customer", "Call", "Melorite AI", "Conversation", "Action", "Team Follow-up"],
    audiences: ["Clinics", "Real estate teams", "Sales teams", "Commerce businesses", "Agencies"],
    perspectives: [
      { label: "Inbound calling", title: "Be useful when the phone rings.", items: ["Answer common questions", "Capture enquiries", "Book approved slots", "Transfer with context", "Record outcomes"] },
      { label: "Outbound calling", title: "Keep important conversations moving.", items: ["Lead follow-ups", "Appointment reminders", "Site visit confirmations", "COD checks", "Campaign calling"] },
    ],
    chapters: [
      { eyebrow: "Conversations", title: "A phone interface—not a generic chatbot.", body: "Configure the reason for the call, the information the assistant can use and the actions it can take. Each conversation follows the boundaries agreed for your workflow.", points: ["Inbound and outbound flows", "Campaign contacts", "Natural call handling"] },
      { eyebrow: "Bookings & hand-off", title: "Complete the simple task. Bring in a person when needed.", body: "Book an approved appointment or visit during the call, send a WhatsApp follow-up, or transfer the caller with the context already captured.", points: ["Calendar actions", "Warm human transfer", "CRM or workflow updates"] },
      { eyebrow: "Recordings & analytics", title: "Understand the outcome without replaying every call.", body: "Review summaries, transcripts, recordings where applicable, outcomes and next actions. Use the operational view to understand volume and where calls need human attention.", points: ["Call outcome and summary", "Transcripts and recordings", "Campaign and call analytics"] },
    ],
    related: { label: "Keep the context", title: "Connect conversations to Melorite CRM & Growth.", body: "Give sales teams a usable customer record and next action after the call ends.", href: "/products/crm" },
    faqs: [
      { question: "Can it answer incoming calls?", answer: "Yes. It can receive calls, understand the reason for the call and handle agreed enquiry or booking flows." },
      { question: "Can it make outbound calls?", answer: "Yes. Outbound flows can support lead follow-ups, reminders, confirmations and defined campaigns." },
      { question: "Can it transfer to a person?", answer: "A call can be handed to a team member when the configured flow calls for human help." },
      { question: "Can it book appointments or site visits?", answer: "Booking actions can be connected to the relevant workflow where configured." },
      { question: "Can I see what happened after a call?", answer: "Call history can include an outcome, summary and next action, with transcripts or recordings where applicable." },
      { question: "Can the call flow follow our process?", answer: "Discovery defines the questions, information, boundaries, hand-off rules and actions appropriate to your use case." },
      { question: "Does it replace my team?", answer: "It handles agreed repeatable conversations and gives people better context when judgment or personal help is needed." },
    ],
  },
};
