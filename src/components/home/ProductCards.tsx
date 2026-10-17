import { productSeo } from "@/data/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/animation/Reveal";

/** Six identical glass cards: same stage ratio, same text rhythm, same footer — so the grid always lines up. */
export function ProductGrid() {
  return (
    <div className="product-story-grid">
      {products.map((product, index) => (
        <Reveal key={product.slug} delay={(index % 3) * .04}>
          <Link href={`/products/${product.slug}`} className={`story-card story-${product.id}`} aria-label={`Explore ${productSeo[product.slug].title}`}>
            <span className="story-category"><span aria-hidden />{product.kicker}</span>
            <span className="story-arrow"><ArrowUpRight size={25} strokeWidth={1.7} /></span>
            <h3 className="story-wordmark"><span>melorite</span>{product.short}</h3>
            <p className="story-description">{product.summary}</p>
          </Link>
        </Reveal>
      ))}
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
