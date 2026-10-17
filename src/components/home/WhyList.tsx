import Link from "next/link";
import { ArrowRight, Check as CheckIcon, HeartHandshake, LifeBuoy, Puzzle, ShieldCheck, Timer, TrendingUp, Zap } from "lucide-react";
import { reasons } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { site } from "@/data/site";

const icons = [Puzzle, Zap, HeartHandshake, Timer, ShieldCheck, TrendingUp, LifeBuoy];

export function WhyList({ id }: { id?: string }) {
  return (
    <section id={id} data-nav="light" className="scroll-mt-16 py-[clamp(56px,6.5vw,96px)] text-[#111735]">
      <div className="rail-inner">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow-pill">Why Melorite</p><h2 className="h-section mt-5">Software without the usual friction.</h2></div>
          <p className="max-w-[42ch] text-[17px] leading-[1.55] text-[#111735]/58">Good software should make the day feel lighter. That principle shapes every product, screen and conversation.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, body], i) => { const Icon = icons[i]; return (
            <Reveal key={title} delay={(i % 3) * .05} className="glass glass-sheen glass-lift flex min-h-[220px] flex-col rounded-[16px] p-6">
              <span className="flex items-center justify-between"><span className="icon-chip"><Icon className="size-5" strokeWidth={1.8} /></span><span className="text-[12px] font-semibold tracking-[.14em] text-[#111735]/25">0{i + 1}</span></span>
              <h3 className="mt-auto pt-8 text-[20px] font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/58">{body}</p>
            </Reveal>
          ); })}
          <Reveal delay={.2} className="fit-consultation sm:col-span-2 lg:col-span-2">
            <div className="fit-consultation-copy"><span className="eyebrow-pill">A useful first conversation</span><h3>Find your starting point.</h3><p>Bring the process you want to improve. We’ll show you the Melorite workspace that fits.</p><Link href={site.demoHref} className="pill pill-dark">Book a demo <ArrowRight className="size-4" /></Link></div>
            <div className="fit-consultation-preview" aria-hidden="true"><div className="fit-calendar-header"><span>Let’s talk</span><span>Melorite</span></div><div className="fit-calendar-date"><span>A focused walkthrough</span><strong>Your business.<br/>Your workflow.</strong></div><div className="fit-agenda"><span><CheckIcon/>Understand your process</span><span><CheckIcon/>Explore the right workspace</span><span><CheckIcon/>Agree a practical next step</span></div></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
