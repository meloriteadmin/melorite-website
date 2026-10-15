"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { ProductShowcase } from "./ProductShowcase";
import { WaveRibbon } from "@/components/site/WaveRibbon";

const reveal = (delay: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE } });

const logos = ["Real estate", "Clinics", "Agencies", "Online sellers", "Sales teams", "AI calling"];

export function Hero() {
  return (
    <section data-nav="light" className="relative bg-white overflow-hidden pt-[64px] text-[#111735]">
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-5 pt-[clamp(48px,7vw,104px)] text-center md:px-8">
        <motion.div {...reveal(0.05)}>
          <Link href="/products/ai-calling" className="group inline-flex items-center gap-2.5 rounded-full border border-[#5f63f2]/20 bg-white/90 py-1.5 pl-1.5 pr-4 text-[14px] shadow-[0_10px_30px_-18px_rgba(95,99,242,.7)] backdrop-blur transition-shadow hover:shadow-md">
            <span className="rounded-full bg-[#5f63f2] px-3 py-1 text-[12.5px] font-medium text-white">New</span>
            <span className="font-medium">Introducing Melorite AI Calling</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
        <motion.h1 {...reveal(0.15)} className="h-hero mt-7 max-w-[14ch] !text-[clamp(3rem,1.6rem+5.2vw,6.2rem)] !font-medium !leading-[.98] !tracking-[-0.05em]">
          Software that <span className="text-[#4b4fe0]">fits your business.</span>
        </motion.h1>
        <motion.p {...reveal(0.28)} className="mt-6 max-w-[54ch] text-[clamp(1.05rem,.95rem+.45vw,1.3rem)] leading-snug text-[#111735]/62">
          Ready-to-use software for real estate, clinics, agencies, online sellers and sales teams, plus AI calling that answers and makes your calls.
        </motion.p>
        <motion.div {...reveal(0.4)} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href={site.demoHref} className="pill pill-dark h-[52px] px-8 text-[16px] shadow-[0_18px_40px_-18px_rgba(17,23,53,.8)]">Book a demo<ArrowRight className="size-4" /></Link>
          <Link href="/products" className="pill h-[52px] border border-[#111735]/12 bg-white px-8 text-[16px] text-[#111735] shadow-sm hover:border-[#5f63f2]/40">Explore products</Link>
        </motion.div>
      </div>

      <WaveRibbon className="mt-[clamp(8px,2vw,24px)] h-[clamp(260px,36vw,540px)]" />

      <div className="relative border-y border-[#111735]/8 bg-white py-5">
        <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[.14em] text-[#111735]/40">Built for teams in</p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track gap-14 text-[22px] font-semibold tracking-[-0.03em] text-[#111735]/35">
            {[...logos, ...logos, ...logos, ...logos].map((l, i) => <span key={i} className="pr-14">{l}</span>)}
          </div>
        </div>
      </div>
    
      <div className="bg-white px-3 pb-3 pt-[clamp(40px,6vw,88px)] sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-[1360px] rounded-[32px] bg-[#f4f5ff] px-4 py-[clamp(28px,5vw,72px)] sm:px-[clamp(20px,5vw,72px)]">
          <div className="mx-auto mb-10 max-w-[640px] text-center"><p className="eyebrow-pill">See it working</p><h2 className="h-section mt-5">One product for every kind of business.</h2><p className="mt-4 text-[17px] text-[#111735]/60">Pick yours and look inside.</p></div>
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}