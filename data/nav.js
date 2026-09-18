const PRODUCTS = { label: "Products", items: [{ group: "Business products", links: [
  { href: "/products/crm-sales", label: "CRM & Sales" },
  { href: "/products/finance-accounting", label: "Finance & Accounting" },
  { href: "/products/people-hr", label: "People & HR" },
  { href: "/products/projects-operations", label: "Projects & Operations" },
  { href: "/products/collaboration-documents", label: "Collaboration & Documents" },
] }] };
const INDUSTRIES = { label: "Industries", items: [{ group: "Industries", links: [
  { href: "/industries/professional-services", label: "Professional Services" },
  { href: "/industries/retail-commerce", label: "Retail & Commerce" },
  { href: "/industries/manufacturing-distribution", label: "Manufacturing & Distribution" },
  { href: "/industries/real-estate-construction", label: "Real Estate & Construction" },
  { href: "/industries/healthcare-services", label: "Healthcare & Services" },
] }] };
const COMPANY = { label: "Company", items: [{ group: "Company", links: [
  { href: "/about", label: "About Melorite" },
  { href: "/contact", label: "Contact" },
] }] };

export const NAV = [PRODUCTS, INDUSTRIES, { label: "Platform", href: "/platform" }, { label: "Solutions", href: "/solutions" }, COMPANY];
export function getNav() { return NAV; }

export const FOOTER = {
  products: { title: "Products", links: PRODUCTS.items[0].links },
  industries: { title: "Industries", links: INDUSTRIES.items[0].links },
  platform: { title: "Platform", links: [
    { href: "/platform", label: "Platform overview" }, { href: "/platform#automation", label: "Automation" },
    { href: "/platform#connected-data", label: "Analytics" }, { href: "/platform#security", label: "Security" },
    { href: "/integrations", label: "Integrations" },
  ] },
  company: { title: "Company", links: [
    { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms & Conditions" },
  ] },
};
