"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { flows } from "@/data/workflows";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Reveal } from "@/components/animation/Reveal";

export function ConnectedWorkflows() {
  const [flowId, setFlowId] = useState(flows[0].id);
  const flow = flows.find((f) => f.id === flowId)!;
  const track = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: track });
  const progress = useSpring(scrollXProgress, { stiffness: 200, damping: 30 });
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
  }, [flowId]);

  const onScroll = () => {
    const el = track.current!;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };
  const page = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.7, behavior: "smooth" });

  return (
    <section className="section-y relative overflow-hidden bg-pastel-blue text-navy">
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="Connected workflows"
            title={["Less switching.", "More connected work."]}
            description="Follow how work moves between Melorite applications. Each hand-off is marked as available today or rolling out."
          />
          <Reveal delay={0.15} className="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end" >
            <div role="tablist" aria-label="Workflows" className="flex flex-wrap gap-2">
              {flows.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={f.id === flowId}
                  onClick={() => setFlowId(f.id)}
                  className={cn(
                    "relative rounded-md px-4 py-2 text-[14px] font-medium transition-colors",
                    f.id === flowId ? "text-navy" : "text-muted hover:bg-white/70 hover:text-navy",
                  )}
                >
                  {f.id === flowId && <motion.span layoutId="flow-tab" className="absolute inset-0 rounded-md bg-white ring-1 ring-line" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                  <span className="relative">{f.name}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.p key={flow.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[16px] text-muted">
              {flow.summary}
            </motion.p>
          </AnimatePresence>
          <div className="flex items-center gap-5 text-[13px] text-muted">
            <span className="flex items-center gap-2"><i className="h-0.5 w-6 rounded bg-brand" /> Available</span>
            <span className="flex items-center gap-2"><i className="h-0 w-6 border-t-2 border-dashed border-amber-300" /> Rolling out</span>
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <div
          ref={track}
          onScroll={onScroll}
          data-lenis-prevent
          tabIndex={0}
          aria-label={`${flow.name} steps`}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4 [padding-inline:max(var(--gutter),calc((100vw_-_1440px)/2_+_var(--gutter)))] [scroll-padding-inline:max(var(--gutter),calc((100vw_-_1440px)/2_+_var(--gutter)))] focus-visible:outline-offset-[-4px]"
        >
          <AnimatePresence mode="popLayout">
            {flow.steps.map((s, i) => {
              const app = productById(s.app)!;
              return (
                <motion.div
                  key={`${flow.id}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                  className="flex shrink-0 snap-start items-center"
                >
                  {i > 0 && (
                    <div className="relative flex w-16 flex-col items-center md:w-24" aria-label={`Hand-off ${s.link === "available" ? "available" : "rolling out"}`}>
                      <span className={cn("block w-full", s.link === "available" ? "h-0.5 bg-brand/70" : "border-t-2 border-dashed border-amber-300/80")} />
                      {s.link === "available" && (
                        <span className="absolute left-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand animate-[wf-dot_2.2s_linear_infinite]" style={{ animationDelay: `${i * 0.3}s` }} />
                      )}
                    </div>
                  )}
                  <div className="w-[250px] rounded-xl bg-white/85 p-5 ring-1 ring-line transition-colors hover:bg-white md:w-[280px] md:p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Step {String(i + 1).padStart(2, "0")}</span>
                      {s.link && <StatusBadge status={s.link} className="bg-white/90" />}
                    </div>
                    <h3 className="mt-6 text-[22px] font-medium tracking-[-0.02em]">{s.label}</h3>
                    <p className="mt-2 min-h-[42px] text-[14px] leading-relaxed text-muted">{s.detail}</p>
                    <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
                      <span className="grid size-7 place-items-center rounded-[7px]" style={{ background: tint(app.accent, 0.14), color: app.accent }}>
                        <Icon name={app.icon} className="size-3.5" />
                      </span>
                      <span className="text-[13.5px] font-medium text-navy">{app.shortName}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div className="w-[var(--gutter)] shrink-0" aria-hidden />
        </div>
        <style>{`@keyframes wf-dot{from{left:0}to{left:100%}}`}</style>

        <div className="container-x mt-6 flex items-center gap-6">
          <div className="h-px flex-1 overflow-hidden bg-line">
            <motion.div className="h-full origin-left bg-brand" style={{ scaleX: progress }} />
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => page(-1)} disabled={edges.start} aria-label="Previous steps" className="grid size-10 place-items-center rounded-md bg-white ring-1 ring-line transition hover:bg-surface-warm disabled:opacity-30">
              <ArrowLeft className="size-4" />
            </button>
            <button type="button" onClick={() => page(1)} disabled={edges.end} aria-label="Next steps" className="grid size-10 place-items-center rounded-md bg-white ring-1 ring-line transition hover:bg-surface-warm disabled:opacity-30">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
        <p className="container-x mt-6 text-[12.5px] text-muted">
          Hand-offs happen between the applications an organization has enabled.
        </p>
      </div>
    </section>
  );
}
