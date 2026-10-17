"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";
import { SceneStage } from "@/components/product/Scenes";
import { productIcons } from "@/components/layout/MegaMenu";

/** Tabbed product window: the tab bar picks a product, the pane shows its live workspace. */
export function ProductShowcase() {
  const [active, setActive] = useState(products[0].slug);
  const current = products.find((p) => p.slug === active) ?? products[0];
  return (
    <div className="window mx-auto max-w-[1304px]">
      <div className="window-inner">
        <div role="tablist" aria-label="Melorite products" className="no-scrollbar flex gap-1.5 overflow-x-auto border-b border-[#e9e9ec] bg-[#fafafa] p-2.5">
          {products.map((p) => {
            const Icon = productIcons[p.icon];
            const on = p.slug === active;
            return (
              <button key={p.slug} id={`product-tab-${p.slug}`} aria-controls="product-showcase-panel" role="tab" tabIndex={on ? 0 : -1} aria-selected={on} onKeyDown={(event) => { const index = products.findIndex((item) => item.slug === p.slug); const next = event.key === "ArrowRight" ? (index + 1) % products.length : event.key === "ArrowLeft" ? (index - 1 + products.length) % products.length : event.key === "Home" ? 0 : event.key === "End" ? products.length - 1 : -1; if (next >= 0) { event.preventDefault(); setActive(products[next].slug); document.getElementById(`product-tab-${products[next].slug}`)?.focus(); } }} onClick={() => setActive(p.slug)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${on ? "bg-[#111735] text-white" : "text-[#111735]/60 hover:bg-[#111735]/5 hover:text-[#111735]"}`}>
                <Icon className="size-4" />{p.short}
              </button>
            );
          })}
        </div>
        <div role="tabpanel" id="product-showcase-panel" aria-labelledby={`product-tab-${active}`} tabIndex={0} className="grid items-center gap-8 p-6 md:grid-cols-[.8fr_1.2fr] md:gap-12 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={current.slug + "t"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="min-h-[300px]">
              <p className="text-[12px] font-semibold uppercase tracking-[.16em] text-[#4b4fe0]">{current.kicker}</p>
              <h3 className="mt-3 text-[clamp(1.9rem,1.3rem+1.8vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.035em]">{current.name}</h3>
              <p className="mt-4 max-w-[40ch] text-[16.5px] leading-snug text-[#111735]/62">{current.summary}</p>
              <ul className="mt-6 space-y-2.5">{current.does.slice(0, 3).map((d) => <li key={d} className="flex items-start gap-2.5 text-[14.5px] text-[#111735]/75"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#5f63f2]/12 text-[#4b4fe0]"><Check className="size-3" strokeWidth={3.5} /></span>{d}</li>)}</ul>
              <Link href={`/products/${current.slug}`} className="pill pill-dark mt-8 h-11">Explore {current.short}<ArrowRight className="size-4" /></Link>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div key={current.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <SceneStage slug={current.slug} variant="b" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
