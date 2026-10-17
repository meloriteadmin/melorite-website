import Link from "next/link";
import { ArrowRight, HeartHandshake, LifeBuoy, Puzzle, ShieldCheck, Timer, TrendingUp, Zap } from "lucide-react";
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
            <Reveal key={title} delay={(i % 3) * .05} className="glass glass-sheen glass-lift flex min-h-[220px] flex-col rounded-[26px] p-6">
              <span className="flex items-center justify-between"><span className="icon-chip"><Icon className="size-5" strokeWidth={1.8} /></span><span className="text-[12px] font-semibold tracking-[.14em] text-[#111735]/25">0{i + 1}</span></span>
              <h3 className="mt-auto pt-8 text-[20px] font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/58">{body}</p>
            </Reveal>
          ); })}
          <Reveal delay={.2} className="mesh-crm relative flex min-h-[220px] flex-col justify-between gap-8 overflow-hidden rounded-[26px] border border-white/70 p-6 sm:col-span-2 lg:col-span-2">
            <i aria-hidden className="absolute -right-10 -top-10 size-44 rounded-full bg-white/50 blur-3xl" />
            <p className="relative z-10 max-w-[18ch] text-[26px] font-semibold leading-tight tracking-[-.035em]">See how it fits your business.</p>
            <Link href={site.demoHref} className="pill pill-dark relative z-10 h-11 self-start">Book a demo <ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
