const APPS = {
  label: "Apps",
  items: [
    { group: "Business management", links: [
      { href: "/apps/crm-sales", label: "CRM & sales" },
      { href: "/apps/finance-accounting", label: "Finance & accounting" },
      { href: "/apps/people-payroll", label: "People & payroll" },
      { href: "/apps/projects-operations", label: "Projects & operations" },
      { href: "/apps/customer-support", label: "Customer support" },
      { href: "/apps/marketing", label: "Marketing" },
    ]},
    { group: "Connected work", links: [
      { href: "/enterprise-search", label: "Documents & collaboration" },
      { href: "/integrations", label: "Analytics, automation & AI" },
    ]},
  ],
};

const PLATFORM = { label: "Platform", items: [{ group: null, links: [
  { href: "/", label: "Platform overview" }, { href: "/integrations", label: "Connected data & integrations" },
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
    { href: "/", label: "Platform overview" }, { href: "/apps/crm-sales", label: "CRM & sales" },
    { href: "/apps/finance-accounting", label: "Finance & accounting" }, { href: "/apps/people-payroll", label: "People & payroll" },
    { href: "/apps/projects-operations", label: "Projects & operations" }, { href: "/integrations", label: "Integrations" },
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
