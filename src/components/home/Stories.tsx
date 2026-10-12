import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";
import { ProductVisual, panelFor } from "@/components/site/ProductVisuals";
import { productBySlug } from "@/data/products";
import { site } from "@/data/site";

const order = ["crm", "real-estate", "clinic", "agency", "commerce"] as const;

export function Stories() {
  return (
    <section data-nav="dark" className="rails bg-[#111735] text-white">
      <div className="rail-inner">
        {order.map((slug, i) => {
          const p = productBySlug(slug)!;
          return (
            <Reveal key={slug} className={`grid gap-8 border-white/[.08] py-[clamp(24px,3vw,40px)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.35fr)] lg:gap-10 ${i ? "border-t" : ""}`}>
              <div className="flex flex-col justify-between gap-10 lg:min-h-[560px] lg:py-4">
                <div>
                  <p className="font-serif text-[14px] text-white/55">0{i + 1} · {p.name}</p>
                  <h3 className="h-story mt-12 max-w-[14ch]">{p.headline.join(" ")}</h3>
                  <div className="mt-5 max-w-[44ch] space-y-5 text-[clamp(1rem,.95rem+.25vw,1.15rem)] leading-snug text-white/55">
                    <p>{p.lead} {p.body}</p>
                    <p>{p.summary}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={site.demoHref} className="pill pill-light h-12 px-6">Book a demo</Link>
                  <Link href={`/products/${p.slug}`} className="pill pill-ghost-dark h-12 px-6">Learn more</Link>
                </div>
              </div>
              <div className={`${panelFor[slug]} relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[6px] py-10 lg:min-h-[560px]`}><ProductVisual slug={slug} /></div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
