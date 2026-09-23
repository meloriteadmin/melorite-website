"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { ConnectionField } from "@/components/animation/ConnectionField";
import { LogoMark } from "@/components/shared/Logo";

/** Animated connected grid: nodes light up in sequence along grid lines. */
function ConnectedGrid() {
  const cols = 9;
  const rows = 6;
  const lit = [[1, 1], [2, 1], [3, 1], [3, 2], [3, 3], [4, 3], [5, 3], [5, 2], [6, 2], [7, 2], [7, 3], [7, 4], [5, 4], [5, 5], [2, 3], [2, 4]];
  return (
    <div className="relative aspect-[3/2] w-full" aria-hidden>
      <svg viewBox={`0 0 ${cols * 10} ${rows * 10}`} className="absolute inset-0 h-full w-full">
        {Array.from({ length: cols }).map((_, c) => (
          <line key={`c${c}`} x1={c * 10 + 5} x2={c * 10 + 5} y1="5" y2={rows * 10 - 5} stroke="rgba(255,255,255,0.07)" strokeWidth="0.3" />
        ))}
        {Array.from({ length: rows }).map((_, r) => (
          <line key={`r${r}`} y1={r * 10 + 5} y2={r * 10 + 5} x1="5" x2={cols * 10 - 5} stroke="rgba(255,255,255,0.07)" strokeWidth="0.3" />
        ))}
        <motion.polyline
          points={lit.slice(0, 13).map(([c, r]) => `${c * 10 + 5},${r * 10 + 5}`).join(" ")}
          fill="none"
          stroke="#60a5fa"
          strokeWidth="0.6"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: EASE, delay: 0.6 }}
        />
        {Array.from({ length: cols * rows }).map((_, i) => {
          const c = i % cols;
          const r = Math.floor(i / cols);
          const idx = lit.findIndex(([lc, lr]) => lc === c && lr === r);
          return (
            <motion.circle
              key={i}
              cx={c * 10 + 5}
              cy={r * 10 + 5}
              r={idx >= 0 ? 1.1 : 0.55}
              fill={idx >= 0 ? "#93c5fd" : "rgba(255,255,255,0.22)"}
              initial={idx >= 0 ? { opacity: 0, scale: 0 } : false}
              animate={idx >= 0 ? { opacity: 1, scale: 1 } : undefined}
              transition={{ delay: 0.6 + idx * 0.16, duration: 0.4, ease: EASE }}
            />
          );
        })}
      </svg>
      <motion.div
        className="absolute left-[61%] top-[58%] grid size-[14%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22%] bg-brand shadow-[0_0_60px_10px_rgba(37,99,235,0.45)]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6, duration: 0.7, ease: EASE }}
      >
        <LogoMark className="w-[55%]" color="#fff" />
      </motion.div>
    </div>
  );
}

export function CompanyHero() {
  return (
    <section className="px-3 pt-[84px] md:px-4 md:pt-[88px]">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-navy text-white">
        <ConnectionField className="opacity-40" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_80%_20%,rgba(37,99,235,0.35),transparent_70%)]" aria-hidden />
        <div className="container-x grid grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
              <Eyebrow dark>About Melorite</Eyebrow>
            </motion.div>
            <TextReveal as="h1" trigger="mount" delay={0.15} lines={["Building a more", "connected way", "to do business."]} className="text-h1 mt-6 text-white" />
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.55 }} className="text-lead mt-7 max-w-[52ch] text-white/65">
              Melorite is being built around a simple idea: businesses should be able to manage the tools and processes they need through one connected platform, without being forced into unnecessary complexity.
            </motion.p>
          </div>
          <div className="lg:col-span-6">
            <ConnectedGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
