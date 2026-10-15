"use client";

import { useEffect, useRef } from "react";

const N = 90;
const W = 1600;

type Ribbon = { id: string; y0: number; amp: [number, number]; k: [number, number, number]; w: number; ph: number; s: number; strands: number; fill: number; stops: [string, string, string, string] };

/** Layered silk ribbons in the Melorite logo palette: navy, indigo, periwinkle and violet. */
const RIBBONS: Ribbon[] = [
  { id: "r1", y0: 300, amp: [130, 46], k: [1.0, 2.2, 1.4], w: 190, ph: 0.2, s: 0.5, strands: 26, fill: 0.62, stops: ["#a9b4ff", "#6a72ff", "#4b4fe0", "#2f33b8"] },
  { id: "r2", y0: 290, amp: [118, 52], k: [1.0, 2.6, 1.1], w: 150, ph: 1.1, s: 0.42, strands: 22, fill: 0.55, stops: ["#c3a8ff", "#8f7bff", "#6a5cff", "#4b4fe0"] },
  { id: "r3", y0: 310, amp: [104, 38], k: [1.0, 1.9, 1.7], w: 120, ph: 2.1, s: 0.58, strands: 18, fill: 0.5, stops: ["#8fc0ff", "#6aa5ff", "#5f63f2", "#3a3ec9"] },
  { id: "r4", y0: 296, amp: [136, 30], k: [1.0, 3.0, 0.9], w: 70, ph: 3.0, s: 0.36, strands: 10, fill: 0.42, stops: ["#5f63f2", "#3a3ec9", "#1b2060", "#111735"] },
];

function build(r: Ribbon, t: number) {
  const top: number[] = [];
  const bot: number[] = [];
  const xs: number[] = [];
  for (let i = 0; i <= N; i++) {
    const x = -40 + (i / N) * (W + 80);
    const u = (x / W) * Math.PI * 2;
    const c = r.y0 + r.amp[0] * Math.sin(u * r.k[0] + r.ph + t * r.s) + r.amp[1] * Math.sin(u * r.k[1] - r.ph * 1.3 + t * r.s * 0.7);
    const w = r.w * (0.52 + 0.48 * Math.sin(u * r.k[2] + r.ph * 0.7 + t * r.s * 0.6));
    const tw = Math.sin(u * 1.3 + r.ph + t * 0.4) * w * 0.28;
    xs.push(x);
    top.push(c - w / 2 + tw);
    bot.push(c + w / 2 + tw);
  }
  const line = (ys: number[], move = true) => ys.map((y, i) => `${i === 0 && move ? "M" : "L"}${xs[i].toFixed(1)} ${y.toFixed(1)}`).join("");
  const rev = (ys: number[]) => ys.map((y, i) => `L${xs[N - i].toFixed(1)} ${ys[N - i].toFixed(1)}`).join("");
  const fill = `${line(top)}${rev(bot)}Z`;
  let strands = "";
  for (let j = 1; j < r.strands; j++) {
    const f = 0.5 - 0.5 * Math.cos((Math.PI * j) / r.strands);
    strands += line(top.map((y, i) => y + (bot[i] - y) * f));
  }
  return { fill, strands, edge: `${line(top)}${line(bot)}` };
}

export function WaveRibbon({ className = "" }: { className?: string }) {
  const refs = useRef<Record<string, SVGPathElement | null>>({});

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0.6;
    let last = performance.now();
    const draw = () => {
      for (const r of RIBBONS) {
        const p = build(r, t);
        refs.current[`${r.id}-f`]?.setAttribute("d", p.fill);
        refs.current[`${r.id}-s`]?.setAttribute("d", p.strands);
        refs.current[`${r.id}-e`]?.setAttribute("d", p.edge);
      }
    };
    draw();
    if (reduce) return;
    const loop = (now: number) => {
      t += Math.min(0.05, (now - last) / 1000);
      last = now;
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div aria-hidden className={`pointer-events-none relative w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 1600 560" preserveAspectRatio="xMidYMid slice" className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_80%,transparent)]">
        <defs>
          {RIBBONS.map((r) => (
            <linearGradient key={r.id} id={`${r.id}-g`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1600" y2="0">
              <stop offset="0" stopColor={r.stops[0]} /><stop offset=".35" stopColor={r.stops[1]} /><stop offset=".7" stopColor={r.stops[2]} /><stop offset="1" stopColor={r.stops[3]} />
            </linearGradient>
          ))}
        </defs>
        <g style={{ isolation: "isolate" }}>
          {RIBBONS.map((r) => (
            <g key={r.id} style={{ mixBlendMode: "multiply" }}>
              <path ref={(el) => { refs.current[`${r.id}-f`] = el; }} fill={`url(#${r.id}-g)`} fillOpacity={r.fill} />
              <path ref={(el) => { refs.current[`${r.id}-s`] = el; }} fill="none" stroke={`url(#${r.id}-g)`} strokeWidth=".7" strokeOpacity=".45" />
              <path ref={(el) => { refs.current[`${r.id}-e`] = el; }} fill="none" stroke={`url(#${r.id}-g)`} strokeWidth="1.2" strokeOpacity=".9" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
