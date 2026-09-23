"use client";

import { motion } from "motion/react";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { EASE, tint } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";

const APPS = ["crm", "finance", "hr", "inventory", "projects", "service", "documents", "analytics", "sales"];

/** Scattered tools settle into one ordered, connected system. */
function DisconnectedToConnected() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden>
      <motion.div
        className="absolute inset-[8%] rounded-[28px] border border-dashed border-brand/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 1, duration: 0.8, ease: EASE }}
      />
      <div className="absolute inset-[14%] grid grid-cols-3 gap-[4%]">
        {APPS.map((id, i) => {
          const p = productById(id)!;
          const sx = ((i * 53) % 140) - 70;
          const sy = ((i * 37) % 120) - 60;
          return (
            <motion.div
              key={id}
              initial={{ x: sx, y: sy, rotate: (i % 2 ? 1 : -1) * (8 + i), opacity: 0.6 }}
              whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.1 + i * 0.05 }}
              className="flex flex-col items-center justify-center gap-1.5 rounded-[16px] bg-white shadow-soft ring-1 ring-line"
            >
              <span className="grid size-9 place-items-center rounded-[10px]" style={{ background: tint(p.accent, 0.1), color: p.accent }}>
                <Icon name={p.icon} className="size-[18px]" />
              </span>
              <span className="text-[12px] font-medium text-navy">{p.shortName}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Mission() {
  return (
    <section className="section-y">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal y={10}>
            <Eyebrow>Our mission</Eyebrow>
          </Reveal>
          <TextReveal as="h2" lines={["Make business software", "work better together."]} className="text-h2 mt-6 text-navy" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[34ch] text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-medium leading-[1.4] tracking-[-0.02em] text-slate-600">
              Our mission is to simplify the way businesses manage their operations by bringing essential applications and industry-specific capabilities into{" "}
              <span className="text-navy">one flexible, connected environment.</span>
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <DisconnectedToConnected />
        </div>
      </div>
    </section>
  );
}
