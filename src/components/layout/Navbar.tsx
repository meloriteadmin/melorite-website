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
import { ProductsMenu, SolutionsMenu } from "./MegaMenu";
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
        // Solid white (no backdrop-filter): blur over masked hero backgrounds flickers in Chromium while scrolling.
        "fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white transition-shadow duration-300",
        scrolled && "shadow-[0_6px_24px_-12px_rgb(10_37_64/0.16)]",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-brand">
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="Melorite home" className="justify-self-start rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none">
          <Logo priority className="h-[22px] md:h-6" />
        </Link>

        <NavigationMenu aria-label="Main" className="hidden lg:flex">
          <NavigationMenuList>
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const underline = active && (
                <span className="absolute inset-x-3 -bottom-[13px] h-[2px] rounded-full bg-brand" aria-hidden />
              );
              if (item.menu) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger data-active={active || undefined}>
                      {item.label}
                      {underline}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>{item.menu === "products" ? <ProductsMenu /> : <SolutionsMenu />}</NavigationMenuContent>
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
          <ButtonLink href={site.salesHref} variant="ghost" size="sm" className="hidden md:inline-flex">
            Contact Sales
          </ButtonLink>
          <ButtonLink href={site.demoHref} size="sm" arrow className="hidden sm:inline-flex">
            Book a Demo
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
