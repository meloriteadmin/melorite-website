import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

export function FinalCTA({ title = "See it for yourself.", text = "Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." }: { title?: string; text?: string }) {
  return (
    <section data-nav="dark" className="rails bg-[#080808] pb-[clamp(72px,8vw,120px)] pt-[clamp(40px,5vw,80px)] text-white">
      <div className="rail-inner">
        <Reveal className="atmos-warm relative overflow-hidden rounded-[6px] px-6 py-[clamp(64px,9vw,128px)] text-center">
          <h2 className="h-section mx-auto max-w-[14em]">{title}</h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-snug text-white/60">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={site.demoHref} className="pill pill-light h-12 px-7">Book a demo</Link>
            <Link href={site.salesHref} className="pill pill-ghost-dark h-12 px-7">Contact sales</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
