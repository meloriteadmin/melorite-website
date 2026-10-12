import Link from "next/link";
import { reasons } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { site } from "@/data/site";

export function WhyList({ id }: { id?: string }) {
  return (
    <section id={id} data-nav="dark" className="rails scroll-mt-16 bg-[#111735] py-[clamp(80px,9vw,140px)] text-white">
      <div className="rail-inner grid gap-12 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <p className="mono-label text-white/45">Why Melorite</p>
          <h2 className="h-section mt-3 max-w-[11ch]">Why businesses choose Melorite</h2>
          <p className="mt-6 max-w-[34ch] text-[17px] leading-snug text-white/55">Good software should make your day easier, not add to it. Here’s what you can expect from us.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={site.demoHref} className="pill pill-light h-12 px-6">Book a demo</Link>
            <Link href={site.salesHref} className="pill pill-ghost-dark h-12 px-6">Talk to us</Link>
          </div>
        </Reveal>
        <ul className="border-t border-white/10">
          {reasons.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.04}>
              <li className="grid grid-cols-[2.2rem_1fr] gap-4 border-b border-white/10 py-6 sm:grid-cols-[2.6rem_minmax(0,.9fr)_minmax(0,1.3fr)]">
                <span className="pt-1.5 font-serif text-[14px] text-white/40">0{i + 1}</span>
                <h3 className="font-serif text-[clamp(1.4rem,1.15rem+.9vw,1.9rem)] leading-tight tracking-[-0.03em]">{t}</h3>
                <p className="col-start-2 text-[15px] leading-snug text-white/50 sm:col-start-auto sm:pt-1.5">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
