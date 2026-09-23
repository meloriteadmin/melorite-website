"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { mainNav, productHref, solutionHref } from "@/data/navigation";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { site } from "@/data/site";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { buttonClasses } from "@/components/shared/Button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/** Mobile/tablet navigation drawer (shadcn Sheet: focus trap, Escape, scroll lock). */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    const lenis = window.__lenis;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const lists = {
    products: products.map((p) => ({ id: p.id, label: p.shortName, icon: p.icon, accent: p.accent, href: productHref(p.id) })),
    solutions: industries.map((i) => ({ id: i.id, label: i.name, icon: i.icon, accent: i.accent, href: solutionHref(i.id) })),
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 p-0" data-lenis-prevent>
        <SheetHeader className="h-16 justify-center border-b border-line px-5">
          <SheetTitle asChild>
            <span>
              <Logo className="h-[22px]" />
              <span className="sr-only">Menu</span>
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-3">
          <Accordion type="single" collapsible>
            {mainNav.map((item) => {
              const active = isActive(item.href);
              if (item.menu) {
                const list = lists[item.menu];
                return (
                  <AccordionItem key={item.href} value={item.href} className="border-line">
                    <AccordionTrigger className={cn("py-4 text-[17px]", active && "text-brand")}>{item.label}</AccordionTrigger>
                    <AccordionContent className="pr-0">
                      <ul className="grid grid-cols-2 gap-1">
                        {list.map((l) => (
                          <li key={l.id}>
                            <Link href={l.href} onClick={close} className="flex items-center gap-2 rounded-[8px] px-2 py-2 text-[14px] font-medium text-navy hover:bg-accent">
                              <Icon name={l.icon} className="size-4 shrink-0" style={{ color: l.accent }} />
                              <span className="truncate">{l.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href={item.href} onClick={close} className="mt-2 inline-block px-2 text-[14px] font-medium text-brand">
                        View all {item.label.toLowerCase()} →
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                );
              }
              return (
                <div key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn("flex py-4 text-[17px] font-medium tracking-[-0.015em]", active ? "text-brand" : "text-navy")}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </Accordion>
        </nav>

        <SheetFooter className="border-t border-line p-5">
          <Link href={site.demoHref} onClick={close} className={buttonClasses("primary", "lg", "w-full")}>
            Book a Demo
          </Link>
          <Link href={site.salesHref} onClick={close} className={buttonClasses("secondary", "lg", "w-full")}>
            Contact Sales
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
