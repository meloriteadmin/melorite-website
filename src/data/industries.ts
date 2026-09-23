/**
 * Melorite Industry Solutions — mirrors the platform's code-owned industry packs
 * (`@melorite/core` → `industryBlueprints`). Each solution extends the shared
 * Business Apps rather than duplicating them; `apps` lists those dependencies.
 *
 * `image` is industry photography (Unsplash License, credited). Replace with
 * approved in-house photography by changing `src` — any path under /public or
 * an allowed remote host works.
 */
import type { Availability } from "./products";

export type IndustryGroupId = "healthcare" | "property" | "supply-chain" | "services" | "community";

export type Industry = {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  group: IndustryGroupId;
  icon: string;
  accent: string;
  description: string;
  longDescription: string;
  modules: string[];
  apps: string[];
  workflows: { name: string; steps: string[] }[];
  useCase: {
    title: string;
    problem: string;
    capabilities: string[];
    benefit: string;
  };
  /** Industry photograph (Unsplash License) with credit, shown in cards and heroes. */
  image?: { src: string; alt: string; credit: string };
  status: Availability;
  featured?: boolean;
};

export const industryGroups: { id: IndustryGroupId; name: string }[] = [
  { id: "healthcare", name: "Healthcare" },
  { id: "property", name: "Property & Construction" },
  { id: "supply-chain", name: "Supply Chain & Retail" },
  { id: "services", name: "Service Businesses" },
  { id: "community", name: "Education & Community" },
];

export const industries: Industry[] = [
  {
    id: "hospital",
    slug: "hospital",
    name: "Hospital",
    fullName: "Hospital Management",
    group: "healthcare",
    icon: "Hospital",
    accent: "#0f766e",
    description: "Connected patient, clinical, facility and billing operations.",
    longDescription:
      "Patient registration, appointments, outpatient and inpatient care, beds, pharmacy and diagnostics — built on the same Finance, Inventory, HR and Documents engines the rest of the platform uses.",
    modules: ["Patients", "Providers", "Appointments", "OPD", "IPD", "Consultations", "Beds & Rooms", "Pharmacy", "Diagnostics", "Medical Records"],
    apps: ["crm", "finance", "hr", "payroll", "procurement", "inventory", "service", "documents", "analytics", "automation"],
    workflows: [
      { name: "Outpatient journey", steps: ["Patient", "Appointment", "Check-in", "Consultation", "Order or prescription", "Billing", "Follow-up"] },
      { name: "Inpatient stay", steps: ["Admission", "Bed allocation", "Inpatient care", "Diagnostics or pharmacy", "Discharge", "Settlement"] },
      { name: "Pharmacy dispensing", steps: ["Batch or expiry", "Dispense", "Inventory", "Billing"] },
    ],
    useCase: {
      title: "One record from appointment to settlement",
      problem: "Patient, bed, pharmacy and billing information often lives in separate systems, which makes discharge and settlement slow.",
      capabilities: ["Appointments & OPD", "IPD & Beds", "Pharmacy on shared Inventory", "Billing through Finance"],
      benefit: "Care teams and billing work from the same patient journey, so discharge and settlement follow naturally from care.",
    },
    image: { src: "https://images.unsplash.com/photo-1576671081741-c538eafccfff", alt: "Clinician caring for a patient in a hospital room", credit: "National Cancer Institute" },
    status: "early-access",
    featured: true,
  },
  {
    id: "clinic",
    slug: "clinic",
    name: "Clinic",
    fullName: "Clinic Management",
    group: "healthcare",
    icon: "Stethoscope",
    accent: "#0284c7",
    description: "Appointments, consultations, treatments and follow-up for outpatient practices.",
    longDescription:
      "Manage patients, appointment slots, consultations, treatment packages, prescriptions and follow-ups for outpatient practices.",
    modules: ["Patients", "Appointments", "Consultations", "Treatments & Procedures", "Prescriptions", "Follow-ups"],
    apps: ["crm", "finance", "inventory", "hr", "campaigns", "documents", "analytics", "automation"],
    workflows: [
      { name: "Patient visit", steps: ["Lead or referral", "Patient", "Appointment", "Consultation or treatment", "Billing", "Follow-up"] },
      { name: "Treatment package", steps: ["Package", "Sessions", "Completion", "Review"] },
      { name: "Consumables", steps: ["Consumable use", "Inventory", "Reorder"] },
    ],
    useCase: {
      title: "Follow-ups that don't slip",
      problem: "Treatment packages and follow-ups are easy to lose track of when bookings, notes and billing are separate.",
      capabilities: ["Appointments", "Treatment packages", "Follow-up reminders", "Billing through Finance"],
      benefit: "Every session and follow-up is visible against the patient, with consumables drawn from shared stock.",
    },
    image: { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133", alt: "Doctor talking with a patient in a clinic", credit: "National Cancer Institute" },
    status: "early-access",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    fullName: "Real Estate Management",
    group: "property",
    icon: "Building2",
    accent: "#7c3aed",
    description: "Property inventory, visits, bookings, collections and handovers.",
    longDescription:
      "Structure projects into towers and units, track availability, site visits and bookings, schedule milestone collections and manage handover — with CRM, Sales and Finance underneath.",
    modules: ["Projects", "Structures", "Units", "Availability", "Site Visits", "Bookings", "Collections", "Channel Partners", "Brokers", "Handover"],
    apps: ["crm", "sales", "finance", "marketing", "campaigns", "documents", "hr", "analytics", "automation"],
    workflows: [
      { name: "Unit sale", steps: ["Lead", "Site visit", "Unit hold", "Booking", "Collection", "Documents", "Handover"] },
      { name: "Channel partner", steps: ["Partner lead", "Attribution", "Visit", "Booking", "Commission"] },
      { name: "Milestone collections", steps: ["Milestone", "Demand", "Collection", "Receipt", "Overdue follow-up"] },
    ],
    useCase: {
      title: "From site visit to handover",
      problem: "Unit availability, bookings and milestone collections are frequently tracked in spreadsheets that drift out of date.",
      capabilities: ["Units & availability", "Site visits & bookings", "Milestone collections", "Partner attribution"],
      benefit: "Sales, collections and handover teams share one live view of every unit and every buyer.",
    },
    image: { src: "https://images.unsplash.com/photo-1515263487990-61b07816b324", alt: "Modern residential building", credit: "Luke van Zyl" },
    status: "early-access",
    featured: true,
  },
  {
    id: "construction",
    slug: "construction",
    name: "Construction",
    fullName: "Construction Management",
    group: "property",
    icon: "HardHat",
    accent: "#ea580c",
    description: "BOQ-driven site delivery, measurement, safety and billing.",
    longDescription:
      "Estimate with BOQs, break work into packages, track site progress and materials, record measurements and bills, and manage quality and safety.",
    modules: ["Construction Projects", "BOQ & Estimates", "Work Packages", "Site Progress", "Subcontractors", "Material at Site", "Measurements & Bills", "Quality & Safety", "Equipment"],
    apps: ["projects", "procurement", "inventory", "finance", "hr", "payroll", "documents", "crm", "sales", "analytics", "automation"],
    workflows: [
      { name: "Estimate to collection", steps: ["Estimate or BOQ", "Project baseline", "Procurement and packages", "Execution", "Measurement", "Billing", "Collection"] },
      { name: "Site materials", steps: ["Material request", "Purchase or transfer", "Site receipt", "Consumption"] },
      { name: "Quality", steps: ["Inspection", "NCR", "Closure"] },
    ],
    useCase: {
      title: "Measured work, billed accurately",
      problem: "Site progress, material consumption and measurement bills are hard to reconcile with the original estimate.",
      capabilities: ["BOQ & estimates", "Site progress", "Material at site", "Measurements & bills"],
      benefit: "Billing is based on recorded measurements against the BOQ, with materials traced from purchase to site.",
    },
    image: { src: "https://images.unsplash.com/photo-1593436878396-e943a3cac98f", alt: "Construction crew on a building site", credit: "Mika Baumeister" },
    status: "early-access",
    featured: true,
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing",
    fullName: "Manufacturing Management",
    group: "supply-chain",
    icon: "Factory",
    accent: "#475569",
    description: "Planning, production, quality and traceability on shared supply engines.",
    longDescription:
      "Bills of materials, routings and work centres feed production orders and planning, with shop-floor execution, quality and traceability on top of shared Inventory and Procurement.",
    modules: ["Bill of Materials", "Routings", "Work Centers", "Production Orders", "MRP & Planning", "Shop Floor", "Quality", "Traceability", "Subcontracting"],
    apps: ["sales", "procurement", "inventory", "finance", "hr", "payroll", "operations", "documents", "analytics", "automation"],
    workflows: [
      { name: "Plan to finished stock", steps: ["Demand", "Planning", "Purchase, transfer or production", "Shop floor", "Quality", "Finished stock"] },
      { name: "Quality failure", steps: ["Quality failure", "NCR", "Correction, rework or scrap"] },
      { name: "Machine maintenance", steps: ["Maintenance schedule", "Machine availability"] },
    ],
    useCase: {
      title: "Production that knows its materials",
      problem: "Production plans are often disconnected from real stock and purchasing, which causes shortages on the shop floor.",
      capabilities: ["BOM & routings", "Production orders", "Quality & NCR", "Traceability"],
      benefit: "Production, purchasing and stock work from the same item master and the same stock ledger.",
    },
    image: { src: "https://images.unsplash.com/photo-1717386255773-1e3037c81788", alt: "Automated production line in a factory", credit: "Homa Appliances" },
    status: "early-access",
    featured: true,
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail",
    fullName: "Retail Management",
    group: "supply-chain",
    icon: "ShoppingBag",
    accent: "#c026d3",
    description: "Stores, point of sale, promotions, returns and loyalty.",
    longDescription:
      "Run stores and point of sale with a shared retail catalogue, promotions, returns and exchanges, loyalty and store operations.",
    modules: ["Stores", "POS", "Retail Catalog", "Promotions", "Returns & Exchanges", "Loyalty", "Store Operations"],
    apps: ["inventory", "procurement", "finance", "crm", "campaigns", "hr", "payroll", "service", "analytics", "automation"],
    workflows: [
      { name: "Store sale", steps: ["POS sale", "Payment", "Inventory", "Finance", "Customer history"] },
      { name: "Returns", steps: ["Return", "Refund or exchange", "Inventory and Finance"] },
      { name: "Replenishment", steps: ["Low stock", "Replenishment"] },
    ],
    useCase: {
      title: "Every sale updates everything",
      problem: "Store sales, stock and customer history often update at different times in different systems.",
      capabilities: ["POS", "Returns & exchanges", "Loyalty", "Replenishment"],
      benefit: "A sale, return or exchange is reflected in stock, finance and the customer's history.",
    },
    image: { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8", alt: "Clothing store interior", credit: "Clark Street Mercantile" },
    status: "early-access",
  },
  {
    id: "logistics-and-transport",
    slug: "logistics-and-transport",
    name: "Logistics & Transport",
    fullName: "Logistics & Transport Management",
    group: "supply-chain",
    icon: "Truck",
    accent: "#0891b2",
    description: "Orders, shipments, trips, tracking, proof of delivery and claims.",
    longDescription:
      "Transport orders become shipments and trips with vehicles and drivers, tracking events, proof of delivery, freight billing and exception handling.",
    modules: ["Transport Orders", "Shipments", "Routes & Trips", "Vehicles", "Drivers", "Tracking Events", "Proof of Delivery", "Freight Billing", "Claims & Exceptions"],
    apps: ["crm", "sales", "finance", "operations", "hr", "service", "documents", "analytics", "automation"],
    workflows: [
      { name: "Order to invoice", steps: ["Order", "Shipment", "Trip", "Pickup", "Tracking", "Proof of delivery", "Invoice"] },
      { name: "Exceptions", steps: ["Exception", "Notification", "Claim", "Resolution"] },
      { name: "Vehicle service", steps: ["Service due", "Maintenance", "Availability"] },
    ],
    useCase: {
      title: "Delivery proven, invoice ready",
      problem: "Proof of delivery and freight billing are often separate steps, delaying invoicing and hiding exceptions.",
      capabilities: ["Shipments & trips", "Tracking events", "Proof of delivery", "Freight billing"],
      benefit: "Once delivery is confirmed, the shipment is ready for billing and any exception has a clear owner.",
    },
    image: { src: "https://images.unsplash.com/photo-1786081061992-640cfd629fdc", alt: "Freight truck on a highway at night", credit: "Nishat Samadzai" },
    status: "early-access",
    featured: true,
  },
  {
    id: "distribution-and-wholesale",
    slug: "distribution-and-wholesale",
    name: "Distribution & Wholesale",
    fullName: "Distribution & Wholesale Management",
    group: "supply-chain",
    icon: "Warehouse",
    accent: "#2563eb",
    description: "Dealer ordering, allocation, dispatch, returns and collections.",
    longDescription:
      "Manage dealers and distributors, take orders at the order desk, allocate and dispatch stock, and follow returns and collections.",
    modules: ["Dealers & Distributors", "Order Desk", "Distribution Pricing", "Allocation", "Dispatch", "Returns", "Collections"],
    apps: ["crm", "sales", "inventory", "procurement", "finance", "campaigns", "service", "analytics", "automation"],
    workflows: [
      { name: "Dealer order", steps: ["Dealer order", "Credit and availability", "Allocation", "Dispatch", "Invoice", "Collection"] },
      { name: "Returns", steps: ["Return", "Inspection", "Stock and credit update"] },
    ],
    useCase: {
      title: "Allocation with the full picture",
      problem: "Order desks need credit, stock and pricing together to allocate confidently.",
      capabilities: ["Order desk", "Allocation", "Dispatch", "Collections"],
      benefit: "Dealer orders are checked, allocated and dispatched using the same stock and customer records as the rest of the business.",
    },
    image: { src: "https://images.unsplash.com/photo-1709804945989-c8be542e04db", alt: "Stacked inventory in a distribution warehouse", credit: "Ali Mkumbwa" },
    status: "early-access",
  },
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Hospitality",
    fullName: "Hospitality Management",
    group: "services",
    icon: "Hotel",
    accent: "#db2777",
    description: "Property, reservation, stay, housekeeping and guest-service operations.",
    longDescription:
      "Properties and rooms, reservations, front desk, guests, housekeeping, guest requests, events and property maintenance.",
    modules: ["Properties & Rooms", "Reservations", "Front Desk", "Guests", "Housekeeping", "Guest Requests", "Events & Functions", "Property Maintenance"],
    apps: ["crm", "sales", "finance", "inventory", "hr", "payroll", "service", "campaigns", "operations", "analytics", "automation"],
    workflows: [
      { name: "Guest stay", steps: ["Reservation", "Pre-arrival", "Check-in", "Stay", "Check-out", "Feedback"] },
      { name: "Room turnaround", steps: ["Checkout", "Housekeeping", "Inspection", "Available"] },
      { name: "Guest requests", steps: ["Guest request", "Assignment", "Completion"] },
    ],
    useCase: {
      title: "Rooms ready, guests looked after",
      problem: "Front desk, housekeeping and maintenance need a shared view of room status to turn rooms around quickly.",
      capabilities: ["Reservations", "Front desk", "Housekeeping", "Guest requests"],
      benefit: "Checkout triggers housekeeping and inspection, and the room becomes available as soon as it is ready.",
    },
    image: { src: "https://images.unsplash.com/photo-1724230758718-406bab979e67", alt: "Front desk at a hospitality venue", credit: "Zoshua Colah" },
    status: "early-access",
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    fullName: "Professional Services Management",
    group: "services",
    icon: "Briefcase",
    accent: "#4f46e5",
    description: "Engagements, retainers, deliverables, requests and resource planning.",
    longDescription:
      "Engagements and retainers, deliverables, client requests, review and approval, and resource planning on top of CRM, Projects and Finance.",
    modules: ["Engagements", "Retainers", "Deliverables", "Client Requests", "Review & Approval", "Resource Planning"],
    apps: ["crm", "sales", "projects", "finance", "hr", "campaigns", "documents", "service", "analytics", "automation"],
    workflows: [
      { name: "Engagement lifecycle", steps: ["Lead", "Proposal or contract", "Engagement", "Deliverables and time", "Invoice", "Renewal"] },
      { name: "Client requests", steps: ["Client request", "Project or task", "Review", "Completion"] },
    ],
    useCase: {
      title: "Engagements that bill themselves",
      problem: "Time, deliverables and retainers are often tracked apart from invoicing, making billing slow.",
      capabilities: ["Engagements & retainers", "Deliverables", "Review & approval", "Resource planning"],
      benefit: "Deliverables and time are captured against the engagement, ready for invoicing and renewal.",
    },
    image: { src: "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3", alt: "Consulting team working together", credit: "Lyubomyr Reverchuk" },
    status: "early-access",
  },
  {
    id: "recruitment-and-staffing",
    slug: "recruitment-and-staffing",
    name: "Recruitment & Staffing",
    fullName: "Recruitment & Staffing Management",
    group: "services",
    icon: "UserSearch",
    accent: "#9333ea",
    description: "Client requisitions, candidate pipelines, placements and staffing timesheets.",
    longDescription:
      "Client requisitions, candidates, sourcing, screening, interviews, submissions, offers and placements, plus staffing timesheets that feed payroll and billing.",
    modules: ["Clients & Requisitions", "Candidates", "Sourcing", "Screening", "Interviews", "Submissions", "Offers & Placements", "Staffing Timesheets"],
    apps: ["crm", "sales", "hr", "payroll", "projects", "finance", "campaigns", "documents", "analytics", "automation"],
    workflows: [
      { name: "Placement", steps: ["Client requisition", "Sourcing", "Screening", "Submission", "Interview", "Offer", "Placement"] },
      { name: "Staffing", steps: ["Staff assignment", "Timesheet", "Payroll and billing"] },
    ],
    useCase: {
      title: "Requisition to placement",
      problem: "Candidate pipelines, client submissions and staffing timesheets are frequently managed in different tools.",
      capabilities: ["Requisitions", "Candidate pipeline", "Submissions", "Staffing timesheets"],
      benefit: "Placements flow into timesheets that serve both payroll and client billing.",
    },
    image: { src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21", alt: "Candidate interview in progress", credit: "Christina @ wocintechchat.com" },
    status: "early-access",
  },
  {
    id: "facility-management",
    slug: "facility-management",
    name: "Facility Management",
    fullName: "Facility Management",
    group: "services",
    icon: "Building",
    accent: "#0f766e",
    description: "Contracted sites, schedules, work orders, inspections and SLA reporting.",
    longDescription:
      "Sites and contracts, service schedules, work orders, manpower deployment, assets, inspections, consumables and client SLA reporting.",
    modules: ["Sites & Contracts", "Service Schedules", "Work Orders", "Manpower Deployment", "Assets & Equipment", "Inspections", "Consumables", "Client SLA"],
    apps: ["service", "operations", "hr", "payroll", "inventory", "procurement", "finance", "projects", "documents", "analytics", "automation"],
    workflows: [
      { name: "Scheduled service", steps: ["Contract and site", "Schedule", "Staff and assets", "Execute", "Inspect", "SLA report", "Billing"] },
      { name: "Reactive work", steps: ["Issue", "Work order", "Completion", "Client update"] },
    ],
    useCase: {
      title: "SLAs you can show",
      problem: "Facility teams need to prove service delivery against contracted SLAs across many sites.",
      capabilities: ["Service schedules", "Work orders", "Inspections", "Client SLA"],
      benefit: "Scheduled and reactive work is recorded site by site, ready for SLA reporting and billing.",
    },
    image: { src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a", alt: "Technician servicing building equipment", credit: "Emmanuel Ikwuegbu" },
    status: "early-access",
  },
  {
    id: "automotive-service",
    slug: "automotive-service",
    name: "Automotive Service",
    fullName: "Automotive Service Management",
    group: "services",
    icon: "Car",
    accent: "#0284c7",
    description: "Vehicle appointments, inspections, job cards, parts and delivery.",
    longDescription:
      "Customers and vehicles, appointments, job cards, inspections, service packages, parts usage, warranty claims and vehicle delivery.",
    modules: ["Customers & Vehicles", "Appointments", "Job Cards", "Inspections", "Service Packages", "Parts Usage", "Warranty & Claims", "Vehicle Delivery"],
    apps: ["crm", "service", "inventory", "procurement", "finance", "hr", "documents", "campaigns", "analytics", "automation"],
    workflows: [
      { name: "Service visit", steps: ["Appointment", "Check-in", "Job card and inspection", "Approval", "Repair", "Parts and labour", "Invoice", "Delivery"] },
    ],
    useCase: {
      title: "Job card to delivery",
      problem: "Workshops need inspections, approvals, parts and labour in one place to invoice accurately.",
      capabilities: ["Job cards", "Inspections", "Parts from Inventory", "Invoicing through Finance"],
      benefit: "Parts and labour recorded on the job card flow straight to the invoice.",
    },
    image: { src: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54", alt: "Mechanic working on a car in a service bay", credit: "Dextar Studio" },
    status: "early-access",
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    fullName: "Education Management",
    group: "community",
    icon: "GraduationCap",
    accent: "#d97706",
    description: "Admissions, students, academics, attendance, results and fees.",
    longDescription:
      "Admissions, students, programmes and courses, batches and classes, timetables, attendance, exams and results, fees and faculty academics.",
    modules: ["Students", "Admissions", "Programs & Courses", "Batches & Classes", "Timetable", "Attendance", "Exams & Results", "Fees", "Faculty Academic"],
    apps: ["crm", "finance", "hr", "payroll", "campaigns", "documents", "analytics", "automation"],
    workflows: [
      { name: "Student lifecycle", steps: ["Enquiry", "Admission", "Student", "Classes", "Attendance", "Exams", "Results"] },
      { name: "Fees", steps: ["Fee plan", "Due", "Reminder", "Receipt"] },
      { name: "Faculty", steps: ["Faculty", "Timetable", "Classes and results"] },
    ],
    useCase: {
      title: "Enquiry to results",
      problem: "Admissions, academics and fees are often split across systems, making the student record incomplete.",
      capabilities: ["Admissions", "Timetable & attendance", "Exams & results", "Fees through Finance"],
      benefit: "Each student's admission, attendance, results and fees sit on one record.",
    },
    image: { src: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586", alt: "Students in a lecture", credit: "Taylor Flowe" },
    status: "early-access",
    featured: true,
  },
  {
    id: "nonprofit-and-association",
    slug: "nonprofit-and-association",
    name: "Nonprofit & Association",
    fullName: "Nonprofit & Association Management",
    group: "community",
    icon: "HeartHandshake",
    accent: "#059669",
    description: "Memberships, donors, programmes, volunteers, events and grants.",
    longDescription:
      "Members and memberships, donors and donations, programmes, volunteers, events and grants, reusing CRM, Finance, Projects and Campaigns.",
    modules: ["Members", "Donors", "Memberships", "Programs", "Donations", "Volunteers", "Events", "Grants"],
    apps: ["crm", "finance", "projects", "campaigns", "documents", "service", "analytics", "automation"],
    workflows: [
      { name: "Membership", steps: ["Member signup", "Membership", "Renewal"] },
      { name: "Donations", steps: ["Donor campaign", "Donation", "Receipt", "Programme allocation"] },
      { name: "Grants", steps: ["Grant", "Programme", "Milestone", "Report"] },
    ],
    useCase: {
      title: "Donations tied to impact",
      problem: "Donations, grants and programmes are hard to connect when they live in separate tools.",
      capabilities: ["Donors & donations", "Memberships", "Programmes", "Grants"],
      benefit: "Donations and grants are allocated to programmes, with receipts and reporting on the same platform.",
    },
    image: { src: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1", alt: "Volunteers working together", credit: "Rashpal Singh" },
    status: "early-access",
  },
];

export const industryById = (id: string) => industries.find((i) => i.id === id);
export const featuredIndustries = industries.filter((i) => i.featured);
export const industriesByGroup = (g: IndustryGroupId) => industries.filter((i) => i.group === g);
export const industriesUsingApp = (appId: string) => industries.filter((i) => i.apps.includes(appId));
