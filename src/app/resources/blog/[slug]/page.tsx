import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { ResourceArtwork } from "@/components/resources/ResourcesView";
import { FinalCTA } from "@/components/site/FinalCTA";
import { articles, getArticle } from "@/data/resources";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const url = `/resources/blog/${article.slug}`;
  return { title: article.title, description: article.excerpt, alternates: { canonical: url }, openGraph: { type: "article", title: article.title, description: article.excerpt, url } };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const index = articles.findIndex(({ slug }) => slug === article.slug);
  const related = articles.filter(({ slug, category }) => slug !== article.slug && category === article.category).slice(0, 2);
  const fallbacks = related.length < 2 ? articles.filter(({ slug }) => slug !== article.slug && !related.some((a) => a.slug === slug)).slice(0, 2 - related.length) : [];
  const relatedArticles = [...related, ...fallbacks];
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, author: { "@type": "Organization", name: "Melorite" }, publisher: { "@type": "Organization", name: "Melorite", url: site.url }, mainEntityOfPage: `${site.url}/resources/blog/${article.slug}` };

  return <PageTransition>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <article>
      <header data-nav="light" className="rails rails-light bg-[#f4f5ff] pb-[clamp(64px,8vw,108px)] pt-[clamp(120px,13vw,174px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[1120px]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-[#111735]/48"><Link href="/resources">Resources</Link><span>/</span><Link href="/resources/blog">Blog</Link><span>/</span><span aria-current="page">{article.category}</span></nav>
            <p className="mono-label mt-10 text-[#5f63f2]">{article.category}</p>
            <h1 className="h-hero mt-6 max-w-[15ch]">{article.title}</h1>
            <p className="mt-7 max-w-[42rem] text-[20px] leading-[1.55] text-[#111735]/62">{article.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold text-[#111735]/50"><span>Melorite Editorial</span><span>{article.date}</span><span>{article.readTime}</span></div>
          </Reveal>
        </div>
      </header>
      <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(40px,6vw,84px)]"><div className="rail-inner mx-auto max-w-[1120px]"><Reveal><ResourceArtwork kind={article.category} index={index} /></Reveal></div></section>
      <section data-nav="light" className="rails rails-light bg-[#ffffff] pb-[clamp(80px,10vw,140px)] text-[#111735]">
        <div className="rail-inner mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">
          <div className="max-w-[760px]">
            {article.sections.map((section, i) => <Reveal key={section.title} delay={i * .03} className="border-t border-[#111735]/12 py-10 first:border-0 first:pt-0"><h2 className="h-story max-w-[17ch]">{section.title}</h2><div className="mt-6 space-y-5 text-[18px] leading-[1.72] text-[#111735]/68">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Reveal>)}
          </div>
          <Reveal className="h-fit border-t border-[#111735]/15 pt-6 lg:sticky lg:top-28"><p className="eyebrow-pill">Key takeaways</p><div className="mt-5 space-y-4">{article.takeaways.map((takeaway) => <p key={takeaway} className="flex gap-3 text-[14.5px] leading-[1.5]"><Check className="mt-0.5 size-4 shrink-0 text-[#5f63f2]" />{takeaway}</p>)}</div><Link href={article.productHref} className="mt-7 inline-flex items-center gap-2 border-b border-[#111735] pb-1 text-sm font-semibold">Explore the related product<ArrowRight className="size-4" /></Link></Reveal>
        </div>
      </section>
    </article>
    <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,112px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1120px]"><Reveal><p className="eyebrow-pill">Related articles</p><h2 className="h-section mt-5">Keep reading.</h2></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2">{relatedArticles.map((item) => <Link key={item.slug} href={`/resources/blog/${item.slug}`} className="group border border-[#111735]/12 bg-white p-7"><p className="eyebrow-pill">{item.category}</p><h3 className="mt-5 text-[25px] font-semibold leading-[1.08] tracking-[-.035em]">{item.title}</h3><p className="mt-4 text-[15px] leading-[1.55] text-[#111735]/55">{item.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Read article<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
    <FinalCTA title="Make the workflow clearer." text="Bring us the process your team is trying to improve. We’ll show you a practical Melorite starting point." />
  </PageTransition>;
}
