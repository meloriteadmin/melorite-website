"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { flows } from "@/data/workflows";
import { sharedRecords } from "@/data/workflows";
import { productById } from "@/data/products";
import { productHref } from "@/data/navigation";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { EcosystemDiagram } from "@/components/shared/EcosystemDiagram";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";
import { TextLink } from "@/components/shared/Button";
import { Reveal } from "@/components/animation/Reveal";

const RECORD_ICONS: Record<string, string> = { customer: "Users", product: "Boxes", employee: "UserRound", vendor: "Building2", document: "Files" };
const RECORD_ACCENTS: Record<string, string> = { customer: "#2563eb", product: "#0891b2", employee: "#db2777", vendor: "#d97706", document: "#0f766e" };

function Connector({ progress, index, total, status }: { progress: MotionValue<number>; index: number; total: number; status?: string }) {
  const start = index / total;
  const scale = useTransform(progress, [start, start + 1 / total], [0, 1]);
  return (
    <div className="relative mx-1 h-0.5 flex-1 min-w-4 overflow-hidden rounded-full bg-line" aria-hidden>
      <motion.div
        className={cn("absolute inset-0 origin-left", status === "rolling-out" ? "bg-[repeating-linear-gradient(90deg,#f59e0b_0_6px,transparent_6px_10px)]" : "bg-brand")}
        style={{ scaleX: scale }}
      />
    </div>
  );
}

export function WorkflowDiagram() {
  const flow = flows[0];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const [selected, setSelected] = useState(0);
  const step = flow.steps[selected];
  const app = productById(step.app)!;

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Connected data and workflows"
          title={["Information that moves", "with your business."]}
          description="Core records are shared across applications, so work can move from one team to the next without being re-entered."
        />

        {/* Shared records */}
        <Reveal className="mt-14" y={30}>
          <EcosystemDiagram
            centerLabel="Shared records"
            centerSub="One source of truth"
            itemsLabel="Used by"
            nodes={sharedRecords.map((r) => ({
              id: r.id,
              label: r.label,
              icon: RECORD_ICONS[r.id],
              accent: RECORD_ACCENTS[r.id],
              description: `One ${r.label.toLowerCase()} record, owned by ${productById(r.owner)!.shortName} and reused by every application below — no copies to keep in sync.`,
              items: r.apps.map((a) => {
                const p = productById(a)!;
                return { id: a, label: p.shortName, icon: p.icon, accent: p.accent, href: productHref(a) };
              }),
            }))}
          />
        </Reveal>

        {/* Scroll-activated workflow */}
        <div ref={ref} className="mt-24 rounded-[20px] bg-paper p-6 ring-1 ring-line md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Verified flow</div>
              <h3 className="text-h3 mt-2 text-navy">{flow.name}</h3>
            </div>
            <p className="max-w-[44ch] text-[14.5px] text-muted">Select a step to see where it happens in the workspace.</p>
          </div>

          <div role="tablist" aria-label={`${flow.name} steps`} className="no-scrollbar -mx-2 mt-8 flex items-center overflow-x-auto px-2 py-2">
            {flow.steps.map((s, i) => {
              const p = productById(s.app)!;
              const on = i === selected;
              return (
                <div key={s.label} className="flex flex-1 items-center">
                  {i > 0 && <Connector progress={scrollYProgress} index={i - 1} total={flow.steps.length - 1} status={s.link} />}
                  <button
                    role="tab"
                    aria-selected={on}
                    onClick={() => setSelected(i)}
                    className={cn(
                      "flex shrink-0 flex-col items-center gap-2 rounded-[14px] px-3 py-3 transition-colors",
                      on ? "bg-white shadow-soft ring-1 ring-line" : "hover:bg-white/60",
                    )}
                  >
                    <span className="grid size-11 place-items-center rounded-[12px] transition-transform" style={{ background: tint(p.accent, on ? 0.16 : 0.09), color: p.accent }}>
                      <Icon name={p.icon} className="size-5" />
                    </span>
                    <span className="whitespace-nowrap text-[13px] font-semibold text-navy">{s.label}</span>
                    <span className="text-[11.5px] text-muted">{p.shortName}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <AnimatePresence mode="wait">
              <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="lg:col-span-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Step {selected + 1}</span>
                  {step.link && <StatusBadge status={step.link} />}
                </div>
                <h4 className="mt-3 text-[26px] font-semibold tracking-[-0.03em] text-navy">{step.label}</h4>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{step.detail}</p>
                <p className="mt-4 text-[14px] text-slate-600">
                  Happens in <span className="font-medium text-navy">{app.name}</span>.
                </p>
                <TextLink href={productHref(app.id)} className="mt-5">
                  About {app.shortName}
                </TextLink>
              </motion.div>
            </AnimatePresence>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={app.id}
                    className="min-w-0 [grid-area:1/1]"
                    initial={{ opacity: 0, clipPath: "inset(0 0 12% 0 round 16px)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 16px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <WorkspaceMock product={app} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
