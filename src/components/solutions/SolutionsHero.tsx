"use client";

import { motion } from "motion/react";
import { industryById, industries } from "@/data/industries";
import { EASE } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { ButtonLink } from "@/components/shared/Button";
import { IndustryVisual } from "@/components/mockups/IndustryVisual";

const MOSAIC = ["hospital", "manufacturing", "logistics-and-transport"].map((id) => industryById(id)!);

/** Editorial hero: strong type on the left, a curated industry photo mosaic on the right. */
export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-[112px] md:pb-24 md:pt-[136px]">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_50%_50%_at_20%_10%,black,transparent)]" aria-hidden />
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
            <Eyebrow>Industry solutions</Eyebrow>
          </motion.div>
          <TextReveal
            as="h1"
            trigger="mount"
            delay={0.1}
            lines={["Different industries.", "Different challenges.", "One adaptable platform."]}
            highlight={["adaptable"]}
            className="text-h1 mt-6 text-navy lg:text-[3.35rem]"
          />
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.45 }} className="text-lead mt-6 max-w-[46ch] text-muted">
            Explore industry-specific capabilities built to help businesses manage the processes, information and everyday operations that matter to them.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.55 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#explorer" size="lg" arrow magnetic>
              Explore Solutions
            </ButtonLink>
            <ButtonLink href="/company?enquiry=industry#contact" size="lg" variant="secondary">
              Talk to Our Team
            </ButtonLink>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 text-[13.5px] text-muted">
            {industries.length} industry solutions across healthcare, property, supply chain, services, education and community.
          </motion.p>
        </div>

        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
            {MOSAIC.map((ind, i) => (
              <motion.div
                key={ind.id}
                className={i === 0 ? "row-span-2" : undefined}
                initial={{ opacity: 0, y: 24, clipPath: "inset(8% 0 0 0 round 20px)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0 round 20px)" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.12 }}
              >
                <IndustryVisual
                  industry={ind}
                  overlay={i === 0}
                  priority
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className={i === 0 ? "h-full min-h-[320px] rounded-[20px] sm:min-h-[460px]" : "aspect-[4/3] h-full rounded-[20px]"}
                />
                <p className="sr-only">{ind.fullName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
