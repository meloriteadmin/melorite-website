/**
 * Melorite Business Apps — the single source of truth for every product surface
 * on the website (nav mega menu, explorer, showcases, builder, footer, forms).
 *
 * Names, descriptions and module lists mirror the platform's code-owned catalogue
 * (`@melorite/core` → `businessApps`). When the platform adds or renames an app,
 * update this file only — every component reads from here.
 */

export type ProductCategoryId =
  | "customers"
  | "finance-supply"
  | "people"
  | "delivery"
  | "growth"
  | "intelligence";

export type Availability = "available" | "early-access" | "planned";

/** Which illustrative interface body the product preview renders. */
export type PreviewKind = "pipeline" | "table" | "board" | "chart" | "flow" | "files";

export type Capability = { title: string; description: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategoryId;
  icon: string;
  accent: string;
  tagline: string;
  description: string;
  modules: string[];
  capabilities: Capability[];
  useCase: { title: string; description: string };
  preview: {
    kind: PreviewKind;
    /** Illustrative KPI tiles shown in interface previews. Not customer data. */
    kpis: [string, string, string][];
    /** Column labels or stage names used by the preview body. */
    columns: string[];
    rows: string[][];
  };
  status: Availability;
  featured?: boolean;
};

export type ProductCategory = {
  id: ProductCategoryId;
  name: string;
  description: string;
  icon: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "customers",
    name: "Sales & Customers",
    description: "Relationships, pipeline, quotations, orders, selling channels and customer service.",
    icon: "Target",
  },
  {
    id: "finance-supply",
    name: "Finance & Supply",
    description: "Accounting, receivables, purchasing and a shared stock ledger.",
    icon: "Landmark",
  },
  {
    id: "people",
    name: "People",
    description: "The employee journey from recruitment to payroll and settlement.",
    icon: "Users",
  },
  {
    id: "delivery",
    name: "Operations & Delivery",
    description: "Projects, internal operations, assets and governed documents.",
    icon: "FolderKanban",
  },
  {
    id: "growth",
    name: "Marketing & Growth",
    description: "Audiences, lifecycle journeys and multi-channel campaign execution.",
    icon: "Megaphone",
  },
  {
    id: "intelligence",
    name: "Automation & Analytics",
    description: "Cross-app workflows and governed metrics across everything you run.",
    icon: "Zap",
  },
];

export const products: Product[] = [
  {
    id: "crm",
    slug: "crm",
    name: "Customer Relationship Management",
    shortName: "CRM",
    category: "customers",
    icon: "Target",
    accent: "#2563eb",
    tagline: "Turn every relationship into a measurable revenue journey.",
    description:
      "Capture and qualify leads, manage accounts and contacts, and move opportunities through configurable pipelines with a complete activity history on every record.",
    modules: ["Dashboard", "Leads", "Contacts", "Accounts", "Opportunities", "Pipeline", "Activities", "Territories", "Imports", "Reports", "Settings"],
    capabilities: [
      { title: "Lead management", description: "Capture, assign and qualify leads, then convert them into an account, contact and opportunity in one step." },
      { title: "Visual pipeline", description: "Move opportunities across stages on a board with weighted values and stage aging." },
      { title: "Accounts & contacts", description: "One shared customer record reused by Sales, Finance, Service and Marketing." },
      { title: "Activity timeline", description: "Tasks, calls, meetings and follow-ups logged against every record." },
      { title: "Territories", description: "Organise ownership and performance by territory and team." },
      { title: "Reports", description: "Lead funnel, pipeline, win/loss and activity reporting." },
    ],
    useCase: {
      title: "From enquiry to qualified opportunity",
      description:
        "A new enquiry becomes a lead, is qualified by the team, converted into an opportunity and handed to Sales for a quotation without re-entering customer details.",
    },
    preview: {
      kind: "pipeline",
      kpis: [["Pipeline value", "$1.84M", "+12.4%"], ["Open opportunities", "64", "+8"], ["Win rate", "31.8%", "+2.6%"], ["Overdue follow-ups", "7", "-4"]],
      columns: ["Qualification", "Proposal", "Negotiation", "Closed won"],
      rows: [["Northwind renewal", "$48,000"], ["Atlas Group rollout", "$126,500"], ["Harbor & Co. pilot", "$18,200"], ["Kestrel Foods", "$64,000"], ["Lumen Health", "$92,300"], ["Orbit Retail", "$27,900"]],
    },
    status: "available",
    featured: true,
  },
  {
    id: "sales",
    slug: "sales",
    name: "Sales",
    shortName: "Sales",
    category: "customers",
    icon: "ShoppingCart",
    accent: "#7c3aed",
    tagline: "Quotes, orders, contracts, targets and commercial commitments.",
    description:
      "Convert qualified demand into quotations, sales orders and contracts, using shared price books and a shared product catalogue.",
    modules: ["Dashboard", "Products", "Quotations", "Sales Orders", "Contracts", "Price Books", "Targets", "Reports", "Settings"],
    capabilities: [
      { title: "Quotations", description: "Build quotations from the shared product catalogue and price books." },
      { title: "Sales orders", description: "Convert accepted quotations into orders in one audited step." },
      { title: "Contracts", description: "Track commercial commitments, terms and renewal dates." },
      { title: "Price books", description: "Maintain pricing for different customers and markets." },
      { title: "Targets", description: "Set and follow sales targets across the team." },
    ],
    useCase: {
      title: "Quotation to confirmed order",
      description:
        "A quotation built from the product catalogue is accepted, converted into a sales order and passed to Finance for invoicing.",
    },
    preview: {
      kind: "table",
      kpis: [["Booked this month", "$428K", "+18.2%"], ["Quotes pending", "23", "+5"], ["Order conversion", "42.1%", "+3.8%"], ["Renewals due", "12", "30 days"]],
      columns: ["Quotation", "Customer", "Value", "Status"],
      rows: [["QT-1042", "Northwind Ltd", "$48,000", "Accepted"], ["QT-1041", "Atlas Group", "$126,500", "Sent"], ["QT-1039", "Kestrel Foods", "$64,000", "Draft"], ["QT-1036", "Orbit Retail", "$27,900", "Accepted"]],
    },
    status: "available",
  },
  {
    id: "commerce",
    slug: "commerce",
    name: "Commerce",
    shortName: "Commerce",
    category: "customers",
    icon: "Store",
    accent: "#e11d48",
    tagline: "Catalogue-to-cash selling across channels.",
    description:
      "Manage catalogue, promotions, orders, fulfilment and returns across selling channels, connected to shared inventory and finance.",
    modules: ["Dashboard", "Catalogue", "Promotions", "Orders", "Fulfilment", "Returns", "Channels", "Customers", "Reports", "Settings"],
    capabilities: [
      { title: "Catalogue", description: "Products and variants from the shared product master." },
      { title: "Orders & fulfilment", description: "Track orders from placement through fulfilment." },
      { title: "Promotions", description: "Configure promotions for your selling channels." },
      { title: "Returns", description: "Handle returns and refunds with a clear trail." },
      { title: "Channels", description: "Organise selling across multiple channels." },
    ],
    useCase: {
      title: "Order to fulfilment",
      description: "An order is placed, stock is reserved in Inventory, the order is fulfilled and the transaction is available to Finance.",
    },
    preview: {
      kind: "table",
      kpis: [["Gross sales (MTD)", "$312K", "+9.7%"], ["Orders", "1,284", "+124"], ["Avg order value", "$243", "+3.1%"], ["Return rate", "2.8%", "-0.4%"]],
      columns: ["Order", "Channel", "Total", "Status"],
      rows: [["#10482", "Web store", "$186.00", "Fulfilled"], ["#10481", "Marketplace", "$92.40", "Packing"], ["#10480", "Web store", "$412.10", "Paid"], ["#10479", "Wholesale", "$1,240.00", "Fulfilled"]],
    },
    status: "available",
  },
  {
    id: "service",
    slug: "service",
    name: "Service",
    shortName: "Service",
    category: "customers",
    icon: "Headset",
    accent: "#0284c7",
    tagline: "Cases, SLAs, work orders and customer success.",
    description:
      "Handle customer tickets through queues and SLAs, schedule work orders and appointments, and build a shared knowledge base.",
    modules: ["Dashboard", "Tickets", "Queues", "Work Orders", "Appointments", "Knowledge", "SLAs", "Customer Portal", "CSAT", "Reports", "Settings"],
    capabilities: [
      { title: "Tickets & queues", description: "Route tickets into queues and track them to resolution." },
      { title: "SLA policies", description: "Define response and resolution targets and see breaches early." },
      { title: "Work orders", description: "Turn tickets into scheduled work orders and appointments." },
      { title: "Knowledge", description: "Maintain articles your team can reuse." },
      { title: "CSAT", description: "Capture customer satisfaction after resolution." },
    ],
    useCase: {
      title: "Ticket to resolution",
      description: "A customer ticket is routed to the right queue, tracked against its SLA, resolved and followed by a satisfaction check.",
    },
    preview: {
      kind: "table",
      kpis: [["Open tickets", "142", "-12"], ["First response", "38m", "-6m"], ["SLA breaches", "3", "-2"], ["CSAT", "94%", "+1.2%"]],
      columns: ["Ticket", "Subject", "Priority", "SLA"],
      rows: [["TK-2291", "Invoice copy request", "Low", "On track"], ["TK-2290", "Delivery delayed", "High", "At risk"], ["TK-2288", "Access to portal", "Medium", "On track"], ["TK-2285", "Service visit", "Medium", "Met"]],
    },
    status: "available",
  },
  {
    id: "finance",
    slug: "finance",
    name: "Finance",
    shortName: "Finance",
    category: "finance-supply",
    icon: "Landmark",
    accent: "#059669",
    tagline: "Receivables, accounting, tax and financial reporting.",
    description:
      "Issue invoices, record payments and credit notes, post balanced journals to a governed ledger and report on your financial position.",
    modules: ["Dashboard", "Invoices", "Payments", "Credit Notes", "Accounting", "Periods", "Tax Rates", "Reports", "Settings"],
    capabilities: [
      { title: "Invoicing", description: "Create invoices directly from sales orders or on their own." },
      { title: "Payments", description: "Record full and partial payments against invoices." },
      { title: "Credit notes", description: "Issue credit notes with a complete audit trail." },
      { title: "General ledger", description: "Governed accounts with balanced journal posting." },
      { title: "Periods & tax", description: "Manage accounting periods and tax rates." },
      { title: "Financial reports", description: "Receivables, payables and financial statements." },
    ],
    useCase: {
      title: "Invoice to reconciled payment",
      description: "An invoice raised from a sales order is paid in full or in part, and the payment is recorded against the customer's account.",
    },
    preview: {
      kind: "table",
      kpis: [["Cash position", "$2.42M", "+6.3%"], ["Receivables", "$386K", "12 overdue"], ["Payables", "$164K", "8 due"], ["Net margin", "24.8%", "+1.7%"]],
      columns: ["Invoice", "Customer", "Amount", "Status"],
      rows: [["INV-3108", "Northwind Ltd", "$48,000.00", "Paid"], ["INV-3107", "Atlas Group", "$63,250.00", "Partial"], ["INV-3105", "Orbit Retail", "$27,900.00", "Sent"], ["INV-3101", "Kestrel Foods", "$12,480.00", "Overdue"]],
    },
    status: "available",
    featured: true,
  },
  {
    id: "procurement",
    slug: "procurement",
    name: "Procurement",
    shortName: "Procurement",
    category: "finance-supply",
    icon: "ClipboardList",
    accent: "#d97706",
    tagline: "From purchase request to goods receipt and vendor billing.",
    description:
      "Manage vendors, purchase requests, RFQs and purchase orders, then receive goods and match vendor bills.",
    modules: ["Dashboard", "Vendors", "Requests", "RFQs", "Purchase Orders", "Receipts", "Returns", "Bills", "Payments", "Reports", "Settings"],
    capabilities: [
      { title: "Vendors", description: "A shared vendor master used by Procurement, Finance and Inventory." },
      { title: "Requests & RFQs", description: "Collect internal demand and request quotations from vendors." },
      { title: "Purchase orders", description: "Issue and track purchase orders to completion." },
      { title: "Goods receipt", description: "Receive goods directly into Inventory stock." },
      { title: "Vendor bills", description: "Record bills and payments against purchase orders." },
    ],
    useCase: {
      title: "Request to received stock",
      description: "A purchase request becomes a purchase order; goods are received into a warehouse and the vendor bill is recorded.",
    },
    preview: {
      kind: "table",
      kpis: [["Open requests", "18", "+3"], ["PO value", "$214K", "+7.1%"], ["Late deliveries", "2", "-1"], ["Pending approvals", "5", "+2"]],
      columns: ["PO", "Vendor", "Value", "Status"],
      rows: [["PO-5521", "Meridian Supplies", "$18,400", "Received"], ["PO-5520", "Coastal Metals", "$42,900", "Issued"], ["PO-5518", "Prime Packaging", "$6,150", "Partially received"], ["PO-5516", "Vertex Parts", "$11,780", "Approved"]],
    },
    status: "available",
  },
  {
    id: "inventory",
    slug: "inventory",
    name: "Inventory",
    shortName: "Inventory",
    category: "finance-supply",
    icon: "Boxes",
    accent: "#0891b2",
    tagline: "Stock ledger, warehouses, transfers, counts and reorder rules.",
    description:
      "Track items across warehouses with a movement-based stock ledger, transfers, counts, adjustments and replenishment rules.",
    modules: ["Dashboard", "Items", "Warehouses", "Stock Ledger", "Adjustments", "Transfers", "Counts", "Replenishment", "Reports", "Settings"],
    capabilities: [
      { title: "Stock ledger", description: "Every movement recorded, with balances per warehouse." },
      { title: "Warehouses", description: "Manage multiple warehouses and locations." },
      { title: "Transfers", description: "Move stock between warehouses with a full trail." },
      { title: "Counts & adjustments", description: "Reconcile physical counts with recorded stock." },
      { title: "Replenishment", description: "Reorder rules that surface items running low." },
    ],
    useCase: {
      title: "A shared stock engine",
      description: "The same stock ledger serves purchasing, selling and industry workflows, so every team sees the same balance.",
    },
    preview: {
      kind: "chart",
      kpis: [["Stock value", "$1.12M", "+2.4%"], ["Low stock items", "14", "-3"], ["Transfers in transit", "6", "+1"], ["Count accuracy", "98.6%", "+0.4%"]],
      columns: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      rows: [["Main warehouse", "62"], ["North DC", "48"], ["Retail store", "31"]],
    },
    status: "available",
    featured: true,
  },
  {
    id: "hr",
    slug: "hr",
    name: "Human Resources",
    shortName: "HR",
    category: "people",
    icon: "UserRound",
    accent: "#db2777",
    tagline: "The complete employee journey from candidate to alumni.",
    description:
      "Recruit, onboard and manage employees with attendance, leave, shifts, performance and offboarding in one people record.",
    modules: ["Dashboard", "People", "Recruitment", "Onboarding", "Attendance", "Leave", "Shifts", "Performance", "Learning", "Offboarding", "Reports", "Settings"],
    capabilities: [
      { title: "Employee records", description: "One employee master reused by Payroll, Projects and Operations." },
      { title: "Recruitment & onboarding", description: "Move candidates to employees and onboard them consistently." },
      { title: "Attendance & shifts", description: "Track attendance and organise shift patterns." },
      { title: "Leave", description: "Leave requests and balances with approvals." },
      { title: "Performance", description: "Review cycles and goals for every team." },
    ],
    useCase: {
      title: "Candidate to employee",
      description: "A successful candidate becomes an employee, completes onboarding and is immediately available to Payroll and Projects.",
    },
    preview: {
      kind: "table",
      kpis: [["Headcount", "248", "+6"], ["On leave today", "9", "—"], ["Open roles", "11", "+2"], ["Pending approvals", "14", "-3"]],
      columns: ["Employee", "Department", "Status", "Leave"],
      rows: [["Aarav Mehta", "Operations", "Active", "12 days"], ["Sofia Laurent", "Finance", "Active", "8 days"], ["Daniel Okafor", "Sales", "Onboarding", "—"], ["Mei Tanaka", "Engineering", "On leave", "4 days"]],
    },
    status: "available",
    featured: true,
  },
  {
    id: "payroll",
    slug: "payroll",
    name: "Payroll",
    shortName: "Payroll",
    category: "people",
    icon: "Banknote",
    accent: "#4f46e5",
    tagline: "Accurate payroll runs, payslips, benefits and settlements.",
    description:
      "Run controlled payroll using salary components, reimbursements and loans, then issue payslips and final settlements.",
    modules: ["Dashboard", "Payroll Runs", "Employees", "Components", "Reimbursements", "Loans", "Final Settlements", "Payslips", "Reports", "Settings"],
    capabilities: [
      { title: "Payroll runs", description: "Calculate, review and approve each run with clear exceptions." },
      { title: "Salary components", description: "Configure earnings and deductions once." },
      { title: "Reimbursements & loans", description: "Handle claims, advances and recoveries." },
      { title: "Payslips", description: "Generate payslips for every employee." },
      { title: "Final settlements", description: "Close out leavers accurately." },
    ],
    useCase: {
      title: "Monthly payroll run",
      description: "Employee and leave data from HR feeds a payroll run that is reviewed, approved and issued as payslips.",
    },
    preview: {
      kind: "table",
      kpis: [["Current run", "Sep 2026", "In review"], ["Employees processed", "248", "100%"], ["Exceptions", "3", "-5"], ["Reimbursements", "21", "+4"]],
      columns: ["Employee", "Gross", "Deductions", "Net"],
      rows: [["Aarav Mehta", "$5,400", "$810", "$4,590"], ["Sofia Laurent", "$6,200", "$930", "$5,270"], ["Daniel Okafor", "$4,800", "$720", "$4,080"], ["Mei Tanaka", "$7,100", "$1,065", "$6,035"]],
    },
    status: "available",
  },
  {
    id: "projects",
    slug: "projects",
    name: "Projects",
    shortName: "Projects",
    category: "delivery",
    icon: "FolderKanban",
    accent: "#ea580c",
    tagline: "Plan resources, delivery, budgets, time and outcomes.",
    description:
      "Plan projects with tasks and milestones, track timesheets against budgets, and manage resources, risks and issues.",
    modules: ["Dashboard", "Projects", "Tasks", "My Work", "Milestones", "Timesheets", "Resources", "Risks & Issues", "Budgets", "Reports", "Settings"],
    capabilities: [
      { title: "Tasks & boards", description: "Plan and assign work, then follow it on boards." },
      { title: "Milestones", description: "Track key delivery dates and what is at risk." },
      { title: "Timesheets", description: "Validated time entries linked to projects and tasks." },
      { title: "Resources", description: "See capacity across the team." },
      { title: "Budgets", description: "Compare budgets with actual time and expenses." },
      { title: "Risks & issues", description: "Log, mitigate and resolve delivery risks." },
    ],
    useCase: {
      title: "Plan, deliver and measure",
      description: "A project is planned into tasks and milestones, the team logs time, and progress is measured against budget.",
    },
    preview: {
      kind: "board",
      kpis: [["Active projects", "27", "+3"], ["Milestones at risk", "4", "-1"], ["Overdue tasks", "12", "-6"], ["Utilisation", "82%", "+4%"]],
      columns: ["To do", "In progress", "Review", "Done"],
      rows: [["Site survey", "Atlas rollout"], ["Data migration", "Northwind"], ["Training plan", "Kestrel"], ["UAT sign-off", "Lumen"], ["Go-live checklist", "Orbit"], ["Kick-off", "Harbor"]],
    },
    status: "available",
    featured: true,
  },
  {
    id: "operations",
    slug: "operations",
    name: "Operations",
    shortName: "Operations",
    category: "delivery",
    icon: "Workflow",
    accent: "#475569",
    tagline: "Requests, approvals, assets, maintenance and fleet.",
    description:
      "Run internal operations with requests, approvals and work orders, and keep assets, maintenance and fleet on schedule.",
    modules: ["Dashboard", "Requests", "Approvals", "Work Orders", "Assets", "Maintenance", "Fleet", "Reports", "Settings"],
    capabilities: [
      { title: "Requests & approvals", description: "Structured internal requests with approval steps." },
      { title: "Work orders", description: "Assign and close operational work." },
      { title: "Assets", description: "Know where assets are and who holds them." },
      { title: "Maintenance", description: "Schedule maintenance before it becomes a problem." },
      { title: "Fleet", description: "Track vehicles and their service schedules." },
    ],
    useCase: {
      title: "Request to completed work",
      description: "An internal request is approved, becomes a work order, is completed and closed with a full history.",
    },
    preview: {
      kind: "table",
      kpis: [["Pending approvals", "9", "-2"], ["Open requests", "31", "+4"], ["Maintenance due", "6", "7 days"], ["Work orders", "18", "+3"]],
      columns: ["Request", "Type", "Owner", "Status"],
      rows: [["RQ-771", "Equipment", "Facilities", "Approved"], ["RQ-770", "Access", "IT", "Pending"], ["RQ-768", "Maintenance", "Site ops", "In progress"], ["RQ-765", "Vehicle", "Fleet", "Closed"]],
    },
    status: "available",
  },
  {
    id: "documents",
    slug: "documents",
    name: "Documents",
    shortName: "Documents",
    category: "delivery",
    icon: "Files",
    accent: "#0f766e",
    tagline: "Governed files, contracts, approvals and knowledge.",
    description:
      "Store files in folders with versions and metadata, manage templates, contracts and approvals, and keep knowledge in one place.",
    modules: ["Dashboard", "My Files", "Shared", "Folders", "Templates", "Approvals", "Contracts", "Signatures", "Knowledge", "Reports", "Settings"],
    capabilities: [
      { title: "Files & folders", description: "Versioned files linked to the records they belong to." },
      { title: "Templates", description: "Reusable templates for recurring documents." },
      { title: "Approvals", description: "Review and approve documents before they are shared." },
      { title: "Contracts", description: "Keep contracts, versions and renewal dates together." },
      { title: "Knowledge", description: "A shared knowledge space for the organisation." },
    ],
    useCase: {
      title: "Draft to approved document",
      description: "A document is drafted from a template, reviewed and approved, then linked to the customer, employee or project it concerns.",
    },
    preview: {
      kind: "files",
      kpis: [["Recent files", "86", "+12"], ["Awaiting approval", "7", "-2"], ["Expiring soon", "4", "30 days"], ["Signatures pending", "3", "+1"]],
      columns: ["Name", "Linked to", "Version", "Status"],
      rows: [["Master services agreement.pdf", "Atlas Group", "v4", "Approved"], ["Onboarding checklist.docx", "HR", "v2", "Draft"], ["Price schedule 2026.xlsx", "Sales", "v7", "In review"], ["Site handover pack.pdf", "Project", "v1", "Approved"]],
    },
    status: "available",
  },
  {
    id: "marketing",
    slug: "marketing",
    name: "Marketing",
    shortName: "Marketing",
    category: "growth",
    icon: "Megaphone",
    accent: "#c026d3",
    tagline: "Audiences, journeys, forms, attribution and lifecycle growth.",
    description:
      "Build audiences and segments, capture interest with forms and landing pages, run nurture journeys and attribute outcomes.",
    modules: ["Dashboard", "Audiences", "Segments", "Journeys", "Forms", "Landing Pages", "Surveys", "Attribution", "Reports", "Settings"],
    capabilities: [
      { title: "Audiences & segments", description: "Build segments from shared customer and contact data." },
      { title: "Journeys", description: "Lifecycle and nurture journeys for every stage." },
      { title: "Forms & landing pages", description: "Capture interest directly into the platform." },
      { title: "Consent", description: "Channel consent recorded and respected on every send." },
      { title: "Attribution", description: "Connect marketing activity to pipeline outcomes." },
    ],
    useCase: {
      title: "Form to nurtured lead",
      description: "A form submission creates a contact, joins a segment, enters a nurture journey and is handed to Sales when ready.",
    },
    preview: {
      kind: "flow",
      kpis: [["Known audience", "48.2K", "+8.1%"], ["Active journeys", "12", "+2"], ["Form conversion", "18.6%", "+1.9%"], ["Opt-in rate", "72.4%", "+0.8%"]],
      columns: ["Form submitted", "Segment", "Nurture email", "Sales handoff"],
      rows: [],
    },
    status: "available",
  },
  {
    id: "campaigns",
    slug: "campaigns",
    name: "Campaigns",
    shortName: "Campaigns",
    category: "growth",
    icon: "Send",
    accent: "#9333ea",
    tagline: "Plan, approve and measure multi-channel campaigns.",
    description:
      "Plan campaigns on a calendar, prepare templates and content, route them through approvals and measure delivery and response.",
    modules: ["Dashboard", "Campaigns", "Calendar", "Templates", "Content", "Approvals", "Sends", "Experiments", "Reports", "Settings"],
    capabilities: [
      { title: "Campaign calendar", description: "See every planned and live campaign in one view." },
      { title: "Templates & content", description: "Reusable content for your channels." },
      { title: "Approvals", description: "Approval and launch gates before anything is sent." },
      { title: "Experiments", description: "Test variants and compare results." },
      { title: "Delivery & response", description: "Track delivery and conversion events." },
    ],
    useCase: {
      title: "Audience to measured response",
      description: "A campaign is prepared for a consented audience, approved, delivered and measured against conversions.",
    },
    preview: {
      kind: "chart",
      kpis: [["Campaigns live", "8", "+3"], ["Delivered", "96.8%", "+0.6%"], ["Click rate", "7.4%", "+1.2%"], ["Attributed revenue", "$184K", "+14.3%"]],
      columns: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
      rows: [["Email", "58"], ["SMS", "26"], ["WhatsApp", "16"]],
    },
    status: "available",
  },
  {
    id: "automation",
    slug: "automation",
    name: "Automation",
    shortName: "Automation",
    category: "intelligence",
    icon: "Zap",
    accent: "#2563eb",
    tagline: "Reliable cross-app workflows with versioned execution.",
    description:
      "Design workflows with triggers, conditions and actions, publish immutable versions, and follow every run with retries and logs.",
    modules: ["Dashboard", "Workflows", "Runs", "Schedules", "Webhooks", "Templates", "Connections", "Logs", "Settings"],
    capabilities: [
      { title: "Workflows", description: "Triggers, conditions and actions across your enabled apps." },
      { title: "Versioned publishing", description: "Every published workflow version is immutable." },
      { title: "Runs & retries", description: "Follow each run and retry failures explicitly." },
      { title: "Schedules", description: "Run workflows on a schedule." },
      { title: "Webhooks", description: "Signed outbound webhooks with retries." },
    ],
    useCase: {
      title: "Routine work, handled",
      description: "When a record changes in one app, a published workflow performs the follow-up actions and records every run.",
    },
    preview: {
      kind: "flow",
      kpis: [["Active workflows", "34", "+5"], ["Runs today", "8,412", "+12.8%"], ["Success rate", "99.2%", "+0.3%"], ["Needs attention", "7", "-4"]],
      columns: ["Trigger: Invoice overdue", "Condition: > 7 days", "Action: Create task", "Action: Notify owner"],
      rows: [],
    },
    status: "available",
  },
  {
    id: "analytics",
    slug: "analytics",
    name: "Analytics",
    shortName: "Analytics",
    category: "intelligence",
    icon: "ChartLine",
    accent: "#0d9488",
    tagline: "Governed metrics, reports, dashboards and scheduled insight.",
    description:
      "Define governed metrics once, build dashboards and reports across enabled apps, and schedule reports for delivery.",
    modules: ["Home", "Dashboards", "Reports", "Metrics", "Explore", "Scheduled Reports", "Exports", "Settings"],
    capabilities: [
      { title: "Governed metrics", description: "Metrics defined once and reused everywhere." },
      { title: "Dashboards", description: "Cross-app dashboards for every team." },
      { title: "Reports", description: "Saved reports with filters and drill-down." },
      { title: "Scheduled reports", description: "Deliver reports on a schedule." },
      { title: "Exports", description: "Export report data when you need it." },
    ],
    useCase: {
      title: "One view of the business",
      description: "Leaders review pipeline, receivables and delivery on one dashboard built from the apps the organisation uses.",
    },
    preview: {
      kind: "chart",
      kpis: [["Governed metrics", "86", "+7"], ["Dashboards", "24", "+3"], ["Scheduled reports", "18", "+2"], ["Freshness SLA", "98.7%", "+0.5%"]],
      columns: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      rows: [["Revenue", "64"], ["Pipeline", "52"], ["Collections", "38"]],
    },
    status: "available",
    featured: true,
  },
];

export const productById = (id: string) => products.find((p) => p.id === id);
export const productsByCategory = (id: ProductCategoryId) => products.filter((p) => p.category === id);
export const featuredProducts = products.filter((p) => p.featured);
export const categoryById = (id: ProductCategoryId) => productCategories.find((c) => c.id === id)!;
