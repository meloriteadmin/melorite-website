export type NavItem = {
  label: string;
  href: string;
  menu?: "products" | "solutions" | "company";
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Products", href: "/products", menu: "products" },
  { label: "Solutions", href: "/solutions", menu: "solutions" },
  { label: "Company", href: "/company", menu: "company" },
];

export const footerNav = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Connected workspace", href: "/platform#workspace" },
      { label: "Architecture", href: "/platform#architecture" },
      { label: "Security", href: "/platform#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Melorite", href: "/company" },
      { label: "Our principles", href: "/company#principles" },
      { label: "Book a demo", href: "/company?enquiry=demo#contact" },
      { label: "Contact sales", href: "/company?enquiry=product#contact" },
    ],
  },
];

const legacyProductGroup: Record<string, string> = {
  crm: "crm-growth", sales: "crm-growth", marketing: "crm-growth", campaigns: "crm-growth",
  finance: "finance", hr: "hrms", payroll: "hrms", commerce: "commerce", projects: "projects",
  service: "service", procurement: "procurement-inventory", inventory: "procurement-inventory",
  operations: "projects", documents: "projects", automation: "crm-growth", analytics: "finance",
};

export const productHref = (slug: string) => `/products/${legacyProductGroup[slug] ?? slug}`;
export const solutionHref = (slug: string) => `/solutions/${slug}`;
