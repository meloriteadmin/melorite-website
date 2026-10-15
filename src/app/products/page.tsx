import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { InnerHero } from "@/components/site/InnerHero";
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
      <InnerHero label="Products" title="Software for the way your business actually works." body="Six focused products for sales, real estate, clinics, agencies, online sellers and businesses that depend on phone conversations." primary={{ label: "Book a demo", href: "/book-demo" }} secondary={{ label: "Talk to sales", href: "/contact" }} mesh="estate">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map((p) => { const I = productIcons[p.icon]; return <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-[22px] bg-white/90 p-6 text-left shadow-[0_20px_50px_-30px_rgba(17,23,53,.45)] backdrop-blur transition-transform hover:-translate-y-1"><span className="icon-chip"><I className="size-5" /></span><h3 className="mt-6 text-[21px] font-semibold tracking-[-.03em]">{p.name}</h3><p className="mt-2 text-[14.5px] leading-snug text-[#111735]/58">{p.summary}</p><span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#4b4fe0]">Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></span></Link>; })}</div>
      </InnerHero>
      <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(64px,8vw,120px)] text-[#111735]">
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
      <section data-nav="light" className="panel-mesh py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><Reveal><p className="mono-label text-[#111735]/55">How Melorite products work</p><h2 className="h-section mt-5 max-w-[12ch]">Focused products. One shared platform.</h2><p className="mt-6 max-w-[42ch] text-[17px] leading-[1.55] text-[#111735]/60">Each product starts with the workflow your business already knows, then uses a common foundation for records, users, automation, AI and reporting.</p><Link href="/platform" className="pill pill-dark mt-8 h-12 px-7">Explore the Platform<ArrowRight className="size-4" /></Link></Reveal><ul className="grid gap-3 sm:grid-cols-2">{["Built for your business", "Quick to start", "Easy for teams", "Saves time", "Controlled access", "Grows with you", "Human support"].map((item) => <li key={item} className="flex min-h-20 items-center gap-3 border border-[#111735]/10 px-5 text-[15px] text-[#111735]/78"><Check className="size-4 text-[#4b4fe0]" />{item}</li>)}</ul></div></section>
      <FinalCTA title="Find your Melorite product." text="Tell us how your team works. We’ll show you the product that fits and what it takes to get started." />
    </PageTransition>
  );
}
