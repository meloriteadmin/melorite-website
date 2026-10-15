import Link from "next/link";
import { ArrowRight, HeartHandshake, LifeBuoy, Puzzle, ShieldCheck, Timer, TrendingUp, Zap } from "lucide-react";
import { reasons } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { site } from "@/data/site";

const icons = [Puzzle, Zap, HeartHandshake, Timer, ShieldCheck, TrendingUp, LifeBuoy];

export function WhyList({ id }: { id?: string }) {
  return (
    <section id={id} data-nav="light" className="scroll-mt-16 bg-white py-[clamp(56px,6.5vw,96px)] text-[#111735]">
      <div className="rail-inner">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow-pill">Why Melorite</p><h2 className="h-section mt-5">Software without the usual friction.</h2></div>
          <p className="max-w-[42ch] text-[17px] leading-[1.55] text-[#111735]/58">Good software should make the day feel lighter. That principle shapes every product, screen and conversation.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([title, body], i) => { const Icon = icons[i]; return (
            <Reveal key={title} delay={(i % 4) * .05} className="card flex flex-col p-6">
              <span className="icon-chip"><Icon className="size-5" /></span>
              <h3 className="mt-7 text-[20px] font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/58">{body}</p>
            </Reveal>
          ); })}
          <Reveal delay={.2} className="mesh-crm grain relative flex flex-col justify-between gap-8 overflow-hidden rounded-[22px] p-6">
            <p className="relative z-10 text-[22px] font-semibold leading-tight tracking-[-.03em]">See how it fits your business.</p>
            <Link href={site.demoHref} className="pill pill-dark relative z-10 h-11 self-start">Book a demo <ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
