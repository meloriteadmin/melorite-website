"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { Logo } from "@/components/shared/Logo";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

/** Mobile/tablet navigation drawer (Radix Sheet: focus trap, Escape, scroll lock). */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button type="button" aria-label="Open menu" className="grid size-10 place-items-center rounded-full bg-white text-[#111] lg:hidden"><Menu className="size-5" /></button>
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 border-0 bg-[#111735] p-0 text-white" data-lenis-prevent>
        <SheetHeader className="h-16 justify-center border-b border-white/10 px-5">
          <SheetTitle asChild><span><Logo white className="h-[22px]" /><span className="sr-only">Menu</span></span></SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <nav className="no-scrollbar flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
          <p className="mono-label text-white/40">Products</p>
          <ul className="mt-3">
            {products.map((p) => (
              <li key={p.slug}><Link href={`/products/${p.slug}`} onClick={close} className="block border-b border-white/10 py-3.5 font-serif text-[24px] tracking-tight">{p.name}</Link></li>
            ))}
          </ul>
          <ul className="mt-6">
            {mainNav.filter((n) => !n.menu).map((n) => (
              <li key={n.href}><Link href={n.href} onClick={close} className="block border-b border-white/10 py-3.5 font-serif text-[24px] tracking-tight">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 border-t border-white/10 p-5">
          <Link href={site.salesHref} onClick={close} className="pill pill-ghost-dark flex-1">Contact sales</Link>
          <Link href={site.demoHref} onClick={close} className="pill pill-light flex-1">Book a demo</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
