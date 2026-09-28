"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { ButtonLink } from "@/components/shared/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CompanyMenu, ProductsMenu, SolutionsMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

/**
 * Sticky enterprise navigation. White with a hairline border at rest; gains a
 * soft shadow and backdrop blur once the page scrolls. Mega menus use the
 * shadcn Navigation Menu (keyboard + screen-reader support from Radix).
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Hysteresis: turn on past 24px, off below 4px — no toggling back and forth near the top.
    const onScroll = () => setScrolled((was) => (was ? window.scrollY > 4 : window.scrollY > 24));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "site-navbar fixed inset-x-0 top-0 z-50 border-b border-black/[.06] bg-white text-[#171717] transition-[box-shadow,border-color] duration-200",
        scrolled && "border-black/10 shadow-[0_8px_30px_-24px_rgb(0_0_0/0.35)]",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-brand">
        Skip to content
      </a>
      <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="Melorite home" className="justify-self-start rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none">
          <Logo priority className="h-[23px] md:h-[25px]" />
        </Link>

        <NavigationMenu aria-label="Main" className="hidden lg:flex">
          <NavigationMenuList>
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const underline = active && (
                <span className="absolute inset-x-3 -bottom-[14px] h-[2px] rounded-full bg-[#171717]" aria-hidden />
              );
              if (item.menu) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger data-active={active || undefined}>
                      {item.label}
                      {underline}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>{item.menu === "products" ? <ProductsMenu /> : item.menu === "solutions" ? <SolutionsMenu /> : <CompanyMenu />}</NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={active}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={cn(navigationMenuTriggerStyle(), "relative")}>
                      {item.label}
                      {underline}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-self-end gap-2">
          <ButtonLink href={site.salesHref} variant="ghost" size="sm" className="hidden rounded-full px-4 text-[#171717] md:inline-flex">
            Contact Sales
          </ButtonLink>
          <ButtonLink href={site.demoHref} variant="dark" size="sm" arrow className="hidden rounded-full px-5 sm:inline-flex">
            Book a Demo
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
