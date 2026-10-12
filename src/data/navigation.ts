export type NavItem = { label: string; href: string; menu?: "products" };

export const mainNav: NavItem[] = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Custom solutions", href: "/custom-solutions" },
  { label: "Why Melorite", href: "/why-melorite" },
  { label: "About us", href: "/company" },
];
