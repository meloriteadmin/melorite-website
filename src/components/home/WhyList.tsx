import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { reasons } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { site } from "@/data/site";

export function WhyList({ id }: { id?: string }) {
  return (
    <section id={id} data-nav="light" className="rails rails-light scroll-mt-16 bg-[#fbfbf8] py-[clamp(88px,11vw,160px)] text-[#111735]">
      <div className="rail-inner mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="mono-label text-[#5f63f2]">Why Melorite</p>
          <h2 className="h-section mt-5 max-w-[10ch]">Software without the usual friction.</h2>
          <p className="mt-6 max-w-[36ch] text-[17px] leading-[1.55] text-[#111735]/58">Good software should make the day feel lighter. That principle shapes every product, screen and conversation.</p>
          <Link href={site.demoHref} className="pill pill-dark mt-8 h-12 px-7">Book a demo <ArrowRight className="size-4" /></Link>
        </Reveal>
        <ol className="border-t border-[#111735]/14">
          {reasons.map(([title, body], i) => (
            <Reveal key={title} delay={i * .035}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 border-b border-[#111735]/14 py-7 sm:grid-cols-[3rem_.75fr_1.25fr] sm:gap-8 sm:py-9">
                <span className="text-[12px] font-semibold tracking-[.12em] text-[#5f63f2]">0{i + 1}</span>
                <h3 className="text-[clamp(1.45rem,1.1rem+1vw,2rem)] font-bold leading-none tracking-[-.04em]">{title}</h3>
                <p className="col-start-2 text-[16px] leading-[1.5] text-[#111735]/55 sm:col-start-auto">{body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
