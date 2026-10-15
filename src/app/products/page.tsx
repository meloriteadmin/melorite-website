import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ProductVisual, panelFor, tintFor } from "@/components/site/ProductVisuals";
import { productIcons } from "@/components/layout/MegaMenu";

export const metadata: Metadata = {
  title: "Products",
  description: "Pick the product made for your business: CRM, Real Estate, Clinic, Agency, Commerce and AI Calling. Each is ready to use from day one.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <PageHero label="Products" title="Our products. Made for the way you work." body="Pick the product made for your business. Each one is ready to use from day one, and simple enough for your whole team." variant="fan" extra={
        <div className="relative mx-auto flex h-[clamp(260px,32vw,420px)] max-w-[1100px] items-start justify-center">
          {([["real-estate", "-translate-x-[62%] -rotate-[8deg] translate-y-8"], ["crm", "z-10"], ["commerce", "translate-x-[62%] rotate-[8deg] translate-y-8"]] as const).map(([slug, pos]) => (
            <div key={slug} className={`absolute flex aspect-[1.15] w-[clamp(240px,34vw,460px)] items-center justify-center overflow-hidden rounded-[10px] border border-black/[.06] shadow-[0_30px_60px_-30px_rgba(17,23,53,.35)] ${pos}`} style={{ background: `linear-gradient(160deg, ${tintFor[slug]}, #fff 120%)` }}><ProductVisual slug={slug} /></div>
          ))}
        </div>} />
      <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner space-y-[clamp(48px,6vw,88px)]">
          {products.map((p, i) => {
            const I = productIcons[p.icon];
            return (
              <Reveal key={p.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <span className="grid size-11 place-items-center rounded-full bg-[#eeeffe] text-[#4b4fe0]"><I className="size-5" /></span>
                  <p className="mono-label mt-6 text-black/45">{p.kicker}</p>
                  <h2 className="h-section mt-3 max-w-[14ch]">{p.name}</h2>
                  <p className="mt-5 max-w-[42ch] text-[17px] leading-snug text-black/55">{p.summary}</p>
                  <Link href={`/products/${p.slug}`} className="pill pill-dark mt-8 h-12">Explore {p.short}<ArrowRight className="size-4" /></Link>
                </div>
                <div className={`${panelFor[p.slug]} media-frame flex min-h-[380px] items-center justify-center overflow-hidden py-10`}><ProductVisual slug={p.slug} /></div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <FinalCTA />
    </PageTransition>
  );
}
