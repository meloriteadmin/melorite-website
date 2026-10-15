import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { ProductVisual, panelFor } from "@/components/site/ProductVisuals";
import { productBySlug } from "@/data/products";

const order = ["crm", "real-estate", "clinic"] as const;

export function Stories() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f2f1eb] py-[clamp(88px,10vw,148px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <Reveal className="grid gap-6 border-b border-[#111735]/12 pb-10 lg:grid-cols-2 lg:items-end">
          <div><p className="mono-label text-[#5f63f2]">Inside the platform</p><h2 className="h-section mt-5 max-w-[12ch]">A clear place for every next step.</h2></div>
          <p className="max-w-[44ch] text-[18px] leading-[1.55] text-[#111735]/58 lg:justify-self-end">The interface changes with your business. The feeling stays the same: calm, useful and obvious from the first day.</p>
        </Reveal>
        <div>
          {order.map((slug, i) => {
            const p = productBySlug(slug)!;
            return (
              <Reveal key={slug} className="grid gap-8 border-b border-[#111735]/12 py-[clamp(52px,7vw,96px)] lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
                <div>
                  <p className="mono-label text-[#111735]/42">0{i + 1} / {p.name}</p>
                  <h3 className="h-story mt-8 max-w-[12ch]">{p.headline.join(" ")}</h3>
                  <p className="mt-5 max-w-[40ch] text-[17px] leading-[1.55] text-[#111735]/58">{p.summary}</p>
                  <Link href={`/products/${p.slug}`} className="mt-7 inline-flex items-center gap-2 border-b border-[#111735] pb-1 text-[15px] font-semibold">Explore {p.short}<ArrowRight className="size-4" /></Link>
                </div>
                <div className={`${panelFor[slug]} media-frame relative flex min-h-[420px] items-center justify-center overflow-hidden border border-[#111735]/8 py-10`}><ProductVisual slug={slug} /></div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
