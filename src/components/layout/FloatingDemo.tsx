"use client";

import { demoHrefForPath } from "@/lib/links";

import { usePathname } from "next/navigation";
import { Boxes, Building2, CalendarCheck, Home, BookOpen, Puzzle } from "lucide-react";
import { FloatingDock, type DockItem } from "@/components/ui/floating-dock";

/** Site-wide quick navigation as a macOS-style dock. */
export function FloatingDemo() {
  const pathname = usePathname();
  if (pathname === "/book-demo") return null;
  const on = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const items: DockItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Products", href: "/products", icon: Boxes },
    { label: "Resources", href: "/resources", icon: BookOpen },
    { label: "Custom Solutions", href: "/custom-solutions", icon: Puzzle, desktopOnly: true },
    { label: "Company", href: "/company", icon: Building2, desktopOnly: true },
    { label: "Book a demo", href: demoHrefForPath(pathname), icon: CalendarCheck, primary: true },
  ].map((i) => ({ ...i, active: on(i.href) }));
  return <FloatingDock items={items} />;
}
