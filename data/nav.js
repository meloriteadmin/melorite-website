const PRODUCTS = {
  label: "Products",
  items: [
    { group: null, links: [
      { href: "/", label: "Sana" },
      { href: "/sana-learn", label: "Sana Learn" },
    ]},
  ],
};

const SANA_CAPABILITIES = {
  label: "Capabilities",
  items: [
    { group: null, links: [
      { href: "/", label: "Overview" },
      { href: "/ai-agents", label: "AI agents" },
      { href: "/enterprise-search", label: "Enterprise search" },
      { href: "/integrations", label: "Integrations" },
      { href: "/security", label: "Security" },
    ]},
  ],
};

const SANA_SOLUTIONS = {
  label: "Solutions",
  wide: true,
  items: [
    { group: "Industries", links: [
      { href: "/solutions/industries/financial-services", label: "Financial services" },
      { href: "/solutions/industries/consulting-firms", label: "Consulting firms" },
      { href: "/solutions/industries/law-firms", label: "Law firms" },
      { href: "/solutions/industries/tech-companies", label: "Tech companies" },
      { href: "/solutions/industries/private-equity", label: "Private equity" },
      { href: "/solutions/industries/industrial-companies", label: "Industrial companies" },
    ]},
    { group: "Teams", links: [
      { href: "/solutions/teams/sales-gtm", label: "Sales & GTM" },
      { href: "/solutions/teams/marketing", label: "Marketing" },
      { href: "/solutions/teams/in-house-operations", label: "Operations" },
      { href: "/solutions/teams/customer-support", label: "Customer support" },
    ]},
  ],
};

const SANA_LEARN_CAPABILITIES = {
  label: "Capabilities",
  items: [
    { group: null, links: [
      { href: "/sana-learn", label: "Overview" },
      { href: "/sana-learn/learning-management", label: "Learning management" },
      { href: "#", label: "Content creation" },
      { href: "/sana-learn/integrations", label: "Integrations" },
    ]},
  ],
};

const SANA_LEARN_SOLUTIONS = {
  label: "Solutions",
  items: [
    { group: null, links: [
      { href: "/sana-learn/solutions/sales-enablement", label: "Sales enablement" },
      { href: "#", label: "Compliance training" },
      { href: "/sana-learn/solutions/employee-onboarding", label: "Employee onboarding" },
      { href: "#", label: "External training" },
      { href: "#", label: "Leadership development" },
    ]},
  ],
};

const RESOURCES = {
  label: "Resources",
  items: [
    { group: null, links: [
      { href: "#", label: "Events" },
      { href: "#", label: "Podcast" },
      { href: "#", label: "Stories" },
    ]},
  ],
};

const PRICING = { label: "Pricing", href: "/pricing" };

export const NAV_SANA = [PRODUCTS, SANA_CAPABILITIES, SANA_SOLUTIONS, RESOURCES, PRICING];
export const NAV_SANA_LEARN = [PRODUCTS, SANA_LEARN_CAPABILITIES, SANA_LEARN_SOLUTIONS, RESOURCES, PRICING];

export function getNav(pathname) {
  return pathname && pathname.startsWith("/sana-learn") ? NAV_SANA_LEARN : NAV_SANA;
}

export const FOOTER = {
  sana: {
    title: "Sana",
    links: [
      { href: "/", label: "Overview" },
      { href: "/ai-agents", label: "AI agents" },
      { href: "/enterprise-search", label: "Enterprise search" },
      { href: "/integrations", label: "Integrations" },
      { href: "/security", label: "Security" },
      { href: "/pricing", label: "Pricing" },
      { href: "#", label: "Stories" },
      { href: "#", label: "Help Center" },
    ],
  },
  sanaLearn: {
    title: "Sana Learn",
    links: [
      { href: "/sana-learn", label: "Overview" },
      { href: "/sana-learn/learning-management", label: "Learning management" },
      { href: "/sana-learn/content-creation", label: "Content creation" },
      { href: "/sana-learn/integrations", label: "Integrations" },
      { href: "/pricing", label: "Pricing" },
      { href: "#", label: "Customer stories" },
      { href: "#", label: "Help Center" },
      { href: "#", label: "Changelog" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { href: "#", label: "Sana AI Summit 2026" },
      { href: "#", label: "Strange Loop Podcast" },
      { href: "#", label: "Swedish AI Reform" },
      { href: "#", label: "Mission" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "#", label: "Legal" },
      { href: "#", label: "Cookie settings" },
    ],
  },
};
