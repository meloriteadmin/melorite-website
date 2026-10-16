import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { WhyCards } from "@/components/site/WhyCards";
import { InnerHero } from "@/components/site/InnerHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FolderCollections } from "@/components/site/FolderCollections";
import Timeline from "@/components/ui/timeline";

const description = "About Melorite: why we build practical software around the way real estate teams, clinics, agencies, sellers and sales teams work.";
export const metadata: Metadata = { title: "About Melorite", description, alternates: { canonical: "/company" }, openGraph: { title: "About Melorite", description, url: "/company" } };

const principles = [
  ["Simple", "Clear language, calm screens and workflows people can understand quickly."],
  ["Practical", "Features shaped around real work, not complexity for its own sake."],
  ["Business-focused", "We start with the customer, task and outcome that matter."],
  ["Supported", "We help teams set up, go live and keep improving their workspace."],
] as const;

export default function CompanyPage() {
  return <PageTransition>
    <InnerHero label="About Melorite" title="Software that fits. People who stay." body="Ready-to-use products, thoughtful setup and a team that stays after you go live." primary={{ label: "Book a demo", href: "/book-demo" }} secondary={{ label: "Explore products", href: "/products" }} mesh="crm">
      <div className="grid gap-4 md:grid-cols-3">{[["01", "Understand", "The records, decisions and hand-offs behind the work."], ["02", "Shape", "A focused workspace around the agreed process."], ["03", "Support", "Help through launch and the changes that follow."]].map(([n, t, b]) => <div key={t} className="rounded-[22px] bg-white/85 p-6 text-left shadow-[0_20px_50px_-30px_rgba(17,23,53,.45)] backdrop-blur"><p className="mono-label text-[#4b4fe0]">{n}</p><h3 className="mt-8 text-[24px] font-semibold tracking-[-.03em]">{t}</h3><p className="mt-3 text-[15px] leading-[1.5] text-[#111735]/58">{b}</p></div>)}</div>
    </InnerHero>
    <section data-nav="light" className="bg-white py-[clamp(56px,6.5vw,96px)] text-[#14172f]"><div className="rail-inner grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14"><Reveal><p className="eyebrow-pill">What we build</p><h2 className="h-section mt-5">Software designed around specific businesses.</h2></Reveal><Reveal delay={.08} className="card space-y-4 p-7 text-[17px] leading-[1.65] text-[#4a4e6d] sm:p-9"><p>Melorite builds ready-to-use products for sales teams, real estate businesses, clinics, agencies and online sellers. Each product starts with the records, decisions and workflows that business already understands.</p><p>AI Calling and custom solutions extend that foundation when the work needs a capable voice on the phone or software built around a more specific process.</p></Reveal></div></section>
    <section data-nav="light" className="bg-[#f4f5ff] py-[clamp(56px,6.5vw,96px)] text-[#14172f]"><div className="rail-inner"><Reveal className="mx-auto max-w-[760px] text-center"><p className="eyebrow-pill">Why Melorite exists</p><h2 className="h-section mx-auto mt-5">Software should fit the business, not force a new process.</h2><p className="mt-5 text-[17px] leading-[1.65] text-[#4a4e6d]">Too many teams run the day through memory, messages and spreadsheets because generic software adds more work than it removes.</p></Reveal><WhyCards /></div></section>
    <section data-nav="light" className="bg-white py-[clamp(56px,6.5vw,96px)] text-[#14172f]"><div className="rail-inner"><Reveal><p className="eyebrow-pill">Who we build for</p><h2 className="h-section mt-5">Different work. One clear standard.</h2><p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-[#4a4e6d]">Open a folder to explore the focused products behind each kind of work.</p></Reveal><FolderCollections className="mt-10" collections={[
      { label: "Revenue teams", meta: "2 products", art: "aurora", files: [{ name: "Sales teams", meta: "Melorite CRM", href: "/products/crm" }, { name: "Real estate", meta: "Buyer operations", href: "/products/real-estate" }] },
      { label: "Service teams", meta: "2 products", art: "glacier", files: [{ name: "Clinics", meta: "Patient operations", href: "/products/clinic" }, { name: "Agencies", meta: "Client operations", href: "/products/agency" }] },
      { label: "Growing businesses", meta: "2 products", art: "dusk", files: [{ name: "Commerce", meta: "Orders and inventory", href: "/products/commerce" }, { name: "AI Calling", meta: "Phone workflows", href: "/products/ai-calling" }] },
    ]} /></div></section>
    <section data-nav="light" className="panel-mesh py-[clamp(56px,6.5vw,96px)] text-[#14172f]"><div className="rail-inner"><Reveal><p className="eyebrow-pill">How we work</p><h2 className="h-section mt-5">Careful where it matters. Simple where it should be.</h2></Reveal><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{principles.map(([title, body], i) => <Reveal key={title} delay={i * .05} className="card p-7"><p className="text-[44px] font-semibold leading-none tracking-[-.05em] text-[#4b4fe0]/25">0{i + 1}</p><h3 className="mt-8 text-[22px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-3 text-[15px] leading-[1.55] text-[#4a4e6d]">{body}</p></Reveal>)}</div></div></section>
    <Timeline eyebrow="Working with customers" title="Start with the work. Stay close through change." periodLabel="Understand to improve" items={[
      { id: "customer-understand", label: "Step 01", title: "Understand", content: "We learn the records, hand-offs and decisions behind the current process." },
      { id: "customer-configure", label: "Step 02", title: "Configure", content: "We shape the product or solution around the agreed workflow and responsibilities." },
      { id: "customer-improve", label: "Step 03", title: "Improve", content: "After launch, we help the team settle in and identify sensible next improvements." },
    ]} />
    <section data-nav="light" className="bg-[#f4f5ff] py-[clamp(56px,6.5vw,96px)] text-[#14172f]"><div className="rail-inner"><Reveal className="mesh-calling grain relative overflow-hidden rounded-[32px] px-6 py-[clamp(40px,6vw,80px)] text-center sm:px-12"><div className="relative z-10 mx-auto max-w-[760px]"><p className="eyebrow-pill">Our vision</p><h2 className="h-section mx-auto mt-5">To give growing businesses software that already understands how they work.</h2><Link href="/contact" className="pill pill-dark mt-8 h-12 px-7">Talk to Melorite<ArrowRight className="size-4" /></Link></div></Reveal></div></section>
    <FinalCTA title="Let’s make the work clearer." text="Talk to Melorite about the product, AI calling or custom workflow that fits your business." />
  </PageTransition>;
}
