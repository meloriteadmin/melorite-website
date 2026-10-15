import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

const perks = ["Free demo", "We set it up for you", "Simple monthly plans"];

export function FinalCTA({ title = "See it for yourself.", text = "Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." }: { title?: string; text?: string }) {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f4f5fc] py-[clamp(88px,10vw,148px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <Reveal className="cta-glow media-frame relative isolate overflow-hidden border border-[#111735]/8 bg-white px-6 py-[clamp(84px,11vw,150px)] text-center shadow-[0_30px_90px_-70px_rgba(17,23,53,.55)]">
          <div aria-hidden className="absolute -left-[12%] -top-[28%] -z-10 size-[62%] rounded-full bg-[#8e92ff]/25 blur-[85px]" />
          <div aria-hidden className="absolute -right-[12%] -top-[24%] -z-10 size-[58%] rounded-full bg-[#ffcbb8]/30 blur-[90px]" />
          <div aria-hidden className="absolute -bottom-[38%] left-[20%] -z-10 h-[58%] w-[62%] rounded-full bg-[#777cff]/25 blur-[75px]" />
          <p className="mono-label flex items-center justify-center gap-3 text-[#777b86]"><span className="size-2 rounded-full bg-[#5f63f2]" />Get started</p>
          <h2 className="h-section mx-auto mt-6 max-w-[13ch]">{title}</h2>
          <p className="mx-auto mt-7 max-w-[48ch] text-[18px] leading-[1.5] text-[#111735]/58">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={site.demoHref} className="pill pill-dark h-12 px-8">Book a demo <ArrowRight className="size-4" /></Link>
            <Link href={site.salesHref} className="pill h-12 border border-[#111735]/16 bg-white/70 px-8">Contact sales</Link>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[14px] text-[#111735]/52">
            {perks.map((perk) => <li key={perk} className="flex items-center gap-2"><Check className="size-4 text-[#5f63f2]" />{perk}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
