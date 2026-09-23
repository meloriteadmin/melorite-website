"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STAGES = [
  { title: "Choose the applications your organization needs.", label: "Start focused", apps: ["crm"] },
  { title: "Bring more business functions into the same workspace.", label: "Connect", apps: ["crm", "sales", "finance"] },
  { title: "Expand your connected operating environment as requirements grow.", label: "Expand", apps: ["crm", "sales", "finance", "hr", "payroll", "projects", "inventory", "analytics"] },
];

export function GrowthTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(v > 0.66 ? 2 : v > 0.33 ? 1 : 0));

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Designed for growth" title={["Start focused.", "Expand with your business."]} />
        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[18px] top-0 h-full w-px bg-line md:hidden" aria-hidden>
            <motion.div className="h-full w-full origin-top bg-brand" style={{ scaleY: line }} />
          </div>
          <div className="absolute left-0 top-[18px] hidden h-px w-full bg-line md:block" aria-hidden>
            <motion.div className="h-full w-full origin-left bg-brand" style={{ scaleX: line }} />
          </div>

          <ol className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {STAGES.map((s, i) => {
              const on = i <= active;
              return (
                <li key={s.label} className="relative pl-14 md:pl-0 md:pt-16">
                  <motion.span
                    className="absolute left-0 top-0 grid size-9 place-items-center rounded-full font-mono text-[12px] font-semibold ring-4 ring-white"
                    animate={{ backgroundColor: on ? "#2563eb" : "#e5eaf1", color: on ? "#fff" : "#64748b", scale: i === active ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {i + 1}
                  </motion.span>
                  <div className={cn("font-mono text-[11.5px] uppercase tracking-[0.14em] transition-colors", on ? "text-brand" : "text-muted")}>Stage {i + 1} · {s.label}</div>
                  <h3 className={cn("mt-3 max-w-[22ch] text-[22px] font-semibold leading-snug tracking-[-0.02em] transition-colors duration-500", on ? "text-navy" : "text-slate-400")}>{s.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {s.apps.map((id, j) => {
                      const p = productById(id)!;
                      return (
                        <motion.span
                          key={id}
                          initial={false}
                          animate={{ opacity: on ? 1 : 0.35, y: on ? 0 : 4 }}
                          transition={{ delay: on ? j * 0.05 : 0, ease: EASE }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[12.5px] font-medium text-navy ring-1 ring-line"
                        >
                          <span className="grid size-4 place-items-center rounded-full" style={{ background: tint(p.accent, 0.14), color: p.accent }}>
                            <Icon name={p.icon} className="size-2.5" />
                          </span>
                          {p.shortName}
                        </motion.span>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
