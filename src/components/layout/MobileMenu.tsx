"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog } from "radix-ui";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mainNav, productHref } from "@/data/navigation";
import { featuredProducts } from "@/data/products";
import { site } from "@/data/site";
import { cn, EASE } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { buttonClasses } from "@/components/shared/Button";

/** Fullscreen mobile/tablet menu. Radix Dialog provides focus trap, Escape and scroll lock. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close when the route changes (adjusting state during render, per React guidance).
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

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="grid size-10 place-items-center rounded-[10px] text-navy ring-1 ring-line-strong transition-colors hover:bg-paper lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Content forceMount asChild aria-describedby={undefined}>
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white"
                data-lenis-prevent
              >
                <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                <div className="container-x flex h-[72px] shrink-0 items-center justify-between">
                  <Logo className="h-[24px]" />
                  <Dialog.Close className="grid size-10 place-items-center rounded-[10px] text-navy ring-1 ring-line-strong" aria-label="Close menu">
                    <X className="size-5" />
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile" className="container-x flex flex-1 flex-col pb-8 pt-6">
                  <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                    className="divide-y divide-line border-y border-line"
                  >
                    {mainNav.map((item) => {
                      const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                      return (
                        <motion.li key={item.href} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={cn("flex items-center justify-between py-4 text-[32px] font-semibold tracking-[-0.035em]", active ? "text-brand" : "text-navy")}
                          >
                            {item.label}
                            <ArrowUpRight className="size-6 text-muted" aria-hidden />
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="mt-8">
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Popular apps</div>
                    <div className="flex flex-wrap gap-2">
                      {featuredProducts.map((p) => (
                        <Link key={p.id} href={productHref(p.id)} onClick={() => setOpen(false)} className="rounded-full bg-paper px-3.5 py-1.5 text-[14px] font-medium text-navy ring-1 ring-line">
                          {p.shortName}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5, ease: EASE } }} className="mt-auto grid gap-3 pt-10">
                    <Link href={site.demoHref} onClick={() => setOpen(false)} className={buttonClasses("primary", "lg", "w-full")}>
                      Book a Demo
                    </Link>
                    <Link href={site.salesHref} onClick={() => setOpen(false)} className={buttonClasses("secondary", "lg", "w-full")}>
                      Contact Sales
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
