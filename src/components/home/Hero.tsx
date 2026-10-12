"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Building2, Headset, Megaphone, Phone, Search, ShoppingBag, Sparkles, Stethoscope, Users } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { RibbonScene } from "@/components/site/RibbonScene";

const reveal = (delay: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE } });

const tabs: [typeof Users, string, boolean?][] = [[Users, "CRM", true], [Building2, "Real Estate"], [Stethoscope, "Clinic"], [Megaphone, "Agency"], [ShoppingBag, "Commerce"], [Headset, "AI Calling"]];
const side = [["Today", true], ["Leads", false], ["Deals", false], ["Follow-ups", false], ["Site visits", false], ["Reports", false]] as const;

function AppWindow() {
  return (
    <div className="relative rounded-[18px] border border-[#111735]/[.07] bg-[#eceefc]/80 p-[6px] shadow-[0_50px_90px_-40px_rgba(17,23,53,.45)] backdrop-blur-sm">
      <div className="flex items-center gap-2 px-4 py-3"><span className="size-2.5 rounded-full bg-[#ff8f8f]" /><span className="size-2.5 rounded-full bg-[#ffd27a]" /><span className="size-2.5 rounded-full bg-[#8fe0a0]" /></div>
      <div className="overflow-hidden rounded-[12px] bg-white text-[#111735]">
        <div className="flex items-center gap-4 px-5 pt-4 sm:px-7">
          <span className="flex shrink-0 items-center gap-2 font-semibold tracking-tight"><span className="grid size-7 place-items-center rounded-md bg-[#111735] text-[13px] text-white">m</span><span className="hidden sm:inline">Acme Realty</span></span>
          <div className="mx-auto hidden w-full max-w-[420px] items-center gap-2 rounded-lg border border-[#111735]/10 px-3 py-2 text-[12px] text-[#111735]/45 md:flex"><Search className="size-3.5" />Search customers, deals…<kbd className="ml-auto rounded border border-[#111735]/10 px-1.5 text-[10px]">Ctrl K</kbd></div>
          <span className="ml-auto hidden items-center gap-1.5 rounded-lg border border-[#111735]/10 px-3 py-2 text-[12px] md:flex"><Sparkles className="size-3.5 text-[#5f63f2]" />Ask Melorite</span>
          <span className="ml-auto grid size-8 place-items-center rounded-full bg-[#5f63f2] text-[11px] font-medium text-white md:ml-0">PS</span>
        </div>
        <div className="mt-4 flex gap-1 overflow-hidden border-b border-[#111735]/[.07] px-4 sm:px-7">
          {tabs.map(([I, l, on]) => (
            <span key={l} className={`flex shrink-0 items-center gap-1.5 border-b-2 px-3 pb-3 text-[12px] ${on ? "border-[#5f63f2] font-medium text-[#4b4fe0]" : "border-transparent text-[#111735]/55"}`}><I className="size-3.5" />{l}</span>
          ))}
        </div>
        <div className="grid gap-8 px-5 py-7 sm:px-7 lg:grid-cols-[170px_1fr_170px]">
          <ul className="hidden space-y-1 lg:block">
            <li className="mono-label mb-2 !text-[9px] text-[#111735]/40">Workspace</li>
            {side.map(([l, on]) => <li key={l} className={`rounded-md px-3 py-2 text-[12.5px] ${on ? "bg-[#eeeffe] font-medium text-[#4b4fe0]" : "text-[#111735]/60"}`}>{l}</li>)}
          </ul>
          <div>
            <p className="mono-label !text-[9px] text-[#111735]/40">Today</p>
            <h3 className="mt-2 flex items-center gap-3 text-[clamp(1.4rem,1rem+1.3vw,2.1rem)] font-semibold leading-none tracking-[-0.035em]"><span className="grid size-9 place-items-center rounded-lg bg-[#eeeffe] text-[#4b4fe0]"><Users className="size-5" /></span>Good morning, Priya</h3>
            <p className="mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#111735]/55">38 new leads came in overnight. Every one has an owner and a follow-up, so nothing slips away.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#111735]/[.08] p-5">
                <span className="grid size-9 place-items-center rounded-lg bg-[#eeeffe] text-[#4b4fe0]"><Users className="size-4" /></span>
                <p className="mt-6 text-[20px] font-semibold tracking-tight">38 new leads</p>
                <p className="mt-1 text-[12px] text-[#111735]/50">From your website, ads and WhatsApp</p>
              </div>
              <div className="rounded-xl border border-[#111735]/[.08] p-5">
                <span className="grid size-9 place-items-center rounded-lg bg-[#eeeffe] text-[#4b4fe0]"><Phone className="size-4" /></span>
                <p className="mt-6 text-[20px] font-semibold tracking-tight">3 calls answered</p>
                <p className="mt-1 text-[12px] text-[#111735]/50">By Melorite AI Calling after hours</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <p className="mono-label !text-[9px] text-[#111735]/40">Up next</p>
            <ul className="mt-3 space-y-3 text-[12px]">
              {[["4:30 pm", "Call Aarav Sharma"], ["Sat, 11 am", "Site visit · Meera"], ["Mon", "Send payment plan"]].map(([t, l]) => <li key={l} className="rounded-lg bg-[#f6f7fe] p-3"><p className="text-[10px] text-[#111735]/45">{t}</p><p className="mt-0.5 font-medium">{l}</p></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section data-nav="light" className="relative overflow-hidden bg-[#f6f7fe] pt-[64px] text-[#111735]">
      <div className="mx-auto max-w-[1240px] px-5 pt-[clamp(40px,6vw,88px)] md:px-8">
        <motion.div {...reveal(0.05)}>
          <Link href="/products/ai-calling" className="group inline-flex items-center gap-2.5 rounded-full border border-[#111735]/[.08] bg-white py-1.5 pl-1.5 pr-4 text-[14px] shadow-sm transition-shadow hover:shadow-md">
            <span className="rounded-full bg-[#5f63f2] px-3 py-1 text-[12.5px] font-medium text-white">New</span>
            <span className="font-medium">Introducing: <span className="font-normal text-[#111735]/70">Melorite AI Calling</span></span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.h1 {...reveal(0.15)} className="mt-9 max-w-[14ch] font-sans text-[clamp(2.8rem,1.5rem+4.8vw,5.4rem)] font-medium leading-[.98] tracking-[-0.055em]">
          Software that fits your business.
        </motion.h1>
        <motion.p {...reveal(0.28)} className="mt-6 max-w-[48ch] text-[clamp(1.05rem,.95rem+.45vw,1.35rem)] leading-snug text-[#111735]/65">
          Simple, ready-to-use software for real estate, clinics, agencies, online sellers and sales teams, plus AI calling that answers and makes your calls.
        </motion.p>
        <motion.div {...reveal(0.4)} className="mt-9 flex flex-wrap gap-3">
          <Link href={site.demoHref} className="pill pill-dark h-[52px] px-7 text-[16px]">Book a demo<ArrowRight className="size-4" /></Link>
          <Link href="/products" className="pill h-[52px] bg-[#111735]/[.06] px-7 text-[16px] text-[#111735] hover:bg-[#111735]/10">Explore products</Link>
        </motion.div>
      </div>

      <div className="relative mt-[clamp(40px,6vw,80px)] h-[clamp(430px,52vw,760px)]">
        <RibbonScene />
        <motion.div {...reveal(0.55)} className="relative mx-auto max-w-[1240px] px-5 md:px-8">
          <AppWindow />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f6f7fe]" />
      </div>
    </section>
  );
}
