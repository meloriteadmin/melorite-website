import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

const perks = ["Free demo", "We set it up for you", "Simple monthly plans"];

/** Closing call-to-action: light card with a drifting aurora glow and a glowing horizon (aurora/glow-horizon CTA pattern). */
export function FinalCTA({ title = "See it for yourself.", text = "Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." }: { title?: string; text?: string }) {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(72px,8vw,120px)] text-[#111735]">
      <div className="rail-inner">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#151843,#30349a)] px-6 py-[clamp(64px,9vw,112px)] text-center text-white">
          <div aria-hidden className="pointer-events-none absolute -left-28 bottom-[-220px] size-[460px] rounded-full border border-white/10" />
          <div aria-hidden className="pointer-events-none absolute -right-20 top-[-180px] size-[390px] rounded-full border border-white/10" />
          <div className="relative">
            <p className="mono-label flex items-center justify-center gap-3 text-white/60"><span className="size-2 rounded-full bg-[#ff9f7a]" />Get started</p>
            <h2 className="h-section mx-auto mt-5 max-w-[14em]">{title}</h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-relaxed text-white/68">{text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href={site.demoHref} className="pill pill-light h-12 px-7">Book a demo<ArrowRight className="size-4" /></Link>
              <Link href={site.salesHref} className="pill pill-ghost-dark h-12 px-7">Contact sales</Link>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[.13em] text-white/55">{perks.join(" · ")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
