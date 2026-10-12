"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
import { ProductsMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

/**
 * Persistent editorial navigation with compact, keyboard-accessible dropdowns.
 */
export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">(pathname === "/" ? "dark" : "light");

  useEffect(() => {
    // The bar adopts the theme of whichever [data-nav] section sits beneath it.
    let raf = 0;
    const update = () => {
      raf = 0;
      const stack = document.elementsFromPoint(window.innerWidth / 2, 30);
      const host = stack.map((el) => el.closest("[data-nav]")).find(Boolean) as HTMLElement | null;
      setTheme(host?.dataset.nav === "dark" ? "dark" : "light");
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const dark = theme === "dark";

  return (
    <header
      data-theme={theme}
      className="site-navbar fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,color] duration-300"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-brand">
        Skip to content
      </a>
      <div className="flex h-[64px] items-center justify-between gap-6 px-5 md:px-8 xl:px-[58px]">
        <Link href="/" aria-label="Melorite home" className="shrink-0 rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none">
          <Logo white={dark} priority className="h-[24px] md:h-[26px]" />
        </Link>

        <div className="flex items-center gap-1 xl:gap-2">
          <NavigationMenu aria-label="Main" className="hidden lg:flex" viewport>
            <NavigationMenuList className="gap-0.5">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                if (item.menu) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger data-active={active || undefined} className="text-[14.5px] font-normal tracking-normal">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent><ProductsMenu /></NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild active={active}>
                      <Link href={item.href} aria-current={active ? "page" : undefined} className={cn(navigationMenuTriggerStyle(), "nav-link text-[14.5px] font-normal tracking-normal")}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 lg:ml-3">
            <Link href={site.salesHref} className={cn("pill pill-sm hidden md:inline-flex", dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/[.06] text-[#111735] hover:bg-black/10")}>
              Contact sales
            </Link>
            <Link href={site.demoHref} className={cn("pill pill-sm hidden sm:inline-flex", dark ? "pill-light" : "pill-dark")}>
              Book a demo
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
