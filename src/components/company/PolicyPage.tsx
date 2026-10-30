import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { site } from "@/data/site";
import styles from "@/components/editorial/Editorial.module.css";

export type PolicySection = { title: string; paragraphs: string[]; points?: string[] };

export function PolicyPage({ title, intro, sections }: { title: string; intro: string; sections: PolicySection[] }) {
  return <PageTransition><div className={styles.page}><Breadcrumbs items={[{ name: title }]} /><div className={`${styles.wrap} !max-w-[980px]`}>
    <header className={styles.hero}><Reveal><p className={styles.eyebrow}>Melorite · Legal</p><h1 className={styles.title}>{title}</h1><p className={styles.intro}>{intro}</p><p className={styles.meta}>Last updated 30 October 2026</p></Reveal></header>
    <article className={`${styles.articleBody} mx-auto max-w-[760px] pb-24`}>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}<aside className="rounded-[18px] border border-[#e4dfeb] bg-[#f4f1f8] p-7"><h2>Questions about this policy?</h2><p>Contact Melorite using the verified details on our contact page.</p><Link href="/contact" className="pill pill-dark mt-6">Contact Melorite</Link>{site.contact.email && <p className="mt-4 text-sm"><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>}</aside></article>
  </div></div></PageTransition>;
}
