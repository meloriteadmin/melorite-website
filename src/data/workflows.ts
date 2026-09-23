/**
 * Cross-app flows shown on the Home and Platform pages.
 *
 * `link` describes the hand-off INTO a step from the previous one:
 *  - "available":   implemented in the platform today (audited, transactional).
 *  - "rolling-out": part of the platform design and actively being completed.
 * Keep these honest — update a link to "available" only once it ships.
 */
export type LinkStatus = "available" | "rolling-out";

export type FlowStep = {
  label: string;
  app: string;
  detail: string;
  link?: LinkStatus;
};

export type Flow = {
  id: string;
  name: string;
  summary: string;
  steps: FlowStep[];
};

export const flows: Flow[] = [
  {
    id: "revenue",
    name: "Lead to cash",
    summary: "A lead becomes revenue without re-keying customer or order details.",
    steps: [
      { label: "Lead", app: "crm", detail: "Captured, assigned and qualified." },
      { label: "Opportunity", app: "crm", detail: "Lead converts into account, contact and opportunity.", link: "available" },
      { label: "Quotation", app: "sales", detail: "Built from the shared product catalogue.", link: "available" },
      { label: "Sales order", app: "sales", detail: "Accepted quotation becomes an order.", link: "available" },
      { label: "Invoice", app: "finance", detail: "Raised directly from the sales order.", link: "available" },
      { label: "Payment", app: "finance", detail: "Full or partial payment recorded.", link: "available" },
      { label: "Dashboard", app: "analytics", detail: "Governed metrics across the flow.", link: "available" },
    ],
  },
  {
    id: "procure",
    name: "Procure to stock",
    summary: "Purchasing and stock share one vendor and item master.",
    steps: [
      { label: "Request", app: "procurement", detail: "Internal purchase request." },
      { label: "Purchase order", app: "procurement", detail: "Issued to a shared vendor record.", link: "available" },
      { label: "Goods receipt", app: "procurement", detail: "Goods received against the PO.", link: "available" },
      { label: "Stock ledger", app: "inventory", detail: "Warehouse balances update.", link: "available" },
      { label: "Vendor bill", app: "procurement", detail: "Bill recorded against the order.", link: "available" },
      { label: "Ledger posting", app: "finance", detail: "Automatic posting to the general ledger.", link: "rolling-out" },
    ],
  },
  {
    id: "people",
    name: "Hire to pay",
    summary: "One employee record from candidate to payslip.",
    steps: [
      { label: "Candidate", app: "hr", detail: "Recruitment pipeline." },
      { label: "Employee", app: "hr", detail: "Shared employee master.", link: "available" },
      { label: "Leave & attendance", app: "hr", detail: "Tracked against the employee.", link: "available" },
      { label: "Payroll run", app: "payroll", detail: "Calculated, reviewed, approved.", link: "available" },
      { label: "Payslip", app: "payroll", detail: "Issued per employee.", link: "available" },
      { label: "Ledger posting", app: "finance", detail: "Payroll posted to accounts.", link: "rolling-out" },
    ],
  },
  {
    id: "growth",
    name: "Campaign to pipeline",
    summary: "Consent-aware campaigns connected to customer records.",
    steps: [
      { label: "Audience", app: "marketing", detail: "Segments from shared contacts." },
      { label: "Campaign", app: "campaigns", detail: "Prepared and approved before launch.", link: "available" },
      { label: "Delivery", app: "campaigns", detail: "Consent-filtered sends.", link: "available" },
      { label: "Conversion", app: "campaigns", detail: "Delivery and conversion events.", link: "available" },
      { label: "CRM activity", app: "crm", detail: "Responses logged on the contact.", link: "rolling-out" },
      { label: "Attribution", app: "marketing", detail: "Outcomes attributed to campaigns.", link: "rolling-out" },
    ],
  },
];

/** Shared master data reused across apps (verified in the platform data model). */
export const sharedRecords = [
  { id: "customer", label: "Customer & contact", owner: "crm", apps: ["crm", "sales", "finance", "projects", "service", "commerce", "marketing", "campaigns"] },
  { id: "product", label: "Product & service", owner: "sales", apps: ["sales", "commerce", "procurement", "inventory", "finance"] },
  { id: "employee", label: "Employee", owner: "hr", apps: ["hr", "payroll", "projects", "operations", "service"] },
  { id: "vendor", label: "Vendor", owner: "procurement", apps: ["procurement", "finance", "inventory"] },
  { id: "document", label: "Document", owner: "documents", apps: ["documents", "crm", "sales", "finance", "hr", "projects", "service", "procurement"] },
];
