import type { Metadata } from "next";
import { reasons, startSteps } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { EditorialLandingHero } from "@/components/site/EditorialLandingHero";
import { FinalCTA } from "@/components/site/FinalCTA";

export const metadata: Metadata = {
  title: "Why Melorite",
  description: "Software that already fits your business, is quick to start, easy for everyone, and backed by real people long after you go live.",
  alternates: { canonical: "/why-melorite" },
};

export default function WhyMeloritePage() {
  return (
    <PageTransition>
      <EditorialLandingHero
        label="Why Melorite"
        title="Software should feel simple."
        mutedTitle="Your work already isn’t."
        description="Good software should make your day easier, not add to it. Melorite fits the way your team already works, starts quickly and stays clear from day one."
        image="/images/editorial/melorite-why-illustration.webp"
        imagePosition="center"
        imageLabel="A Melorite team turning scattered work into one clear connected workflow"
        showImageAction={false}
        secondaryLabel="Explore products"
        secondaryHref="/products"
      />
      <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner grid gap-12 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal>
            <p className="mono-label text-black/45">What to expect</p>
            <h2 className="h-section mt-3 max-w-[11ch]">Good software should make your day easier.</h2>
          </Reveal>
          <ul className="border-t border-black/10">
            {reasons.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.04}>
                <li className="grid grid-cols-[2.2rem_1fr] gap-4 border-b border-black/10 py-6 sm:grid-cols-[2.6rem_minmax(0,.9fr)_minmax(0,1.3fr)]">
                  <span className="pt-1.5 font-serif text-[14px] text-[#5f63f2]">0{i + 1}</span>
                  <h3 className="font-serif text-[clamp(1.4rem,1.15rem+.9vw,1.9rem)] leading-tight tracking-[-0.03em]">{t}</h3>
                  <p className="col-start-2 text-[15px] leading-snug text-black/55 sm:col-start-auto sm:pt-1.5">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section data-nav="light" className="rails rails-light bg-[#fbfbf8] pb-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><h2 className="h-section">Getting started is easy.</h2></Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-black/10 bg-black/10 md:grid-cols-3">
            {startSteps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07} className="bg-white p-8">
                <span className="grid size-9 place-items-center rounded-full border border-black/20 text-[12px] font-medium">0{i + 1}</span>
                <h3 className="mt-8 font-serif text-[28px] tracking-tight">{t}</h3>
                <p className="mt-3 text-[15.5px] leading-snug text-black/55">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <FinalCTA />
    </PageTransition>
  );
}
