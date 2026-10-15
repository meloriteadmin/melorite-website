"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { GridBg } from "@/components/site/PageHero";

/** Hero for /why-melorite: light grid banner. */
export function WhyHero() {
  return (
    <section data-nav="light" className="rails rails-light relative overflow-hidden bg-[#fbfbf8] pt-[64px] text-[#111735]">
      <GridBg />
      <div className="rail-inner relative py-[clamp(72px,10vw,150px)]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="mono-label flex items-center gap-3 text-black/45"><span className="size-2 rounded-full bg-[#5f63f2]" />Why Melorite</p>
            <h1 className="h-hero mt-6 max-w-[14ch] !text-[clamp(2.6rem,1.6rem+3.8vw,4.6rem)]">Why businesses<br /><span className="text-black/35">choose Melorite.</span></h1>
          </div>
          <div>
            <p className="max-w-[40ch] text-[16px] leading-snug text-black/55">Good software should make your day easier, not add to it. Here’s what you can expect from us.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={site.demoHref} className="pill pill-dark h-12 px-6">Book a demo</Link>
              <Link href="/products" className="pill h-12 border border-black/15 px-6 hover:bg-black/[.04]">Explore products</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
