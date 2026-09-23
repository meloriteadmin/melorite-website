export const principles = [
  {
    id: "connected",
    title: "Connected by design",
    description: "Business functions should work within a coherent operating environment — one customer, one employee, one product record.",
    icon: "Network",
  },
  {
    id: "flexible",
    title: "Flexibility matters",
    description: "Organizations should be able to choose capabilities around their needs, and change that choice as they grow.",
    icon: "Puzzle",
  },
  {
    id: "clarity",
    title: "Clarity over complexity",
    description: "Sophisticated software should remain understandable and usable by the people who rely on it every day.",
    icon: "Sparkles",
  },
  {
    id: "evolve",
    title: "Built to evolve",
    description: "A business platform should accommodate changing requirements without being rebuilt.",
    icon: "Layers",
  },
  {
    id: "responsible",
    title: "Reliability and responsibility",
    description: "Security, dependable operations and responsible data handling are foundations, not features.",
    icon: "ShieldCheck",
  },
];

export const approach = [
  {
    title: "Understand operational requirements",
    description: "We start from how businesses actually operate — the records they keep, the hand-offs between teams and the decisions they make.",
  },
  {
    title: "Develop core business applications",
    description: "Horizontal apps such as CRM, Finance, HR and Inventory are built on one shared data model and one design system.",
  },
  {
    title: "Create connected platform capabilities",
    description: "Authentication, entitlements, audit, search, automation and analytics are built once and shared by every app.",
  },
  {
    title: "Support industry-specific requirements",
    description: "Industry solutions extend the core apps with sector-specific records and workflows instead of forking them.",
  },
  {
    title: "Improve through continued development",
    description: "The platform grows release by release, with new capabilities added to the same connected foundation.",
  },
];

export const companySizes = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,000+"];

export const enquiryTypes = [
  { value: "demo", label: "Book a Demo" },
  { value: "product", label: "Product Enquiry" },
  { value: "industry", label: "Industry Solution" },
  { value: "general", label: "General Enquiry" },
] as const;
