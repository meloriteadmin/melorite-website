import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { ProductVisual, panelFor } from "@/components/site/ProductVisuals";

export function ProductCards() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(80px,9vw,140px)] text-[#111735]">
      <div className="rail-inner">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow-pill">Products</p>
            <h2 className="h-section mt-3 max-w-[18ch]">Our products. Made for the way you work.</h2>
          </Reveal>
          <Link href="/products" className="hidden shrink-0 items-center gap-1.5 text-[14px] text-black/55 transition-colors hover:text-black sm:inline-flex">All products <ArrowRight className="size-3.5" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/products/${p.slug}`} className="card group flex h-full flex-col overflow-hidden p-3">
                <div className={`${panelFor[p.slug]} relative flex aspect-[1.25] items-end justify-center overflow-hidden rounded-[16px]`}>
                  <div className="pointer-events-none w-full origin-bottom scale-[.6] translate-y-[14%] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-[8%] group-hover:scale-[.64]"><div className="flex justify-center"><ProductVisual slug={p.slug} /></div></div>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                  <p className="eyebrow-pill">{p.kicker}</p>
                  <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.035em]">{p.name}</h3>
                  <p className="mt-3 max-w-[44ch] text-[15.5px] leading-snug text-[#111735]/58">{p.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold text-[#4b4fe0]">Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
