/**
 * Illustrative workspace data for the product cards and app mock-ups.
 * It is sample data to show what each product looks like — not customer figures.
 */
export type Stat = { label: string; value: string; unit?: string; delta?: string; up?: boolean };

export type Showcase = {
  eyebrow: string;
  title: string;
  tag: string;
  stats: Stat[];
  chart: { title: string; legend: [string, string]; labels: string[]; bars: [number, number][] };
  listTitle: string;
  list: string[];
  more: string;
  signalsTitle: string;
  signals: [string, "teal" | "coral"][];
  footLeft: [string, string];
  footRight: [string, string];
  sidebar: string[];
  pain: string;
};

export const showcase: Record<string, Showcase> = {
  home: {
    eyebrow: "Software for your industry",
    title: "Acme Realty",
    tag: "Sample workspace",
    stats: [
      { label: "New leads", value: "38", delta: "12% this week", up: true },
      { label: "Follow-ups due", value: "14", delta: "3 overdue", up: false },
      { label: "Calls answered", value: "126", delta: "24 after hours", up: true },
      { label: "Deals closing", value: "9", unit: "this month", delta: "2 more than last", up: true },
    ],
    chart: { title: "Enquiries & bookings", legend: ["Enquiries", "Bookings"], labels: ["Jan", "Feb", "Mar", "Apr"], bars: [[18, 3], [23, 5], [25, 6], [28, 9]] },
    listTitle: "Up next",
    list: ["4:30 pm · Call Aarav Sharma", "Sat, 11 am · Site visit, Meera", "Mon · Send payment plan"],
    more: "+5 more today",
    signalsTitle: "Handled for you",
    signals: [["Lead assigned to Priya", "teal"], ["Payment due Friday", "coral"]],
    footLeft: ["Channels", "Website, ads, WhatsApp"],
    footRight: ["Team", "12 people, 3 branches"],
    sidebar: ["Today", "Leads", "Deals", "Follow-ups", "Reports"],
    pain: "Your team spends more time on spreadsheets than on real work.",
  },
  crm: {
    eyebrow: "Melorite CRM & Growth",
    title: "Kellner Trading",
    tag: "Sample lead",
    stats: [
      { label: "Deal value", value: "₹18", unit: "L", delta: "Proposal sent", up: true },
      { label: "Touchpoints", value: "14", delta: "3 this week", up: true },
      { label: "Stage", value: "Quote", delta: "Day 9 in stage", up: false },
      { label: "Win chance", value: "72", unit: "%", delta: "Up from 55%", up: true },
    ],
    chart: { title: "Pipeline by month", legend: ["Leads", "Won"], labels: ["Jan", "Feb", "Mar", "Apr"], bars: [[20, 4], [24, 6], [26, 8], [30, 11]] },
    listTitle: "Contacts",
    list: ["R. Mehta, Owner", "S. Iyer, Purchase head"],
    more: "+3 more",
    signalsTitle: "Follow-ups",
    signals: [["Call back today, 4:30 pm", "teal"], ["Quote expires Friday", "coral"]],
    footLeft: ["Source", "Website enquiry"],
    footRight: ["Owner", "Priya, Sales team"],
    sidebar: ["Today", "Leads", "Deals", "Follow-ups", "Reports"],
    pain: "A client asks about a quote, and nobody remembers what was promised.",
  },
  "real-estate": {
    eyebrow: "Melorite Real Estate",
    title: "Lakeview Residences",
    tag: "Sample project",
    stats: [
      { label: "Units available", value: "64", unit: "of 180", delta: "8 booked this month", up: true },
      { label: "Site visits", value: "27", delta: "This week", up: true },
      { label: "Payments due", value: "₹1.2", unit: "Cr", delta: "6 buyers pending", up: false },
      { label: "Brokers active", value: "19", delta: "4 new", up: true },
    ],
    chart: { title: "Enquiries & bookings", legend: ["Enquiries", "Bookings"], labels: ["Jan", "Feb", "Mar", "Apr"], bars: [[22, 3], [26, 5], [24, 7], [29, 9]] },
    listTitle: "Buyers",
    list: ["Meera Shah · Site visit Sat", "Aarav Sharma · Token paid"],
    more: "+11 more",
    signalsTitle: "This week",
    signals: [["Site visit, Saturday 11 am", "teal"], ["Instalment due Friday", "coral"]],
    footLeft: ["Location", "Pune, Maharashtra"],
    footRight: ["Documents", "142 filed, 6 pending"],
    sidebar: ["Projects", "Units", "Buyers", "Site visits", "Payments"],
    pain: "A buyer asks about a flat, and nobody calls back for two days.",
  },
  clinic: {
    eyebrow: "Melorite Clinic",
    title: "Sunrise Family Clinic",
    tag: "Sample clinic",
    stats: [
      { label: "Appointments", value: "42", unit: "today", delta: "6 more than usual", up: true },
      { label: "Waiting", value: "5", delta: "Avg 8 min", up: true },
      { label: "Prescriptions", value: "31", delta: "Sent in seconds", up: true },
      { label: "Billed today", value: "₹58", unit: "k", delta: "4 pending", up: false },
    ],
    chart: { title: "Visits & follow-ups", legend: ["Visits", "Follow-ups"], labels: ["Mon", "Tue", "Wed", "Thu"], bars: [[34, 9], [38, 12], [36, 11], [42, 15]] },
    listTitle: "Next patients",
    list: ["10:30 · Dr. Rao, R. Kulkarni", "10:45 · Dr. Sen, A. Menon"],
    more: "+8 more today",
    signalsTitle: "Reminders",
    signals: [["12 reminders sent", "teal"], ["2 follow-ups overdue", "coral"]],
    footLeft: ["Doctors", "4 on duty today"],
    footRight: ["Records", "2,380 patient files"],
    sidebar: ["Today", "Patients", "Prescriptions", "Billing", "Reminders"],
    pain: "A patient calls after hours and books with another clinic.",
  },
  agency: {
    eyebrow: "Melorite Agency",
    title: "Brightside Studio",
    tag: "Sample client",
    stats: [
      { label: "Posts this month", value: "24", delta: "18 approved", up: true },
      { label: "Awaiting approval", value: "4", delta: "Client notified", up: false },
      { label: "Tasks in progress", value: "17", delta: "5 due this week", up: true },
      { label: "Retainer", value: "₹85", unit: "k", delta: "Invoice paid", up: true },
    ],
    chart: { title: "Content delivered", legend: ["Planned", "Published"], labels: ["Jan", "Feb", "Mar", "Apr"], bars: [[20, 18], [22, 21], [24, 22], [26, 24]] },
    listTitle: "Team",
    list: ["Nisha · Reels, due Thu", "Karan · Carousel, in review"],
    more: "+6 tasks",
    signalsTitle: "Client portal",
    signals: [["Reel ready to preview", "teal"], ["Invoice due in 3 days", "coral"]],
    footLeft: ["Plan", "Q2 content calendar"],
    footRight: ["Clients", "14 active portals"],
    sidebar: ["Clients", "Calendar", "Tasks", "Approvals", "Invoices"],
    pain: "A client asks “what’s the status?” for the fifth time this week.",
  },
  commerce: {
    eyebrow: "Melorite Commerce",
    title: "Threadhouse Label",
    tag: "Sample store",
    stats: [
      { label: "Orders today", value: "86", delta: "14% vs yesterday", up: true },
      { label: "Revenue", value: "₹1.9", unit: "L", delta: "UPI, card, COD", up: true },
      { label: "Low stock", value: "7", delta: "Restock soon", up: false },
      { label: "Repeat buyers", value: "38", unit: "%", delta: "3pp higher", up: true },
    ],
    chart: { title: "Orders by week", legend: ["Placed", "Delivered"], labels: ["W1", "W2", "W3", "W4"], bars: [[24, 21], [28, 25], [31, 27], [36, 33]] },
    listTitle: "Recent orders",
    list: ["#2041 · Delivered, UPI", "#2042 · Shipped, COD"],
    more: "+84 today",
    signalsTitle: "Needs attention",
    signals: [["COD order confirmed", "teal"], ["Size M low in stock", "coral"]],
    footLeft: ["Store", "threadhouse.shop"],
    footRight: ["Products", "212 items, 5 collections"],
    sidebar: ["Orders", "Products", "Customers", "Payments", "Sales"],
    pain: "A COD order comes back because no one confirmed it.",
  },
  "ai-calling": {
    eyebrow: "Melorite AI Calling",
    title: "Call summary",
    tag: "Sample call log",
    stats: [
      { label: "Calls answered", value: "126", delta: "24 after hours", up: true },
      { label: "Appointments booked", value: "31", delta: "From calls", up: true },
      { label: "Outbound made", value: "74", delta: "Leads & reminders", up: true },
      { label: "Passed to team", value: "9", delta: "With notes", up: false },
    ],
    chart: { title: "Calls by day", legend: ["Inbound", "Outbound"], labels: ["Mon", "Tue", "Wed", "Thu"], bars: [[22, 12], [26, 15], [24, 18], [30, 21]] },
    listTitle: "Last call",
    list: ["Asked about Saturday visit", "Booked 11 am, confirmed"],
    more: "Note saved to CRM",
    signalsTitle: "After every call",
    signals: [["Summary written", "teal"], ["Callback requested", "coral"]],
    footLeft: ["Hours", "24 hours a day"],
    footRight: ["Coverage", "Inbound and outbound"],
    sidebar: ["Calls", "Inbound", "Outbound", "Summaries", "Reports"],
    pain: "A caller reaches voicemail at 9 pm and never calls back.",
  },
};
