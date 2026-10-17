export type NavItem = { label: string; href: string; menu?: "products" | "company" };

export const mainNav: NavItem[] = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Platform", href: "/platform" },
  { label: "Custom Solutions", href: "/custom-solutions" },
  { label: "Company", href: "/company", menu: "company" },
];
