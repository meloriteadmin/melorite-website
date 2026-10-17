import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { InnerHero } from "@/components/site/InnerHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FolderCollections } from "@/components/site/FolderCollections";
import { ProductGrid } from "@/components/home/ProductCards";

export const metadata: Metadata = pageMetadata("/products", "Business Software Products", "Compare six focused Melorite products for sales, property, clinic, agency, ecommerce and phone workflows. Choose the software that fits your team.");

export default function ProductsPage() {
  return (
    <PageTransition><Breadcrumbs items={[{ name: "Products" }]} />
      <InnerHero label="Business Software Products" title="Software for the way your business actually works." body="Six focused products for sales, real estate, clinics, agencies, online sellers and businesses that depend on phone conversations." primary={{ label: "Book a demo", href: "/book-demo" }} secondary={{ label: "Talk to sales", href: "/contact" }} mesh="estate">
        <FolderCollections collections={[
          { label: "Sales and conversations", meta: "2 products", art: "aurora", files: products.filter((p) => ["crm", "ai-calling"].includes(p.slug)).map((p) => ({ name: p.name, meta: p.kicker, href: `/products/${p.slug}` })) },
          { label: "Places and people", meta: "2 products", art: "glacier", files: products.filter((p) => ["real-estate", "clinic"].includes(p.slug)).map((p) => ({ name: p.name, meta: p.kicker, href: `/products/${p.slug}` })) },
          { label: "Clients and commerce", meta: "2 products", art: "dusk", files: products.filter((p) => ["agency", "commerce"].includes(p.slug)).map((p) => ({ name: p.name, meta: p.kicker, href: `/products/${p.slug}` })) },
        ]} />
      </InnerHero>
      <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner"><Reveal><p className="eyebrow-pill">The product suite</p><h2 className="h-section mt-5 max-w-[15ch]">Focused tools, composed as one system.</h2><p className="mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-[#111735]/58">Choose the workspace closest to your work today. Each one is focused enough to feel familiar and flexible enough to grow with the team.</p></Reveal><div className="mt-12"><ProductGrid /></div></div>
      </section>
      <section data-nav="light" className="panel-mesh py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><Reveal><p className="mono-label text-[#111735]/55">How Melorite products work</p><h2 className="h-section mt-5 max-w-[12ch]">Focused products. One shared platform.</h2><p className="mt-6 max-w-[42ch] text-[17px] leading-[1.55] text-[#111735]/60">Each product starts with the workflow your business already knows, then uses a common foundation for records, users, automation, AI and reporting.</p><Link href="/platform" className="pill pill-dark mt-8 h-12 px-7">Explore the Platform<ArrowRight className="size-4" /></Link></Reveal><ul className="grid gap-3 sm:grid-cols-2">{["Built for your business", "Quick to start", "Easy for teams", "Saves time", "Controlled access", "Grows with you", "Human support"].map((item) => <li key={item} className="flex min-h-20 items-center gap-3 border border-[#111735]/10 px-5 text-[15px] text-[#111735]/78"><Check className="size-4 text-[#4b4fe0]" />{item}</li>)}</ul></div></section>
      <FinalCTA title="Find your Melorite product." text="Tell us how your team works. We’ll show you the product that fits and what it takes to get started." />
    </PageTransition>
  );
}
