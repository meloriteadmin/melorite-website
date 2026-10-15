import type { Metadata } from "next";
import Link from "next/link";
import { createElement } from "react";
import { AppWindow, ArrowRight, BarChart3, Blocks, Check, GitBranch, LayoutDashboard, LockKeyhole, Plug, UsersRound } from "lucide-react";
import { customBuilds, customSteps } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { InnerHero } from "@/components/site/InnerHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { CellGrid, GoodFor } from "@/components/site/Cells";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom Solutions",
  description: "Sometimes ready-made software isn’t quite enough. Melorite can add to its products or build something new around exactly how you work.",
  alternates: { canonical: "/custom-solutions" },
  openGraph: { title: "Custom Business Software | Melorite", description: "Extend a Melorite product or build software around your workflow.", url: "/custom-solutions" },
};

const customCases = [
  ["An unusual workflow", "Your team follows a process that standard software does not cover cleanly."],
  ["A specific approval path", "Work needs to move through particular people, conditions or decisions."],
  ["A portal", "Customers, partners or teams need a focused place to see information and act."],
  ["Reporting or integration", "Important information must connect with another system or appear in a specific view."],
] as const;

const useCases = [
  ["Operations approval", "Route purchases, exceptions or requests through the right people and keep every decision visible."],
  ["Partner workspace", "Give distributors, channel partners or vendors a focused portal for shared records and actions."],
  ["Customer service portal", "Let customers submit requests, see progress and access the information relevant to them."],
  ["Internal operations system", "Replace a collection of sheets and hand-offs with one role-aware working system."],
] as const;

const faqs = [
  ["Do you customize existing Melorite products?", "Yes. A custom solution can extend a Melorite product when its core workflow is already the right starting point."],
  ["Can you build a separate application?", "Yes. When an extension would create the wrong experience, we can plan a complete application around the requirement."],
  ["Can it connect with our current tools?", "We review the available interfaces, data and operational need before confirming any integration in scope."],
  ["How is the scope decided?", "Discovery turns the current workflow, users, decisions and required outcomes into a clear proposed scope before building begins."],
  ["Will our team receive support after launch?", "Support and the approach to ongoing improvements are agreed as part of the project plan."],
] as const;

function CustomSolutionCanvas() {
  const nodes = [
    [UsersRound, "CRM", "Customers"], [GitBranch, "Workflow", "Approvals"], [BarChart3, "Dashboard", "Reports"],
    [Plug, "Integration", "Connected"], [LockKeyhole, "Access", "Role based"], [Blocks, "Portal", "Partners"],
  ] as const;
  return <div aria-label="Sample Melorite custom workflow interface" className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white/60 p-3 shadow-[0_45px_100px_-50px_rgba(17,23,53,.45)] backdrop-blur sm:p-5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(95,99,242,.12),transparent_45%)]" />
    <div className="relative rounded-[13px] border border-[#111735]/8 bg-white p-3 sm:p-5">
      <div className="flex items-center gap-2 border-b border-[#111735]/10 pb-4"><i className="size-2 rounded-full bg-[#5f63f2]" /><p className="text-[11px] font-semibold">Northstar Operations · Sample workspace</p><span className="ml-auto rounded-full bg-[#e9f6f3] px-2 py-1 text-[9px] font-semibold text-[#236c4d]">Workflow live</span></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[.75fr_1.5fr_.75fr]">
        <div className="space-y-3">{nodes.slice(0, 2).map(([Icon, title, sub]) => <div key={title} className="rounded-lg border border-[#d9dcf0] bg-white p-3"><Icon className="size-4 text-[#5f63f2]" /><p className="mt-4 text-[11px] font-semibold">{title}</p><p className="mt-1 text-[9px] text-[#626783]">{sub}</p></div>)}</div>
        <div className="rounded-lg border border-[#c8c9ef] bg-white p-4"><p className="eyebrow-pill">Approval flow</p><div className="mt-5 space-y-3">{["Request received", "Manager review", "Finance approval", "Customer update"].map((step, i) => <div key={step} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-[#eeeffe] text-[9px] font-semibold text-[#4b4fe0]">{i + 1}</span><span className="h-px flex-1 bg-[#d9dcf0]" /><p className="w-24 text-[10px] font-semibold">{step}</p>{i < 3 ? <Check className="size-3 text-[#2f8d66]" /> : <span className="size-2 rounded-full bg-[#bd8525]" />}</div>)}</div></div>
        <div className="space-y-3">{nodes.slice(2, 4).map(([Icon, title, sub]) => <div key={title} className="rounded-lg border border-[#d9dcf0] bg-white p-3"><Icon className="size-4 text-[#5f63f2]" /><p className="mt-4 text-[11px] font-semibold">{title}</p><p className="mt-1 text-[9px] text-[#626783]">{sub}</p></div>)}</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">{nodes.slice(4).map(([Icon, title, sub]) => <div key={title} className="flex items-center gap-3 rounded-lg border border-[#d9dcf0] bg-white p-3"><Icon className="size-4 text-[#5f63f2]" /><div><p className="text-[10px] font-semibold">{title}</p><p className="text-[9px] text-[#626783]">{sub}</p></div></div>)}</div>
    </div>
  </div>;
}

export default function CustomSolutionsPage() {
  return (
    <PageTransition>
      <InnerHero label="Custom solutions" title="Software built around exactly how you work." body="Extend a Melorite product or build a focused application around your process, users and decisions, with a clear scope before development begins." primary={{ label: "Discuss your project", href: site.demoHref }} secondary={{ label: "See how it works", href: "#how-it-works" }} mesh="calling"><div className="mx-auto max-w-[900px]"><CustomSolutionCanvas /></div></InnerHero>
      <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,120px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">When it makes sense</p><h2 className="h-section mt-5 max-w-[14ch]">When the workflow matters more than the template.</h2></Reveal><div className="mt-12 grid card-grid md:grid-cols-2">{customCases.map(([title, body], i) => <Reveal key={title} delay={(i % 2) * .05} className="min-h-52 card p-7"><h3 className="text-[24px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-4 max-w-[42ch] text-[15.5px] leading-[1.55] text-[#111735]/55">{body}</p></Reveal>)}</div></div></section>
      <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><p className="eyebrow-pill">What we build</p><h2 className="h-section mt-5">What we can build for you</h2></Reveal>
          <div className="mt-10"><CellGrid items={customBuilds} /></div>
          <Reveal id="how-it-works" className="mt-16 scroll-mt-28"><p className="eyebrow-pill">How it works</p><h2 className="h-section mt-5">From first conversation to launch.</h2></Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {customSteps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <li className="card h-full p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#7a7eff] to-[#4b4fe0] text-[14px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(95,99,242,.9)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.03em]">{t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-[#111735]/58">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
            <section data-nav="light" className="panel-mesh py-[clamp(56px,6.5vw,96px)] text-[#111735]"><div className="rail-inner grid gap-5 lg:grid-cols-3"><Reveal delay={0.0} className="card p-7"><span className="icon-chip">{createElement(Plug, { className: "size-5" })}</span><p className="mono-label mt-7 text-[#4b4fe0]">Integrations</p><h3 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-.03em]">Connect the tools that matter.</h3><p className="mt-3 text-[15px] leading-[1.55] text-[#111735]/60">Where supported, we can connect Melorite with the systems your business already depends on.</p></Reveal><Reveal delay={0.06} className="card p-7"><span className="icon-chip">{createElement(LayoutDashboard, { className: "size-5" })}</span><p className="mono-label mt-7 text-[#4b4fe0]">Portals</p><h3 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-.03em]">Give each audience a clear view.</h3><p className="mt-3 text-[15px] leading-[1.55] text-[#111735]/60">Create focused customer, partner or team portals with the right information and actions.</p></Reveal><Reveal delay={0.12} className="card p-7"><span className="icon-chip">{createElement(AppWindow, { className: "size-5" })}</span><p className="mono-label mt-7 text-[#4b4fe0]">Complete software</p><h3 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-.03em]">Build a separate application.</h3><p className="mt-3 text-[15px] leading-[1.55] text-[#111735]/60">When extending a product is not the right answer, we can plan and build a separate application around the requirement.</p></Reveal></div></section>
      <GoodFor>Businesses with a process of their own, teams that have outgrown spreadsheets, and anyone who needs Melorite to do a little more.</GoodFor>
      <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="eyebrow-pill">Example use cases</p><h2 className="h-section mt-5 max-w-[14ch]">Specific software for specific work.</h2></Reveal><div className="mt-12 grid card-grid md:grid-cols-2">{useCases.map(([title, body], i) => <Reveal key={title} delay={(i % 2) * .05} className="min-h-52 card p-7"><p className="eyebrow-pill">Sample use case</p><h3 className="mt-7 text-[24px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-4 max-w-[44ch] text-[15.5px] leading-[1.55] text-[#111735]/55">{body}</p></Reveal>)}</div></div></section>
      <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,116px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1100px]"><Reveal><p className="eyebrow-pill">FAQ</p><h2 className="h-section mt-5">Questions before discovery.</h2></Reveal><div className="mt-10 border-t border-[#111735]/12">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-[#111735]/12"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[19px] font-semibold"><span>{question}</span><span className="text-[#5f63f2] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-[68ch] pb-7 text-[16px] leading-[1.6] text-[#111735]/58">{answer}</p></details>)}</div></div></section>
      <FinalCTA title="Discuss your project." text="Share what’s slowing you down. We’ll help identify whether a product extension or a complete custom application is the better fit." />
    </PageTransition>
  );
}
