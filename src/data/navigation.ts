export type NavItem = { label: string; href: string; menu?: "products" | "resources" | "company" };

export const mainNav: NavItem[] = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Platform", href: "/platform" },
  { label: "Custom Solutions", href: "/custom-solutions" },
  { label: "Resources", href: "/resources", menu: "resources" },
  { label: "Company", href: "/company", menu: "company" },
];
