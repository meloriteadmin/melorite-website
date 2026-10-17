import { workflowCopy } from "@/data/workflows";
import { productBySlug } from "@/data/products";
import { productSeo } from "@/data/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { audienceIcon, featureIcon } from "@/components/site/icons";
import { Reveal } from "@/components/animation/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { VoiceOrb } from "@/components/site/VoiceOrb";
import { SceneStage } from "@/components/product/Scenes";
import { site } from "@/data/site";
import type { ProductPageContent } from "@/data/product-pages";
import { productDetails } from "@/data/product-details";
import Timeline from "@/components/ui/timeline";

const relatedProducts: Record<string, string[]> = { crm: ["real-estate"], "real-estate": ["crm"], clinic: ["ai-calling"], agency: ["crm"], commerce: ["crm"], "ai-calling": ["real-estate", "clinic"] };

const eyebrow = "eyebrow-pill";

export function ProductPageView({ content }: { content: ProductPageContent }) {
  const detail = productDetails[content.slug];
  const [firstChapter, secondChapter, thirdChapter] = detail.chapters;
  return (
    <>
      <Breadcrumbs items={[{ name: "Products", href: "/products" }, { name: content.eyebrow }]} schema={false} />
      <section data-nav="light" className="hero-bg px-3 pb-6 pt-10 text-[#111735] sm:px-5">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-[clamp(32px,5vw,72px)] sm:px-12 xl:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className={eyebrow}>{productSeo[content.slug].title}</p>
            <h1 className="h-hero mt-7 max-w-[14ch] xl:!text-[clamp(3.5rem,4.6vw,4.75rem)]">{content.headline[0]} <span className="text-[#4b4fe0]">{content.headline[1]}</span></h1>
            <p className="mt-7 max-w-[46ch] text-[18px] leading-[1.55] text-[#111735]/66">{content.subhead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`${site.demoHref}?product=${content.slug}`} className="pill pill-dark h-12 px-7">Book a {content.eyebrow.replace("Melorite ", "")} demo <ArrowRight className="size-4" /></Link>
              <a href="#features" className="pill pill-glass h-12 px-7">Explore features</a>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="min-w-0">
            <div className="window mx-auto max-w-[760px] rounded-[24px] p-3 sm:p-4">
              {content.slug === "ai-calling" ? (
                <div className="mesh-calling grain relative overflow-hidden rounded-[16px] border border-white/70"><VoiceOrb transparent /></div>
              ) : (
                <SceneStage slug={content.slug} className="!rounded-[16px]" />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal className="glass glass-sheen grid gap-8 rounded-[24px] p-7 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
            <div><p className={eyebrow}>The problem</p><h2 className="h-section mt-5">{content.problemTitle}</h2></div>
            <div className="space-y-4 border-l border-[#111735]/12 pl-7 text-[17px] leading-[1.65] text-[#111735]/66 sm:pl-10">
              {content.problemCopy.map((copy) => <p key={copy}>{copy}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      <Timeline
        eyebrow="Core workflow"
        title={detail.workflowTitle}
        periodLabel={`${detail.workflow.length} connected stages`}
        items={detail.workflow.map((step, i) => ({
          id: `${content.slug}-workflow-${i + 1}`,
          label: `Stage ${String(i + 1).padStart(2, "0")}`,
          title: step,
          content: workflowCopy[content.slug][i],
        }))}
      />

      {detail.perspectives && (
        <section data-nav="light" className="py-[clamp(56px,6vw,96px)] text-[#111735]">
          <div className="rail-inner">
            <Reveal><p className={eyebrow}>Two sides, one workflow</p><h2 className="h-section mt-5">The right view for every conversation.</h2></Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {detail.perspectives.map((panel, i) => (
                <Reveal key={panel.label} delay={i * .06} className={`${i ? "glass-dark" : "glass"} glass-sheen rounded-[16px] p-7 sm:p-9`}>
                  <p className={`mono-label ${i ? "text-[#a5a8ff]" : "text-[#4b4fe0]"}`}>{panel.label}</p>
                  <h3 className="mt-4 max-w-[20ch] text-[26px] font-semibold leading-[1.1] tracking-[-.035em]">{panel.title}</h3>
                  <div className="mt-7 grid gap-2.5 sm:grid-cols-2">{panel.items.map((item) => <p key={item} className={`flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-[14px] font-medium ${i ? "border-white/12 bg-white/8" : "border-white/80 bg-white/55"}`}><Check className={`size-4 shrink-0 ${i ? "text-[#a5a8ff]" : "text-[#4b4fe0]"}`} />{item}</p>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="features" data-nav="light" className="scroll-mt-24 py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div><p className={eyebrow}>The solution</p><h2 className="h-section mt-5">Every {content.workspace}, always up to date.</h2></div>
            <p className="max-w-[44ch] text-[17px] leading-[1.55] text-[#111735]/58">{content.showcaseOne.body}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feature, i) => {
              const Icon = featureIcon(feature.title, i);
              return (
                <Reveal key={feature.title} delay={(i % 3) * .05} className="glass glass-sheen glass-lift flex min-h-[260px] flex-col rounded-[16px] p-5">
                  <span className="icon-chip"><Icon className="size-5" strokeWidth={1.8} /></span>
                  <h3 className="mt-6 text-[20px] font-semibold leading-tight tracking-[-.03em]">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/58">{feature.body}</p>
                  <span className="mt-auto self-start rounded-full border border-white/80 bg-white/60 px-3 py-1 text-[11.5px] font-medium text-[#4b4fe0]">{feature.source}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><p className={eyebrow}>Inside the workflow</p><h2 className="h-section mt-5 max-w-[15ch]">{`${content.eyebrow.replace("Melorite ", "")} workflows in practice.`}</h2><p className="mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-[#111735]/58">The interface changes with the job at hand, while the underlying records stay connected.</p></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal className="glass glass-sheen grid gap-6 rounded-[24px] p-3 sm:p-4 lg:col-span-2 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <SceneStage slug={content.slug} variant="b" className="!rounded-[16px]" />
              <div className="p-4 sm:p-8"><p className="mono-label text-[#4b4fe0]">{firstChapter.eyebrow}</p><h3 className="h-story mt-4">{firstChapter.title}</h3><p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-[#111735]/58">{firstChapter.body}</p></div>
            </Reveal>
            <Reveal delay={.06} className="glass-dark glass-sheen flex flex-col rounded-[24px] p-7 sm:p-9">
              <p className="mono-label text-white/50">{secondChapter.eyebrow}</p><h3 className="h-story mt-5 max-w-[13ch]">{secondChapter.title}</h3><p className="mt-5 text-[16px] leading-[1.65] text-white/62">{secondChapter.body}</p>
              <ul className="mt-auto space-y-0 pt-10">{secondChapter.points.map((point) => <li key={point} className="flex items-center gap-3 border-t border-white/12 py-4 text-[14.5px]"><Check className="size-4 shrink-0 text-[#a5a8ff]" />{point}</li>)}</ul>
            </Reveal>
            <Reveal delay={.08} className="glass glass-sheen flex flex-col rounded-[24px] p-7 sm:p-9">
              <p className="mono-label text-[#4b4fe0]">{thirdChapter.eyebrow}</p><h3 className="h-story mt-5">{thirdChapter.title}</h3><p className="mt-5 max-w-[46ch] text-[16px] leading-[1.65] text-[#111735]/58">{thirdChapter.body}</p>
              <ul className="mt-auto grid gap-2.5 pt-8 sm:grid-cols-2">{thirdChapter.points.map((point, k) => { const Icon = featureIcon(point, k); return <li key={point} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/55 px-3.5 py-3 text-[13.5px] font-medium"><span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#5f63f2]/12 text-[#4b4fe0]"><Icon className="size-4" /></span>{point}</li>; })}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><p className={eyebrow}>Who it’s for</p><h2 className="h-section mt-5">Built for the people doing the work.</h2></Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {detail.audiences.map((audience, i) => { const Icon = audienceIcon(audience, i); return (
              <Reveal key={audience} delay={(i % 3) * .04} className="glass glass-lift flex w-full items-center gap-4 rounded-[16px] p-4 pr-5 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                <span className="icon-chip shrink-0"><Icon className="size-5" /></span>
                <span className="text-[17px] font-semibold leading-snug tracking-[-.02em]">{audience}</span>
                <span className="ml-auto text-[12px] font-semibold text-[#111735]/30">0{i + 1}</span>
              </Reveal>); })}
          </div>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal className="glass-tint glass-sheen relative flex flex-wrap items-end justify-between gap-8 overflow-hidden rounded-[24px] p-7 sm:p-10">
            <div><p className={eyebrow}>{detail.related.label}</p><h2 className="h-story mt-5">{detail.related.title}</h2><p className="mt-4 max-w-[52ch] text-[17px] leading-[1.6] text-[#111735]/62">{detail.related.body}</p></div>
            <Link href={detail.related.href} className="pill pill-dark min-h-12 !h-auto !whitespace-normal py-3 px-7 text-center">Explore {detail.related.href.startsWith("/products/") ? productBySlug(detail.related.href.split("/").pop()!)?.name : "Custom Solutions"}<ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[920px]">
          <Reveal className="text-center"><p className={eyebrow}>FAQ</p><h2 className="h-section mx-auto mt-5">Common questions.</h2></Reveal>
          <div className="mt-10 space-y-3">
            {detail.faqs.map(({ question, answer }, i) => (
              <Reveal key={question} delay={i * .035}>
                <details className="glass group rounded-[16px] px-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold tracking-[-.02em]"><span>{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#5f63f2]/12 text-[#4b4fe0] transition-transform group-open:rotate-45">+</span></summary>
                  <p className="max-w-[68ch] pb-6 text-[15.5px] leading-[1.6] text-[#111735]/60">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(48px,6vw,88px)] text-[#111735]">
        <div className="rail-inner">
          <p className="eyebrow-pill">Continue exploring</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(relatedProducts[content.slug] ?? []).map((slug) => <li key={slug}><Link className="glass glass-lift group flex h-full items-center justify-between gap-4 rounded-[16px] p-5 text-[16px] font-semibold tracking-[-.02em]" href={`/products/${slug}`}>{productSeo[slug].title}<ArrowUpRight className="size-4 shrink-0 text-[#4b4fe0]" /></Link></li>)}
            <li><Link className="glass glass-lift group flex h-full items-center justify-between gap-4 rounded-[16px] p-5 text-[16px] font-semibold tracking-[-.02em]" href="/platform">How the Melorite platform works<ArrowUpRight className="size-4 shrink-0 text-[#4b4fe0]" /></Link></li>
          </ul>
        </div>
      </section>
      <FinalCTA href={`${site.demoHref}?product=${content.slug}`} label={`Book a ${content.eyebrow.replace("Melorite ", "")} demo`} title={`See ${content.eyebrow} at work.`} text="Bring us your current process. We’ll show you how the product can make it clearer, faster and easier for the whole team." />
    </>
  );
}
