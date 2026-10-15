"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export function EditorialAboutHero() {
  return (
    <section data-nav="light" className="rails rails-light overflow-hidden bg-[#f9f8f6] pt-[64px] text-[#111]">
      <div className="rail-inner">
        <div className="grid gap-10 py-[clamp(56px,8vw,110px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:items-center lg:gap-[clamp(48px,6vw,110px)]">
          <motion.h1 {...reveal(0.05)} className="font-sans text-[clamp(2.6rem,1.5rem+2.9vw,4.6rem)] font-medium leading-[.98] tracking-[-.055em]">
            Software built around<br /><span className="text-[#111]/45">the people who use it</span>
          </motion.h1>
          <motion.div {...reveal(0.2)}>
            <p className="max-w-[40ch] text-[clamp(1.05rem,.98rem+.4vw,1.3rem)] leading-[1.45] text-[#111]/55">Ready-to-use products, thoughtful setup and a team that stays after you go live.</p>
            <Link href="/products" className="pill mt-8 h-12 border border-black/15 px-6 text-[16px] hover:bg-black/[.03]">Explore products</Link>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="rail-inner py-[clamp(32px,4vw,60px)]">
          <motion.div {...reveal(0.3)} className="grid gap-8 lg:grid-cols-[minmax(0,.4fr)_minmax(0,1fr)] lg:gap-0">
            <div className="flex flex-col justify-between gap-16 border-t border-black/10 pt-8 lg:pr-12">
              <div>
                <p className="text-[16px] uppercase text-[#111]/70">About Melorite</p>
                <p className="mt-2 text-[14px] text-[#111]/50">Our approach</p>
              </div>
              <div>
                <h2 className="font-sans text-[clamp(1.9rem,1.4rem+1.5vw,2.8rem)] font-medium leading-[1.02] tracking-[-.04em]">Simple software that fits, and people who stay after go-live</h2>
                <p className="mt-5 max-w-[34ch] text-[18px] leading-[1.45] text-[#111]/55">Each product is made for a particular kind of business, so your team doesn’t have to redesign its day around the software.</p>
                <Link href={site.demoHref} className="pill pill-dark mt-8 h-12 bg-black px-6 text-[16px]">Book a demo</Link>
              </div>
            </div>
            <div className="media-frame relative aspect-[16/11] min-h-[340px] overflow-hidden border border-black/[.06] bg-[#f4f1fb]">
              <Image src="/images/editorial/melorite-about-illustration.webp" alt="The Melorite team listening, planning and building together" fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
