import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { audienceIcon, featureIcon } from "@/components/site/icons";
import { Reveal } from "@/components/animation/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { VoiceOrb } from "@/components/site/VoiceOrb";
import { panelFor } from "@/components/site/ProductVisuals";
import { ProductHeroMock, ProductWorkspace } from "./ProductMockups";
import { site } from "@/data/site";
import type { ProductPageContent } from "@/data/product-pages";
import { productDetails } from "@/data/product-details";
import Timeline from "@/components/ui/timeline";

export function ProductPageView({ content }: { content: ProductPageContent }) {
  const detail = productDetails[content.slug];
  return (
    <>
      <section data-nav="light" className="bg-[#ffffff] px-3 pb-3 pt-[76px] text-[#111735] sm:px-5 sm:pb-5">
        <div className={`${panelFor[content.slug] ?? "mesh-crm grain"} media-frame relative isolate mx-auto grid min-h-[calc(100svh-96px)] max-w-[1600px] items-center gap-14 px-6 py-[clamp(64px,8vw,112px)] md:px-[clamp(44px,8vw,128px)] xl:grid-cols-[.95fr_1.05fr]`}>
          <Reveal>
            <p className="eyebrow-pill">{content.eyebrow}</p>
            <h1 className="h-hero mt-7 max-w-[14ch] text-[#111735] xl:!text-[clamp(3.5rem,4.6vw,4.75rem)]">{content.headline[0]} <span className="text-[#4b4fe0]">{content.headline[1]}</span></h1>
            <p className="mt-7 max-w-[46ch] text-[18px] leading-[1.55] text-[#111735]/66">{content.subhead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={site.demoHref} className="pill pill-dark h-12 px-7">Book a demo <ArrowRight className="size-4" /></Link>
              <a href="#features" className="pill h-12 border border-[#111735]/15 bg-white/55 px-7 text-[#111735] backdrop-blur-sm hover:bg-white/80">Explore features</a>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="min-w-0">
            {content.slug === "ai-calling" ? (
              <div className="mx-auto max-w-[820px]">
                <VoiceOrb transparent />
              </div>
            ) : (
              <div className="relative mx-auto max-w-[820px]">
                <div aria-hidden className="absolute inset-x-[8%] bottom-[-8%] h-[35%] rounded-full bg-[#6964e8]/16 blur-[70px]" />
                <div className="relative rounded-[20px] border border-white/90 bg-white/72 p-3 shadow-[0_42px_100px_-38px_rgba(17,23,53,.34)] backdrop-blur-xl sm:p-5">
                  <ProductHeroMock slug={content.slug} className="shadow-[0_12px_34px_-24px_rgba(17,23,53,.26)]" />
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section data-nav="light" className="bg-white py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <Reveal><p className="eyebrow-pill">The problem</p><h2 className="h-section mt-5">{content.problemTitle}</h2></Reveal>
          <Reveal delay={0.08} className="card space-y-4 p-7 text-[17px] leading-[1.6] text-[#111735]/66 sm:p-9">
            {content.problemCopy.map((copy) => <p key={copy}>{copy}</p>)}
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
          content: i === 0
            ? `The ${content.workspace} starts with the information your team needs to act.`
            : "Every update stays connected, giving the next person clear context and a sensible next action.",
        }))}
      />

      {detail.perspectives && (
        <section data-nav="light" className="panel-mesh py-[clamp(56px,6vw,96px)] text-[#111735]">
          <div className="rail-inner">
            <Reveal><p className="eyebrow-pill">Two sides, one workflow</p><h2 className="h-section mt-5">The right view for every conversation.</h2></Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {detail.perspectives.map((panel, i) => (
                <Reveal key={panel.label} delay={i * .06} className="card p-7 sm:p-9">
                  <p className="mono-label text-[#4b4fe0]">{panel.label}</p>
                  <h3 className="mt-4 max-w-[20ch] text-[26px] font-semibold leading-[1.1] tracking-[-.035em]">{panel.title}</h3>
                  <div className="mt-7 grid gap-2.5 sm:grid-cols-2">{panel.items.map((item) => <p key={item} className="flex items-center gap-2.5 rounded-xl bg-[#f4f5ff] px-4 py-3 text-[14px] font-medium"><Check className="size-4 shrink-0 text-[#4b4fe0]" />{item}</p>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="features" data-nav="light" className="scroll-mt-20 bg-white py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow-pill">The solution</p><h2 className="h-section mt-5">Every {content.workspace}, always up to date.</h2></div>
            <p className="max-w-[44ch] text-[17px] leading-[1.55] text-[#111735]/58">{content.showcaseOne.body}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.features.map((feature, i) => {
              const Icon = featureIcon(feature.title, i);
              const tones = ["mesh-crm", "mesh-estate", "mesh-clinic", "mesh-agency", "mesh-commerce", "mesh-calling"];
              return (
                <Reveal key={feature.title} delay={(i % 4) * .05} className="card group flex flex-col p-6">
                  <span className={`${tones[i % tones.length]} grain relative grid size-12 place-items-center overflow-hidden rounded-2xl text-[#2f33b8] shadow-[inset_0_0_0_1px_rgba(255,255,255,.6)]`}><Icon className="relative z-10 size-5" strokeWidth={1.9} /></span>
                  <h3 className="mt-6 text-[20px] font-semibold leading-tight tracking-[-.03em]">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/58">{feature.body}</p>
                  <span className="mt-5 self-start rounded-full bg-[#f4f5ff] px-3 py-1 text-[11.5px] font-medium text-[#4b4fe0]">{feature.source}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section data-nav="light" className="bg-[#f4f5ff] py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal className="text-center"><p className="eyebrow-pill">A calmer workspace</p><h2 className="h-section mx-auto mt-5">{content.showcaseOne.title}</h2></Reveal>
          <Reveal className={`${panelFor[content.slug] ?? "mesh-crm grain"} relative mt-10 overflow-hidden rounded-[28px] p-3 sm:p-8`}><div className="relative z-10 rounded-[20px] bg-white/70 p-3 backdrop-blur sm:p-6"><ProductWorkspace slug={content.slug} /></div></Reveal>
        </div>
      </section>

      {detail.chapters.map((chapter, i) => (
        <section key={chapter.eyebrow} data-nav="light" className={`py-[clamp(56px,6vw,96px)] text-[#111735] ${i % 2 ? "bg-[#f4f5ff]" : "bg-white"}`}>
          <div className="rail-inner grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <div className={`${panelFor[content.slug] ?? "mesh-crm grain"} relative overflow-hidden rounded-[28px] p-4 sm:p-7`}><div className="relative z-10"><ProductWorkspace slug={content.slug} compact /></div></div>
            </Reveal>
            <Reveal delay={.07} className={i % 2 ? "lg:order-1" : ""}>
              <p className="eyebrow-pill">{chapter.eyebrow}</p>
              <h2 className="h-story mt-5">{chapter.title}</h2>
              <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.6] text-[#111735]/60">{chapter.body}</p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">{chapter.points.map((point) => <li key={point} className="flex items-center gap-2.5 rounded-xl border border-[#111735]/8 bg-white px-4 py-3 text-[14.5px] font-medium shadow-sm"><Check className="size-4 shrink-0 text-[#4b4fe0]" />{point}</li>)}</ul>
            </Reveal>
          </div>
        </section>
      ))}

      <section data-nav="light" className="bg-white py-[clamp(56px,6vw,96px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow-pill">Who it’s for</p><h2 className="h-section mt-5">Built for the people doing the work.</h2></div></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.audiences.map((audience, i) => { const Icon = audienceIcon(audience, i); return <Reveal key={audience} delay={i * .05} className="card flex flex-col gap-10 p-6"><span className="icon-chip"><Icon className="size-5" /></span><h3 className="text-[19px] font-semibold tracking-[-.025em]">{audience}</h3></Reveal>; })}
          </div>
        </div>
      </section>

      <section data-nav="light" className="panel-mesh py-[clamp(56px,6vw,96px)] text-[#111735]"><div className="rail-inner flex flex-wrap items-end justify-between gap-8"><Reveal><p className="eyebrow-pill">{detail.related.label}</p><h2 className="h-story mt-5">{detail.related.title}</h2><p className="mt-4 max-w-[52ch] text-[17px] leading-[1.6] text-[#111735]/62">{detail.related.body}</p></Reveal><Reveal delay={.07}><Link href={detail.related.href} className="pill pill-dark h-12 px-7">Explore the connection<ArrowRight className="size-4" /></Link></Reveal></div></section>

      <section data-nav="light" className="bg-white py-[clamp(56px,6vw,96px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[920px]"><Reveal className="text-center"><p className="eyebrow-pill">FAQ</p><h2 className="h-section mx-auto mt-5">Common questions.</h2></Reveal><div className="mt-10 space-y-3">{detail.faqs.map(({ question, answer }, i) => <Reveal key={question} delay={i * .035}><details className="card group px-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold tracking-[-.02em]"><span>{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eeeffe] text-[#4b4fe0] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-[68ch] pb-6 text-[15.5px] leading-[1.6] text-[#111735]/60">{answer}</p></details></Reveal>)}</div></div></section>

      <FinalCTA title={`See ${content.eyebrow} at work.`} text="Bring us your current process. We’ll show you how the product can make it clearer, faster and easier for the whole team." />
    </>
  );
}
