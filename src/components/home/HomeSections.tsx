import Link from "next/link";
import { AppWindow, ArrowRight, BarChart3, Bot, GitBranch, LayoutDashboard, MessageCircleQuestion, PackageX, PhoneMissed, Plug, Puzzle, FileSpreadsheet, Check, Clock3, Users, Database, Workflow, Zap } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { VoiceOrb } from "@/components/site/VoiceOrb";
import { painPoints, startSteps } from "@/data/products";
import Timeline from "@/components/ui/timeline";

const platformItems = [
  ["People", "Keep users, teams and responsibilities clear."],
  ["Business records", "Keep the right history around every customer, project or patient."],
  ["Workflows", "Move work forward with clear stages, owners and next actions."],
  ["Automation", "Reduce repetitive work with reminders and practical triggers."],
  ["AI", "Use AI where it helps people respond, understand and act faster."],
  ["Reporting", "See the information your team needs to make better decisions."],
] as const;

const platformIcons = [Users, Database, Workflow, Zap, Bot, BarChart3];

export function BusinessProblem() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <Reveal><p className="eyebrow-pill">The everyday problem</p><h2 className="h-section mt-5 max-w-[13ch]">Running a business shouldn’t feel this hard.</h2></Reveal>
        <div className="mt-12 grid card-grid md:grid-cols-2 lg:grid-cols-5">
          {painPoints.map((point, i) => { const Icon = [PhoneMissed, Clock3, MessageCircleQuestion, PackageX, FileSpreadsheet][i % 5]; return <Reveal key={point} delay={i * .04} className="min-h-48 card p-6"><span className="icon-chip"><Icon className="size-5" /></span><p className="mt-8 text-[16.5px] leading-[1.45] text-[#111735]/70">{point}</p></Reveal>; })}
        </div>
      </div>
    </section>
  );
}

export function PlatformIntro() {
  const layers = ["People", "Business records", "Workflows", "Automation", "AI", "Reporting"];
  return (
    <section data-nav="light" className="rails rails-light bg-[#ffffff] py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-8"><div><p className="eyebrow-pill">The Melorite platform</p><h2 className="h-section mt-5 max-w-[16ch]">One platform behind every product.</h2></div><div><p className="max-w-[45ch] text-[18px] leading-[1.55] text-[#111735]/58">A consistent foundation for your people, records, workflows, automation, AI and reporting.</p><Link href="/platform" className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#4b4fe0]">Explore the Platform<ArrowRight className="size-4" /></Link></div></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="mesh-crm grain relative overflow-hidden rounded-[28px] p-6 sm:p-9">
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div><p className="mono-label text-[#4b4fe0]">Shared foundation</p><h3 className="mt-3 max-w-[16ch] text-[28px] font-semibold leading-[1.05] tracking-[-0.04em]">Build once. Every product benefits.</h3></div>
              <ol className="space-y-2.5">
                {layers.map((l, i) => <li key={l} className="flex items-center gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-[0_10px_30px_-18px_rgba(17,23,53,.5)] backdrop-blur" style={{ marginLeft: `${(layers.length - 1 - i) * 10}px` }}><span className="grid size-7 place-items-center rounded-lg bg-[#eeeffe] text-[12px] font-semibold text-[#4b4fe0]">{i + 1}</span><span className="text-[15px] font-semibold">{l}</span><Check className="ml-auto size-4 text-emerald-500" /></li>)}
              </ol>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {platformItems.map(([title, body], i) => { const I = platformIcons[i]; return <Reveal key={title} delay={(i % 2) * .05} className="card p-6"><span className="icon-chip"><I className="size-5" /></span><h3 className="mt-6 text-[20px] font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/55">{body}</p></Reveal>; })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CallingFeature() {
  const actions = ["Inbound and outbound calls", "Appointments and site visits", "Lead qualification and follow-ups", "Order confirmations", "Human transfer", "Call history and outcomes"];
  return (
    <section data-nav="light" className="panel-mesh py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal><p className="mono-label text-[#111735]/55">Melorite AI Calling</p><h2 className="h-section mt-5 max-w-[12ch]">An extra team member on the phone, all day.</h2><p className="mt-6 max-w-[44ch] text-[18px] leading-[1.55] text-[#111735]/62">Answer enquiries, follow up with customers, book appointments and keep your team informed—even when everyone is busy.</p><ul className="mt-8 grid gap-3 sm:grid-cols-2">{actions.map((action) => <li key={action} className="flex items-center gap-3 text-[14.5px] text-[#111735]/78"><Check className="size-4 text-[#4b4fe0]" />{action}</li>)}</ul><Link href="/products/ai-calling" className="pill pill-dark mt-9 h-12 px-7">Explore AI Calling<ArrowRight className="size-4" /></Link></Reveal>
        <Reveal delay={.08}><div className="rounded-[28px] bg-white/80 p-2 shadow-[0_30px_70px_-40px_rgba(17,23,53,.45)] backdrop-blur"><VoiceOrb transparent /></div></Reveal>
      </div>
    </section>
  );
}

export function CustomSolutionsIntro() {
  const items: [string, typeof Puzzle][] = [["Custom features", Puzzle], ["Workflows and approvals", GitBranch], ["Portals and dashboards", LayoutDashboard], ["Integrations", Plug], ["Reports", BarChart3], ["Complete applications", AppWindow]];
  return (
    <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal><p className="eyebrow-pill">Custom solutions</p><h2 className="h-section mt-5 max-w-[12ch]">Built around your business.</h2><p className="mt-6 max-w-[40ch] text-[17px] leading-[1.55] text-[#111735]/58">When ready-made software is not enough, we can extend a Melorite product or build software around your workflow.</p><Link href="/custom-solutions" className="pill pill-dark mt-8 h-12 px-7">Explore Custom Solutions<ArrowRight className="size-4" /></Link></Reveal>
        <div className="grid card-grid sm:grid-cols-2">{items.map(([item, Icon], i) => <Reveal key={item} delay={(i % 2) * .05} className="flex min-h-40 flex-col justify-between gap-8 card p-6"><span className="icon-chip"><Icon className="size-5" /></span><span className="text-[20px] font-semibold tracking-[-.03em]">{item}</span></Reveal>)}</div>
      </div>
    </section>
  );
}

export function GettingStarted() {
  return (
    <Timeline
      eyebrow="Getting started"
      title="Three clear steps to go live."
      periodLabel="Demo to day one"
      items={startSteps.map(([title, body], i) => ({
        id: `getting-started-${i + 1}`,
        label: `Step ${String(i + 1).padStart(2, "0")}`,
        title,
        content: body,
      }))}
    />
  );
}
