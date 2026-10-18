import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata, jsonLd } from "@/lib/seo";
import { resources, resourceHref } from "@/data/resources";
import { productBySlug } from "@/data/products";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { ResourceArt, resourceType, readingTime } from "@/components/resources/ResourceArt";
import styles from "@/components/editorial/Editorial.module.css";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ResourceCards } from "@/components/resources/ResourceCards";

export function generateStaticParams() { return resources.map(item => ({ section: item.kind, slug: item.slug })); }
async function findResource(params: PageProps<"/resources/[section]/[slug]">["params"]) {
  const { section, slug } = await params;
  return resources.find(item => item.kind === section && item.slug === slug);
}
export async function generateMetadata({ params }: PageProps<"/resources/[section]/[slug]">) {
  const item = await findResource(params);
  if (!item) return {};
  const metadata = pageMetadata(resourceHref(item), item.title, item.description);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article" as const } };
}
export default async function ResourceArticle({ params }: PageProps<"/resources/[section]/[slug]">) {
  const item = await findResource(params);
  if (!item) notFound();
  const product = productBySlug(item.product)!;
  const section = item.kind === "blog" ? "Blog" : item.kind === "guides" ? "Guides" : "Case Studies";
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.description, mainEntityOfPage: `${site.url}${resourceHref(item)}`, author: { "@type": "Organization", name: site.name, url: site.url }, publisher: { "@id": `${site.url}/#organization` }, image: `${site.url}/opengraph-image`, articleSection: item.category };
  return <PageTransition><div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: section, href: `/resources/${item.kind}` }, { name: item.title }]} />
    <div className={styles.wrap}>
      <header className={styles.articleHero}><p className={styles.meta}>{item.category} · {resourceType(item)} · {readingTime(item)}</p><h1 className={styles.title}>{item.title}</h1><p className={styles.intro}>{item.description}</p></header>
      {item.example && <p className={styles.note}>Illustrative example · Fictional business scenario. The proposed implementation and intended outcomes below are not verified customer results.</p>}
      <div className={styles.articleCover}><ResourceArt item={item} large /></div>
      <div className={styles.articleLayout}>
        <nav aria-label="In this resource" className={styles.contents}><h2>On this page</h2><ol>{item.sections.map((part, i) => <li key={part.title}><a href={`#section-${i}`}>{part.title}</a></li>)}</ol><Link href={`/products/${product.slug}`} className={styles.sectionLink}>Explore {product.short}</Link></nav>
        <article className={styles.articleBody}>
          {item.sections.map((part, i) => <section key={part.title} id={`section-${i}`}><Reveal><h2>{part.title}</h2>{part.paragraphs.map(copy => <p key={copy}>{copy}</p>)}{part.steps.length > 0 && <ol>{part.steps.map(step => <li key={step}>{step}</li>)}</ol>}</Reveal></section>)}
          <aside className="rounded-[18px] border border-[#e4dfeb] bg-[#f4f1f8] p-7"><h2>Explore {product.name}</h2><p>{product.summary}</p><Link href={`/products/${product.slug}`} className="pill pill-dark mt-6">Explore {product.short}</Link></aside>
        </article>
      </div>
      <section className={styles.section}><div className={styles.heading}><h2>One good idea leads to another.</h2><p>Keep exploring the workflows, questions and decisions behind your business.</p></div><ResourceCards items={resources.filter(other => other.slug !== item.slug && (other.product === item.product || other.kind === "guides")).slice(0, 3)} /></section>
    </div>
    <FinalCTA href={`/book-demo?product=${product.slug}`} title="Bring your workflow to a demo." text="See the relevant product and discuss the setup your team needs." />
  </div></PageTransition>;
}
