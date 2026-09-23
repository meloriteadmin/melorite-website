export type NavItem = {
  label: string;
  href: string;
  menu?: "products" | "solutions";
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Products", href: "/products", menu: "products" },
  { label: "Solutions", href: "/solutions", menu: "solutions" },
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

export const productHref = (id: string) => `/products#product-${id}`;
export const solutionHref = (id: string) => `/solutions#solution-${id}`;
