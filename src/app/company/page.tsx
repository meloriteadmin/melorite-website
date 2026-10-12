import type { Metadata } from "next";
import Link from "next/link";
import { painPoints, startSteps } from "@/data/products";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { WhyList } from "@/components/home/WhyList";

export const metadata: Metadata = {
  title: "About Us",
  description: "Melorite builds simple, ready-to-use software for specific kinds of business, and stays with you long after you go live.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <PageTransition>
      <PageHero label="About us" title="Running a business shouldn’t feel this hard." lead="Melorite makes it simpler, one business at a time." cta={false} />
      <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mono-label text-black/45">Sound familiar?</p>
            <h2 className="h-section mt-3 max-w-[12ch]">Every business is busy in its own way.</h2>
            <p className="mt-6 max-w-[40ch] text-[17px] leading-snug text-black/55">None of these feel big on their own. But every day, they quietly cost you time, customers and peace of mind.</p>
          </Reveal>
          <ul className="border-t border-black/10">
            {painPoints.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}><li className="flex gap-4 border-b border-black/10 py-5 text-[clamp(1.1rem,1rem+.4vw,1.35rem)] leading-snug"><span className="mt-2.5 size-2 shrink-0 rounded-full bg-[#5f63f2]" />{t}</li></Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section data-nav="dark" className="rails bg-[#111735] py-[clamp(72px,8vw,128px)] text-white">
        <div className="rail-inner grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <p className="mono-label text-white/45">Our vision</p>
            <h2 className="h-section mt-3 max-w-[13ch]">Software that already understands how your business works.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-[clamp(1.05rem,1rem+.3vw,1.25rem)] leading-snug text-white/60">
            <p>Melorite builds simple, ready-to-use software for specific kinds of business: real estate, clinics, marketing agencies, online sellers and sales teams.</p>
            <p>Each product is made for the way that business actually works, so your team doesn’t have to change how it works to fit the software.</p>
            <p>You don’t set it up alone. We help you get started and stay with you long after you go live. And if your business needs something more, our team can build custom solutions made just for you.</p>
            <Link href="/products" className="pill pill-light mt-2 h-12 px-6">Explore products</Link>
          </Reveal>
        </div>
      </section>

      <WhyList id="why" />

      <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><p className="mono-label text-black/45">Getting started</p><h2 className="h-section mt-3">Getting started is easy.</h2></Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
            {startSteps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07} className="bg-white p-8">
                <span className="grid size-9 place-items-center rounded-full border border-black/20 text-[12px] font-medium">0{i + 1}</span>
                <h3 className="mt-8 font-serif text-[28px] tracking-tight">{t}</h3>
                <p className="mt-3 text-[15.5px] leading-snug text-black/55">{d}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-8 text-[15px] font-medium">Simple monthly plans. No hidden costs.</p>
          <div className="mt-8 border-t border-black/10 pt-8 text-[15px] text-black/60">
            Reach us at <a className="text-[#4b4fe0] hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or <a className="text-[#4b4fe0] hover:underline" href={`tel:+91${site.contact.phone}`}>+91 {site.contact.phone}</a>.
          </div>
        </div>
      </section>
      <FinalCTA />
    </PageTransition>
  );
}
