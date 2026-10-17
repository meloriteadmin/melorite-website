import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { PageTransition } from "@/components/animation/PageTransition";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ResourceArtwork } from "./Artwork";
import { InnerHero } from "@/components/site/InnerHero";
import { articles, caseStudyThemes, guides, resourceCategories, resourceTopics, type Article } from "@/data/resources";
import { FolderCollections } from "@/components/site/FolderCollections";

export { ResourceArtwork };

function ArticleCard({ article, index, wide = false }: { article: Article; index: number; wide?: boolean }) {
  return (
    <Link href={`/resources/blog/${article.slug}`} className={`group glass glass-sheen glass-lift grid overflow-hidden rounded-[30px] p-2.5 ${wide ? "md:grid-cols-[1.05fr_.95fr]" : ""}`}>
      <div className="overflow-hidden rounded-[22px]"><ResourceArtwork kind={article.category} index={index} compact={!wide} /></div>
      <div className="flex min-h-64 flex-col p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[.1em] text-[#111735]/45"><span className="text-[#5f63f2]">{article.category}</span><span>{article.date}</span><span>{article.readTime}</span></div>
        <h3 className={`${wide ? "h-card" : "text-[24px] font-semibold leading-[1.08] tracking-[-.035em]"} mt-5`}>{article.title}</h3>
        <p className="mt-4 text-[15px] leading-[1.55] text-[#111735]/58">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold">Read article<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

function ResourcesHub() {
  return <>
    <ResourceHero label="Resources" title="Useful ideas for running the work." body="Practical articles, guides and honest customer stories for teams that want clearer operations." />
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Featured content</p><h2 className="h-section mt-5">Start with the workflow.</h2></Reveal><div className="mt-12"><ArticleCard article={articles[0]} index={0} wide /></div></div></section>
    <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Browse the library</p><h2 className="h-section mt-5">Open the collection you need.</h2></Reveal><FolderCollections className="mt-10" collections={resourceCategories.map((item, i) => ({
      label: item.title,
      meta: item.description,
      art: (["aurora", "glacier", "verdant"] as const)[i],
      files: i === 0
        ? articles.slice(0, 3).map((article) => ({ name: article.title, meta: article.readTime, href: `/resources/blog/${article.slug}` }))
        : i === 1
          ? guides.slice(0, 3).map((guide) => ({ name: guide.title, meta: guide.category, href: guide.href }))
          : caseStudyThemes.slice(0, 3).map(([title]) => ({ name: title, meta: "Story library", href: item.href })),
    }))} /></div></section>
    <LatestArticles count={3} />
    <Topics />
  </>;
}

function Blog() {
  return <>
    <ResourceHero label="Blog" title="Ideas for clearer business operations." body="Practical thinking for sales, service and operations—written to help teams make the next decision." />
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Featured article</p></Reveal><div className="mt-8"><ArticleCard article={articles[0]} index={0} wide /></div></div></section>
    <LatestArticles start={1} count={3} title="Latest articles" />
    <Topics />
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Editor’s picks</p><h2 className="h-section mt-5">Useful places to go deeper.</h2></Reveal><div className="mt-10 grid gap-6 lg:grid-cols-2">{articles.slice(4, 6).map((a, i) => <ArticleCard key={a.slug} article={a} index={i + 4} />)}</div></div></section>
    <GuideStrip />
  </>;
}

function Guides() {
  const groups = [
    { label: "Revenue and property", categories: ["CRM", "Real Estate"], art: "aurora" as const },
    { label: "Service and clients", categories: ["Clinic", "Agency"], art: "verdant" as const },
    { label: "Commerce and voice", categories: ["Commerce", "AI Calling", "Getting Started"], art: "dusk" as const },
  ];
  return <>
    <ResourceHero label="Guides" title="Practical guides for growing teams." body="Use these focused resources to map the work, choose a sensible starting point and prepare your team for change." />
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow-pill">Featured guide</p><h2 className="h-section mt-5 max-w-[13ch]">The Business Workflow Audit.</h2><p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-[#111735]/58">A practical starting point for documenting owners, hand-offs, repeated work and the places where information goes missing.</p><Link href={guides[0].href} className="pill pill-dark mt-8 h-12">Read the companion article<ArrowRight className="size-4" /></Link></Reveal><Reveal delay={.07}><div className="glass rounded-[32px] p-2.5"><div className="overflow-hidden rounded-[24px]"><ResourceArtwork index={5} /></div></div></Reveal></div></section>
    <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Browse guides</p><h2 className="h-section mt-5">Three collections. Seven focused guides.</h2><p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-[#111735]/58">The folders now group related work, so the library is easier to scan and stays visually balanced.</p></Reveal><FolderCollections className="mt-10" collections={groups.map((group) => ({ label: group.label, meta: `${group.categories.length} focused guides`, art: group.art, files: group.categories.map((category) => { const guide = guides.find((item) => item.category === category)!; return { name: guide.title, meta: guide.category, href: guide.href }; }) }))} /></div></section>
  </>;
}

function CaseStudies() {
  return <>
    <ResourceHero label="Case studies" title="Real work. Real outcomes." body="We publish customer stories only with verified details and permission. Until then, here is the structure and the kinds of operational stories this library will hold." />
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow-pill">How stories will be told</p><h2 className="h-section mt-5 max-w-[13ch]">Evidence before promotion.</h2></div><div className="border-t border-[#111735]/12 pt-7 text-[18px] leading-[1.6] text-[#111735]/60"><p>Each case study will explain the starting workflow, what changed, how the team adopted it and which outcomes could be verified.</p><p className="mt-5">No invented companies. No anonymous performance claims presented as proof.</p></div></Reveal></div></section>
    <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Story library preview</p><h2 className="h-section mt-5">Customer stories are coming soon.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2">{caseStudyThemes.map(([title, body], i) => <Reveal key={title} delay={(i % 2) * .05} className="glass glass-sheen overflow-hidden rounded-[30px] p-2.5"><div className="overflow-hidden rounded-[22px]"><ResourceArtwork kind={title} index={i + 1} compact /></div><div className="p-6"><p className="eyebrow-pill">Future case study</p><h3 className="h-card mt-5">{title}</h3><p className="mt-4 max-w-[48ch] text-[15.5px] leading-[1.55] text-[#111735]/55">{body}</p></div></Reveal>)}</div></div></section>
  </>;
}

function ResourceHero({ label, title, body }: { label: string; title: string; body: string }) {
  return <InnerHero label={label} title={title} body={body} mesh="agency"><div className="grid gap-4 md:grid-cols-3">{articles.slice(0, 3).map((a, i) => <Link key={a.slug} href={`/resources/blog/${a.slug}`} className="glass glass-sheen glass-lift overflow-hidden rounded-[26px] p-2 text-left"><div className="overflow-hidden rounded-[20px]"><ResourceArtwork kind={a.category} index={i} compact /></div><p className="p-4 text-[17px] font-semibold leading-snug tracking-[-.02em]">{a.title}</p></Link>)}</div></InnerHero>;
}

function LatestArticles({ start = 0, count = 3, title = "Latest insights" }: { start?: number; count?: number; title?: string }) {
  return <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">From the blog</p><h2 className="h-section mt-5">{title}</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{articles.slice(start, start + count).map((article, i) => <ArticleCard key={article.slug} article={article} index={i + start} />)}</div></div></section>;
}

function Topics() {
  return <section data-nav="light" className="panel-mesh py-[clamp(72px,9vw,112px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="mono-label text-[#111735]/55">Browse by topic</p><h2 className="h-section mt-5">Find the work you’re improving.</h2></Reveal><div className="mt-10 flex flex-wrap gap-3">{resourceTopics.map((topic) => <span key={topic} className="glass-soft rounded-full px-5 py-3 text-[15px] text-[#111735]/76">{topic}</span>)}</div></div></section>;
}

function GuideStrip() {
  return <section data-nav="light" className="rails rails-light bg-[#eeeffe] py-[clamp(72px,9vw,112px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow-pill">Popular guides</p><h2 className="h-section mt-5">Turn an idea into a clearer process.</h2></div><Link href="/resources/guides" className="pill pill-dark">Browse all guides<ArrowRight className="size-4" /></Link></Reveal><div className="mt-10 grid gap-4 md:grid-cols-3">{guides.slice(0, 3).map((guide) => <Link key={guide.title} href={guide.href} className="group glass glass-lift rounded-[26px] p-6"><p className="mono-label text-[#4b4fe0]">{guide.category}</p><h3 className="mt-5 text-[22px] font-semibold leading-[1.1] tracking-[-.03em]">{guide.title}</h3><p className="mt-4 text-[14.5px] leading-[1.5] text-[#111735]/55">{guide.summary}</p><ArrowRight className="mt-7 size-4 transition-transform group-hover:translate-x-1" /></Link>)}</div></div></section>;
}

export function ResourcesView({ section }: { section?: "blog" | "guides" | "case-studies" }) {
  return <PageTransition>
    {section === "blog" ? <Blog /> : section === "guides" ? <Guides /> : section === "case-studies" ? <CaseStudies /> : <ResourcesHub />}
    <FinalCTA title="Want help with your workflow?" text="Tell us what is slowing the team down. We’ll show you a practical way forward." />
  </PageTransition>;
}
