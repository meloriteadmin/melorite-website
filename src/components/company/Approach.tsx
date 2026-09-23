"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { approach } from "@/data/company";
import { EASE } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Approach() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="section-y bg-paper">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="Our approach" title={["Software shaped", "around real business needs."]} description="How we think about building Melorite — from understanding operations to continued product development." />
          </div>
        </div>
        <ol ref={ref} className="relative lg:col-span-6 lg:col-start-7">
          <span className="absolute bottom-6 left-[19px] top-6 w-px bg-line" aria-hidden />
          <motion.span className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-brand" style={{ scaleY }} aria-hidden />
          {approach.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-white font-mono text-[12px] font-semibold text-brand ring-1 ring-brand/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-navy">{s.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted">{s.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
