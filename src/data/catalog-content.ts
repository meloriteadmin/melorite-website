export type WorkspaceRecord = {
  primary: string;
  secondary: string;
  value: string;
  status: string;
};

export type CatalogueDetails = {
  hero: string;
  proposition: string;
  workspaceTitle: string;
  workspaceLabel: string;
  metrics: [string, string, string][];
  records: WorkspaceRecord[];
  featureGroups: { title: string; description: string; items: string[] }[];
  roles: { title: string; description: string }[];
  aiPrompt: string;
  aiResult: string;
  connections: { href: string; name: string; description: string }[];
  integrations: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

const platformFaq = (name: string) => [
  { question: `Can ${name} be introduced on its own?`, answer: `Yes. ${name} can be introduced around the workflow you need first, then connected to other Melorite applications as your requirements grow.` },
  { question: "How is access controlled?", answer: "Workspace access is entitlement- and role-aware. Teams see the applications, records and actions available to their organization and role." },
  { question: "Does it share data with other Melorite products?", answer: "Yes. Connected applications reuse relevant business records so teams do not have to rebuild the same customer, employee, supplier or product context in every workflow." },
];

export const catalogueDetails: Record<string, CatalogueDetails> = {
  "crm-growth": {
    hero: "Turn every interaction into an opportunity.",
    proposition: "Give revenue teams one record of the relationship—from the first source and campaign touch to the next sales action and the customer history that follows.",
    workspaceTitle: "Revenue workspace",
    workspaceLabel: "Pipeline & activity",
    metrics: [["Pipeline value", "₹1.84Cr", "+12.4%"], ["Open opportunities", "64", "+8 this month"], ["Follow-ups due", "7", "Needs attention"]],
    records: [
      { primary: "Atlas Group rollout", secondary: "Proposal · Priya S.", value: "₹12.6L", status: "Follow-up due" },
      { primary: "Lumen Health renewal", secondary: "Negotiation · Arjun M.", value: "₹9.2L", status: "On track" },
      { primary: "Northwind expansion", secondary: "Qualification · Meera K.", value: "₹4.8L", status: "New activity" },
    ],
    featureGroups: [
      { title: "Customer context", description: "Keep the complete relationship visible on one governed record.", items: ["Leads, contacts and accounts", "Activity history and notes", "Tasks, meetings and follow-ups", "Sources, fields, search and filters"] },
      { title: "Sales execution", description: "Move qualified demand through a visible commercial process.", items: ["Opportunities and stages", "Deal value and ownership", "Pipeline and forecasting views", "Conversion and performance reporting"] },
      { title: "Marketing & campaigns", description: "Connect outreach to the demand and revenue it creates.", items: ["Audiences and segments", "Campaign activity and responses", "Lead generation and targeting", "Attribution and conversion context"] },
    ],
    roles: [
      { title: "Sales teams", description: "Prioritise opportunities, plan follow-ups and keep every customer interaction visible." },
      { title: "Marketing teams", description: "Build audiences and connect campaign activity with lead and opportunity outcomes." },
      { title: "Revenue leaders", description: "Review pipeline movement, conversion and the work that needs intervention." },
    ],
    aiPrompt: "Which high-value opportunities need attention this week?",
    aiResult: "Melorite AI reviews permitted pipeline age, stage, value and recent activity, then returns the records and reasons for review before proposing follow-up tasks.",
    connections: [
      { href: "/products/finance", name: "Finance", description: "Carry a won opportunity into a connected billing workflow." },
      { href: "/products/projects", name: "Projects", description: "Turn agreed work into a delivery plan without losing customer context." },
      { href: "/products/service", name: "Service", description: "Give support teams the relationship and activity history behind every request." },
    ],
    integrations: ["Email and calendar", "Web forms", "Telephony", "Import and export", "Melorite AI"],
    faqs: [
      { question: "What is included in CRM & Growth?", answer: "The suite brings CRM, sales execution, marketing activity and campaigns into one customer-centred workspace." },
      { question: "Can teams manage both leads and existing customers?", answer: "Yes. The model covers early lead qualification as well as accounts, contacts, opportunities, activities and ongoing customer context." },
      ...platformFaq("CRM & Growth"),
    ],
    cta: "Build stronger customer relationships with less disconnected work.",
  },
  finance: {
    hero: "See your finances clearly. Run them confidently.",
    proposition: "Follow money from invoice to payment and financial record, with the commercial and operational context that explains every movement.",
    workspaceTitle: "Financial overview",
    workspaceLabel: "Cash & receivables",
    metrics: [["Cash position", "₹2.42Cr", "+6.3%"], ["Receivables", "₹38.6L", "12 overdue"], ["Net movement", "+₹8.4L", "This month"]],
    records: [
      { primary: "INV-3108", secondary: "Northwind Ltd", value: "₹4,80,000", status: "Paid" },
      { primary: "INV-3107", secondary: "Atlas Group", value: "₹6,32,500", status: "Partial" },
      { primary: "INV-3101", secondary: "Kestrel Foods", value: "₹1,24,800", status: "Overdue" },
    ],
    featureGroups: [
      { title: "Accounting", description: "Maintain the records behind a dependable financial view.", items: ["Accounts and transactions", "Balanced journals", "Financial records", "Reconciliation workflows"] },
      { title: "Billing & expenses", description: "Track what customers owe and what the business spends.", items: ["Invoices and billing status", "Full and partial payments", "Expense records and categories", "Receivable and payable visibility"] },
      { title: "Tax & reporting", description: "Keep configuration and reporting close to the underlying activity.", items: ["Tax rates and records", "Accounting periods", "Tax summaries", "Financial trends and statements"] },
    ],
    roles: [
      { title: "Finance teams", description: "Manage invoicing, payments, expenses and governed accounting records." },
      { title: "Business owners", description: "See cash, receivables, payables and financial movement in one view." },
      { title: "Operations teams", description: "Understand the financial state of the orders, projects and purchases they manage." },
    ],
    aiPrompt: "Explain the receivables that changed most this month.",
    aiResult: "Melorite AI can assemble a permission-aware summary from invoice status, payments and connected customer activity, with links back to the underlying records.",
    connections: [
      { href: "/products/crm-growth", name: "CRM & Growth", description: "Connect customer and opportunity context to billing." },
      { href: "/products/commerce", name: "Commerce", description: "Make order and payment activity available to Finance." },
      { href: "/products/procurement-inventory", name: "Procurement & Inventory", description: "Connect purchasing activity with supplier and financial records." },
    ],
    integrations: ["Payment providers", "Bank data import", "Tax configuration", "CSV export", "Melorite AI"],
    faqs: [
      { question: "What financial workflows does Melorite support?", answer: "The current catalogue covers accounting records, invoicing, payments, expenses, tax configuration and financial visibility." },
      { question: "Can an invoice start from another application?", answer: "Connected workflows can carry the relevant customer, order, project or purchase context into Finance, subject to the configuration in your workspace." },
      ...platformFaq("Finance"),
    ],
    cta: "Know where your business stands.",
  },
  hrms: {
    hero: "Everything your people need. One place to manage it.",
    proposition: "Manage the employee journey as one continuous record—from candidate and onboarding to attendance, payroll and performance.",
    workspaceTitle: "People workspace",
    workspaceLabel: "Employee lifecycle",
    metrics: [["Employees", "248", "+12 this quarter"], ["Attendance", "96.4%", "Today"], ["Reviews due", "18", "This cycle"]],
    records: [
      { primary: "Aarav Shah", secondary: "Product · Joined 12 Aug", value: "Onboarding", status: "3 of 5 complete" },
      { primary: "Neha Kapoor", secondary: "Operations · Mumbai", value: "Leave", status: "Awaiting review" },
      { primary: "Kabir Rao", secondary: "Sales · Bengaluru", value: "Performance", status: "Review due" },
    ],
    featureGroups: [
      { title: "Core HR", description: "Keep the employee record and organisation structure current.", items: ["Employee profiles and records", "Departments and employment details", "Lifecycle documents", "Employee management"] },
      { title: "Time & pay", description: "Connect working time with the processes that depend on it.", items: ["Attendance and working days", "Leave requests and balances", "Salary structures", "Payroll processing and pay records"] },
      { title: "Talent", description: "Move people from candidate to contributor with a visible journey.", items: ["Jobs, candidates and applications", "Hiring pipeline", "Goals and reviews", "Performance and benefits information"] },
    ],
    roles: [
      { title: "HR teams", description: "Run employee records, recruitment, leave, payroll and review cycles." },
      { title: "Managers", description: "See the people information and approvals relevant to their teams." },
      { title: "Employees", description: "Access the personal records, requests and updates made available to them." },
    ],
    aiPrompt: "Which onboarding tasks and reviews need attention this week?",
    aiResult: "Melorite AI can summarise permitted employee workflow status and prepare the next actions for review without exposing records outside the user’s access.",
    connections: [
      { href: "/products/projects", name: "Projects", description: "Connect people and team context to project staffing and delivery." },
      { href: "/ai/agent", name: "AI Agent", description: "Ask permission-aware questions across HR workflows and records." },
      { href: "/products/finance", name: "Finance", description: "Keep payroll outcomes connected to the wider financial picture." },
    ],
    integrations: ["Attendance devices", "Payroll inputs", "Document import", "Calendar", "Melorite AI"],
    faqs: [
      { question: "Which parts of the employee lifecycle are covered?", answer: "Core HR, recruitment, attendance, leave, payroll, performance, benefits and employee management are represented in the current HRMS catalogue." },
      { question: "Can managers and employees have different access?", answer: "Yes. Role-aware access supports different workspace experiences for HR, managers and employees, based on your configuration." },
      ...platformFaq("HRMS"),
    ],
    cta: "Give your people operations one connected home.",
  },
  commerce: {
    hero: "From product to payment.",
    proposition: "Coordinate catalogue, selling, orders, payments and returns while keeping customer, stock and financial context attached.",
    workspaceTitle: "Commerce control room",
    workspaceLabel: "Orders & fulfilment",
    metrics: [["Gross sales", "₹31.2L", "+9.7%"], ["Orders", "1,284", "+124"], ["Return rate", "2.8%", "−0.4%"]],
    records: [
      { primary: "#10482", secondary: "Web store · 3 items", value: "₹18,600", status: "Fulfilled" },
      { primary: "#10481", secondary: "Marketplace · 1 item", value: "₹9,240", status: "Packing" },
      { primary: "#10479", secondary: "Wholesale · 14 items", value: "₹1,24,000", status: "Paid" },
    ],
    featureGroups: [
      { title: "Catalogue & store", description: "Keep what you sell organised across channels.", items: ["Products and variants", "Catalogue structure", "Online store operations", "Discounts and promotions"] },
      { title: "Orders & fulfilment", description: "See an order’s state from placement through delivery.", items: ["Order management", "Customer and channel context", "Stock availability", "Fulfilment status"] },
      { title: "Payments & returns", description: "Keep post-order activity tied to the original transaction.", items: ["Payment visibility", "Returns workflows", "Refund context", "Commerce reporting"] },
    ],
    roles: [
      { title: "Commerce teams", description: "Manage products, channels, orders and returns from one operational view." },
      { title: "Fulfilment teams", description: "Work from live order and stock context instead of disconnected lists." },
      { title: "Commercial leaders", description: "Review sales movement, order state and return patterns." },
    ],
    aiPrompt: "Which products are driving sales but approaching low stock?",
    aiResult: "Melorite AI can compare permitted order and inventory records, explain the signals it found and link to the products that need review.",
    connections: [
      { href: "/products/crm-growth", name: "CRM & Growth", description: "Add order history to the customer relationship." },
      { href: "/products/finance", name: "Finance", description: "Connect payments and transactions to financial records." },
      { href: "/products/procurement-inventory", name: "Procurement & Inventory", description: "Work with shared stock availability and replenishment context." },
    ],
    integrations: ["Selling channels", "Payment providers", "Shipping workflows", "Product import", "Melorite AI"],
    faqs: [
      { question: "Does Commerce include both catalogue and order management?", answer: "Yes. The catalogue covers products, online store operations, orders, payments, returns and discounts." },
      { question: "How does stock stay connected?", answer: "Commerce can work with the stock and warehouse context managed in Procurement & Inventory rather than maintaining a separate inventory picture." },
      ...platformFaq("Commerce"),
    ],
    cta: "Keep every order moving with the right context.",
  },
  projects: {
    hero: "Plan the work. See the progress. Deliver together.",
    proposition: "Bring scope, tasks, people, time, budget and project documents into one delivery view that teams and leaders can both use.",
    workspaceTitle: "Delivery workspace",
    workspaceLabel: "Timeline & budget",
    metrics: [["Active projects", "24", "5 at risk"], ["Tasks complete", "78%", "+6% this week"], ["Budget used", "64%", "On plan"]],
    records: [
      { primary: "Discovery", secondary: "6 tasks · 4 owners", value: "Complete", status: "Milestone 01" },
      { primary: "Implementation", secondary: "18 tasks · 8 owners", value: "72%", status: "In progress" },
      { primary: "Launch", secondary: "9 tasks · 5 owners", value: "18 Oct", status: "Planned" },
    ],
    featureGroups: [
      { title: "Plan", description: "Turn scope into a delivery structure the team can follow.", items: ["Projects and milestones", "Tasks and ownership", "Boards and timelines", "Documents and decisions"] },
      { title: "Resource", description: "Understand who is doing the work and where time goes.", items: ["Resource planning", "Timesheets", "Team workload", "Collaboration context"] },
      { title: "Control", description: "See progress and commercial constraints together.", items: ["Project budgets", "Delivery status", "Exceptions and risks", "Project reporting"] },
    ],
    roles: [
      { title: "Project managers", description: "Plan milestones, assign work and surface risks before delivery slips." },
      { title: "Delivery teams", description: "Work from clear tasks, documents and decisions in one place." },
      { title: "Business leaders", description: "Review progress, resource use and budget position across projects." },
    ],
    aiPrompt: "Which projects are at risk and what changed since last week?",
    aiResult: "Melorite AI can review permitted task, milestone, time and budget signals, summarise the changes and point back to the supporting records.",
    connections: [
      { href: "/products/crm-growth", name: "CRM & Growth", description: "Carry customer and agreed-work context into delivery." },
      { href: "/products/finance", name: "Finance", description: "Keep project budgets and billing in the wider financial picture." },
      { href: "/products/service", name: "Service", description: "Connect delivery outcomes with ongoing customer support." },
    ],
    integrations: ["Calendar", "Document storage", "Time import", "Notifications", "Melorite AI"],
    faqs: [
      { question: "Can Projects track both work and budget?", answer: "Yes. The catalogue includes project management, tasks, timesheets, resources, budgets, documents and collaboration." },
      { question: "Is Projects only for client work?", answer: "No. The same structure can support client delivery and internal initiatives where milestones, ownership and visibility matter." },
      ...platformFaq("Projects"),
    ],
    cta: "Deliver the work without losing the plan.",
  },
  service: {
    hero: "Support customers without losing context.",
    proposition: "Give service teams the request, customer history, SLA and next operational action in one working view.",
    workspaceTitle: "Service desk",
    workspaceLabel: "Queue & conversation",
    metrics: [["Open tickets", "142", "−12 today"], ["First response", "38m", "−6m"], ["SLA at risk", "3", "Review now"]],
    records: [
      { primary: "TK-2290 · Delivery delayed", secondary: "Atlas Group · Enterprise", value: "High", status: "SLA at risk" },
      { primary: "TK-2288 · Portal access", secondary: "Lumen Health · Email", value: "Medium", status: "In progress" },
      { primary: "TK-2285 · Service visit", secondary: "Northwind · Phone", value: "Medium", status: "Scheduled" },
    ],
    featureGroups: [
      { title: "Customer support", description: "Turn incoming requests into owned, visible work.", items: ["Tickets and queues", "Priority and assignment", "Conversation history", "Customer context"] },
      { title: "Service control", description: "Manage commitments and operational follow-through.", items: ["SLA policies and status", "Work orders", "Appointments", "Resolution records"] },
      { title: "Knowledge & field work", description: "Help teams reuse answers and coordinate work beyond the desk.", items: ["Knowledge base", "Field service", "Customer portal context", "Service reporting"] },
    ],
    roles: [
      { title: "Support agents", description: "Handle requests with the customer and SLA context needed to respond well." },
      { title: "Service managers", description: "Balance queues, spot SLA risk and understand recurring issues." },
      { title: "Field teams", description: "Receive clear work orders and return completion context to the service record." },
    ],
    aiPrompt: "Summarise this customer’s open issues and suggest the next action.",
    aiResult: "Melorite AI can assemble the permitted ticket, customer and activity context, then prepare a concise summary for the agent to review.",
    connections: [
      { href: "/products/crm-growth", name: "CRM & Growth", description: "Bring the full relationship into every support interaction." },
      { href: "/ai/agent", name: "AI Agent", description: "Summarise service context and prepare permitted next actions." },
      { href: "/ai/calling", name: "AI Calling", description: "Turn call outcomes into structured service follow-through." },
    ],
    integrations: ["Email", "Telephony", "Customer portal", "Calendar", "Melorite AI"],
    faqs: [
      { question: "What happens after a ticket needs on-site work?", answer: "Where configured, the request can move into a work order and appointment while remaining connected to the original customer and ticket context." },
      { question: "Can teams track SLA risk?", answer: "Yes. SLA policies and status are part of the current Service catalogue, supporting response and resolution visibility." },
      ...platformFaq("Service"),
    ],
    cta: "Give every request a clear path to resolution.",
  },
  "procurement-inventory": {
    hero: "From purchasing to stock movement.",
    proposition: "Connect demand, suppliers, purchasing, receipts, warehouses and inventory so every movement has an operational reason and a financial trail.",
    workspaceTitle: "Supply workspace",
    workspaceLabel: "Purchasing & stock",
    metrics: [["Open requests", "18", "+3"], ["PO value", "₹21.4L", "+7.1%"], ["Low-stock items", "12", "4 urgent"]],
    records: [
      { primary: "PO-5521", secondary: "Meridian Supplies · WH-01", value: "₹1,84,000", status: "Received" },
      { primary: "PO-5520", secondary: "Coastal Metals · WH-02", value: "₹4,29,000", status: "Issued" },
      { primary: "TR-1048", secondary: "Mumbai → Pune", value: "84 units", status: "In transit" },
    ],
    featureGroups: [
      { title: "Source", description: "Move internal demand into a traceable supplier process.", items: ["Purchase requirements", "Suppliers", "RFQs and quotations", "Purchase orders"] },
      { title: "Receive", description: "Connect what was ordered with what arrives.", items: ["Goods receipts", "Supplier context", "Warehouse destination", "Purchase status"] },
      { title: "Control stock", description: "See inventory as movements across real locations.", items: ["Items and warehouses", "Stock availability", "Transfers and adjustments", "Replenishment signals"] },
    ],
    roles: [
      { title: "Procurement teams", description: "Manage suppliers, RFQs and purchase orders with a clear audit trail." },
      { title: "Warehouse teams", description: "Receive, move and count stock against the right operational records." },
      { title: "Operations leaders", description: "Understand demand, purchasing status and availability across locations." },
    ],
    aiPrompt: "Which low-stock items have no purchase order covering demand?",
    aiResult: "Melorite AI can compare permitted stock, request and purchase-order records, explain gaps and prepare a review list before any action is taken.",
    connections: [
      { href: "/products/finance", name: "Finance", description: "Connect supplier purchasing with bills and financial records." },
      { href: "/products/commerce", name: "Commerce", description: "Share availability and order-driven demand." },
      { href: "/ai/agent", name: "AI Agent", description: "Investigate supply exceptions across purchasing and stock." },
    ],
    integrations: ["Barcode workflows", "Supplier import", "Warehouse devices", "Accounting export", "Melorite AI"],
    faqs: [
      { question: "Why are Procurement and Inventory one offering?", answer: "Purchasing creates the supply that inventory receives and moves. Keeping the two together makes demand, orders, receipts and availability easier to follow." },
      { question: "Can stock be tracked across warehouses?", answer: "Yes. Warehouses, inventory and stock transfers are part of the current catalogue." },
      ...platformFaq("Procurement & Inventory"),
    ],
    cta: "Keep purchasing and stock moving together.",
  },
};

const industryBase = (config: Omit<CatalogueDetails, "faqs"> & { faqs: CatalogueDetails["faqs"] }): CatalogueDetails => config;

Object.assign(catalogueDetails, {
  hospital: industryBase({
    hero: "One operational view around every patient journey.", proposition: "Coordinate patient administration, care operations, staffing, billing and supply workflows without splitting the journey across disconnected systems.", workspaceTitle: "Hospital operations", workspaceLabel: "Patient flow", metrics: [["Beds occupied", "78%", "42 available"], ["Appointments", "186", "Today"], ["Pending discharge", "9", "3 need review"]], records: [{ primary: "Aarohi Mehta", secondary: "IPD · Room 412", value: "Discharge", status: "Billing review" }, { primary: "Rohan Patel", secondary: "OPD · Cardiology", value: "10:30", status: "Checked in" }, { primary: "Maya Singh", secondary: "Diagnostics · Lab", value: "2 orders", status: "In progress" }], featureGroups: [{ title: "Patient administration", description: "Keep registration and visit context together.", items: ["Patient records", "Appointments", "Admissions", "Follow-up"] }, { title: "Care operations", description: "Coordinate the operational steps around care.", items: ["Care journeys", "Staff workflows", "Room and resource context", "Service coordination"] }, { title: "Business operations", description: "Connect care activity to the functions that support it.", items: ["Billing", "Procurement", "Inventory", "Operational reporting"] }], roles: [{ title: "Care coordinators", description: "See the operational state of each patient journey." }, { title: "Front office", description: "Manage registration, appointments and administrative follow-through." }, { title: "Operations leaders", description: "Review capacity, service flow and financial exceptions." }], aiPrompt: "Which patient journeys have an operational blocker today?", aiResult: "Melorite AI can summarise permitted appointment, admission, billing and service status, with links to the records that require human review.", connections: [{ href: "/products/hrms", name: "HRMS", description: "Connect people operations to staffing context." }, { href: "/products/finance", name: "Finance", description: "Keep patient billing in the financial workflow." }, { href: "/products/procurement-inventory", name: "Procurement & Inventory", description: "Coordinate supplies and availability." }], integrations: ["Diagnostic systems", "Payment workflows", "Document exchange", "Messaging", "Melorite AI"], faqs: [{ question: "Which hospital workflows are represented?", answer: "The canonical solution covers patient administration, care coordination, staff operations, billing, procurement and service workflows." }, { question: "Is this a clinical decision system?", answer: "The website describes connected operational software. It does not claim to replace clinical judgment or regulated clinical systems." }, ...platformFaq("Hospital Management")], cta: "Connect the operations around better patient journeys."
  }),
  clinic: industryBase({
    hero: "A calmer clinic, from booking to follow-up.", proposition: "Bring appointments, patient records, billing, care follow-up and inventory into one outpatient workspace.", workspaceTitle: "Clinic workspace", workspaceLabel: "Today’s appointments", metrics: [["Appointments", "42", "Today"], ["Checked in", "18", "4 waiting"], ["Follow-ups due", "11", "This week"]], records: [{ primary: "09:30 · Anaya Bose", secondary: "Follow-up consultation", value: "Room 2", status: "Checked in" }, { primary: "10:00 · Vihaan Joshi", secondary: "New patient", value: "Room 1", status: "Confirmed" }, { primary: "10:20 · Sara Khan", secondary: "Treatment session", value: "Room 3", status: "Arriving" }], featureGroups: [{ title: "Access", description: "Organise the front door to the clinic.", items: ["Appointments", "Patient registration", "Check-in", "Communications"] }, { title: "Visit", description: "Keep visit operations attached to the patient.", items: ["Patient records", "Care activity", "Documents", "Treatment follow-up"] }, { title: "Aftercare", description: "Close the loop after the visit.", items: ["Billing", "Follow-up reminders", "Inventory context", "Operational reporting"] }], roles: [{ title: "Front desk", description: "Run bookings, check-in and patient communication." }, { title: "Practitioners", description: "Work from the visit context made available to their role." }, { title: "Clinic owners", description: "See appointment flow, follow-up and billing status." }], aiPrompt: "Which patients need follow-up after this week’s visits?", aiResult: "Melorite AI can review permitted visit and follow-up status, then prepare a patient list for the team to validate.", connections: [{ href: "/products/crm-growth", name: "CRM & Growth", description: "Coordinate enquiries and patient communication." }, { href: "/products/finance", name: "Finance", description: "Connect clinic billing and payments." }, { href: "/products/procurement-inventory", name: "Procurement & Inventory", description: "Keep consumable availability visible." }], integrations: ["Calendar", "Messaging", "Payment workflows", "Document exchange", "Melorite AI"], faqs: [{ question: "What is included in Clinic Management?", answer: "Appointments, patient records, billing, care follow-up and inventory context form the current canonical solution." }, { question: "Can the clinic manage recurring follow-ups?", answer: "Follow-up is a core part of the solution story and can be configured around the clinic’s operating workflow." }, ...platformFaq("Clinic Management")], cta: "Give every visit a clear beginning and follow-through."
  }),
  "real-estate": industryBase({
    hero: "Move every property journey forward.", proposition: "Connect enquiries, property context, bookings, collections and service so sales and operations work from the same buyer journey.", workspaceTitle: "Property workspace", workspaceLabel: "Inventory & bookings", metrics: [["Units available", "84", "Across 3 projects"], ["Site visits", "26", "This week"], ["Collections due", "₹42L", "12 accounts"]], records: [{ primary: "A-1204 · Riverside", secondary: "2 BHK · 1,240 sq ft", value: "₹1.2Cr", status: "Available" }, { primary: "B-0812 · Heights", secondary: "3 BHK · 1,680 sq ft", value: "₹1.8Cr", status: "On hold" }, { primary: "C-0306 · Grove", secondary: "2 BHK · 1,110 sq ft", value: "₹94L", status: "Booked" }], featureGroups: [{ title: "Demand", description: "Connect every enquiry to the property journey.", items: ["Lead capture", "Qualification", "Site visits", "Broker context"] }, { title: "Inventory & booking", description: "Work from the live commercial state of property.", items: ["Property records", "Availability", "Holds and bookings", "Documents"] }, { title: "Collections & service", description: "Continue the relationship after booking.", items: ["Collection tracking", "Financial context", "Handover workflow", "Resident service"] }], roles: [{ title: "Sales teams", description: "Match qualified buyers with current property availability." }, { title: "Collections teams", description: "Follow payment milestones with buyer and booking context." }, { title: "Operations teams", description: "Coordinate handover and post-sale service." }], aiPrompt: "Which bookings have a collection milestone due in the next 14 days?", aiResult: "Melorite AI can combine permitted booking and finance context into a review list with the next milestone and owner.", connections: [{ href: "/products/crm-growth", name: "CRM & Growth", description: "Manage enquiries, visits and buyer relationships." }, { href: "/products/finance", name: "Finance", description: "Connect collections and financial records." }, { href: "/products/service", name: "Service", description: "Carry buyer context into handover and support." }], integrations: ["Property portals", "Payment workflows", "Document exchange", "Telephony", "Melorite AI"], faqs: [{ question: "Which real-estate records are central to the solution?", answer: "The current solution focuses on leads, property operations, sales, collections and service." }, { question: "Can sales teams see availability while working a lead?", answer: "That connected view is central to the solution design: buyer activity and property context belong in the same workflow." }, ...platformFaq("Real Estate Management")], cta: "Connect every enquiry, booking and handover."
  }),
  education: industryBase({
    hero: "Keep every learner journey on track.", proposition: "Coordinate admissions, student operations, communication, fees and service across schools, coaching institutes and training centres.", workspaceTitle: "Education workspace", workspaceLabel: "Admissions & students", metrics: [["Applications", "318", "This term"], ["Enrolled", "72%", "+4.8%"], ["Fees due", "₹18.4L", "46 students"]], records: [{ primary: "Ira Nair", secondary: "Grade 8 · Application", value: "Interview", status: "Scheduled" }, { primary: "Arnav Jain", secondary: "Data Analytics · Cohort 12", value: "Enrolled", status: "Documents due" }, { primary: "Zoya Ali", secondary: "JEE Weekend · Batch B", value: "Active", status: "Fee due" }], featureGroups: [{ title: "Admissions", description: "Turn enquiries into a visible enrolment journey.", items: ["Enquiries", "Applications", "Admission stages", "Documents"] }, { title: "Student operations", description: "Keep the operational student record current.", items: ["Student profiles", "Programme or batch context", "Communications", "Service requests"] }, { title: "Finance & visibility", description: "Connect fee activity to the learner journey.", items: ["Fee records", "Collection visibility", "Operational reporting", "Follow-up"] }], roles: [{ title: "Admission teams", description: "Manage enquiries, applications and enrolment follow-through." }, { title: "Administrators", description: "Maintain student operations and communication context." }, { title: "Finance teams", description: "Review fees and collections against the right learner records." }], aiPrompt: "Which admitted students still have incomplete documents or fees?", aiResult: "Melorite AI can summarise permitted admission, document and fee status so staff can review the next follow-up.", connections: [{ href: "/products/crm-growth", name: "CRM & Growth", description: "Manage enquiries and admission communication." }, { href: "/products/finance", name: "Finance", description: "Keep fees and collections connected." }, { href: "/products/service", name: "Service", description: "Coordinate student and parent requests." }], integrations: ["Forms", "Payment workflows", "Document exchange", "Messaging", "Melorite AI"], faqs: [{ question: "Which organizations is this solution for?", answer: "The canonical catalogue describes schools, coaching institutes and training centres." }, { question: "Does it connect admissions with fees?", answer: "Yes. Admissions, student operations, communication and finance are designed as parts of the same learner journey." }, ...platformFaq("Education Management")], cta: "Give every learner journey a connected home."
  }),
  hospitality: industryBase({
    hero: "Keep every guest stay in context.", proposition: "Connect reservations, guest operations, service, commerce and finance so teams can respond without asking the guest to repeat themselves.", workspaceTitle: "Guest operations", workspaceLabel: "Arrivals & service", metrics: [["Occupancy", "82%", "+6% WoW"], ["Arrivals", "48", "Today"], ["Open requests", "7", "2 priority"]], records: [{ primary: "Mira Sen · 404", secondary: "Arrives 14:00 · 3 nights", value: "VIP", status: "Room ready" }, { primary: "Dev Malhotra · 218", secondary: "In house · 2 nights", value: "Service", status: "Request open" }, { primary: "Nina Thomas · 512", secondary: "Departs 11:00", value: "Checkout", status: "Bill review" }], featureGroups: [{ title: "Reserve & arrive", description: "Prepare the operation around each stay.", items: ["Reservations", "Guest records", "Arrival context", "Room readiness"] }, { title: "Serve", description: "Make requests visible to the team that owns them.", items: ["Guest service", "Work coordination", "Commerce context", "Request history"] }, { title: "Settle & retain", description: "Close the stay without losing the relationship.", items: ["Billing", "Payment context", "Guest history", "Loyalty follow-up"] }], roles: [{ title: "Front office", description: "Manage arrivals, stays and guest context." }, { title: "Service teams", description: "Own requests with room and guest details attached." }, { title: "Operations leaders", description: "Review occupancy, service load and billing exceptions." }], aiPrompt: "Summarise today’s priority arrivals and unresolved guest requests.", aiResult: "Melorite AI can review permitted reservation and service context, then produce an operational brief with linked records.", connections: [{ href: "/products/service", name: "Service", description: "Route and resolve guest requests." }, { href: "/products/commerce", name: "Commerce", description: "Connect on-property purchases and orders." }, { href: "/products/finance", name: "Finance", description: "Keep billing and payment context visible." }], integrations: ["Reservation channels", "Payment workflows", "Messaging", "Point of sale", "Melorite AI"], faqs: [{ question: "What does Hospitality Management connect?", answer: "The canonical solution joins guest operations, reservations, service, commerce and finance." }, { question: "Can service teams see guest context?", answer: "That is a central goal of the connected workspace: requests should carry the permitted stay and guest context needed to act." }, ...platformFaq("Hospitality Management")], cta: "Give every guest request the context it deserves."
  }),
  "marketing-agency": industryBase({
    hero: "Run the agency from pitch to profitability.", proposition: "Connect new business, campaign delivery, projects, time and finance so every client engagement has one commercial and operational story.", workspaceTitle: "Agency workspace", workspaceLabel: "Clients & delivery", metrics: [["Active campaigns", "18", "4 launching"], ["Utilisation", "76%", "+3.2%"], ["Unbilled work", "₹8.6L", "Review Friday"]], records: [{ primary: "Atlas · Brand launch", secondary: "Campaign · 8 owners", value: "72%", status: "On track" }, { primary: "Lumen · Retention", secondary: "Lifecycle · 5 owners", value: "₹4.2L", status: "At risk" }, { primary: "Northwind · Website", secondary: "Project · 6 owners", value: "48%", status: "Client review" }], featureGroups: [{ title: "Win", description: "Keep the opportunity and proposed work connected.", items: ["New-business pipeline", "Client records", "Scoping context", "Commercial handoff"] }, { title: "Deliver", description: "Coordinate campaigns and project work across the team.", items: ["Campaign activity", "Projects and tasks", "Documents", "Client communication"] }, { title: "Understand margin", description: "Connect time and delivery to the financial outcome.", items: ["Timesheets", "Budgets", "Invoicing context", "Profitability visibility"] }], roles: [{ title: "Client services", description: "Keep relationship, scope and delivery context together." }, { title: "Delivery teams", description: "Work from shared briefs, tasks and campaign status." }, { title: "Agency leaders", description: "See pipeline, utilisation, delivery risk and financial position." }], aiPrompt: "Which client accounts have delivery risk or unbilled work this month?", aiResult: "Melorite AI can compare permitted project, time and finance signals and prepare an account-by-account review.", connections: [{ href: "/products/crm-growth", name: "CRM & Growth", description: "Manage new business and campaign context." }, { href: "/products/projects", name: "Projects", description: "Plan and deliver client work." }, { href: "/products/finance", name: "Finance", description: "Connect time, billing and profitability." }], integrations: ["Advertising platforms", "Document storage", "Calendar", "Finance export", "Melorite AI"], faqs: [{ question: "Which agency workflows are covered?", answer: "The canonical solution connects CRM & Growth, campaign delivery, projects, timesheets and finance." }, { question: "Can teams connect time with client work?", answer: "Yes. Timesheets and project context are part of the solution story so leaders can understand delivery and commercial position together." }, ...platformFaq("Marketing Agency Management")], cta: "Connect the work you win with the work you deliver."
  }),
});

Object.assign(catalogueDetails, {
  agent: {
    hero: "Ask Melorite. Act across your business.",
    proposition: "Move from a plain-language question to a permission-aware answer, the supporting records and a proposed next action—across the connected Melorite workspace.",
    workspaceTitle: "Melorite AI Agent",
    workspaceLabel: "Analysis & actions",
    metrics: [["Sources reviewed", "4 apps", "CRM · Finance · Projects · Service"], ["Signals found", "7", "3 need attention"], ["Actions proposed", "3", "Awaiting review"]],
    records: [
      { primary: "Atlas opportunity", secondary: "CRM · No activity for 9 days", value: "₹12.6L", status: "Create follow-up" },
      { primary: "Lumen project", secondary: "Projects · Milestone slipping", value: "4 days", status: "Notify owner" },
      { primary: "INV-3101", secondary: "Finance · Payment overdue", value: "₹1.24L", status: "Review account" },
    ],
    featureGroups: [
      { title: "Understand", description: "Ask in ordinary business language without learning a reporting syntax.", items: ["Natural-language queries", "Cross-app context", "Document understanding", "Permission-aware retrieval"] },
      { title: "Explain", description: "See the answer, the signals behind it and the source records.", items: ["Business summaries", "Risks and exceptions", "Recommended next steps", "AI-assisted reporting"] },
      { title: "Act", description: "Turn an approved recommendation into connected work.", items: ["Proposed workflow actions", "Human confirmation", "Task and follow-up creation", "Governed agentic workflows"] },
    ],
    roles: [{ title: "Leaders", description: "Ask cross-functional questions and move from a summary to the records behind it." }, { title: "Operators", description: "Find exceptions, prepare follow-up and reduce repetitive record-by-record review." }, { title: "Analysts", description: "Explore business activity using governed context from connected applications." }],
    aiPrompt: "Create follow-up tasks for high-value opportunities with no activity in seven days.",
    aiResult: "The Agent finds matching opportunities, shows the records and proposed owners, requests confirmation, then creates only the approved tasks.",
    connections: [{ href: "/products/crm-growth", name: "CRM & Growth", description: "Analyse pipeline, activity and customer context." }, { href: "/products/finance", name: "Finance", description: "Explain financial movement and exceptions." }, { href: "/products/projects", name: "Projects", description: "Review delivery status and prepare follow-through." }],
    integrations: ["Melorite business applications", "Workspace documents", "Approved data connections", "Workflow actions", "AI reporting"],
    faqs: [{ question: "Is AI Agent a separate chatbot?", answer: "No. It is designed to work across the permitted data and workflows in the connected Melorite workspace." }, { question: "Can the Agent take actions automatically?", answer: "It can propose and execute configured, permitted actions. Sensitive or consequential steps can require explicit human confirmation." }, { question: "Does it respect application permissions?", answer: "Yes. The experience is designed to work within the user’s workspace and record permissions." }, { question: "Can it explain where an answer came from?", answer: "The interface is designed to connect summaries and recommendations back to the supporting business records." }, { question: "Which applications can it use?", answer: "AI Agent is intended to operate across the Melorite applications enabled for the organization and accessible to the user." }],
    cta: "Put your business context to work.",
  },
  calling: {
    hero: "AI conversations that move work forward.",
    proposition: "Handle configured inbound and outbound calling workflows with a live transcript, customer context, structured outcomes and a clear handoff into Melorite.",
    workspaceTitle: "Melorite AI Calling",
    workspaceLabel: "Live call & outcome",
    metrics: [["Call status", "Live", "02:14 elapsed"], ["Contact match", "98%", "CRM record found"], ["Outcome", "Qualified", "Follow-up proposed"]],
    records: [
      { primary: "Contact matched", secondary: "Aditi Rao · Website enquiry", value: "CRM", status: "Context loaded" },
      { primary: "Need identified", secondary: "Looking for a finance demo", value: "Intent", status: "Qualified" },
      { primary: "Next step", secondary: "Tuesday · 11:30", value: "Demo", status: "Awaiting confirmation" },
    ],
    featureGroups: [
      { title: "Converse", description: "Support focused, configured business conversations.", items: ["Inbound enquiries", "Outbound follow-ups", "Campaign calling", "Customer support calls"] },
      { title: "Understand", description: "Turn the conversation into structured business context.", items: ["Live transcription", "Intent and qualification", "Call summaries", "Structured outcomes"] },
      { title: "Follow through", description: "Keep the result connected after the call ends.", items: ["CRM updates", "Appointment booking", "Follow-up creation", "Human handoff"] },
    ],
    roles: [{ title: "Sales teams", description: "Qualify enquiries and receive structured follow-up rather than raw call notes." }, { title: "Service teams", description: "Capture the request and preserve context for the right human queue." }, { title: "Campaign teams", description: "Run configured calling workflows with consistent outcome tracking." }],
    aiPrompt: "Summarise the call, qualify the enquiry and prepare the agreed follow-up.",
    aiResult: "AI Calling produces a transcript and summary, structures the agreed outcome, updates the permitted CRM context and asks for confirmation before scheduling the next step.",
    connections: [{ href: "/products/crm-growth", name: "CRM & Growth", description: "Match contacts and keep qualification outcomes on the relationship." }, { href: "/products/service", name: "Service", description: "Route support conversations with a structured summary." }, { href: "/ai/agent", name: "AI Agent", description: "Continue analysis and follow-through across the workspace." }],
    integrations: ["Telephony providers", "CRM records", "Calendar", "Call recordings", "Workflow actions"],
    faqs: [{ question: "What kinds of calls can AI Calling support?", answer: "The canonical product story includes inbound enquiries, outbound follow-ups, lead qualification, appointment booking, support and campaign calling." }, { question: "What happens after a call?", answer: "The product can create a transcript, summary and structured outcome, then prepare configured CRM updates and follow-up." }, { question: "Can a call be handed to a person?", answer: "Human handoff is part of the product design for workflows that require escalation or personal attention." }, { question: "Does every call update CRM automatically?", answer: "Updates depend on the configured workflow and permissions. The interface can require review or confirmation before writing outcomes." }, { question: "Can teams review what the AI understood?", answer: "Yes. The transcript, summary and structured outcome are presented as reviewable call artifacts." }],
    cta: "Turn every business conversation into clear follow-through.",
  },
});

export const detailsFor = (slug: string) => catalogueDetails[slug];
