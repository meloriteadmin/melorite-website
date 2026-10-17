import { CapabilityRail } from "@/components/site/CapabilityRail";
import { WorkflowShowcase } from "@/components/site/WorkflowShowcase";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { BarChart3, Bot, Database, KeyRound, LockKeyhole, Plug, UsersRound, Workflow } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { PageTransition } from "@/components/animation/PageTransition";
import { ProductCards } from "@/components/home/ProductCards";
import { PlatformStack } from "@/components/site/PlatformStack";
import { InnerHero } from "@/components/site/InnerHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import Timeline from "@/components/ui/timeline";

export const metadata: Metadata = pageMetadata("/platform", "Connected Business Management Platform", "See how Melorite products share business records, workflows, permissions, automation, AI and reporting to keep everyday operations connected.");

const capabilities = [
  { icon: Database, title: "Connected business data", body: "Keep customers, conversations, work and outcomes connected, so context does not disappear between tools." },
  { icon: UsersRound, title: "Users and access", body: "Give each person the workspace and information they need while keeping responsibilities clear." },
  { icon: Workflow, title: "Practical automation", body: "Use reminders, triggers and repeatable workflows to reduce manual follow-up and routine admin." },
  { icon: Bot, title: "Useful AI", body: "Bring AI into real business moments—from phone conversations to summaries and next actions." },
  { icon: BarChart3, title: "Dashboards and reporting", body: "Turn day-to-day activity into clear views of work, progress and performance." },
  { icon: Plug, title: "Connections where needed", body: "Connect Melorite with other business tools when a supported integration is part of your setup." },
] as const;

export default function PlatformPage() {
  return <PageTransition><Breadcrumbs items={[{ name: "Platform" }]} />
    <InnerHero label="Business Management Software Platform" title="The platform behind every Melorite product." body="A common foundation for your people, business records, workflows, automation, AI and reporting." primary={{ label: "Explore the platform", href: "#capabilities" }} secondary={{ label: "Book a demo", href: "/book-demo" }} mesh="estate"><PlatformStack /></InnerHero>
    <section id="capabilities" data-nav="light" className="rails rails-light scroll-mt-16 bg-[#ffffff] py-[clamp(80px,10vw,144px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1400px]"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow-pill">One workspace</p><h2 className="h-section mt-5 max-w-[13ch]">A consistent way to run the work.</h2></div><p className="max-w-[44ch] text-[18px] leading-[1.55] text-[#111735]/58 lg:justify-self-end">Each Melorite product understands a different business. Underneath, they share the same calm approach to records, ownership, activity and decisions.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={(i % 3) * .04} className="glass glass-sheen glass-lift flex min-h-[260px] flex-col rounded-[16px] p-7"><span className="icon-chip"><Icon className="size-5" strokeWidth={1.8} /></span><h3 className="mt-auto pt-10 text-[23px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-3 text-[15px] leading-[1.55] text-[#111735]/58">{body}</p></Reveal>)}</div></div></section>
    <section data-nav="light" className="bg-[#f4f5ff] py-[clamp(56px,6.5vw,96px)] text-[#111735]"><div className="rail-inner grid gap-5 lg:grid-cols-2">{[[LockKeyhole, "Protected by design.", "Melorite keeps organizations separate and uses controlled access so people see the information appropriate to their work. Specific hosting, backup and security requirements can be discussed during setup."], [KeyRound, "Built to grow with you.", "Add users, teams, locations and workflow depth as the business changes, without losing the simple experience that helped people start."]].map(([Icon, title, body], i) => { const I = Icon as typeof LockKeyhole; return <Reveal key={title as string} delay={i * .07} className="card p-8 sm:p-10"><span className="icon-chip"><I className="size-5" /></span><h2 className="h-card mt-8">{title as string}</h2><p className="mt-4 max-w-[48ch] text-[16.5px] leading-[1.6] text-[#111735]/60">{body as string}</p></Reveal>; })}</div></section>
    <Timeline eyebrow="How the platform works" title="Shared context turns activity into action." periodLabel="Record to insight" items={[["Record", "A customer, buyer, patient, order or project keeps the working context."], ["Workflow", "Clear stages, owners and access show how the work should move."], ["Automation", "Useful triggers handle reminders, updates and repeatable next steps."], ["Insight", "Dashboards show progress, exceptions and the work needing attention."]].map(([title, content], i) => ({ id: `platform-${i + 1}`, label: `Layer ${String(i + 1).padStart(2, "0")}`, title, content }))} />
    <WorkflowShowcase />
    <CapabilityRail />
    <ProductCards />
    <FinalCTA title="Find the right starting point." text="Tell us how your business works. We’ll show you the Melorite product and platform capabilities that fit." />
  </PageTransition>;
}
