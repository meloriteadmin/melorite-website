import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { SceneStage } from "@/components/product/Scenes";
import { featurePage, featurePages } from "@/data/feature-pages";
import { productBySlug } from "@/data/products";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string; feature: string }> };

export function generateStaticParams() {
  return featurePages.map(({ product, slug }) => ({ slug: product, feature: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, feature } = await params;
  const page = featurePage(slug, feature);
  return page ? pageMetadata(`/products/${slug}/${feature}`, `${page.title} | Melorite`, page.description) : {};
}

export default async function ProductFeaturePage({ params }: Props) {
  const { slug, feature } = await params;
  const page = featurePage(slug, feature);
  const product = productBySlug(slug);
  if (!page || !product) notFound();
  const siblings = featurePages.filter((item) => item.product === page.product && item.slug !== page.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: page.title, applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${site.url}/products/${slug}/${feature}`, description: page.description, publisher: { "@id": `${site.url}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` }, { "@type": "ListItem", position: 3, name: product.short, item: `${site.url}/products/${slug}` }, { "@type": "ListItem", position: 4, name: page.title, item: `${site.url}/products/${slug}/${feature}` }] },
      { "@type": "FAQPage", mainEntity: page.faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
  return <PageTransition>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <Breadcrumbs items={[{ name: "Products", href: "/products" }, { name: product.short, href: `/products/${slug}` }, { name: page.title }]} schema={false} />
    <section data-nav="light" className="hero-bg px-3 pb-6 pt-10 text-[#111735] sm:px-5">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-[clamp(38px,6vw,84px)] sm:px-12 xl:grid-cols-[.9fr_1.1fr]">
        <Reveal><p className="eyebrow-pill">{page.eyebrow}</p><h1 className="h-hero mt-7 max-w-[14ch] xl:!text-[clamp(3.3rem,4.5vw,4.7rem)]">{page.title}</h1><p className="mt-7 max-w-[48ch] text-[18px] leading-[1.6] text-[#111735]/64">{page.description}</p><div className="mt-9 flex flex-wrap gap-3"><Link href={`/book-demo?product=${slug}`} className="pill pill-dark h-12 px-7">Book a demo<ArrowRight className="size-4" /></Link><a href="#how-it-works" className="pill pill-glass h-12 px-7">See how it works</a></div></Reveal>
        <Reveal delay={.08}><div className="window mx-auto max-w-[760px] rounded-[24px] p-3 sm:p-4"><SceneStage slug={slug} variant="b" className="!rounded-[16px]" /><p className="preview-label mt-4 text-center">Illustrative workspace · sample data</p></div></Reveal>
      </div>
    </section>
    <section id="how-it-works" data-nav="light" className="scroll-mt-24 py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner"><Reveal className="mx-auto max-w-[860px] text-center"><p className="eyebrow-pill">The outcome</p><h2 className="h-section mx-auto mt-5 max-w-[18ch]">{page.promise}</h2></Reveal><ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{page.workflow.map((step, index) => <li key={step} className="glass glass-sheen rounded-[16px] p-5"><span className="mono-label text-[#4b4fe0]">0{index + 1}</span><p className="mt-4 font-semibold">{step}</p></li>)}</ol></div></section>
    <section data-nav="light" className="py-[clamp(64px,8vw,112px)] text-[#111735]"><div className="rail-inner"><div className="grid gap-5 lg:grid-cols-3">{page.sections.map((section, index) => <Reveal key={section.title} delay={index * .05} className="glass glass-sheen flex min-h-[340px] flex-col rounded-[20px] p-7"><p className="mono-label text-[#4b4fe0]">Capability 0{index + 1}</p><h2 className="h-card mt-5">{section.title}</h2><p className="mt-4 text-[15.5px] leading-[1.65] text-[#111735]/60">{section.body}</p><ul className="mt-auto space-y-3 pt-8">{section.points.map((point) => <li key={point} className="flex gap-2.5 border-t border-[#111735]/10 pt-3 text-[14px]"><Check className="mt-0.5 size-4 shrink-0 text-[#4b4fe0]" />{point}</li>)}</ul></Reveal>)}</div></div></section>
    <section data-nav="light" className="py-[clamp(64px,8vw,112px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[920px]"><Reveal className="text-center"><p className="eyebrow-pill">FAQ</p><h2 className="h-section mx-auto mt-5">Questions about {page.title.toLowerCase()}.</h2></Reveal><div className="mt-10 space-y-3">{page.faqs.map(({ question, answer }) => <details key={question} className="glass group rounded-[16px] px-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold"><span>{question}</span><span className="text-[#4b4fe0] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-[68ch] pb-6 text-[15.5px] leading-[1.6] text-[#111735]/60">{answer}</p></details>)}</div></div></section>
    <section data-nav="light" className="py-[clamp(48px,6vw,88px)] text-[#111735]"><div className="rail-inner"><p className="eyebrow-pill">Related capabilities</p><div className="mt-6 grid gap-4 sm:grid-cols-3">{siblings.map((item) => <Link key={item.slug} href={`/products/${item.product}/${item.slug}`} className="glass glass-lift flex items-center justify-between gap-4 rounded-[16px] p-5 font-semibold">{item.title}<ArrowRight className="size-4 text-[#4b4fe0]" /></Link>)}</div></div></section>
    <FinalCTA href={`/book-demo?product=${slug}`} title={`See ${page.title.toLowerCase()} in your workflow.`} text="Bring one real process to the demo. We’ll show the relevant records, handoffs and setup questions without overpromising what has not been configured." />
  </PageTransition>;
}
