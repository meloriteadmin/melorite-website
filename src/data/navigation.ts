export type NavItem = {
  label: string;
  href: string;
  menu?: "business" | "ai" | "industries";
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Business Applications", href: "/business-applications", menu: "business" },
  { label: "Melorite AI", href: "/ai", menu: "ai" },
  { label: "Industry Solutions", href: "/industries", menu: "industries" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
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

export const productHref = (slug: string) => `/business-applications/${slug}`;
export const solutionHref = (slug: string) => `/industries/${slug}`;
