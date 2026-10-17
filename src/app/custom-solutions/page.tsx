import { CapabilityRail } from "@/components/site/CapabilityRail";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { AppWindow, LayoutDashboard, Plug, Plus } from "lucide-react";
import { customBuilds, customSteps } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { InnerHero } from "@/components/site/InnerHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GoodFor } from "@/components/site/Cells";
import { FolderCollections } from "@/components/site/FolderCollections";
import Timeline from "@/components/ui/timeline";
import { WorkflowGraph } from "@/components/site/WorkflowGraph";

export const metadata: Metadata = pageMetadata("/custom-solutions", "Custom Business Software Development", "Extend a Melorite product or plan a custom business application, workflow, portal or report around your team’s process. Discuss your requirements.");

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

const capabilities = [
  { Icon: Plug, label: "Integrations", title: "Connect the tools that matter.", body: "Where supported, we can connect Melorite with the systems your business already depends on.", dark: true },
  { Icon: LayoutDashboard, label: "Portals", title: "Give each audience a clear view.", body: "Create focused customer, partner or team portals with the right information and actions." },
  { Icon: AppWindow, label: "Complete software", title: "Build a separate application.", body: "When extending a product is not the right answer, we can plan and build an application around the requirement." },
] as const;

export default function CustomSolutionsPage() {
  return (
    <PageTransition><Breadcrumbs items={[{ name: "Custom Solutions" }]} />
      <InnerHero label="Custom Business Software Development" title="Software built around exactly how you work." body="Extend a Melorite product or build a focused application around your process, users and decisions, with a clear scope before development begins." primary={{ label: "Discuss your project", href: "/contact?enquiry=custom&product=custom-solution" }} secondary={{ label: "See how it works", href: "#how-it-works" }} mesh="calling"><div className="mx-auto max-w-[1080px]"><WorkflowGraph /></div></InnerHero>

      <section data-nav="light" className="py-[clamp(72px,9vw,120px)] text-[#111735]">
        <div className="rail-inner mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal><p className="eyebrow-pill">When it makes sense</p><h2 className="h-section mt-5 max-w-[14ch]">When the workflow matters more than the template.</h2></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {customCases.map(([title, body], i) => (
              <Reveal key={title} delay={i * .05} className="glass glass-sheen glass-lift flex min-h-[220px] flex-col rounded-[16px] p-6">
                <span className="grid size-10 place-items-center rounded-full bg-[#5f63f2]/12 text-[13px] font-bold text-[#4b4fe0]">0{i + 1}</span>
                <h3 className="mt-auto pt-8 text-[20px] font-semibold tracking-[-.03em]">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-[#111735]/58">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><p className="eyebrow-pill">What we build</p><h2 className="h-section mt-5">What we can build for you</h2></Reveal>
          <FolderCollections
            className="mt-10"
            collections={[0, 2, 4].map((start, i) => ({
              label: ["Product extensions", "Connected operations", "Purpose-built software"][i],
              meta: "2 capabilities",
              art: (["aurora", "verdant", "dusk"] as const)[i],
              files: customBuilds.slice(start, start + 2).map((name) => ({ name, meta: "Discuss this capability", href: "/contact" })),
            }))}
          />
        </div>
      </section>

      <div id="how-it-works" className="scroll-mt-16">
        <Timeline
          eyebrow="How it works"
          title="From first conversation to launch."
          periodLabel="Discovery to ongoing support"
          items={customSteps.map(([title, body], i) => ({ id: `custom-step-${i + 1}`, label: `Stage ${String(i + 1).padStart(2, "0")}`, title, content: body }))}
        />
      </div>

      <section data-nav="light" className="panel-mesh py-[clamp(56px,6.5vw,96px)] text-[#111735]">
        <div className="rail-inner grid gap-5 lg:grid-cols-3">
          {capabilities.map(({ Icon, label, title, body, ...rest }, i) => {
            const dark = "dark" in rest;
            return (
              <Reveal key={label} delay={i * .06} className={`${dark ? "glass-dark" : "glass"} glass-sheen flex min-h-[340px] flex-col rounded-[16px] p-7 sm:p-8`}>
                <span className={`grid size-12 place-items-center rounded-2xl ${dark ? "bg-white/10 text-[#a5a8ff]" : "icon-chip !size-12"}`}><Icon className="size-5" strokeWidth={1.8} /></span>
                <div className="mt-auto pt-10"><p className={`mono-label ${dark ? "text-white/45" : "text-[#4b4fe0]"}`}>{label}</p><h3 className="mt-3 max-w-[14ch] text-[28px] font-semibold leading-[1.05] tracking-[-.04em]">{title}</h3><p className={`mt-4 text-[15.5px] leading-[1.6] ${dark ? "text-white/60" : "text-[#111735]/60"}`}>{body}</p></div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <GoodFor>Businesses with a process of their own, teams that have outgrown spreadsheets, and anyone who needs Melorite to do a little more.</GoodFor>

      <section data-nav="light" className="py-[clamp(72px,9vw,116px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[1400px]">
          <Reveal><p className="eyebrow-pill">Example use cases</p><h2 className="h-section mt-5 max-w-[14ch]">Specific software for specific work.</h2></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {useCases.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * .05} className="glass glass-sheen glass-lift flex min-h-[230px] flex-col rounded-[16px] p-7">
                <p className="mono-label text-[#4b4fe0]">Sample 0{i + 1}</p>
                <h3 className="mt-auto pt-8 text-[24px] font-semibold tracking-[-.035em]">{title}</h3>
                <p className="mt-3 max-w-[48ch] text-[15.5px] leading-[1.55] text-[#111735]/58">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav="light" className="py-[clamp(72px,9vw,116px)] text-[#111735]">
        <div className="rail-inner mx-auto max-w-[920px]">
          <Reveal className="text-center"><p className="eyebrow-pill">FAQ</p><h2 className="h-section mx-auto mt-5">Questions before discovery.</h2></Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="glass group rounded-[16px] px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold tracking-[-.02em]"><span>{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#5f63f2]/12 text-[#4b4fe0] transition-transform group-open:rotate-45"><Plus className="size-4" /></span></summary>
                <p className="max-w-[68ch] pb-6 text-[15.5px] leading-[1.6] text-[#111735]/60">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CapabilityRail />
      <FinalCTA href="/contact?enquiry=custom&product=custom-solution" label="Discuss your project" title="Discuss your project." text="Share what’s slowing you down. We’ll help identify whether a product extension or a complete custom application is the better fit." />
    </PageTransition>
  );
}
