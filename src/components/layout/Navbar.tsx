"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ProductsMenu, SimpleMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

/**
 * Persistent editorial navigation with compact, keyboard-accessible dropdowns.
 */
export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const dark = false;

  return (
    <header
      data-theme="light"
      className="site-navbar fixed inset-x-0 top-0 z-50"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-brand">
        Skip to content
      </a>
      <div className="nav-bar"><div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-3 px-5 md:px-8">
        <Link href="/" aria-label="Melorite home" className="rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none">
          <Logo white={dark} priority className="h-[22px] md:h-[24px]" />
        </Link>

        <NavigationMenu aria-label="Main" className="hidden justify-self-center lg:flex" viewport>
          <NavigationMenuList className="gap-0.5">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const tone = "rounded-full px-4 py-2 text-[14px] font-medium tracking-normal";
              if (item.menu) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger data-active={active || undefined} className={tone}>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.menu === "products" ? <ProductsMenu /> : <SimpleMenu type={item.menu} />}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={active}>
                    <Link href={item.href} data-active={active || undefined} aria-current={active ? "page" : undefined} className={cn(navigationMenuTriggerStyle(), "nav-link", tone)}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="col-start-3 flex items-center gap-2">
          <Link href={site.demoHref} className={cn("pill pill-sm hidden sm:inline-flex", dark ? "pill-light" : "pill-dark")}>Book a demo</Link>
          <MobileMenu />
        </div>
      </div></div>
    </header>
  );
}
