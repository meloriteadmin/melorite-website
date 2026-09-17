const PLATFORM = {
  label: "Platform",
  items: [{ group: "Explore Melorite", links: [
    { href: "/platform", label: "Overview" }, { href: "/platform#connected-data", label: "Connected data" },
    { href: "/platform#automation", label: "Automation & AI" }, { href: "/integrations", label: "Integrations" },
    { href: "/security", label: "Security" },
  ] }],
};
const PRODUCTS = { label: "Products", wide: true, items: [
  { group: "Customer", links: [{ href: "/products/crm", label: "CRM" }, { href: "/products/sales", label: "Sales" }, { href: "/products/service", label: "Support" }, { href: "/products/marketing", label: "Marketing" }] },
  { group: "Work", links: [{ href: "/products/projects", label: "Projects" }, { href: "/products/operations", label: "Operations" }, { href: "/products/documents", label: "Documents" }, { href: "/products/automation", label: "Automation" }] },
  { group: "Business", links: [{ href: "/products/finance", label: "Finance" }, { href: "/products/hr", label: "People" }, { href: "/products/analytics", label: "Analytics" }, { href: "/products", label: "View all products →" }] },
] };
const INDUSTRIES = { label: "Solutions", wide: true, items: [
  { group: "By business stage", links: [{ href: "/industries", label: "Small business" }, { href: "/industries", label: "Growing business" }, { href: "/industries", label: "Enterprise" }] },
  { group: "By industry", links: [{ href: "/industries", label: "Real estate" }, { href: "/industries", label: "Healthcare" }, { href: "/industries", label: "Professional services" }, { href: "/industries", label: "Retail" }] },
  { group: "", links: [{ href: "/industries", label: "Manufacturing" }, { href: "/industries", label: "Education" }, { href: "/industries", label: "Hospitality" }, { href: "/industries", label: "View all industries →" }] },
] };
const PRICING = { label: "Pricing", href: "/pricing" };
const ABOUT = { label: "Resources", href: "/about" };

export const NAV = [PRODUCTS, INDUSTRIES, PLATFORM, PRICING, ABOUT];
export function getNav() { return NAV; }

export const FOOTER = {
  platform: { title: "Platform", links: [
    { href: "/platform", label: "Overview" }, { href: "/products", label: "Products" },
    { href: "/platform#automation", label: "Automation & AI" }, { href: "/apps/analytics", label: "Analytics" },
    { href: "/security", label: "Security" },
  ] },
  products: { title: "Products", links: [
    { href: "/apps/crm", label: "CRM" }, { href: "/apps/finance", label: "Finance" },
    { href: "/apps/hr", label: "HR" }, { href: "/apps/projects", label: "Projects" },
    { href: "/apps/operations", label: "Operations" }, { href: "/apps/service", label: "Support" },
  ] },
  company: { title: "Company", links: [
    { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" }, { href: "/partners", label: "Partners" },
    { href: "#", label: "Privacy" }, { href: "#", label: "Terms" },
  ] },
};
