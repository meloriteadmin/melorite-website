"use client";

import { motion } from "motion/react";
import { ArrowUp, Bell, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { ButtonLink } from "@/components/shared/Button";
import { AppMarquee } from "@/components/shared/AppMarquee";

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 22, scale: .98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: .75, ease: EASE, delay },
});

function RevenueCard() {
  return <motion.div {...entrance(.8)} className="absolute -left-12 top-[31%] hidden w-[286px] rounded-2xl border border-blue-100/80 bg-[#eaf2ff]/95 p-5 shadow-float backdrop-blur lg:block xl:left-2">
    <div className="grid grid-cols-[.8fr_1.2fr] gap-4"><div><p className="text-[26px] font-semibold tracking-[-.04em] text-[#174d83]">₹24.8L</p><p className="mt-1 text-[10px] font-medium text-[#3974a8]">↑ 8.4% this month</p><div className="mt-5 flex h-16 items-end gap-2">{[42,58,49,71,60,82,67].map((h,index)=><motion.i key={index} initial={{height:0}} animate={{height:`${h}%`}} transition={{duration:.65,ease:EASE,delay:1+index*.04}} className="flex-1 rounded-t bg-[#22629a]"/>)}</div></div><div className="border-l border-[#bfd6ee] pl-4"><p className="text-[11px] font-semibold text-[#174d83]">Revenue sources</p>{[["Commerce","₹11.2L"],["Projects","₹8.4L"],["Service","₹5.2L"]].map(([name,value])=><div key={name} className="flex justify-between border-b border-[#cadef0] py-2 text-[10px] text-[#3974a8] last:border-0"><span>{name}</span><strong>{value}</strong></div>)}</div></div>
  </motion.div>;
}

function PipelineCard() {
  const circumference = 2 * Math.PI * 38;
  return <motion.div {...entrance(.95)} className="absolute -right-8 top-[43%] hidden w-[240px] rounded-2xl border border-orange-100/80 bg-[#fff1ea]/95 p-5 shadow-float backdrop-blur lg:block xl:right-3">
    <p className="text-[12px] font-semibold text-[#713723]">Pipeline coverage</p><div className="mt-3 flex items-center justify-between gap-3"><div><p className="text-[24px] font-semibold tracking-[-.04em] text-[#713723]">3.2×</p><p className="mt-1 text-[10px] text-[#a26751]">↑ 12% vs target</p></div><svg viewBox="0 0 96 96" className="size-24 -rotate-90" aria-hidden><circle cx="48" cy="48" r="38" fill="none" stroke="#f2d7cd" strokeWidth="5"/><motion.circle cx="48" cy="48" r="38" fill="none" stroke="#8b432a" strokeWidth="5" strokeLinecap="round" strokeDasharray={circumference} initial={{strokeDashoffset:circumference}} animate={{strokeDashoffset:circumference*.24}} transition={{duration:1.1,ease:EASE,delay:1.15}}/></svg></div>
  </motion.div>;
}

function DeliveryCard() {
  return <motion.div {...entrance(1.05)} className="absolute bottom-[7%] left-[12%] hidden w-[270px] rounded-2xl border border-violet-100/80 bg-[#f3efff]/95 p-5 shadow-float backdrop-blur md:block">
    <div className="flex items-center justify-between"><p className="text-[12px] font-semibold text-[#513b82]">Delivery momentum</p><span className="rounded-full bg-white/75 px-2 py-1 text-[9px] font-medium text-[#765da9]">This quarter</span></div><svg viewBox="0 0 230 76" className="mt-3 w-full" aria-hidden><path d="M6 65 C25 61,28 44,46 46 S68 32,84 36 S105 25,124 28 S150 14,168 19 S195 13,224 5" fill="none" stroke="#7054a8" strokeWidth="2.5" strokeLinecap="round"/><path d="M6 65H224" stroke="#d7cfeb" strokeDasharray="4 5"/><circle cx="224" cy="5" r="4" fill="#7054a8"/></svg><div className="mt-1 flex justify-between text-[9px] text-[#8c7bae]"><span>Planning</span><span>Delivery</span><span>Complete</span></div>
  </motion.div>;
}

function AskCard() {
  return <motion.div {...entrance(1.12)} className="absolute bottom-[5%] right-[18%] hidden w-[330px] rounded-2xl border border-emerald-100/80 bg-[#eefaf3]/95 p-4 shadow-float backdrop-blur md:block">
    <div className="flex items-center gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#d7f1e1] text-[#26704b]"><Sparkles className="size-3.5"/></span><div className="min-w-0 flex-1"><p className="text-[10px] text-[#71907e]">Ask Melorite AI</p><p className="truncate text-[11px] font-medium text-[#244b38]">What needs attention today?</p></div><span className="grid size-8 place-items-center rounded-full bg-[#e8e3ff] text-[#5a4b91]"><ArrowUp className="size-3.5"/></span></div>
  </motion.div>;
}

export function Hero() {
  return <>
    <section className="relative min-h-[780px] overflow-hidden pb-20 pt-[116px] md:min-h-[860px] md:pt-[132px]">
      <div className="hero-atmosphere absolute inset-0 -z-10" aria-hidden><span className="hero-orb hero-orb-blue"/><span className="hero-orb hero-orb-peach"/><span className="hero-orb hero-orb-violet"/><span className="hero-orb hero-orb-green"/><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,.28)_56%,rgba(255,255,255,.8)_100%)]"/></div>
      <RevenueCard/><PipelineCard/><DeliveryCard/><AskCard/>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.div {...entrance(.1)} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/60 px-4 py-2 text-[12px] font-medium text-[#242424] shadow-soft backdrop-blur-md"><Bell className="size-3.5"/><span className="size-1.5 rounded-full bg-[#ff6652]"/>15 offerings. One connected platform.<span aria-hidden>→</span></motion.div>

        <motion.h1 initial={{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{duration:.85,ease:EASE,delay:.2}} className="mt-24 max-w-[1000px] font-editorial text-[clamp(3.25rem,7vw,6.8rem)] font-medium leading-[.96] tracking-[-.055em] text-[#111111] md:mt-28">
          Your whole business,<br/><span className="italic font-normal">connected without the chaos.</span>
        </motion.h1>
        <motion.p {...entrance(.48)} className="mt-7 max-w-[650px] text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed tracking-[-.015em] text-[#4f4f4f]">Melorite brings business applications, AI and industry workflows into one calm, connected operating system.</motion.p>
        <motion.div {...entrance(.62)} className="mt-8 flex flex-col items-center gap-3 sm:flex-row"><ButtonLink href="/products" size="lg" variant="dark" arrow magnetic>Explore Melorite</ButtonLink><ButtonLink href={site.demoHref} size="lg" variant="ghost">Book a Demo</ButtonLink></motion.div>

        <motion.div {...entrance(.85)} className="mt-12 grid w-full max-w-[700px] grid-cols-3 gap-2 md:hidden">{[["₹24.8L","Revenue"],["3.2×","Pipeline"],["94%","On track"]].map(([value,label],index)=><div key={label} className={`rounded-xl border p-3 text-left ${["border-blue-100 bg-[#eaf2ff]","border-orange-100 bg-[#fff1ea]","border-violet-100 bg-[#f3efff]"][index]}`}><p className="text-[16px] font-semibold text-navy">{value}</p><p className="mt-1 text-[9px] text-muted">{label}</p></div>)}</motion.div>
      </div>
    </section>
    <div className="border-y border-line/70 bg-white py-8"><p className="container-x mb-6 text-center text-[11px] font-medium uppercase tracking-[.12em] text-muted">Seven business applications · Two AI products · Six industry solutions</p><AppMarquee/></div>
  </>;
}
