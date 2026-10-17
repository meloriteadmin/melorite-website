"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Building2, Headset, Megaphone, ShoppingBag, Stethoscope, Users } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { ProductShowcase } from "./ProductShowcase";
import { WaveRibbon } from "@/components/site/WaveRibbon";

const reveal = (delay: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE } });

const trust = [[Users, "Sales teams", "Leads and follow-ups"], [Building2, "Real estate", "Projects and buyers"], [Stethoscope, "Clinics", "Appointments and records"], [Megaphone, "Agencies", "Clients and approvals"], [ShoppingBag, "Online sellers", "Orders and stock"], [Headset, "AI calling", "Calls answered 24/7"]] as const;

export function Hero() {
  return (
    <section data-nav="light" className="hero-bg relative overflow-hidden pt-6 text-[#111735]">
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 pt-[clamp(48px,7vw,104px)] text-center md:px-8">
        <motion.h1 initial={false} className="h-hero mt-7 max-w-[14ch] !text-[clamp(3rem,1.6rem+5.2vw,6.2rem)] !font-medium !leading-[.98] !tracking-[-0.05em]">
          Software that <span className="text-[#4b4fe0]">fits your business.</span>
        </motion.h1>
        <motion.p initial={false} className="mt-6 max-w-[54ch] text-[clamp(1.05rem,.95rem+.45vw,1.3rem)] leading-snug text-[#111735]/62">
          Melorite provides CRM, real estate management, clinic management, agency operations, ecommerce and AI calling software, built on a connected business platform.
        </motion.p>
        <motion.div {...reveal(0.4)} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href={site.demoHref} className="pill pill-dark h-[52px] px-8 text-[16px] shadow-[0_18px_40px_-18px_rgba(17,23,53,.8)]">Book a demo<ArrowRight className="size-4" /></Link>
          <Link href="/products" className="pill pill-glass h-[52px] px-8 text-[16px]">Explore products</Link>
        </motion.div>
      </div>

      <WaveRibbon className="mt-[clamp(8px,2vw,24px)] h-[clamp(260px,36vw,540px)]" />

      <div className="mx-auto max-w-[1400px] px-5 py-[clamp(40px,5vw,72px)] md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[clamp(1.1rem,1rem+.5vw,1.5rem)] text-[#111735]/80">Built for the way these teams work</p>
          <Link href="/products" className="pill pill-glass">Explore products</Link>
        </div>
        <div className="cells mt-8 grid-cols-2 md:grid-cols-3">
          {trust.map(([Icon, name, note]) => (
            <div key={name} className="flex items-center gap-4 bg-white/50 p-6 sm:p-8">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#111735]/[.05] text-[#111735]/70"><Icon className="size-5" strokeWidth={1.6} /></span>
              <div><p className="text-[17px] font-medium tracking-[-.02em]">{name}</p><p className="text-[13px] text-[#111735]/50">{note}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e4e3df] px-3 pb-3 pt-[clamp(40px,6vw,88px)] sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-[1304px]">
          <div className="mx-auto mb-10 max-w-[1304px]"><p className="eyebrow-pill">See it working</p><h2 className="h-section mt-5 max-w-[16ch]">One product for every kind of business.</h2><p className="mt-4 text-[17px] text-[#111735]/60">Pick yours and look inside.</p></div>
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}