const APPS = {
  label: "Apps",
  items: [
    { group: "Business management", links: [
      { href: "/ai-agents", label: "CRM & sales" },
      { href: "/enterprise-search", label: "Finance & accounting" },
      { href: "/sana-learn", label: "People & payroll" },
      { href: "/sana-learn/learning-management", label: "Projects & operations" },
    ]},
    { group: "Connected work", links: [
      { href: "/integrations", label: "Collaboration & documents" },
      { href: "/sana-learn/integrations", label: "Automation & reporting" },
    ]},
  ],
};

const PLATFORM = { label: "Platform", items: [{ group: null, links: [
  { href: "/", label: "Overview" }, { href: "/integrations", label: "Connected data" },
  { href: "/security", label: "Security & controls" }, { href: "/pricing", label: "Plans" },
]}] };

const SOLUTIONS = {
  label: "Solutions", wide: true,
  items: [
    { group: "Industries", links: [
      { href: "/solutions/industries/financial-services", label: "Financial services" }, { href: "/solutions/industries/consulting-firms", label: "Professional services" },
      { href: "/solutions/industries/law-firms", label: "Healthcare" }, { href: "/solutions/industries/tech-companies", label: "Education" },
      { href: "/solutions/industries/private-equity", label: "Real estate" }, { href: "/solutions/industries/industrial-companies", label: "Manufacturing" },
    ]},
    { group: "Teams", links: [
      { href: "/solutions/teams/sales-gtm", label: "Sales" }, { href: "/solutions/teams/marketing", label: "Marketing" },
      { href: "/solutions/teams/in-house-operations", label: "Operations" }, { href: "/solutions/teams/customer-support", label: "Customer support" },
    ]},
  ],
};

const RESOURCES = { label: "Resources", items: [{ group: null, links: [
  { href: "#", label: "Customer stories" }, { href: "#", label: "Guides" }, { href: "#", label: "Help center" },
]}] };
const PRICING = { label: "Pricing", href: "/pricing" };

export const NAV_SANA = [APPS, PLATFORM, SOLUTIONS, RESOURCES, PRICING];
export const NAV_SANA_LEARN = NAV_SANA;
export function getNav() { return NAV_SANA; }

export const FOOTER = {
  sana: { title: "Platform", links: [
    { href: "/", label: "Overview" }, { href: "/ai-agents", label: "CRM & sales" },
    { href: "/enterprise-search", label: "Finance & accounting" }, { href: "/sana-learn", label: "People & payroll" },
    { href: "/sana-learn/learning-management", label: "Projects & operations" }, { href: "/integrations", label: "Integrations" },
    { href: "/security", label: "Security" }, { href: "/pricing", label: "Pricing" },
  ]},
  sanaLearn: { title: "Solutions", links: [
    { href: "/solutions/industries/financial-services", label: "Financial services" }, { href: "/solutions/industries/consulting-firms", label: "Professional services" },
    { href: "/solutions/industries/law-firms", label: "Healthcare" }, { href: "/solutions/industries/tech-companies", label: "Education" },
    { href: "/solutions/industries/private-equity", label: "Real estate" }, { href: "/solutions/industries/industrial-companies", label: "Manufacturing" },
  ]},
  company: { title: "Company", links: [
    { href: "#", label: "About Melorite" }, { href: "#", label: "Contact" }, { href: "#", label: "Careers" },
    { href: "#", label: "Partner program" }, { href: "#", label: "Privacy" }, { href: "#", label: "Terms" },
  ]},
};
