"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, Phone } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";

const reveal = (delay: number) => ({ initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE } });

const stats: [string, string][] = [["38", "New leads today"], ["12", "Site visits booked"], ["₹48L", "Deals closing"], ["94%", "Follow-ups done"]];
const stages = [["Enquiry", "14"], ["Site visit", "9"], ["Negotiation", "5"], ["Booked", "3"]];
const deals = [
  { n: "Aarav Sharma — 3 BHK, Tower A", m: "Negotiation · ₹1.2 Cr", t: "Closing soon", on: true },
  { n: "Meera Joshi — 2 BHK, Tower B", m: "Site visit · Sat, 11 am", t: "Scheduled" },
  { n: "Kabir Nair — Plot 14", m: "Enquiry · From Instagram ad", t: "New lead" },
];
const team = [
  { i: "PS", n: "Priya Sharma", r: "Call Aarav at 4:30 pm", t: "Today" },
  { i: "AI", n: "Melorite AI Calling", r: "Booked 3 site visits overnight", t: "Done" },
  { i: "RK", n: "Rohan Kulkarni", r: "Send payment schedule to Meera", t: "Tomorrow" },
];

function Monitor() {
  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      <div className="rounded-[10px] border border-white/10 bg-[#141414] p-[7px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)] md:p-[10px]">
        <div className="overflow-hidden rounded-[4px] bg-[#f6f5f2] p-3 text-[#2c2c2b] md:p-4">
          <div className="rounded-md border border-black/5 bg-white p-3 shadow-sm md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] font-medium md:text-[15px]">Good morning — 38 new leads came in</span>
                <span className="hidden items-center gap-1 rounded-full bg-[#eeeffe] px-2 py-0.5 text-[9px] font-medium text-[#4b4fe0] sm:inline-flex"><Check className="size-2.5" />All follow-ups scheduled</span>
              </div>
              <span className="mono-label !text-[8px] text-black/45">Team activity <b className="ml-1 font-sans text-[15px] tracking-normal text-[#4b4fe0]">94%</b></span>
            </div>
            <div className="mt-3 grid grid-cols-2 border-t border-black/5 pt-3 sm:grid-cols-4">
              {stats.map(([v, l], i) => (
                <div key={l} className={`px-2 py-1 ${i ? "sm:border-l sm:border-black/5" : ""}`}>
                  <p className="font-serif text-[17px] leading-none tracking-tight md:text-[21px]">{v}</p>
                  <p className="mt-1 text-[9px] text-black/55 md:text-[10px]">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1.08fr_.92fr]">
            <div className="rounded-md border border-black/5 bg-white p-3 md:p-4">
              <div className="flex items-center justify-between"><span className="text-[13px] font-medium md:text-[15px]">Deal pipeline</span><span className="mono-label !text-[7px] text-black/40">31 open</span></div>
              <div className="mt-2.5 grid grid-cols-4 gap-1">{stages.map(([s, c]) => <div key={s} className="rounded bg-black/[.04] px-1.5 py-1 text-center"><p className="text-[7.5px] text-black/50">{s}</p><p className="text-[11px] font-medium">{c}</p></div>)}</div>
              <div className="mt-2.5 space-y-1.5">
                {deals.map((d) => (
                  <div key={d.n} className={`flex items-center justify-between gap-2 rounded-md border px-2.5 py-2 ${d.on ? "border-[#cfd1fb] bg-[#f4f4ff]" : "border-black/5 bg-[#fbfaf8]"}`}>
                    <div className="min-w-0"><p className="truncate text-[10.5px] font-medium md:text-[11.5px]">{d.n}</p><p className="truncate text-[8.5px] text-black/50">{d.m}</p></div>
                    <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] ${d.on ? "bg-[#dcddfd] text-[#3c3fc4]" : "bg-black/[.06] text-black/60"}`}>{d.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-black/5 bg-white p-3 md:p-4">
              <div className="flex items-center justify-between"><span className="text-[13px] font-medium md:text-[15px]">Today</span><span className="mono-label !text-[7px] text-black/40">Team</span></div>
              <div className="mt-2 divide-y divide-black/5">
                {team.map((p) => (
                  <div key={p.n} className="flex items-center gap-2.5 py-2">
                    <span className={`grid size-7 shrink-0 place-items-center rounded-full text-[8.5px] font-medium text-white ${p.i === "AI" ? "bg-[#5f63f2]" : "bg-[#111735]"}`}>{p.i}</span>
                    <div className="min-w-0 flex-1"><p className="truncate text-[10.5px] font-medium">{p.n}</p><p className="truncate text-[8.5px] text-black/50">{p.r}</p></div>
                    <span className="grid size-5 place-items-center rounded-full border border-black/10 text-black/50"><Phone className="size-2.5" /></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-9 w-[16%] bg-gradient-to-b from-[#9a9a98] to-[#58585a] md:h-14" />
      <div className="mx-auto h-1.5 w-[28%] rounded-full bg-[#3a3a3a]" />
    </div>
  );
}

export function Hero() {
  return (
    <section data-nav="dark" className="rails bg-[#080808] pt-[64px] text-white">
      <div className="px-[clamp(8px,1.4vw,20px)] pb-5 pt-5">
        <div className="atmos-warm relative min-h-[min(900px,calc(100svh-90px))] overflow-hidden rounded-[6px]">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-b from-transparent via-[#1b2050]/50 to-[#3a3fb8]/40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-[26%] h-px bg-white/10" />
          <div className="rail-inner relative grid min-h-[inherit] items-center gap-12 py-16 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:gap-6 lg:py-20">
            <div className="lg:self-end lg:pb-24">
              <motion.h1 {...reveal(0.1)} className="h-hero max-w-[11ch] text-white">Software that fits your business.</motion.h1>
              <motion.p {...reveal(0.25)} className="mt-6 max-w-[34ch] text-[clamp(1.05rem,.95rem+.5vw,1.4rem)] font-light leading-snug text-white/60">Ready-to-use software for real estate, clinics, agencies, online sellers and sales teams, plus AI calling that answers and makes your calls.</motion.p>
              <motion.div {...reveal(0.4)} className="mt-9 flex flex-wrap gap-3">
                <Link href={site.demoHref} className="pill pill-light h-12 px-6">Book a demo</Link>
                <Link href="/products" className="pill pill-ghost-dark h-12 px-6">Explore products</Link>
              </motion.div>
            </div>
            <motion.div {...reveal(0.35)} className="lg:translate-y-6"><Monitor /></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
