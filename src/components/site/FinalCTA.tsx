import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

const perks = ["Free demo", "We set it up for you", "Simple monthly plans"];

/** Closing call-to-action: light card with a drifting aurora glow and a glowing horizon (aurora/glow-horizon CTA pattern). */
export function FinalCTA({ title = "See it for yourself.", text = "Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." }: { title?: string; text?: string }) {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f6f7fe] pb-[clamp(72px,8vw,120px)] pt-[clamp(40px,5vw,80px)] text-[#111735]">
      <div className="rail-inner">
        <Reveal className="relative overflow-hidden rounded-[18px] border border-black/[.07] bg-white px-6 py-[clamp(64px,9vw,120px)] text-center shadow-[0_40px_80px_-50px_rgba(17,23,53,.35)]">
          <div aria-hidden className="drift pointer-events-none absolute -left-24 -top-32 size-[420px] rounded-full bg-[#c9cbff] opacity-70 blur-[90px]" />
          <div aria-hidden className="drift-b pointer-events-none absolute -right-20 top-10 size-[360px] rounded-full bg-[#ffd9c7] opacity-70 blur-[90px]" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{ background: "radial-gradient(60% 100% at 50% 100%, rgba(95,99,242,.35), transparent 70%)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-x-[12%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#5f63f2] to-transparent" />

          <div className="relative">
            <p className="mono-label flex items-center justify-center gap-3 text-black/45"><span className="size-2 rounded-full bg-[#5f63f2]" />Get started</p>
            <h2 className="h-section mx-auto mt-5 max-w-[14em]">{title}</h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-snug text-black/55">{text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href={site.demoHref} className="pill pill-dark h-12 px-7">Book a demo<ArrowRight className="size-4" /></Link>
              <Link href={site.salesHref} className="pill h-12 border border-black/15 bg-white/70 px-7 hover:bg-white">Contact sales</Link>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px] text-black/55">
              {perks.map((p) => <li key={p} className="flex items-center gap-1.5"><Check className="size-4 text-[#5f63f2]" />{p}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
