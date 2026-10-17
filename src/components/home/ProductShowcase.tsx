"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";
import { SceneStage } from "@/components/product/Scenes";
import { productIcons } from "@/components/layout/MegaMenu";
import { Dock } from "@/components/ui/floating-dock";

/** Product switcher: a magnifying dock picks the product, the glass stage shows its live workspace. */
export function ProductShowcase() {
  const [active, setActive] = useState(products[0].slug);
  const current = products.find((p) => p.slug === active) ?? products[0];
  const items = products.map((p) => ({ label: p.short, icon: productIcons[p.icon], active: p.slug === active, onSelect: () => setActive(p.slug) }));
  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="flex justify-center pt-10"><Dock items={items} /></div>
      <div className="mt-8 grid items-center gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-12">
        <AnimatePresence mode="wait">
          <motion.div key={current.slug + "t"} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="min-h-[300px]">
            <p className="mono-label text-[#4b4fe0]">{current.kicker}</p>
            <h3 className="mt-3 text-[clamp(1.9rem,1.3rem+1.8vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.04em]">{current.name}</h3>
            <p className="mt-4 max-w-[40ch] text-[16.5px] leading-snug text-[#111735]/65">{current.summary}</p>
            <ul className="mt-6 space-y-2.5">{current.does.slice(0, 3).map((d) => <li key={d} className="flex items-start gap-2.5 text-[14.5px] text-[#111735]/75"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#5f63f2]/14 text-[#4b4fe0]"><Check className="size-3" strokeWidth={3.5} /></span>{d}</li>)}</ul>
            <Link href={`/products/${current.slug}`} className="pill pill-dark mt-8 h-11">Explore {current.short}<ArrowRight className="size-4" /></Link>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div key={current.slug} initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: 0.35 }} className="glass rounded-[32px] p-2.5">
            <SceneStage slug={current.slug} variant="b" className="!rounded-[24px]" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
