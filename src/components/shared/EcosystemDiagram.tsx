"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { LogoMark } from "./Logo";

export type DiagramNode = {
  id: string;
  label: string;
  icon: string;
  accent: string;
  description: string;
  items: { id: string; label: string; icon: string; accent: string; href?: string }[];
};

/**
 * Reusable hub-and-spoke diagram. Hover or focus highlights a connection;
 * clicking selects a node and reveals its detail panel. Below lg it becomes a
 * stacked, fully keyboard-operable list with the same content.
 */
export function EcosystemDiagram({
  nodes,
  centerLabel = "Melorite",
  centerSub = "Platform core",
  itemsLabel = "Applications",
}: {
  nodes: DiagramNode[];
  centerLabel?: string;
  centerSub?: string;
  itemsLabel?: string;
}) {
  const [active, setActive] = useState(nodes[0].id);
  const [hover, setHover] = useState<string | null>(null);
  const uid = useId();
  const current = nodes.find((n) => n.id === active)!;
  const R = 38; // radius in % of stage

  const pos = nodes.map((_, i) => {
    const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return [50 + Math.cos(a) * R, 50 + Math.sin(a) * R] as const;
  });

  const Panel = (
    <AnimatePresence mode="wait">
      <motion.div
        key={current.id}
        id={`${uid}-panel`}
        role="region"
        aria-live="polite"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span className="grid size-12 place-items-center rounded-[12px]" style={{ background: tint(current.accent, 0.1), color: current.accent }}>
          <Icon name={current.icon} className="size-6" />
        </span>
        <h3 className="text-h3 mt-5 text-navy">{current.label}</h3>
        <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{current.description}</p>
        <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{itemsLabel}</div>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {current.items.map((it, i) => {
            const inner = (
              <>
                <span className="grid size-7 place-items-center rounded-[7px]" style={{ background: tint(it.accent, 0.1), color: it.accent }}>
                  <Icon name={it.icon} className="size-3.5" />
                </span>
                <span className="text-[14px] font-medium text-navy">{it.label}</span>
                {it.href && <ArrowRight className="ml-auto size-3.5 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />}
              </>
            );
            return (
              <motion.li key={it.id} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1, ease: EASE }}>
                {it.href ? (
                  <Link href={it.href} className="group flex items-center gap-2.5 rounded-[10px] bg-paper px-2.5 py-2 ring-1 ring-line transition hover:ring-brand/40">
                    {inner}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2.5 rounded-[10px] bg-paper px-2.5 py-2 ring-1 ring-line">{inner}</span>
                )}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Desktop diagram */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[640px] lg:col-span-7 lg:block">
        <div className="absolute inset-[6%] rounded-full border border-dashed border-line-strong" aria-hidden />
        <div className="absolute inset-[26%] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.1),transparent)]" aria-hidden />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {pos.map(([x, y], i) => {
            const id = nodes[i].id;
            const on = id === active || id === hover;
            return (
              <g key={id}>
                <line x1="50" y1="50" x2={x} y2={y} stroke={on ? nodes[i].accent : "#d6dde8"} strokeWidth={on ? 0.45 : 0.25} style={{ transition: "stroke 300ms, stroke-width 300ms" }} />
                {on && (
                  <line x1="50" y1="50" x2={x} y2={y} stroke={nodes[i].accent} strokeWidth="0.8" strokeDasharray="1.5 6" strokeLinecap="round" className="animate-[eco-flow_1.4s_linear_infinite]" />
                )}
              </g>
            );
          })}
          <style>{`@keyframes eco-flow{to{stroke-dashoffset:-7.5}}`}</style>
        </svg>

        <div className="absolute left-1/2 top-1/2 flex size-[22%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center text-white shadow-[0_30px_60px_-20px_rgba(10,37,64,0.55)]">
          <span className="absolute inset-[-10%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-brand/30" aria-hidden />
          <LogoMark className="w-[34%]" color="#ffffff" />
          <span className="mt-2 text-[15px] font-semibold tracking-[-0.01em]">{centerLabel}</span>
          <span className="text-[11px] text-white/55">{centerSub}</span>
        </div>

        <div role="tablist" aria-label={itemsLabel} aria-orientation="vertical">
          {nodes.map((n, i) => {
            const on = n.id === active;
            return (
              <button
                key={n.id}
                role="tab"
                aria-selected={on}
                aria-controls={`${uid}-panel`}
                onClick={() => setActive(n.id)}
                onMouseEnter={() => setHover(n.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(n.id)}
                onBlur={() => setHover(null)}
                className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: `${pos[i][0]}%`, top: `${pos[i][1]}%` }}
              >
                <motion.span
                  animate={{ scale: on ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn("grid size-16 place-items-center rounded-[18px] bg-white ring-1 shadow-soft transition-shadow", on ? "shadow-float" : "ring-line group-hover:shadow-float")}
                  style={{ color: n.accent, ...(on ? { boxShadow: `0 0 0 2px ${n.accent}, 0 16px 32px -12px ${tint(n.accent, 0.5)}` } : {}) }}
                >
                  <Icon name={n.icon} className="size-7" />
                </motion.span>
                <span className={cn("whitespace-nowrap rounded-full px-2.5 py-1 text-[13px] font-medium transition-colors", on ? "bg-navy text-white" : "bg-white/80 text-navy")}>{n.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile list */}
      <div className="lg:hidden">
        <div className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] pb-2" role="tablist" aria-label={itemsLabel}>
          {nodes.map((n) => {
            const on = n.id === active;
            return (
              <button
                key={n.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(n.id)}
                className={cn("flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-[14px] font-medium ring-1 transition", on ? "bg-navy text-white ring-navy" : "bg-white text-navy ring-line")}
              >
                <Icon name={n.icon} className="size-4" style={{ color: on ? "#fff" : n.accent }} />
                {n.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-[20px] bg-white p-7 ring-1 ring-line md:p-9 lg:col-span-5">{Panel}</div>
    </div>
  );
}
