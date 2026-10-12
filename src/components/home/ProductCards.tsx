import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { ProductVisual, panelFor } from "@/components/site/ProductVisuals";

export function ProductCards() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f9f8f6] py-[clamp(80px,9vw,140px)] text-[#2c2c2b]">
      <div className="rail-inner">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="mono-label text-black/45">Products</p>
            <h2 className="h-section mt-3">Our products. Made for the way you work.</h2>
          </Reveal>
          <Link href="/products" className="hidden shrink-0 items-center gap-1.5 text-[14px] text-black/55 transition-colors hover:text-black sm:inline-flex">All products <ArrowRight className="size-3.5" /></Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/products/${p.slug}`} className="group block">
                <div className={`${panelFor[p.slug]} relative flex aspect-[1.4] items-end justify-center overflow-hidden rounded-[2px]`}>
                  <div className="pointer-events-none w-full origin-bottom scale-[.62] translate-y-[22%] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-[16%]"><div className="flex justify-center"><ProductVisual slug={p.slug} /></div></div>
                </div>
                <h3 className="h-card mt-5 !text-[clamp(1.4rem,1.2rem+.6vw,1.75rem)]">{p.name}</h3>
                <p className="mt-3 max-w-[44ch] text-[15.5px] leading-snug text-black/55">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] text-black/55 transition-colors group-hover:text-black">Read more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
