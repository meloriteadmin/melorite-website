/**
 * Melorite products — single source of truth, taken from the Melorite company profile.
 * Every page, menu, footer and form reads from here.
 */
export type Product = {
  id: string;
  slug: string;
  name: string;
  short: string;
  icon: "Users" | "Building2" | "Stethoscope" | "Megaphone" | "ShoppingBag" | "Headset";
  summary: string;
  headline: [string, string];
  lead: string;
  body: string;
  does: string[];
  goodFor: string;
  kicker: string;
};

export const products: Product[] = [
  {
    id: "crm", slug: "crm", name: "Melorite CRM", short: "CRM", icon: "Users",
    summary: "Keep track of every lead, customer and follow-up, so no opportunity slips away.",
    headline: ["Never lose", "a lead again."],
    lead: "Every enquiry, call and follow-up, all in one place.",
    body: "You’ll always know who to call next, what they asked for last time, and which deals are about to close. No more digging through notebooks or chats.",
    does: ["Collects leads from your website, ads and WhatsApp", "Shows every deal and the stage it’s at", "Reminds your team when to follow up", "Keeps the full history of every customer", "Sends each lead to the right person", "Gives you clear, simple sales reports"],
    goodFor: "Any business that sells: sales teams, service businesses, consultants and growing companies of every size.",
    kicker: "Sales teams",
  },
  {
    id: "real-estate", slug: "real-estate", name: "Melorite Real Estate", short: "Real Estate", icon: "Building2",
    summary: "Manage projects, buyers, site visits, payments and documents, from first enquiry to final booking.",
    headline: ["From first enquiry", "to final booking."],
    lead: "Your projects, buyers and deals, without the paperwork piling up.",
    body: "See which units are available, where every buyer stands, and what payments are due, all from one place your whole sales team can use.",
    does: ["Lists all your projects, units and availability", "Tracks every buyer from enquiry to booking", "Schedules and manages site visits", "Manages brokers and channel partners", "Tracks payment schedules and dues", "Keeps documents organised for every deal"],
    goodFor: "Builders, developers, brokers and property managers.",
    kicker: "Real estate",
  },
  {
    id: "clinic", slug: "clinic", name: "Melorite Clinic", short: "Clinic", icon: "Stethoscope",
    summary: "Handle appointments, patient records, prescriptions and billing from one simple screen.",
    headline: ["Less paperwork.", "More time with patients."],
    lead: "Appointments, records and billing, all on one simple screen.",
    body: "Your front desk stays calm, your doctors see what they need before every visit, and patients get a smoother experience from booking to billing.",
    does: ["Books and manages appointments for every doctor", "Keeps complete patient records and history", "Creates prescriptions in seconds", "Handles billing and payments", "Sends reminders and follow-up messages", "Works for single and multi-doctor clinics"],
    goodFor: "Clinics of every kind: general, dental, skin, physiotherapy and specialty practices.",
    kicker: "Clinics",
  },
  {
    id: "agency", slug: "agency", name: "Melorite Agency", short: "Agency", icon: "Megaphone",
    summary: "Run client work, content calendars and approvals, with a private portal for every client.",
    headline: ["Run your agency smoothly.", "Keep clients in the loop."],
    lead: "No more “what’s the status on this?” messages.",
    body: "Manage your clients, projects and team in one place, and give every client a private portal where they can see exactly what’s happening on their account.",
    does: ["Keep all client details and work in one place", "Plan strategy, content calendars and campaigns", "Assign tasks and see who’s working on what", "Track deadlines, retainers, invoices and payments"],
    goodFor: "Digital marketing, social media, creative and performance agencies.",
    kicker: "Agencies",
  },
  {
    id: "commerce", slug: "commerce", name: "Melorite Commerce", short: "Commerce", icon: "ShoppingBag",
    summary: "Sell your products online, manage orders and stock, and get paid by UPI, card or COD.",
    headline: ["Your online store,", "made simple."],
    lead: "Sell your products online without juggling five different tools.",
    body: "Add products, take orders, collect payments and track deliveries, so you can spend your time growing your brand instead of managing it.",
    does: ["Gives you your own online store", "Manages products, sizes, colours and stock", "Tracks every order from placed to delivered", "Accepts UPI, cards and cash on delivery", "Keeps your customer list and repeat buyers", "Shows your sales at a glance"],
    goodFor: "Clothing brands, D2C brands, retail stores and anyone who wants to sell online.",
    kicker: "Online sellers",
  },
  {
    id: "ai-calling", slug: "ai-calling", name: "Melorite AI Calling", short: "AI Calling", icon: "Headset",
    summary: "An AI agent that answers your incoming calls and makes your outgoing ones.",
    headline: ["An extra team member", "on the phone, all day."],
    lead: "It answers your calls and makes them for you.",
    body: "Melorite AI Calling talks to your customers naturally, understands what they need and gets things done. After every call, it notes what was said and what happens next, so nothing slips through.",
    does: [],
    goodFor: "Clinics, real estate teams, agencies, online stores, sales teams and any business that runs on the phone.",
    kicker: "Every business on the phone",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const agencyPortal = ["See their strategy and content calendar", "Follow tasks and work in progress", "Preview posts and reels before they go live", "Approve work or ask for revisions in one click", "Check invoices and payment status", "Get every update without a single call"];

export const callFlows = {
  inbound: { title: "Inbound calls", subtitle: "When customers call you", steps: ["Answers every call, even after hours", "Understands what the caller needs", "Books appointments, site visits and meetings", "Answers common questions", "Takes enquiries and passes them to your team"] },
  outbound: { title: "Outbound calls", subtitle: "When you need to reach them", steps: ["Calls new leads while they’re still interested", "Follows up at the right time", "Sends reminders and confirms bookings", "Confirms orders before you ship", "Reaches customers who left items in their cart"] },
};

export const reasons = [
  ["It already fits", "Each product is built for one kind of business, so it works the way you already do."],
  ["Guided setup", "We plan setup around your workflow and the scope your team needs."],
  ["Easy for everyone", "Clean, simple screens your team will understand from day one."],
  ["Saves your time", "Reminders and simple workflows take care of the repetitive work."],
  ["Controlled access", "Decide who can access the records relevant to their work. Discuss hosting and security requirements during setup."],
  ["Grows with you", "Add people, branches and features whenever you need them."],
  ["We’re with you", "Real people to help you set up, and to support you long after you go live."],
] as const;

export const customBuilds = ["Custom features added to any Melorite product", "Workflows and approvals made for your process", "Connections with the tools you already use", "Dashboards and reports you actually need", "Portals for your customers, partners or team", "Complete software, built from scratch"];
export const customSteps = [["Discovery", "We learn how the work runs today, where it slows down and what a better outcome looks like."], ["Plan", "You get a clear scope, delivery approach and commercial plan before the build begins."], ["Build", "We create the workflow in useful stages and review progress with the people who will use it."], ["Launch", "We prepare the workspace, help the team understand it and move the agreed process live."], ["Support", "We stay available after launch and help the solution evolve as the business changes."]] as const;
export const startSteps = [["Book a demo", "Tell us about your business. We’ll show you exactly how Melorite works for you."], ["We set it up", "We set everything up around the way your team works. You don’t have to figure it out alone."], ["You go live", "Your team starts using it from day one, and we’re still here whenever you need us."]] as const;
export const painPoints = ["A patient calls after hours and books with another clinic.", "A buyer asks about a flat, and nobody calls back for two days.", "A client asks “what’s the status?” for the fifth time this week.", "A COD order comes back because no one confirmed it.", "Your team spends more time on spreadsheets than on real work."];

export const enquiryTypes = [
  { value: "demo", label: "Book a demo" },
  { value: "sales", label: "Talk to sales" },
  { value: "custom", label: "Custom solution" },
  { value: "general", label: "General enquiry" },
] as const;
export const preferredTimes = ["morning", "afternoon", "evening", "flexible"] as const;
export const businessTypes = ["sales", "real-estate", "clinic", "agency", "commerce", "other"] as const;
export const teamSizes = ["1-5", "6-20", "21-50", "51-200", "200+"] as const;
export const productInterests = [...products.map(({ id, name }) => ({ id, name })), { id: "custom-solution", name: "Custom Solution" }] as const;
