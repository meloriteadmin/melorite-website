"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import { productById, type Product } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LogoMark } from "@/components/shared/Logo";
import { Reveal } from "@/components/animation/Reveal";

/** [scatteredX, scatteredY, rotate, connectedX, connectedY] in % of the stage. */
const LAYOUT: [string, number, number, number, number, number][] = [
  ["crm", 4, 10, -6, 12, 14],
  ["finance", 38, 2, 4, 38, 4],
  ["hr", 74, 14, 7, 64, 14],
  ["inventory", 8, 60, 5, 12, 62],
  ["projects", 44, 70, -4, 38, 72],
  ["service", 76, 56, -7, 64, 62],
];
const HUB: [number, number] = [50, 50];

function AppWindow({ product, p, layout }: { product: Product; p: MotionValue<number>; layout: (typeof LAYOUT)[number] }) {
  const [, sx, sy, r, cx, cy] = layout;
  const left = useTransform(p, (v) => `${sx + (cx - sx) * v}%`);
  const top = useTransform(p, (v) => `${sy + (cy - sy) * v}%`);
  const rotate = useTransform(p, (v) => r * (1 - v));
  const stub = useTransform(p, [0, 0.4], [1, 0]);
  return (
    <motion.div className="absolute w-[22%] @container" style={{ left, top, rotate }}>
      <div className="relative rounded-[12px] bg-white shadow-float ring-1 ring-navy/10" style={{ fontSize: "calc(100cqw / 24)" }}>
        <div className="flex items-center gap-[0.6em] border-b border-line px-[1em] py-[0.75em]">
          <span className="grid size-[2em] place-items-center rounded-[0.45em]" style={{ background: tint(product.accent, 0.12), color: product.accent }}>
            <Icon name={product.icon} className="size-[1.1em]" />
          </span>
          <span className="text-[1.15em] font-semibold text-navy">{product.shortName}</span>
          <span className="ml-auto flex gap-[0.3em]" aria-hidden>
            <i className="size-[0.45em] rounded-full bg-line-strong" />
            <i className="size-[0.45em] rounded-full bg-line-strong" />
          </span>
        </div>
        <div className="space-y-[0.55em] p-[1em]">
          <i className="block h-[0.6em] w-[70%] rounded-full" style={{ background: tint(product.accent, 0.45) }} />
          <i className="block h-[0.6em] w-[90%] rounded-full bg-slate-200" />
          <i className="block h-[0.6em] w-[55%] rounded-full bg-slate-200" />
        </div>
        {/* Broken connection stub — fades as the system connects */}
        <motion.span
          style={{ opacity: stub }}
          className="absolute -right-[38%] top-1/2 block h-0 w-[36%] border-t-2 border-dashed border-slate-300"
          aria-hidden
        >
          <i className="absolute -right-1 -top-[5px] size-2 rotate-45 border-r-2 border-t-2 border-slate-300" />
        </motion.span>
      </div>
    </motion.div>
  );
}

export function ConnectedSystems() {
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, amount: 0.5 });
  const p = useMotionValue(0);
  const [value, setValue] = useState(0);
  const [touched, setTouched] = useState(false);
  useMotionValueEvent(p, "change", (v) => setValue(Math.round(v * 100)));

  const hubOpacity = useTransform(p, [0.35, 0.8], [0, 1]);
  const hubScale = useTransform(p, [0.35, 0.9], [0.6, 1]);
  const lineLen = useTransform(p, [0.5, 1], [0, 1]);

  // Invite interaction: gently preview the connected state once, then return.
  useEffect(() => {
    if (!inView || touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const a = animate(p, [0, 0.18, 0], { duration: 1.6, ease: "easeInOut", delay: 0.4 });
    return () => a.stop();
  }, [inView, touched, p]);

  const go = (v: number) => {
    setTouched(true);
    animate(p, v, { duration: 1.1, ease: EASE });
  };
  const connected = value > 50;
  const apps = LAYOUT.map((l) => productById(l[0])!);

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="Why Melorite"
            title={["Your business is connected.", "Your software should be too."]}
            highlight={["connected.", "too."]}
          />
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-lead text-muted">
              Drag the slider to see the difference between separate tools and one connected system.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-soft">
            <div
              ref={stageRef}
              className={cn(
                "relative aspect-[4/3.4] transition-colors duration-700 sm:aspect-[16/7]",
                connected ? "bg-[radial-gradient(60%_70%_at_50%_50%,#eff6ff,transparent)]" : "bg-dots",
              )}
            >
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
                {LAYOUT.map(([id, , , , cx, cy]) => (
                  <motion.path
                    key={id}
                    d={`M ${HUB[0]} ${HUB[1]} L ${cx + 11} ${cy + 11}`}
                    stroke="#2563eb"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    fill="none"
                    style={{ pathLength: lineLen }}
                  />
                ))}
              </svg>
              <motion.div
                className="absolute left-1/2 top-1/2 z-10 grid size-[18%] max-w-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22%] bg-navy shadow-[0_20px_50px_-15px_rgba(10,37,64,0.6)] sm:size-[12%]"
                style={{ opacity: hubOpacity, scale: hubScale }}
                aria-hidden
              >
                <LogoMark className="w-[52%]" color="#ffffff" />
                <span className="absolute inset-0 rounded-[22%] ring-1 ring-white/20" />
              </motion.div>
              {apps.map((a, i) => (
                <AppWindow key={a.id} product={a} p={p} layout={LAYOUT[i]} />
              ))}
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 gap-6 border-t border-line p-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:p-8">
              <button
                type="button"
                onClick={() => go(0)}
                className={cn("text-left transition-opacity", connected ? "opacity-50 hover:opacity-80" : "opacity-100")}
                aria-pressed={!connected}
              >
                <span className="flex items-center gap-2 text-[15px] font-semibold text-navy">
                  <span className="size-2 rounded-full bg-slate-400" /> Disconnected
                </span>
                <span className="mt-1.5 block max-w-[46ch] text-[14.5px] leading-relaxed text-muted">
                  Managing disconnected tools often means switching between systems, repeating work and struggling to maintain a clear
                  view of business operations.
                </span>
              </button>
              <div className="flex flex-col items-center gap-2 md:w-[260px]">
                <label htmlFor="connect-slider" className="sr-only">
                  Connect applications
                </label>
                <input
                  id="connect-slider"
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  onChange={(e) => {
                    setTouched(true);
                    p.set(Number(e.target.value) / 100);
                  }}
                  onPointerUp={() => go(value > 50 ? 1 : 0)}
                  onKeyUp={(e) => (e.key === "Enter" || e.key === " ") && go(connected ? 0 : 1)}
                  aria-valuetext={connected ? "Connected" : "Disconnected"}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[linear-gradient(to_right,var(--color-brand)_var(--v),var(--color-line)_var(--v))] [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-[0_0_0_1px_rgba(10,37,64,0.15),0_4px_12px_rgba(10,37,64,0.2)] [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(10,37,64,0.15),0_4px_12px_rgba(10,37,64,0.2)]"
                  style={{ ["--v" as string]: `${value}%` }}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Drag to connect</span>
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                className={cn("text-left transition-opacity md:text-right", connected ? "opacity-100" : "opacity-50 hover:opacity-80")}
                aria-pressed={connected}
              >
                <span className="flex items-center gap-2 text-[15px] font-semibold text-navy md:justify-end">
                  <span className="size-2 rounded-full bg-brand" /> Connected through Melorite
                </span>
                <span className="mt-1.5 block max-w-[46ch] text-[14.5px] leading-relaxed text-muted md:ml-auto">
                  Melorite brings essential business functions together so organizations can work through a more connected system.
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
