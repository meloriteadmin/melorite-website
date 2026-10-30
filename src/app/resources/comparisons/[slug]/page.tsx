import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PageTransition } from "@/components/animation/PageTransition";
import { comparisonBySlug, comparisons } from "@/data/comparisons";
import { site } from "@/data/site";
import { jsonLd, pageMetadata } from "@/lib/seo";
import styles from "@/components/editorial/Editorial.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return comparisons.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = comparisonBySlug(slug); return item ? pageMetadata(`/resources/comparisons/${slug}`, `${item.title} | CRM Comparison`, item.description) : {}; }

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const item = comparisonBySlug(slug);
  if (!item) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.description, mainEntityOfPage: `${site.url}/resources/comparisons/${item.slug}`, dateModified: "2026-10-29", author: { "@type": "Organization", name: site.name, url: site.url }, publisher: { "@id": `${site.url}/#organization` }, image: `${site.url}/opengraph-image` };
  return <PageTransition><div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: "Comparisons", href: "/resources/comparisons" }, { name: item.title }]} />
    <div className={`${styles.wrap} !max-w-[1180px]`}>
      <header className={styles.articleHero}><p className={styles.meta}>Comparison guide · Reviewed 29 October 2026</p><h1 className={styles.title}>{item.title}</h1><p className={styles.intro}>{item.summary}</p></header>
      <p className={styles.note}>This comparison uses Melorite product information and the official {item.competitor} sources linked below. Features, limits and prices can change. Confirm the current edition, contract and implementation scope directly with each vendor.</p>
      <section className={styles.section}><div className="overflow-x-auto rounded-[20px] border border-[#e4dfeb] bg-white"><table className="w-full min-w-[760px] border-collapse text-left"><thead><tr className="bg-[#f4f1f8]"><th className="p-5 text-sm">Area</th><th className="p-5 text-sm">Melorite</th><th className="p-5 text-sm">{item.competitor}</th></tr></thead><tbody>{item.rows.map((row) => <tr key={row.area} className="border-t border-[#e4dfeb] align-top"><th className="p-5 text-[15px]">{row.area}</th><td className="p-5 text-[14.5px] leading-[1.65] text-[#111735]/65">{row.melorite}</td><td className="p-5 text-[14.5px] leading-[1.65] text-[#111735]/65">{row.competitor}</td></tr>)}</tbody></table></div></section>
      <section className={styles.section}><div className="grid gap-5 md:grid-cols-2"><div className="glass rounded-[20px] p-7"><h2 className="h-card">Consider Melorite when…</h2><ul className="mt-6 space-y-4">{item.chooseMelorite.map((point) => <li key={point} className="flex gap-3 text-[15px]"><Check className="mt-0.5 size-4 shrink-0 text-[#4b4fe0]" />{point}</li>)}</ul></div><div className="glass rounded-[20px] p-7"><h2 className="h-card">Consider {item.competitor} when…</h2><ul className="mt-6 space-y-4">{item.chooseCompetitor.map((point) => <li key={point} className="flex gap-3 text-[15px]"><Check className="mt-0.5 size-4 shrink-0 text-[#4b4fe0]" />{point}</li>)}</ul></div></div></section>
      <section className={styles.section}><h2 className="h-card">Official sources checked</h2><div className="mt-5 flex flex-wrap gap-3">{item.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="pill pill-glass">{source.label}<ExternalLink className="size-3.5" /></a>)}</div><p className="mt-5 max-w-[70ch] text-[14px] leading-[1.65] text-[#111735]/55">Use these pages to confirm current capabilities, limits and pricing. Ask both vendors to demonstrate your real workflow and identify anything that depends on configuration, an add-on, an integration or custom work.</p><Link href="/pricing" className="mt-6 inline-flex font-semibold text-[#4b4fe0]">See Melorite pricing approach →</Link></section>
    </div>
    <FinalCTA title={`Compare Melorite and ${item.competitor} with your process in view.`} text="A useful evaluation starts with the same lead, pipeline or property workflow in both demonstrations." />
  </div></PageTransition>;
}
