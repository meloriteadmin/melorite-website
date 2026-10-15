import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { VoiceOrb } from "@/components/site/VoiceOrb";
import { ProductHeroMock, ProductWorkspace } from "./ProductMockups";
import { site } from "@/data/site";
import type { ProductPageContent } from "@/data/product-pages";

const how = [
  ["01", "Book a demo", "Show us how your team works today."],
  ["02", "We set it up", "We prepare the product around your workflow."],
  ["03", "You go live", "Your team starts with a clear, ready workspace."],
];

export function ProductPageView({ content }: { content: ProductPageContent }) {
  return (
    <>
      <section data-nav="light" className="bg-[#fbfbf8] px-3 pb-3 pt-[76px] text-[#111735] sm:px-5 sm:pb-5">
        <div className="media-frame relative isolate mx-auto grid min-h-[calc(100svh-96px)] max-w-[1600px] items-center gap-14 overflow-hidden border border-[#111735]/8 bg-[linear-gradient(135deg,#fff_0%,#fbfaf7_48%,#f2f1ff_100%)] px-6 py-[clamp(76px,9vw,132px)] md:px-[clamp(44px,8vw,128px)] lg:grid-cols-[.82fr_1.18fr]">
          <div aria-hidden className="absolute -right-[18%] top-[-42%] -z-10 size-[64rem] rounded-full bg-[radial-gradient(circle,rgba(137,127,242,.16)_0%,rgba(169,156,247,.07)_38%,transparent_70%)]" />
          <div aria-hidden className="absolute -bottom-[42%] left-[18%] -z-10 size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(255,198,184,.13)_0%,transparent_68%)]" />
          <Reveal>
            <p className="mono-label flex items-center gap-3 text-[#111735]/58"><i className="size-2 rounded-full bg-[#5f63f2]" />{content.eyebrow}</p>
            <h1 className="h-hero mt-7 max-w-[11ch] text-[#111735]">{content.headline[0]} <span className="text-[#111735]/48">{content.headline[1]}</span></h1>
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

      <section data-nav="light" className="rails rails-light bg-[#f2f1eb] py-[clamp(88px,10vw,148px)] text-[#111735]">
        <div className="rail-inner mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal><p className="mono-label text-[#5f63f2]">The problem</p><h2 className="h-section mt-5 max-w-[12ch]">{content.problemTitle}</h2></Reveal>
          <Reveal delay={0.08} className="space-y-6 border-t border-[#111735]/14 pt-7 text-[clamp(1.15rem,1rem+.45vw,1.45rem)] leading-[1.55] text-[#111735]/64">
            {content.problemCopy.map((copy) => <p key={copy}>{copy}</p>)}
          </Reveal>
        </div>
      </section>

      <section id="features" data-nav="light" className="rails rails-light scroll-mt-20 bg-[#fbfbf8] py-[clamp(88px,10vw,148px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[1440px]">
          <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="mono-label text-[#5f63f2]">The solution</p><h2 className="h-section mt-5 max-w-[13ch]">Every {content.workspace}, always up to date.</h2></div>
            <p className="max-w-[44ch] text-[18px] leading-[1.55] text-[#111735]/58 lg:justify-self-end">{content.showcaseOne.body}</p>
          </Reveal>
          <div className="mt-14 grid border-l border-t border-[#111735]/12 md:grid-cols-2 xl:grid-cols-4">
            {content.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 4) * .04} className="min-h-56 border-b border-r border-[#111735]/12 p-7">
                <span className="grid size-9 place-items-center rounded-full bg-[#eeeffe] text-[#5f63f2]"><Sparkles className="size-4" /></span>
                <p className="mono-label mt-8 text-[#111735]/42">{feature.source}</p>
                <h3 className="mt-3 text-[23px] font-bold leading-none tracking-[-.035em]">{feature.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.5] text-[#111735]/55">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav="light" className="rails rails-light bg-[#eeeffe] py-[clamp(88px,10vw,148px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[1440px]">
          <Reveal><p className="mono-label text-[#5f63f2]">A calmer workspace</p><h2 className="h-section mt-5 max-w-[13ch]">{content.showcaseOne.title}</h2></Reveal>
          <Reveal className="mt-12 rounded-[22px] border border-[#111735]/10 bg-white/60 p-3 sm:p-7"><ProductWorkspace slug={content.slug} /></Reveal>
        </div>
      </section>

      <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(88px,10vw,148px)] text-[#111735]">
        <div className="rail-inner mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <Reveal><ProductWorkspace slug={content.slug} compact /></Reveal>
          <Reveal delay={0.08}>
            <p className="mono-label text-[#5f63f2]">{content.showcaseTwo.number} / Workflow</p>
            <h2 className="h-section mt-5">{content.showcaseTwo.title}</h2>
            <p className="mt-6 text-[18px] leading-[1.55] text-[#111735]/58">{content.showcaseTwo.body}</p>
            <ul className="mt-8 border-t border-[#111735]/12">
              {content.signals.map((signal) => <li key={signal} className="flex gap-3 border-b border-[#111735]/12 py-4 text-[15px]"><Check className="mt-0.5 size-4 shrink-0 text-[#5f63f2]" />{signal}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section data-nav="light" className="rails rails-light bg-[#f2f1eb] py-[clamp(88px,10vw,132px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[1440px]">
          <Reveal><p className="mono-label text-[#5f63f2]">How it works</p><h2 className="h-section mt-5">From demo to day one.</h2></Reveal>
          <ol className="mt-12 grid border-l border-t border-[#111735]/12 md:grid-cols-3">
            {how.map(([number, title, body]) => <li key={number} className="min-h-60 border-b border-r border-[#111735]/12 p-8"><p className="mono-label text-[#5f63f2]">{number}</p><h3 className="mt-14 text-[28px] font-bold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-[28ch] text-[16px] leading-[1.5] text-[#111735]/55">{body}</p></li>)}
          </ol>
        </div>
      </section>

      <FinalCTA title={`See ${content.eyebrow} at work.`} text="Bring us your current process. We’ll show you how the product can make it clearer, faster and easier for the whole team." />
    </>
  );
}
