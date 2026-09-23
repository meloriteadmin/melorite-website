"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { industries } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { ButtonLink } from "@/components/shared/Button";
import { IndustryWorkspaceMock } from "@/components/mockups/IndustryWorkspaceMock";
import { IndustryVisual } from "@/components/mockups/IndustryVisual";

const CYCLE = ["hospital", "real-estate", "manufacturing", "logistics-and-transport", "education", "hospitality"].map((id) => industries.find((i) => i.id === id)!);

export function SolutionsHero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((x) => (x + 1) % CYCLE.length), 3600);
    return () => clearTimeout(t);
  }, [i, paused]);

  const ind = CYCLE[i];
  const left = CYCLE[(i + 1) % CYCLE.length];
  const right = CYCLE[(i + 2) % CYCLE.length];

  return (
    <section className="relative overflow-hidden pb-16 pt-[128px] md:pb-24 md:pt-[150px]">
      <div className="container-x flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
          <Eyebrow>Industry solutions</Eyebrow>
        </motion.div>
        <TextReveal as="h1" trigger="mount" delay={0.15} lines={["Different industries.", "Different challenges.", "One adaptable platform."]} highlight={["adaptable"]} className="text-h1 mt-6 max-w-[20ch] text-navy" />
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.6 }} className="text-lead mt-6 max-w-[56ch] text-muted">
          Explore industry-specific capabilities built to help businesses manage the processes, information and everyday operations that matter to them.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.72 }} className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#explorer" size="lg" arrow magnetic>
            Explore Solutions
          </ButtonLink>
          <ButtonLink href="/company?enquiry=industry#contact" size="lg" variant="secondary">
            Talk to Our Team
          </ButtonLink>
        </motion.div>
      </div>

      <div className="container-x mt-16" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <motion.div
          className="relative overflow-hidden rounded-[28px] px-4 pb-8 pt-10 md:px-10 md:pt-14"
          animate={{ backgroundColor: tint(ind.accent, 0.08) }}
          transition={{ duration: 0.9, ease: EASE }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />

          {/* Context visuals that change around a constant workspace */}
          <div className="pointer-events-none absolute inset-y-10 left-6 hidden w-[20%] lg:block" aria-hidden>
            <AnimatePresence mode="popLayout">
              <motion.div key={left.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7, ease: EASE }}>
                <IndustryVisual industry={left} className="aspect-[4/5] rounded-[20px]" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="pointer-events-none absolute bottom-10 right-6 hidden w-[20%] lg:block" aria-hidden>
            <AnimatePresence mode="popLayout">
              <motion.div key={right.id} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.7, ease: EASE }}>
                <IndustryVisual industry={right} className="aspect-[4/5] rounded-[20px]" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative mx-auto max-w-[900px] lg:w-[56%]">
            <div className="grid">
              <AnimatePresence initial={false}>
                <motion.div
                  key={ind.id}
                  className="[grid-area:1/1]"
                  initial={{ opacity: 0, clipPath: "inset(0 0 0 100% round 20px)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0 0% round 20px)" }}
                  exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.3 } }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <IndustryWorkspaceMock industry={ind} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Preview industry">
            {CYCLE.map((c, j) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={j === i}
                onClick={() => setI(j)}
                className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium ring-1 transition-colors", j === i ? "bg-white text-navy shadow-soft ring-white" : "text-slate-600 ring-navy/10 hover:bg-white/60")}
              >
                <Icon name={c.icon} className="size-3.5" style={{ color: c.accent }} />
                {c.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
