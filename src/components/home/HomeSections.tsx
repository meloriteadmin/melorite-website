import Link from "next/link";
import { AppWindow, ArrowRight, BarChart3, Bot, GitBranch, LayoutDashboard, Plug, Puzzle, Check, Users, Database, Workflow, Zap } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { FoundationVisual, ProblemBoard, SoftSphere } from "./HomeVisuals";
import { startSteps } from "@/data/products";
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
    <section data-nav="light" className="py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal><p className="eyebrow-pill">The everyday problem</p><h2 className="h-section mt-5 max-w-[13ch]">Running a business shouldn’t feel this hard.</h2><p className="mt-6 max-w-[38ch] text-[17px] leading-[1.6] text-[#111735]/55">The warning signs are usually small. Together, they make the day slower and the customer experience less reliable.</p></Reveal>
        <ProblemBoard />
      </div>
    </section>
  );
}

export function PlatformIntro() {
  return (
    <section data-nav="light" className="py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1400px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-8"><div><p className="eyebrow-pill">The Melorite platform</p><h2 className="h-section mt-5 max-w-[16ch]">One platform behind every product.</h2></div><div><p className="max-w-[45ch] text-[18px] leading-[1.55] text-[#111735]/58">A consistent foundation for your people, records, workflows, automation, AI and reporting.</p><Link href="/platform" className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#4b4fe0]">Explore the Platform<ArrowRight className="size-4" /></Link></div></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal><FoundationVisual /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformItems.map(([title, body], i) => { const I = platformIcons[i]; return <Reveal key={title} delay={(i % 2) * .05} className="platform-capability-note flex flex-col rounded-[16px] p-6"><span className="icon-chip"><I className="size-5" strokeWidth={1.8} /></span><h3 className="mt-5 text-[19px] font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 text-[15px] leading-[1.5] text-[#111735]/58">{body}</p></Reveal>; })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CallingFeature() {
  const actions = ["Inbound and outbound calls", "Appointments and site visits", "Lead qualification and follow-ups", "Order confirmations", "Human transfer", "Call history and outcomes"];
  return (
    <section id="home-ai-calling" data-nav="light" className="panel-mesh py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal><p className="eyebrow-pill">Melorite AI Calling</p><h2 className="h-section mt-5 max-w-[12ch]">An extra team member on the phone, all day.</h2><p className="mt-6 max-w-[44ch] text-[18px] leading-[1.55] text-[#111735]/62">Answer enquiries, follow up with customers, book appointments and keep your team informed—even when everyone is busy.</p><ul className="mt-8 grid gap-2.5 sm:grid-cols-2">{actions.map((action) => <li key={action} className="glass-soft flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-[14px] font-medium text-[#111735]/80"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#5f63f2]/14 text-[#4b4fe0]"><Check className="size-3.5" strokeWidth={3} /></span>{action}</li>)}</ul><Link href="/products/ai-calling" className="pill pill-dark mt-9 h-12 px-7">Explore AI Calling<ArrowRight className="size-4" /></Link></Reveal>
        <Reveal delay={.08}><div className="glass glass-sheen rounded-[24px] p-3 sm:p-4"><div className="overflow-hidden rounded-[16px] border border-white/60 bg-white/30"><SoftSphere /></div></div></Reveal>
      </div>
    </section>
  );
}

export function CustomSolutionsIntro() {
  const items: [string, typeof Puzzle, string][] = [["Custom features", Puzzle, "Extend a product with what you need"], ["Workflows and approvals", GitBranch, "Route work to the right people"], ["Portals and dashboards", LayoutDashboard, "Give clients and teams a clear view"], ["Integrations", Plug, "Connect the tools you already use"], ["Reports", BarChart3, "Numbers shaped for your decisions"], ["Complete applications", AppWindow, "Whole systems, built around you"]];
  return (
    <section data-nav="light" className="py-[clamp(80px,10vw,140px)] text-[#111735]">
      <div className="rail-inner mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal><p className="eyebrow-pill">Custom solutions</p><h2 className="h-section mt-5 max-w-[12ch]">Built around your business.</h2><p className="mt-6 max-w-[40ch] text-[17px] leading-[1.55] text-[#111735]/58">When ready-made software is not enough, we can extend a Melorite product or build software around your workflow.</p><Link href="/custom-solutions" className="pill pill-dark mt-8 h-12 px-7">Explore Custom Solutions<ArrowRight className="size-4" /></Link></Reveal>
        <div className="glass-dark glass-sheen rounded-[24px] p-3 sm:p-4"><div className="grid gap-3 sm:grid-cols-2">{items.map(([item, Icon, note], i) => <Reveal key={item} delay={(i % 2) * .04} className="group flex min-h-[132px] flex-col rounded-[16px] border border-white/10 bg-white/[.06] p-5 transition-colors duration-300 hover:bg-white/[.12]"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#a5a8ff] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon className="size-5" strokeWidth={1.8} /></span><span className="mt-auto pt-5 text-[18px] font-semibold tracking-[-.025em]">{item}</span><span className="mt-1 text-[13.5px] text-white/52">{note}</span></Reveal>)}</div></div>
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
