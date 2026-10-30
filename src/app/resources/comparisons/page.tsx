import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { comparisons } from "@/data/comparisons";
import { pageMetadata } from "@/lib/seo";
import styles from "@/components/editorial/Editorial.module.css";

export const metadata = pageMetadata("/resources/comparisons", "CRM & Real Estate Software Comparisons | Melorite", "Compare Melorite with Zoho CRM, TeleCRM, LeadSquared and Sell.Do using official vendor sources and a practical buying checklist.");

export default function ComparisonsPage() { return <PageTransition><div className={styles.page}><Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: "Comparisons" }]} /><div className={styles.wrap}><header className={styles.hero}><Reveal><p className={styles.eyebrow}>Software comparisons</p><h1 className={styles.title}>Compare the workflow.<br/>Not only the feature list.</h1><p className={styles.intro}>A factual starting point for evaluating CRM and real estate software. Vendor capabilities and pricing change, so every guide links to the official sources used and explains what to verify in a demo.</p></Reveal></header><section className={styles.section}><div className="grid gap-5 md:grid-cols-2">{comparisons.map((item, index) => <Reveal key={item.slug} delay={(index % 2) * .05}><Link href={`/resources/comparisons/${item.slug}`} className="glass glass-lift flex min-h-[270px] flex-col rounded-[20px] p-7"><p className="mono-label text-[#4b4fe0]">Buying guide</p><h2 className="h-card mt-5">{item.title}</h2><p className="mt-4 text-[15.5px] leading-[1.65] text-[#111735]/60">{item.summary}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-[#4b4fe0]">Read the comparison<ArrowUpRight className="size-4" /></span></Link></Reveal>)}</div></section></div><FinalCTA title="Compare with your real workflow." text="Bring one lead, deal or property journey to a demo. We’ll show what Melorite supports and where configuration or custom work would be required." /></div></PageTransition>; }
