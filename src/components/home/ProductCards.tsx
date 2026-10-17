import { productSeo } from "@/data/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";
import { SceneStage } from "@/components/product/Scenes";
import { productIcons } from "@/components/layout/MegaMenu";

/** Six identical glass cards: same stage ratio, same text rhythm, same footer — so the grid always lines up. */
export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => {
        const Icon = productIcons[product.icon];
        return (
          <Reveal key={product.slug} delay={(index % 3) * 0.06} className="min-w-0">
            <Link aria-label={`Explore ${productSeo[product.slug].title}`} href={`/products/${product.slug}`} className="glass glass-sheen glass-lift group flex h-full flex-col rounded-[16px] p-2.5 text-[#111735]">
              <SceneStage slug={product.slug} className="!rounded-[14px]" />
              <div className="flex flex-1 flex-col px-3.5 pb-3 pt-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3 text-[11px] font-semibold uppercase tracking-[.1em] text-[#4b4fe0]">
                  <span className="grid size-6 place-items-center rounded-full bg-[#5f63f2]/12"><Icon className="size-3.5" /></span>{product.kicker}
                </span>
                <h3 className="mt-4 text-[26px] font-semibold leading-[1.05] tracking-[-.04em]">{product.name}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.55] text-[#111735]/65">{product.summary}</p>
                <p className="mt-3 text-[13px] font-medium text-[#111735]/50">{productSeo[product.slug].title}</p>
                <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-[14px] font-semibold text-[#4b4fe0]">
                  Explore {product.short}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-[#111735] group-hover:text-white"><ArrowUpRight className="size-4" /></span>
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ProductCards() {
  return (
    <section data-nav="light" className="py-[clamp(80px,9vw,140px)] text-[#111735]">
      <div className="rail-inner">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow-pill">Products</p>
            <h2 className="h-section mt-4 max-w-[18ch]">Our products. Made for the way you work.</h2>
          </Reveal>
          <Link href="/products" className="pill pill-glass hidden shrink-0 sm:inline-flex">All products <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="mt-12"><ProductGrid /></div>
      </div>
    </section>
  );
}
