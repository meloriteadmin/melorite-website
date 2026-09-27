"use client";

import Link from "next/link";
import { useState } from "react";
import { businessApplications, industrySolutions } from "@/data/catalog";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";

const mockForApplication: Record<string, string> = { "crm-growth": "crm", finance: "finance", hrms: "hr", commerce: "commerce", projects: "projects", service: "service", "procurement-inventory": "inventory" };

export function OfferingLinks() {
  const [active, setActive] = useState(businessApplications[0].slug);
  const application = businessApplications.find((item) => item.slug === active) ?? businessApplications[0];
  const visual = productById(mockForApplication[application.slug])!;

  return <>
    <section className="section-y bg-white"><div className="container-x">
      <div className="marketing-grid items-end"><SectionHeading eyebrow="Business Applications" title={["Built for every team."]} description="Choose what you need today. Add more when the work calls for it." className="col-span-full lg:col-span-7"/><p className="col-span-full mt-7 max-w-[34ch] text-[15px] leading-relaxed text-muted lg:col-start-10 lg:col-span-3 lg:mt-0">Every application shares the same workspace and business context.</p></div>
      <div className="mt-14 border-y border-line py-3"><div role="tablist" aria-label="Business applications" className="no-scrollbar -mx-[var(--gutter)] flex gap-1 overflow-x-auto px-[var(--gutter)] md:mx-0 md:px-0">{businessApplications.map((item) => { const selected = item.slug === active; return <button key={item.slug} type="button" role="tab" aria-selected={selected} onClick={() => setActive(item.slug)} className={`shrink-0 border-b-2 px-3 py-3 text-[14px] font-medium transition-colors ${selected ? "border-brand text-navy" : "border-transparent text-muted hover:text-navy"}`}>{item.name}</button>; })}</div></div>
      <div className="marketing-grid mt-10 items-center gap-y-10"><div className="col-span-full lg:col-span-4"><span className="grid size-10 place-items-center rounded-lg" style={{ background: tint(application.accent, .1), color: application.accent }}><Icon name={application.icon} className="size-5"/></span><h3 className="mt-6 text-h3 text-navy">{application.name}</h3><p className="mt-4 max-w-[34ch] text-[16px] leading-relaxed text-muted">{application.description}</p><Link href={`/products/${application.slug}`} className="mt-7 inline-flex text-[14px] font-medium text-brand hover:text-brand-700">Explore {application.name} →</Link></div><div className="col-span-full lg:col-start-6 lg:col-span-7"><div className="overflow-hidden rounded-xl border border-line bg-white shadow-ui"><WorkspaceMock product={visual}/></div></div></div>
    </div></section>
    <section className="section-y bg-fog-white"><div className="container-x"><div className="marketing-grid items-end"><SectionHeading eyebrow="Melorite AI" title={["AI, in context."]} description="AI Agent and AI Calling work with the records and workflows your teams already use." className="col-span-full lg:col-span-7"/><p className="col-span-full mt-7 max-w-[34ch] text-[15px] leading-relaxed text-muted lg:col-start-10 lg:col-span-3 lg:mt-0">Ask a question. Qualify a call. Keep the next action connected.</p></div><div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2"><Link href="/ai/agent" className="bg-white p-7 transition-colors hover:bg-brand-50"><p className="text-h3 text-navy">AI Agent</p><p className="mt-3 max-w-[35ch] text-[15px] leading-relaxed text-muted">Ask, understand and act across your workspace.</p><span className="mt-8 inline-block text-sm font-medium text-brand">Explore AI Agent →</span></Link><Link href="/ai/calling" className="bg-white p-7 transition-colors hover:bg-[#faf5fa]"><p className="text-h3 text-navy">AI Calling</p><p className="mt-3 max-w-[35ch] text-[15px] leading-relaxed text-muted">Turn business conversations into clear follow-through.</p><span className="mt-8 inline-block text-sm font-medium text-[#a0278c]">Explore AI Calling →</span></Link></div></div></section>
    <section className="section-y bg-white"><div className="container-x"><SectionHeading eyebrow="Industry Solutions" title={["Designed for real operations."]} description="Six focused solutions, built on the same connected platform." className="max-w-[760px]"/><div className="mt-14 grid gap-x-8 border-t border-line sm:grid-cols-2 lg:grid-cols-3">{industrySolutions.map(solution => <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group border-b border-line py-7"><span className="text-[16px] font-medium text-navy">{solution.name}</span><p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-muted">{solution.description}</p><span className="mt-5 inline-block text-sm font-medium text-brand">Explore →</span></Link>)}</div></div></section>
  </>;
}
