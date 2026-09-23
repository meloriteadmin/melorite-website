"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { productById } from "@/data/products";
import { EASE } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { ButtonLink } from "@/components/shared/Button";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";

/** Asymmetric collage: [app, left%, top%, width%, parallax depth, z] */
const COLLAGE: [string, number, number, number, number, number][] = [
  ["crm", 0, 16, 34, -40, 1],
  ["projects", 68, 4, 32, -70, 1],
  ["finance", 20, 8, 60, 0, 3],
  ["analytics", 4, 62, 30, 50, 4],
  ["hr", 70, 58, 30, 80, 4],
];

function CollageItem({ id, left, top, width, depth, z, index, progress }: { id: string; left: number; top: number; width: number; depth: number; z: number; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const y = useTransform(progress, [0, 1], [0, depth]);
  return (
    <motion.div className="absolute" style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, zIndex: z, y }}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.35 + index * 0.1 }}
      >
        <WorkspaceMock product={productById(id)!} compact={z < 3} />
      </motion.div>
    </motion.div>
  );
}

export function ProductsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-[128px] md:pt-[150px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,#eff6ff,transparent)]" aria-hidden />
      <div className="container-x flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
          <Eyebrow>Melorite products</Eyebrow>
        </motion.div>
        <TextReveal as="h1" trigger="mount" delay={0.15} lines={["Every tool you need.", "One place to find it."]} highlight={["One", "place"]} className="text-h1 mt-6 max-w-[18ch] text-navy" />
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.5 }} className="text-lead mt-6 max-w-[56ch] text-muted">
          Explore applications designed to help your business manage essential operations, connect everyday work and build a system that fits your requirements.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.62 }} className="mt-9">
          <ButtonLink href="#explorer" size="lg" arrow magnetic>
            Explore Applications
          </ButtonLink>
        </motion.div>
      </div>

      <div className="container-x mt-16">
        <div className="relative mx-auto aspect-[16/11] max-w-[1280px] md:aspect-[16/8.6]">
          {COLLAGE.map(([id, l, t, w, d, z], i) => (
            <div key={id} className={z < 3 && (id === "projects" || id === "crm") ? "hidden md:contents" : "contents"}>
              <CollageItem id={id} left={l} top={t} width={w} depth={d} z={z} index={i} progress={scrollYProgress} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
