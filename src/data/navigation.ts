export type NavItem = { label: string; href: string; menu?: "products" };

export const mainNav: NavItem[] = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Custom solutions", href: "/custom-solutions" },
  { label: "Why Melorite", href: "/company#why" },
  { label: "About us", href: "/company" },
];
