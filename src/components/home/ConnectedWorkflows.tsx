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
    <section className="section-y relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-70 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" aria-hidden />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            dark
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
                    "relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                    f.id === flowId ? "text-navy" : "text-white/70 ring-1 ring-white/15 hover:text-white",
                  )}
                >
                  {f.id === flowId && <motion.span layoutId="flow-tab" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                  <span className="relative">{f.name}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.p key={flow.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[16px] text-white/70">
              {flow.summary}
            </motion.p>
          </AnimatePresence>
          <div className="flex items-center gap-5 text-[13px] text-white/60">
            <span className="flex items-center gap-2"><i className="h-0.5 w-6 rounded bg-brand-200" /> Available</span>
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
                      <span className={cn("block w-full", s.link === "available" ? "h-0.5 bg-brand-200/70" : "border-t-2 border-dashed border-amber-300/80")} />
                      {s.link === "available" && (
                        <span className="absolute left-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_2px_rgba(147,197,253,0.8)] animate-[wf-dot_2.2s_linear_infinite]" style={{ animationDelay: `${i * 0.3}s` }} />
                      )}
                    </div>
                  )}
                  <div className="w-[250px] rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/12 backdrop-blur-sm transition-colors hover:bg-white/[0.09] md:w-[280px] md:p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">Step {String(i + 1).padStart(2, "0")}</span>
                      {s.link && <StatusBadge status={s.link} className="bg-white/90" />}
                    </div>
                    <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em]">{s.label}</h3>
                    <p className="mt-2 min-h-[42px] text-[14px] leading-relaxed text-white/60">{s.detail}</p>
                    <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                      <span className="grid size-7 place-items-center rounded-[7px]" style={{ background: tint(app.accent, 0.22), color: "#fff" }}>
                        <Icon name={app.icon} className="size-3.5" />
                      </span>
                      <span className="text-[13.5px] font-medium text-white/85">{app.shortName}</span>
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
          <div className="h-px flex-1 overflow-hidden bg-white/10">
            <motion.div className="h-full origin-left bg-white/70" style={{ scaleX: progress }} />
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => page(-1)} disabled={edges.start} aria-label="Previous steps" className="grid size-10 place-items-center rounded-full ring-1 ring-white/20 transition hover:bg-white/10 disabled:opacity-30">
              <ArrowLeft className="size-4" />
            </button>
            <button type="button" onClick={() => page(1)} disabled={edges.end} aria-label="Next steps" className="grid size-10 place-items-center rounded-full ring-1 ring-white/20 transition hover:bg-white/10 disabled:opacity-30">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
        <p className="container-x mt-6 text-[12.5px] text-white/40">
          Hand-offs happen between the applications an organization has enabled.
        </p>
      </div>
    </section>
  );
}
