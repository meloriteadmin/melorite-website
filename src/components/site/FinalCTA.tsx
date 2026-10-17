import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

const perks = ["Free demo", "Guided setup", "A clear next step"];

export function FinalCTA({ title = "See it for yourself.", text = "Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." }: { title?: string; text?: string }) {
  return (
    <section data-nav="light" className="py-[clamp(72px,9vw,124px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <Reveal className="glass glass-sheen relative isolate overflow-hidden rounded-[40px] px-6 py-[clamp(72px,9vw,120px)] text-center">
          <div aria-hidden className="absolute -left-[12%] -top-[28%] -z-10 size-[62%] rounded-full bg-[#8e92ff]/25 blur-[85px]" />
          <div aria-hidden className="absolute -right-[12%] -top-[24%] -z-10 size-[58%] rounded-full bg-[#ffcbb8]/30 blur-[90px]" />
          <div aria-hidden className="absolute -bottom-[38%] left-[20%] -z-10 h-[58%] w-[62%] rounded-full bg-[#777cff]/25 blur-[75px]" />
          <p className="mono-label flex items-center justify-center gap-3 text-[#777b86]"><span className="size-2 rounded-full bg-[#5f63f2]" />Get started</p>
          <h2 className="h-section mx-auto mt-6 max-w-[13ch]">{title}</h2>
          <p className="mx-auto mt-7 max-w-[48ch] text-[18px] leading-[1.5] text-[#111735]/58">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={site.demoHref} className="pill pill-dark h-12 px-8">Book a demo <ArrowRight className="size-4" /></Link>
            <Link href={site.salesHref} className="pill pill-glass h-12 px-8">Contact sales</Link>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[14px] text-[#111735]/52">
            {perks.map((perk) => <li key={perk} className="flex items-center gap-2"><Check className="size-4 text-[#5f63f2]" />{perk}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
