"use client";

import { products } from "@/data/products";
import { industryById } from "@/data/industries";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";
import { LauncherMock } from "@/components/mockups/WorkspaceMock";
import { IndustryVisual } from "@/components/mockups/IndustryVisual";

export function Vision() {

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal y={10}>
            <Eyebrow>Our vision</Eyebrow>
          </Reveal>
          <TextReveal as="h2" lines={["One adaptable platform.", "More possibilities for business."]} className="text-h2 mt-6 text-navy" />
          <Reveal delay={0.2}>
            <p className="text-lead mx-auto mt-6 max-w-[60ch] text-muted">
              We envision a business environment where organizations can access the capabilities they need, connect their operations and evolve their systems as their requirements change.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#eff6ff,#ffffff_60%)] px-4 py-10 ring-1 ring-line md:px-12 md:py-16">
          <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
          <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_2.2fr_1fr]">
            <div className="hidden md:block">
              <IndustryVisual industry={industryById("hospital")!} className="aspect-[4/5] rounded-[20px] shadow-float" />
            </div>
            <Reveal y={30}>
              <LauncherMock apps={products.slice(0, 6)} title="Workspace" />
            </Reveal>
            <div className="hidden md:block">
              <IndustryVisual industry={industryById("manufacturing")!} className="aspect-[4/5] rounded-[20px] shadow-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
