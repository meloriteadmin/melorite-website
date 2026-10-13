import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ProductHeroMock, ProductWorkspace, SignalCard } from "./ProductMockups";
import { site } from "@/data/site";
import type { ProductPageContent } from "@/data/product-pages";

const colors = { indigo: "#3d3fd1", coral: "#ff9f7a", teal: "#4ca89c", green: "#2f8d66" };

function SectionLabel({ children, action = false }: { children: React.ReactNode; action?: boolean }) {
  return <div className="flex items-center gap-4"><p className="shrink-0 font-serif text-[21px] tracking-[-.02em]">{children}</p><span className="h-px flex-1 bg-[#d9dcf0]" />{action && <Link href={site.demoHref} className="pill pill-dark pill-sm">Book a demo</Link>}</div>;
}

function StaleCard({ warning, noun }: { warning: string; noun: string }) {
  const rows = [["Last contact", "Unknown"], ["Owner", "Missing"], ["Next step", "Unknown"], ["Status", "Outdated"], ["Notes", "Missing"], ["Updated", "Unknown"]];
  return <div className="overflow-hidden rounded-[14px] border border-[#e6c7c3] bg-white"><div className="flex items-start justify-between gap-4 border-b border-[#d9dcf0] px-5 py-4"><div><p className="text-sm font-semibold capitalize">{noun} record</p><p className="mt-1 text-[11px] text-[#696d87]">Last edited weeks ago</p></div><span className="rounded-full border border-[#efc3bd] bg-[#fff3f1] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-[#9a3f35]">Stale</span></div><div className="grid grid-cols-2">{rows.map(([label, value], i) => <div key={label} className={`border-b border-[#e8e9f3] px-5 py-4 ${i % 2 ? "border-l" : ""}`}><p className="font-mono text-[9px] uppercase tracking-[.12em] text-[#777b92]">{label}</p><p className="mt-2 text-sm italic text-[#9699ab]">{value}</p></div>)}</div><p className="flex items-center gap-2 bg-[#fff3f1] px-5 py-4 text-[12px] font-medium text-[#9a3f35]"><X className="size-4" />{warning}</p></div>;
}

const how = [["01", "Book a demo", "Tell us how your team works today."], ["02", "We set it up", "We prepare the product around your workflow."], ["03", "You go live", "Your team starts with a clear, ready workspace."], ["04", "We stay with you", "Real people keep helping after launch."]];
const proof = [["6", "products"], ["5", "kinds of business"], ["[DAYS]", "to go live"], ["24/7", "AI answering"]];

export function ProductPageView({ content }: { content: ProductPageContent }) {
  return <>
    <section data-nav="dark" className="rails relative isolate overflow-hidden bg-[#151843] pt-16 text-white">
      <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#151843_0%,#252969_58%,#3b3fb8_100%)]" />
      <div aria-hidden className="absolute -right-24 top-0 -z-10 size-[560px] rounded-full border border-white/10 opacity-60" />
      <div aria-hidden className="absolute -right-8 top-28 -z-10 size-[360px] rounded-full border border-white/10 opacity-60" />
      <div className="rail-inner mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-14 py-[clamp(80px,10vw,150px)] lg:grid-cols-[minmax(0,.85fr)_minmax(520px,1fr)]">
        <Reveal><p className="mono-label flex items-center gap-3 text-white/70"><i className="size-2 rounded-full bg-[#ff9f7a]" />{content.eyebrow}</p><h1 className="mt-7 max-w-[11ch] font-serif text-[clamp(3.2rem,2rem+4.5vw,6.5rem)] leading-[.96] tracking-[-.045em]">{content.headline[0]}<br /><span className="text-white/65">{content.headline[1]}</span></h1><p className="mt-7 max-w-[48ch] text-[clamp(1.05rem,.98rem+.25vw,1.2rem)] leading-relaxed text-white/72">{content.subhead}</p><Link href={site.demoHref} className="pill pill-light mt-9 h-12 px-7">Book a demo <ArrowRight className="size-4" /></Link></Reveal>
        <Reveal delay={0.08} className="min-w-0"><ProductHeroMock slug={content.slug} /></Reveal>
      </div>
    </section>

    <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(84px,10vw,128px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><SectionLabel>The problem</SectionLabel><div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-24"><Reveal><h2 className="max-w-[14ch] font-serif text-[clamp(2.5rem,1.8rem+2.5vw,4.2rem)] leading-[1.04] tracking-[-.035em]">{content.problemTitle}</h2><div className="mt-8 max-w-[56ch] space-y-5 text-[17px] leading-[1.7] text-[#4a4e6d]">{content.problemCopy.map((x) => <p key={x}>{x}</p>)}</div></Reveal><Reveal delay={0.08}><StaleCard warning={content.staleWarning} noun={content.problemThing} /></Reveal></div></div></section>

    <section data-nav="light" className="rails rails-light bg-[#ebedf9] py-[clamp(84px,10vw,128px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><SectionLabel action>The solution</SectionLabel><Reveal><h2 className="mt-14 max-w-[17ch] font-serif text-[clamp(2.5rem,1.8rem+2.5vw,4.2rem)] leading-[1.04] tracking-[-.035em]">Every {content.workspace}, always up to date:</h2></Reveal><div className="mt-12 grid overflow-hidden rounded-[14px] border border-[#d9dcf0] bg-[#d9dcf0] md:grid-cols-2 xl:grid-cols-4">{content.features.map((f, i) => <Reveal key={f.title} delay={(i % 4) * .035} className="bg-white p-7"><p className="flex items-center gap-3"><i className="size-2.5 rounded-full" style={{ background: colors[f.color] }} /><span className="font-mono text-[12px] font-semibold">{f.title}</span></p><p className="mt-5 font-mono text-[9px] uppercase tracking-[.14em] text-[#777b92]">{f.source}</p><p className="mt-3 text-[15px] leading-relaxed text-[#4a4e6d]">{f.body}</p></Reveal>)}</div></div></section>

    <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(84px,10vw,128px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><h2 className="font-serif text-[clamp(2.5rem,1.8rem+2.5vw,4.2rem)] leading-[1.04] tracking-[-.035em]">{content.showcaseOne.title}</h2><p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-[#4a4e6d]">{content.showcaseOne.body}</p></Reveal><Reveal className="mt-12"><ProductWorkspace slug={content.slug} /></Reveal></div></section>

    <section data-nav="light" className="rails rails-light bg-[#ebedf9] py-[clamp(84px,10vw,128px)] text-[#14172f]"><div className="rail-inner mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20"><Reveal><ProductWorkspace slug={content.slug} compact /></Reveal><Reveal delay={0.08}><p className="font-mono text-[12px] tracking-[.15em] text-[#3d3fd1]">{content.showcaseTwo.number}</p><h2 className="mt-5 font-serif text-[clamp(2.3rem,1.7rem+2vw,3.7rem)] leading-[1.06] tracking-[-.035em]">{content.showcaseTwo.title}</h2><p className="mt-6 text-[17px] leading-relaxed text-[#4a4e6d]">{content.showcaseTwo.body}</p><Link href={site.demoHref} className="mt-7 inline-flex items-center gap-2 border-b border-[#3d3fd1] pb-1 text-sm font-semibold text-[#3d3fd1]">{content.showcaseTwo.link}<ArrowRight className="size-4" /></Link></Reveal></div></section>

    <section data-nav="dark" className="rails bg-[#151843] py-[clamp(84px,10vw,128px)] text-white"><div className="rail-inner mx-auto max-w-[1440px]"><div className="overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_10%_100%,rgba(255,159,122,.2),transparent_36%),radial-gradient(circle_at_92%_0%,rgba(76,168,156,.19),transparent_34%),linear-gradient(135deg,#191c4a,#3438a7)] px-6 py-[clamp(72px,10vw,132px)] text-center"><Reveal><h2 className="mx-auto max-w-[17ch] font-serif text-[clamp(2.6rem,2rem+2.7vw,4.8rem)] leading-[1.02] tracking-[-.04em]">{content.signalsTitle[0]}<br /><span className="text-white/62">{content.signalsTitle[1]}</span></h2></Reveal><div className="mx-auto mt-14 grid max-w-5xl gap-4 text-left md:grid-cols-3"><SignalCard tone="green" label="Opportunity">{content.signals[0]}</SignalCard><SignalCard tone="red" label="Risk">{content.signals[1]}</SignalCard><SignalCard tone="amber" label="Follow up">{content.signals[2]}</SignalCard></div></div></div></section>

    <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(84px,10vw,128px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><SectionLabel>How it works</SectionLabel><ol className="mt-14 grid border-l border-t border-[#d9dcf0] md:grid-cols-4">{how.map(([n, title, body]) => <li key={n} className="min-h-56 border-b border-r border-[#d9dcf0] p-7"><p className="font-mono text-[11px] tracking-[.15em] text-[#3d3fd1]">{n}</p><h3 className="mt-12 font-serif text-[27px] tracking-[-.025em]">{title}</h3><p className="mt-3 text-[14px] leading-relaxed text-[#4a4e6d]">{body}</p></li>)}</ol></div></section>

    <section data-nav="light" className="rails rails-light bg-[#ebedf9] py-[clamp(84px,10vw,128px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><SectionLabel>Pricing</SectionLabel><Reveal className="mx-auto mt-14 max-w-[720px] rounded-[14px] border border-[#d9dcf0] bg-white p-[clamp(28px,5vw,64px)] text-center"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#3d3fd1]">Simple monthly plans</p><h2 className="mt-5 font-serif text-[clamp(2.4rem,1.9rem+2vw,3.8rem)] tracking-[-.035em]">[YOUR PRICE]</h2><p className="mt-2 text-[#4a4e6d]">No hidden costs.</p><ul className="mx-auto mt-9 max-w-md border-t border-[#d9dcf0] text-left">{["A workspace set up for your business", "Help moving your existing information", "Training for your team", "Ongoing support after go-live", "Secure access for your team", "A simple monthly plan"].map((x) => <li key={x} className="flex gap-3 border-b border-[#d9dcf0] py-3.5 text-sm text-[#4a4e6d]"><Check className="mt-0.5 size-4 shrink-0 text-[#2f8d66]" />{x}</li>)}</ul><Link href={site.demoHref} className="pill pill-dark mt-9 h-12 px-8">Book a demo <ArrowRight className="size-4" /></Link></Reveal></div></section>

    <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(64px,8vw,96px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><div className="grid border-l border-t border-[#d9dcf0] sm:grid-cols-2 lg:grid-cols-4">{proof.map(([value, label]) => <div key={label} className="border-b border-r border-[#d9dcf0] p-7"><p className="font-serif text-[clamp(2.6rem,2rem+1.8vw,4rem)] tracking-[-.04em]">{value}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[.14em] text-[#696d87]">{label}</p></div>)}</div></div></section>
    <FinalCTA />
  </>;
}

