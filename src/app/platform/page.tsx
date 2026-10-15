import type { Metadata } from "next";
import { ArrowRight, BarChart3, Bot, Database, KeyRound, LockKeyhole, Plug, UsersRound, Workflow } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { PageTransition } from "@/components/animation/PageTransition";
import { ProductCards } from "@/components/home/ProductCards";
import { PlatformStack } from "@/components/site/PlatformStack";
import { InnerHero } from "@/components/site/InnerHero";
import { FinalCTA } from "@/components/site/FinalCTA";

const description = "The shared foundation behind Melorite products: connected business records, users, workflows, automation, AI, reporting and controlled access.";
export const metadata: Metadata = { title: "Business Software Platform", description, alternates: { canonical: "/platform" }, openGraph: { title: "The Platform Behind Every Melorite Product", description, url: "/platform" } };

const capabilities = [
  { icon: Database, title: "Connected business data", body: "Keep customers, conversations, work and outcomes connected, so context does not disappear between tools." },
  { icon: UsersRound, title: "Users and access", body: "Give each person the workspace and information they need while keeping responsibilities clear." },
  { icon: Workflow, title: "Practical automation", body: "Use reminders, triggers and repeatable workflows to reduce manual follow-up and routine admin." },
  { icon: Bot, title: "Useful AI", body: "Bring AI into real business moments—from phone conversations to summaries and next actions." },
  { icon: BarChart3, title: "Dashboards and reporting", body: "Turn day-to-day activity into clear views of work, progress and performance." },
  { icon: Plug, title: "Connections where needed", body: "Connect Melorite with other business tools when a supported integration is part of your setup." },
] as const;

export default function PlatformPage() {
  return <PageTransition>
    <InnerHero label="Melorite Platform" title="The platform behind every Melorite product." body="A common foundation for your people, business records, workflows, automation, AI and reporting." primary={{ label: "Explore the platform", href: "#capabilities" }} secondary={{ label: "Book a demo", href: "/book-demo" }} mesh="estate"><PlatformStack /></InnerHero>
    <section id="capabilities" data-nav="light" className="rails rails-light scroll-mt-16 bg-[#ffffff] py-[clamp(80px,10vw,144px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow-pill">One workspace</p><h2 className="h-section mt-5 max-w-[13ch]">A consistent way to run the work.</h2></div><p className="max-w-[44ch] text-[18px] leading-[1.55] text-[#111735]/58 lg:justify-self-end">Each Melorite product understands a different business. Underneath, they share the same calm approach to records, ownership, activity and decisions.</p></Reveal><div className="mt-14 grid card-grid md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={(i % 3) * .04} className="min-h-60 card p-7"><Icon className="size-5 text-[#5f63f2]" /><h3 className="mt-10 text-[23px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-4 text-[15px] leading-[1.55] text-[#111735]/55">{body}</p></Reveal>)}</div></div></section>
    <section data-nav="light" className="bg-[#f4f5ff] py-[clamp(56px,6.5vw,96px)] text-[#111735]"><div className="rail-inner grid gap-5 lg:grid-cols-2">{[[LockKeyhole, "Protected by design.", "Melorite keeps organizations separate and uses controlled access so people see the information appropriate to their work. Specific hosting, backup and security requirements can be discussed during setup."], [KeyRound, "Built to grow with you.", "Add users, teams, locations and workflow depth as the business changes, without losing the simple experience that helped people start."]].map(([Icon, title, body], i) => { const I = Icon as typeof LockKeyhole; return <Reveal key={title as string} delay={i * .07} className="card p-8 sm:p-10"><span className="icon-chip"><I className="size-5" /></span><h2 className="h-card mt-8">{title as string}</h2><p className="mt-4 max-w-[48ch] text-[16.5px] leading-[1.6] text-[#111735]/60">{body as string}</p></Reveal>; })}</div></section>
    <section data-nav="light" className="panel-mesh py-[clamp(76px,9vw,124px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1440px]"><Reveal><p className="mono-label text-[#111735]/55">How the platform works</p><h2 className="h-section mt-5 max-w-[14ch]">Shared context turns activity into action.</h2></Reveal><ol className="mt-12 grid card-grid  sm:grid-cols-2 lg:grid-cols-4">{[["Record", "A customer, buyer, patient, order or project keeps the working context."], ["Workflow", "Clear stages, owners and access show how the work should move."], ["Automation", "Useful triggers handle reminders, updates and repeatable next steps."], ["Insight", "Dashboards show progress, exceptions and the work needing attention."]].map(([title, body], i) => <Reveal key={title} delay={i * .05} className="min-h-60 card  p-7"><p className="mono-label text-[#4b4fe0]">0{i + 1}</p><h3 className="mt-9 text-[25px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-4 text-[15px] leading-[1.55] text-[#111735]/58">{body}</p></Reveal>)}</ol></div></section>
    <ProductCards />
    <FinalCTA title="Find the right starting point." text="Tell us how your business works. We’ll show you the Melorite product and platform capabilities that fit." />
  </PageTransition>;
}
