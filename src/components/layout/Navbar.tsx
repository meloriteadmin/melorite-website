"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { cn, EASE } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { ButtonLink } from "@/components/shared/Button";
import { ProductsMenu, SolutionsMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

type MenuId = "products" | "solutions" | null;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuId>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change (during render) and on Escape.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || menu !== null;

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        solid ? "bg-white/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl backdrop-saturate-150" : "bg-transparent",
      )}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!navRef.current?.contains(e.relatedTarget as Node)) setMenu(null);
      }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-brand">
        Skip to content
      </a>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="container-x flex h-[72px] items-center justify-between gap-6"
      >
        <Link href="/" aria-label="Melorite home" className="shrink-0 rounded-md">
          <Logo priority className="h-[24px] md:h-[26px]" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(item.href);
                    if (item.menu) open(item.menu);
                    else scheduleClose();
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={item.menu ? "true" : undefined}
                    aria-expanded={item.menu ? menu === item.menu : undefined}
                    onFocus={() => item.menu && open(item.menu)}
                    className={cn(
                      "relative z-10 flex h-10 items-center gap-1 rounded-[10px] px-3.5 text-[14.5px] font-medium tracking-[-0.01em] transition-colors",
                      active ? "text-navy" : "text-slate-600 hover:text-navy",
                    )}
                  >
                    {item.label}
                    {item.menu && (
                      <ChevronDown className={cn("size-3.5 opacity-60 transition-transform duration-300", menu === item.menu && "rotate-180")} aria-hidden />
                    )}
                    {active && (
                      <motion.span layoutId="nav-active" className="absolute inset-x-3.5 -bottom-[3px] h-[2px] rounded-full bg-brand" transition={{ type: "spring", stiffness: 420, damping: 36 }} />
                    )}
                  </Link>
                  {hovered === item.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-[10px] bg-navy/[0.045]"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={site.salesHref} variant="ghost" size="sm" className="hidden md:inline-flex">
            Contact Sales
          </ButtonLink>
          <ButtonLink href={site.demoHref} size="sm" arrow className="hidden sm:inline-flex">
            Book a Demo
          </ButtonLink>
          <MobileMenu />
        </div>
      </motion.div>

      <AnimatePresence>
        {menu && (
          <motion.div
            key="mega"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute inset-x-0 top-full hidden border-t border-line bg-white shadow-[0_24px_48px_-24px_rgba(10,37,64,0.25)] lg:block"
            onMouseEnter={() => open(menu)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menu}
                initial={{ opacity: 0, x: menu === "products" ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="container-x py-8"
              >
                {menu === "products" ? <ProductsMenu onNavigate={() => setMenu(null)} /> : <SolutionsMenu onNavigate={() => setMenu(null)} />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
