export type Feature = {
  title: string;
  source: string;
  body: string;
  color: "indigo" | "coral" | "teal" | "green";
};

export type ProductPageContent = {
  slug: string;
  eyebrow: string;
  headline: [string, string];
  subhead: string;
  problemThing: string;
  problemTitle: string;
  problemCopy: string[];
  staleWarning: string;
  workspace: string;
  features: Feature[];
  showcaseOne: { title: string; body: string };
  showcaseTwo: { number: string; title: string; body: string; link: string };
  signalsTitle: [string, string];
  signals: [string, string, string];
};

const feature = (title: string, source: string, body: string, color: Feature["color"]): Feature => ({ title, source, body, color });

export const productPages: Record<string, ProductPageContent> = {
  crm: {
    slug: "crm",
    eyebrow: "Melorite CRM & Growth",
    headline: ["Never lose", "a lead again."],
    subhead: "Bring leads, campaigns, customer history and your sales pipeline into one working view.",
    problemThing: "pipeline",
    problemTitle: "Your pipeline shouldn’t depend on memory.",
    problemCopy: [
      "A lead arrives on WhatsApp. A quote lives in someone’s inbox. The next call is written in a notebook.",
      "By the time your team pieces it together, the customer has moved on. That’s why we built Melorite CRM & Growth.",
    ],
    staleWarning: "6 of 8 fields are missing or outdated",
    workspace: "sales workspace",
    features: [
      feature("Leads & sources", "Website · ads · WhatsApp", "Capture enquiries and track the campaigns and sources behind them.", "indigo"),
      feature("Scoring & assignment", "Qualification · routing", "Prioritize leads with agreed scoring rules and a clear owner.", "teal"),
      feature("Sales pipeline", "Accounts · opportunities", "Connect contacts and accounts to opportunities at every stage.", "coral"),
      feature("Activities & sequences", "Follow-ups · automation", "Plan repeatable sales sequences and keep the next activity visible.", "green"),
      feature("Customer history", "Contacts · conversations", "Keep customer management grounded in calls, notes and earlier work.", "indigo"),
      feature("Quotes & sales orders", "Commercials", "Keep quotations, agreed values and sales orders connected.", "coral"),
      feature("Reports & forecasting", "Sales overview", "Review campaign performance, pipeline value and expected sales.", "teal"),
      feature("Mobile ready", "Anywhere access", "Update a lead right after a meeting or call.", "green"),
    ],
    showcaseOne: { title: "Never lose a lead again.", body: "See every open lead, its owner and the next promised action. Nothing depends on someone remembering." },
    showcaseTwo: { number: "01", title: "Start each day with the right calls.", body: "Melorite sorts follow-ups by urgency and keeps the last conversation beside them, so your team can pick up exactly where it left off.", link: "See the follow-up view" },
    signalsTitle: ["Know what needs attention.", "Before the day gets away."],
    signals: ["A quote was opened twice today", "No reply for five working days", "Follow-up due at 4:30 pm"],
  },
  "real-estate": {
    slug: "real-estate",
    eyebrow: "Melorite Real Estate",
    headline: ["From first enquiry", "to final booking."],
    subhead: "Manage projects, inventory, buyers, visits, bookings, payments and documents in one place.",
    problemThing: "project sheet",
    problemTitle: "Property sales need one source of truth.",
    problemCopy: [
      "A buyer asks for a unit that was put on hold yesterday. A site visit happens, but the notes never reach the sales desk.",
      "The gap becomes a missed booking or an awkward call. That’s why we built Melorite Real Estate.",
    ],
    staleWarning: "6 of 8 buyer fields are missing or outdated",
    workspace: "project workspace",
    features: [
      feature("Unit inventory", "Projects · towers · floors", "See available, held and sold units at a glance.", "indigo"),
      feature("Buyer records", "Enquiry to booking", "Keep every preference, call and document together.", "teal"),
      feature("Site visits", "Calendar", "Book visits and make sure the right person is ready.", "coral"),
      feature("Broker desk", "Channel partners", "Track sources, partners and the buyers they bring.", "green"),
      feature("Payment plans", "Collections", "See upcoming instalments and overdue amounts clearly.", "indigo"),
      feature("Documents", "Buyer files", "Keep forms, receipts and agreements on the right record.", "coral"),
      feature("Lead routing", "Sales team", "Assign enquiries by project, source or location.", "teal"),
      feature("Project reports", "Live overview", "See visits, bookings and inventory without a new spreadsheet.", "green"),
    ],
    showcaseOne: { title: "See what is truly available.", body: "Open one live grid for every unit, hold and booking, with the buyer and payment context close by." },
    showcaseTwo: { number: "02", title: "Turn site visits into clear next steps.", body: "Log what the buyer liked, schedule the next call and keep everyone on the same page before they leave the site.", link: "See the visit planner" },
    signalsTitle: ["See momentum early.", "Catch risk before it spreads."],
    signals: ["Buyer returned to the price plan", "Token payment is two days late", "Site visit tomorrow at 11:00 am"],
  },
  clinic: {
    slug: "clinic",
    eyebrow: "Melorite Clinic",
    headline: ["Less paperwork.", "More time with patients."],
    subhead: "Appointments, patient records, prescriptions and billing in one simple system.",
    problemThing: "patient record",
    problemTitle: "Patient care needs context, not more paperwork.",
    problemCopy: [
      "A patient calls after hours. The front desk cannot see the last prescription. A follow-up is meant to happen, but nobody owns it.",
      "Small gaps make care feel disjointed. That’s why we built Melorite Clinic.",
    ],
    staleWarning: "6 of 8 patient fields are missing or outdated",
    workspace: "clinic workspace",
    features: [
      feature("Appointments", "Front desk", "Book, move and confirm visits in one calendar.", "indigo"),
      feature("Patient history", "Clinical record", "See earlier visits, notes and prescriptions quickly.", "teal"),
      feature("Prescriptions", "Doctor workspace", "Create a clear prescription while the visit is fresh.", "coral"),
      feature("Billing", "Payments", "Raise bills and see what has been paid or is pending.", "green"),
      feature("Reminders", "SMS · WhatsApp", "Help patients remember visits and follow-ups.", "indigo"),
      feature("Doctor schedules", "Availability", "Keep each doctor’s day visible to the whole desk.", "coral"),
      feature("Visit types", "Clinic workflow", "Set the right time and information for each kind of visit.", "teal"),
      feature("Multi-clinic view", "Locations", "Keep separate calendars with one consistent patient record.", "green"),
    ],
    showcaseOne: { title: "A calmer front desk, from the first call.", body: "See the day’s schedule, waiting patients and completed visits without switching between registers." },
    showcaseTwo: { number: "03", title: "Give every doctor the context they need.", body: "Patient history and the reason for the visit are ready before the consultation, while prescriptions are simple to send afterwards.", link: "See the patient record" },
    signalsTitle: ["Keep care moving.", "Even after the patient leaves."],
    signals: ["Follow-up due after the test result", "Prescription has not been sent", "Annual check-up reminder tomorrow"],
  },
  agency: {
    slug: "agency",
    eyebrow: "Melorite Agency",
    headline: ["Run your agency smoothly.", "Keep clients in the loop."],
    subhead: "Plan content, assign work, collect approvals and share progress in one place, so your team can create, not chase.",
    problemThing: "client workspace",
    problemTitle: "Your client work shouldn’t live across five places.",
    problemCopy: [
      "The brief is in chat. The latest design is in a thread. The approval is buried in an email, and the client asks for status again.",
      "The work is good, but the experience feels scattered. That’s why we built Melorite Agency.",
    ],
    staleWarning: "6 of 8 project fields are missing or outdated",
    workspace: "agency workspace",
    features: [
      feature("Client records", "Accounts", "Keep contacts, retainers and active work together.", "indigo"),
      feature("Content calendar", "Plan · schedule", "Let the team and client see what is coming next.", "teal"),
      feature("Task ownership", "Team workflow", "Make every deliverable and deadline clear.", "coral"),
      feature("Client approvals", "Private portal", "Collect a clear approve or revise decision in one place.", "green"),
      feature("Asset reviews", "Posts · reels · files", "Keep feedback attached to the right version.", "indigo"),
      feature("Invoices", "Retainers · payments", "Show paid, due and upcoming invoices beside the work.", "coral"),
      feature("Status updates", "Client portal", "Give clients answers without another status call.", "teal"),
      feature("Campaign overview", "Reporting", "Keep the plan, delivery and result in one view.", "green"),
    ],
    showcaseOne: { title: "One calendar everyone can trust.", body: "Plan the month, see what is in review and know exactly what can go live next." },
    showcaseTwo: { number: "04", title: "Make feedback a clear decision.", body: "Clients preview the right version and choose Approve or Revise. Your team sees the answer immediately.", link: "See the client portal" },
    signalsTitle: ["Keep approvals moving.", "Keep surprises out."],
    signals: ["Client approved the campaign reel", "Invoice is past its due date", "Draft needs approval before Friday"],
  },
  commerce: {
    slug: "commerce",
    eyebrow: "Melorite Commerce",
    headline: ["Your online store.", "Made simple."],
    subhead: "Run your storefront, products, orders, inventory, customers and payments from one clear workspace.",
    problemThing: "order sheet",
    problemTitle: "Orders move faster when the details agree.",
    problemCopy: [
      "A COD order ships before it is confirmed. Stock changes in one place but not another. A repeat buyer is treated like a stranger.",
      "The store keeps selling, while the team cleans up behind it. That’s why we built Melorite Commerce.",
    ],
    staleWarning: "6 of 8 order fields are missing or outdated",
    workspace: "commerce workspace",
    features: [
      feature("Storefront", "Your catalogue", "Sell products from a store that feels like your brand.", "indigo"),
      feature("Order desk", "Placed to delivered", "See every order and its next step in one queue.", "teal"),
      feature("Payments", "UPI · card · COD", "Keep payment method and status clear for the team.", "coral"),
      feature("Stock", "Variants", "Track sizes, colours and low-stock items together.", "green"),
      feature("COD checks", "Confirmation", "Confirm risky orders before packing and dispatch.", "indigo"),
      feature("Delivery status", "Fulfilment", "Follow each order through shipment and delivery.", "coral"),
      feature("Customer history", "Repeat buyers", "Recognise returning customers and what they buy.", "teal"),
      feature("Sales view", "Daily overview", "See sales, order count and useful patterns quickly.", "green"),
    ],
    showcaseOne: { title: "Know what happened today.", body: "Sales, payment methods and orders needing attention are clear before you start packing." },
    showcaseTwo: { number: "05", title: "Catch the order before it comes back.", body: "Confirm COD orders, flag incomplete addresses and keep delivery status visible from one queue.", link: "See the order desk" },
    signalsTitle: ["Protect each order.", "Recognise every good customer."],
    signals: ["Repeat buyer placed a third order", "COD confirmation is still pending", "Dispatch promised before 5:00 pm"],
  },
  "ai-calling": {
    slug: "ai-calling",
    eyebrow: "Melorite AI Calling",
    headline: ["An extra team member", "on the phone, all day."],
    subhead: "AI-powered calls that answer enquiries, follow up with customers, book appointments and keep your team informed.",
    problemThing: "call log",
    problemTitle: "Every call should end with a clear next step.",
    problemCopy: [
      "A caller reaches voicemail at 9 pm. A new lead waits until morning. A booking is agreed, but the details never reach the team.",
      "The phone keeps ringing after the workday ends. That’s why we built Melorite AI Calling.",
    ],
    staleWarning: "6 of 8 call details are missing or outdated",
    workspace: "calling workspace",
    features: [
      feature("Inbound calls", "Always available", "Answer common questions and capture every enquiry.", "indigo"),
      feature("Outbound calls", "Leads · reminders", "Make agreed calls without adding to the team’s list.", "teal"),
      feature("Natural replies", "Conversation", "Understand the reason for the call and respond clearly.", "coral"),
      feature("Bookings", "Calendar", "Book appointments, visits and meetings during the call.", "green"),
      feature("Call summaries", "Automatic notes", "Give the team a short, useful record after every call.", "indigo"),
      feature("Warm hand-off", "Human support", "Pass the caller and the context when a person is needed.", "coral"),
      feature("CRM updates", "Connected records", "Keep the next action beside the customer record.", "teal"),
      feature("24/7 answering", "After hours", "Stay useful to callers when the office is closed.", "green"),
    ],
    showcaseOne: { title: "A useful answer, even after hours.", body: "The caller gets help, the booking is confirmed and your team receives the full context." },
    showcaseTwo: { number: "06", title: "Start with the outcome, not the recording.", body: "Each completed call becomes a concise summary with the customer’s request and the next action already clear.", link: "See the call summary" },
    signalsTitle: ["Hear what customers need.", "Act before the next call."],
    signals: ["Caller asked about a larger plan", "Customer sounded unsure about price", "Callback requested tomorrow morning"],
  },
};

