"use client";

import Link from "next/link";
import { useState } from "react";
import { businessApplications, industrySolutions, type Offering } from "@/data/catalog";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
function ApplicationGraphic({ application }: { application: Offering }) {
  const colors = ["#eef4ff", "#fff3ec", "#f5f0ff", "#eff8f3"];
  return <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-line bg-[#fbfaf7] p-6 md:p-9">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.2),white_76%)] opacity-50" aria-hidden/>
    <svg viewBox="0 0 600 360" className="absolute inset-0 size-full" aria-hidden><path d="M300 180 C220 120 180 95 100 80 M300 180 C390 105 430 86 510 72 M300 180 C220 235 170 275 92 286 M300 180 C390 235 444 275 520 290" fill="none" stroke={tint(application.accent,.28)} strokeWidth="2" strokeDasharray="5 7"/><circle cx="300" cy="180" r="86" fill={tint(application.accent,.07)}/></svg>
    <div className="relative z-10 grid min-h-[316px] grid-cols-[1fr_1.1fr_1fr] grid-rows-2 items-center gap-5">
      {application.modules.slice(0,4).map((module,index)=><div key={module} className={`rounded-xl border border-white/70 p-4 shadow-soft ${index===0?"col-start-1 row-start-1":index===1?"col-start-3 row-start-1":index===2?"col-start-1 row-start-2":"col-start-3 row-start-2"}`} style={{background:colors[index]}}><span className="text-[10px] font-semibold uppercase tracking-[.08em]" style={{color:application.accent}}>0{index+1}</span><p className="mt-2 text-[13px] font-semibold text-navy">{module}</p><p className="mt-1 text-[10px] leading-relaxed text-muted">Connected context</p></div>)}
      <div className="col-start-2 row-span-2 row-start-1 grid place-items-center"><div className="grid size-32 place-items-center rounded-full border border-white/80 bg-white/85 text-center shadow-float backdrop-blur"><span><span className="mx-auto grid size-10 place-items-center rounded-xl" style={{background:tint(application.accent,.12),color:application.accent}}><Icon name={application.icon} className="size-5"/></span><strong className="mt-3 block text-[13px] text-navy">{application.name}</strong></span></div></div>
    </div>
  </div>;
}

export function OfferingLinks() {
  const [active, setActive] = useState(businessApplications[0].slug);
  const application = businessApplications.find((item) => item.slug === active) ?? businessApplications[0];

  return <>
    <section className="section-y bg-white"><div className="container-x">
      <div className="marketing-grid items-end"><SectionHeading eyebrow="Business Applications" title={["Built for every team."]} description="Choose what you need today. Add more when the work calls for it." className="col-span-full lg:col-span-7"/><p className="col-span-full mt-7 max-w-[34ch] text-[15px] leading-relaxed text-muted lg:col-start-10 lg:col-span-3 lg:mt-0">Every application shares the same workspace and business context.</p></div>
      <div className="mt-14 border-y border-line py-3"><div role="tablist" aria-label="Business applications" className="no-scrollbar -mx-[var(--gutter)] flex gap-1 overflow-x-auto px-[var(--gutter)] md:mx-0 md:px-0">{businessApplications.map((item) => { const selected = item.slug === active; return <button key={item.slug} type="button" role="tab" aria-selected={selected} onClick={() => setActive(item.slug)} className={`shrink-0 border-b-2 px-3 py-3 text-[14px] font-medium transition-colors ${selected ? "border-brand text-navy" : "border-transparent text-muted hover:text-navy"}`}>{item.name}</button>; })}</div></div>
      <div className="marketing-grid mt-10 items-center gap-y-10"><div className="col-span-full lg:col-span-4"><span className="grid size-10 place-items-center rounded-lg" style={{ background: tint(application.accent, .1), color: application.accent }}><Icon name={application.icon} className="size-5"/></span><h3 className="mt-6 text-h3 text-navy">{application.name}</h3><p className="mt-4 max-w-[34ch] text-[16px] leading-relaxed text-muted">{application.description}</p><Link href={`/products/${application.slug}`} className="mt-7 inline-flex text-[14px] font-medium text-brand hover:text-brand-700">Explore {application.name} →</Link></div><div className="col-span-full lg:col-start-6 lg:col-span-7"><ApplicationGraphic application={application}/></div></div>
    </div></section>
    <section className="section-y bg-fog-white"><div className="container-x"><div className="marketing-grid items-end"><SectionHeading eyebrow="Melorite AI" title={["AI, in context."]} description="AI Agent and AI Calling work with the records and workflows your teams already use." className="col-span-full lg:col-span-7"/><p className="col-span-full mt-7 max-w-[34ch] text-[15px] leading-relaxed text-muted lg:col-start-10 lg:col-span-3 lg:mt-0">Ask a question. Qualify a call. Keep the next action connected.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2"><Link href="/ai/agent" className="pastel-card-violet rounded-2xl border p-7 transition-transform hover:-translate-y-0.5"><p className="text-h3 text-navy">AI Agent</p><p className="mt-3 max-w-[35ch] text-[15px] leading-relaxed text-muted">Ask, understand and act across your workspace.</p><span className="mt-8 inline-block text-sm font-medium text-brand">Explore AI Agent →</span></Link><Link href="/ai/calling" className="pastel-card-peach rounded-2xl border p-7 transition-transform hover:-translate-y-0.5"><p className="text-h3 text-navy">AI Calling</p><p className="mt-3 max-w-[35ch] text-[15px] leading-relaxed text-muted">Turn business conversations into clear follow-through.</p><span className="mt-8 inline-block text-sm font-medium text-[#a0278c]">Explore AI Calling →</span></Link></div></div></section>
    <section className="section-y bg-white"><div className="container-x"><SectionHeading eyebrow="Industry Solutions" title={["Designed for real operations."]} description="Six focused solutions, built on the same connected platform." className="max-w-[760px]"/><div className="mt-14 grid gap-x-8 border-t border-line sm:grid-cols-2 lg:grid-cols-3">{industrySolutions.map(solution => <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group border-b border-line py-7"><span className="text-[16px] font-medium text-navy">{solution.name}</span><p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-muted">{solution.description}</p><span className="mt-5 inline-block text-sm font-medium text-brand">Explore →</span></Link>)}</div></div></section>
  </>;
}
