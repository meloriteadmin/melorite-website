"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { ChevronDown } from "lucide-react";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LogoMark } from "@/components/shared/Logo";

const STAGES = ["Melorite Core", "Selected Business Applications", "Industry-Specific Workspace"];

export function SolutionConfigurator() {
  const [id, setId] = useState("real-estate");
  const [progress, setProgress] = useState({ id: "", n: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const ind = industries.find((i) => i.id === id)!;
  const stage = progress.id === id ? progress.n : 0;

  // Build up the three stages whenever the industry changes (or the section enters view).
  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setProgress({ id, n: 1 }), 650);
    const t2 = setTimeout(() => setProgress({ id, n: 2 }), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [id, inView]);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading className="lg:col-span-7" eyebrow="From platform to industry workspace" title={["A connected foundation.", "Configured for your industry."]} />
          <div className="lg:col-span-5">
            <label htmlFor="config-industry" className="mb-2 block text-[13px] font-medium text-muted">
              Choose an industry
            </label>
            <div className="relative">
            <select
              id="config-industry"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="h-12 w-full appearance-none rounded-[12px] bg-white pl-4 pr-10 text-[15px] font-medium text-navy ring-1 ring-line-strong focus:outline-none focus:ring-2 focus:ring-brand"
            >
              {industries.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.fullName}
                </option>
              ))}
            </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            </div>
          </div>
        </div>

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1.4fr_auto_1.2fr] lg:items-stretch">
          {/* Stage 1: Core */}
          <div className="flex flex-col rounded-[20px] bg-navy p-6 text-white">
            <StageLabel n={1} active={stage >= 0} dark />
            <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-3 py-6">
              <span className="grid size-16 place-items-center rounded-[18px] bg-white/10">
                <LogoMark className="w-8" color="#fff" />
              </span>
              <span className="text-[17px] font-semibold">Melorite Core</span>
              <span className="max-w-[24ch] text-center text-[13px] text-white/55">Organization, access, shared records, audit and search.</span>
            </div>
          </div>

          <Arrow active={stage >= 1} />

          {/* Stage 2: Apps */}
          <div className="rounded-[20px] bg-white p-6 ring-1 ring-line">
            <StageLabel n={2} active={stage >= 1} />
            <div className="mt-5 grid grid-cols-4 gap-2">
              {products.map((p) => {
                const on = stage >= 1 && ind.apps.includes(p.id);
                return (
                  <motion.div
                    key={p.id}
                    animate={{ opacity: on ? 1 : 0.28, scale: on ? 1 : 0.94 }}
                    transition={{ duration: 0.45, ease: EASE, delay: on ? ind.apps.indexOf(p.id) * 0.04 : 0 }}
                    className="flex flex-col items-center gap-1 rounded-[10px] py-2 ring-1"
                    style={{ boxShadow: on ? `inset 0 0 0 1px ${tint(p.accent, 0.35)}` : "inset 0 0 0 1px #e5eaf1", background: on ? tint(p.accent, 0.05) : "transparent" }}
                  >
                    <Icon name={p.icon} className="size-4" style={{ color: on ? p.accent : "#94a3b8" }} />
                    <span className="text-[11px] font-medium text-navy">{p.shortName}</span>
                  </motion.div>
                );
              })}
            </div>
            <p className="mt-4 text-[13px] text-muted">
              <span className="font-medium text-navy">{ind.apps.length}</span> Business Apps used by {ind.name}
            </p>
          </div>

          <Arrow active={stage >= 2} />

          {/* Stage 3: Industry workspace */}
          <div className="relative overflow-hidden rounded-[20px] p-6 ring-1 ring-line" style={{ background: tint(ind.accent, 0.06) }}>
            <StageLabel n={3} active={stage >= 2} />
            <AnimatePresence mode="wait">
              {stage >= 2 ? (
                <motion.div key={ind.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="mt-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-10 place-items-center rounded-[10px] text-white" style={{ background: ind.accent }}>
                      <Icon name={ind.icon} className="size-5" />
                    </span>
                    <span className="text-[17px] font-semibold text-navy">{ind.fullName}</span>
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-1.5">
                    {ind.modules.map((m, i) => (
                      <motion.li key={m} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.04 }} className="truncate rounded-[8px] bg-white px-2.5 py-1.5 text-[12.5px] font-medium text-navy ring-1 ring-line">
                        {m}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div key="wait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-5 grid h-[180px] place-items-center rounded-[14px] border border-dashed border-line-strong text-[13px] text-muted">
                  Configuring…
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-6 text-[13px] text-muted">Conceptual configuration based on each industry solution&apos;s declared applications and modules.</p>
      </div>
    </section>
  );
}

function StageLabel({ n, active, dark }: { n: number; active: boolean; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("grid size-6 place-items-center rounded-full font-mono text-[11px] transition-colors duration-500", active ? "bg-brand text-white" : dark ? "bg-white/10 text-white/60" : "bg-paper text-muted ring-1 ring-line")}>{n}</span>
      <span className={cn("font-mono text-[11px] uppercase tracking-[0.12em]", dark ? "text-white/60" : "text-muted")}>{STAGES[n - 1]}</span>
    </div>
  );
}

function Arrow({ active }: { active: boolean }) {
  return (
    <div className="flex items-center justify-center py-1 lg:px-1" aria-hidden>
      <div className="relative h-8 w-0.5 overflow-hidden rounded-full bg-line lg:h-0.5 lg:w-10">
        <motion.span className="absolute inset-0 origin-top bg-brand lg:origin-left" initial={false} animate={{ scale: active ? 1 : 0 }} transition={{ duration: 0.5, ease: EASE }} />
      </div>
    </div>
  );
}
