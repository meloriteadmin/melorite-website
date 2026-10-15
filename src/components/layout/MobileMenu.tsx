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
      <SheetContent side="right" className="gap-0 border-l border-[#111735]/10 bg-[#fbfbf8] p-0 text-[#111735]" data-lenis-prevent>
        <SheetHeader className="h-16 justify-center border-b border-[#111735]/10 px-5">
          <SheetTitle asChild><span><Logo className="h-[22px]" /><span className="sr-only">Menu</span></span></SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <nav className="no-scrollbar flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
          <p className="mono-label text-[#5f63f2]">Products</p>
          <ul className="mt-3">
            {products.map((p) => (
              <li key={p.slug}><Link href={`/products/${p.slug}`} onClick={close} className="block border-b border-[#111735]/10 py-3.5 text-[24px] font-bold tracking-[-.035em]">{p.name}</Link></li>
            ))}
          </ul>
          <ul className="mt-6">
            {mainNav.filter((n) => !n.menu).map((n) => (
              <li key={n.href}><Link href={n.href} onClick={close} className="block border-b border-[#111735]/10 py-3.5 text-[24px] font-bold tracking-[-.035em]">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 border-t border-[#111735]/10 p-5">
          <Link href={site.salesHref} onClick={close} className="pill flex-1 border border-[#111735]/15">Contact sales</Link>
          <Link href={site.demoHref} onClick={close} className="pill pill-dark flex-1">Book a demo</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
