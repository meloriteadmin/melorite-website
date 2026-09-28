"use client";

import { motion } from "motion/react";
import { securityMeasures } from "@/data/platform";
import { Icon } from "@/lib/icons";
import { EASE } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/animation/Reveal";

/** Request path through the platform's checks — every step here is implemented. */
const PATH = ["Request", "Authenticated session", "Entitlement check", "Organization-scoped data", "Audit record"];

function IsolationDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-[#e8e3ff] p-6 text-navy ring-1 ring-[#d8cff8] md:p-8">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#75699a]">Every request</div>
        <ol className="mt-5 grid gap-2">
          {PATH.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/65 font-mono text-[11px]">{i + 1}</span>
              <span className="flex-1 rounded-[10px] bg-white/55 px-3.5 py-2.5 text-[14px] ring-1 ring-white/80">{p}</span>
            </motion.li>
          ))}
        </ol>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {["Organization A", "Organization B"].map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1, ease: EASE }}
              className="rounded-[14px] border border-dashed border-[#b8addd] bg-white/35 p-4"
            >
              <div className="text-[13px] font-semibold">{o}</div>
              <div className="mt-2 space-y-1.5" aria-hidden>
                <i className="block h-1.5 w-[80%] rounded-full bg-[#bdb2de]" />
                <i className="block h-1.5 w-[55%] rounded-full bg-[#cfc6e8]" />
              </div>
              <div className="mt-3 text-[11.5px] text-[#75699a]">Isolated by organization</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SecuritySection() {
  return (
    <section id="security" className="section-y scroll-mt-20 bg-paper">
      <div className="container-x">
        <SectionHeading
          eyebrow="Security and reliability"
          title={["A platform built", "with responsibility in mind."]}
          description="The measures below are implemented in the Melorite platform today. We describe what the platform does rather than listing badges."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <IsolationDiagram />
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {securityMeasures.map((m) => (
              <RevealItem key={m.id} className="rounded-[20px] bg-white p-6 ring-1 ring-line transition-shadow hover:shadow-soft">
                <span className="grid size-10 place-items-center rounded-[10px] bg-brand-50 text-brand">
                  <Icon name={m.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.015em] text-navy">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{m.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
