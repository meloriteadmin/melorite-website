"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductVisual, panelFor } from "@/components/site/ProductVisuals";
import { productIcons } from "@/components/layout/MegaMenu";

/** Tabbed product window: pick a product, see its real workspace. */
export function ProductShowcase() {
  const [active, setActive] = useState(products[0].slug);
  const current = products.find((p) => p.slug === active) ?? products[0];
  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="overflow-hidden rounded-[28px] border border-[#111735]/10 bg-white shadow-[0_40px_90px_-50px_rgba(17,23,53,.45)]">
        <div role="tablist" aria-label="Melorite products" className="no-scrollbar flex gap-1 overflow-x-auto border-b border-[#111735]/8 bg-[#f8f8ff] px-3 pt-3">
          {products.map((p) => {
            const Icon = productIcons[p.icon];
            const on = p.slug === active;
            return (
              <button key={p.slug} role="tab" aria-selected={on} onClick={() => setActive(p.slug)} className={`flex shrink-0 items-center gap-2 rounded-t-xl px-4 py-3 text-[14px] font-medium transition-colors ${on ? "bg-white text-[#4b4fe0] shadow-[0_-1px_0_0_rgba(95,99,242,.25)_inset]" : "text-[#111735]/55 hover:text-[#111735]"}`}>
                <Icon className="size-4" />{p.short}
              </button>
            );
          })}
        </div>
        <div className={`${panelFor[current.slug]} relative grid min-h-[480px] items-center gap-8 px-5 py-10 transition-colors md:grid-cols-[.8fr_1.2fr] md:px-12`}>
          <AnimatePresence mode="wait">
            <motion.div key={current.slug + "t"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="relative z-10">
              <p className="mono-label text-[#4b4fe0]">{current.kicker}</p>
              <h3 className="mt-3 text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.04em]">{current.name}</h3>
              <p className="mt-4 max-w-[40ch] text-[16.5px] leading-snug text-[#111735]/65">{current.summary}</p>
              <Link href={`/products/${current.slug}`} className="pill pill-dark mt-7 h-11">Explore {current.short}<ArrowRight className="size-4" /></Link>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div key={current.slug} initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="relative z-10 flex justify-center">
              <ProductVisual slug={current.slug} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
