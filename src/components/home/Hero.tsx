"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { productById, products, type Product } from "@/data/products";
import { site } from "@/data/site";
import { EASE, cn } from "@/lib/utils";
import { TextReveal } from "@/components/animation/TextReveal";
import { ButtonLink } from "@/components/shared/Button";
import { AppChip, LauncherMock } from "@/components/mockups/WorkspaceMock";
import { AppMarquee } from "@/components/shared/AppMarquee";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { useFinePointer } from "@/hooks/use-media";

type Sat = { id: string; x: number; y: number; depth: number; mobile?: [number, number]; anchor: [number, number] };

/** Satellite positions (percent of the stage) and the point on the dashboard they connect to. */
const SATS: Sat[] = [
  { id: "crm", x: 1, y: 14, depth: 1, mobile: [0, 52], anchor: [17, 24] },
  { id: "finance", x: 0, y: 50, depth: 0.7, anchor: [17, 50] },
  { id: "hr", x: 17, y: 70, depth: 0.9, anchor: [30, 64] },
  { id: "projects", x: 84, y: 6, depth: 0.8, anchor: [83, 20] },
  { id: "operations", x: 85, y: 44, depth: 1, mobile: [62, 64], anchor: [83, 46] },
  { id: "analytics", x: 67, y: 68, depth: 0.75, anchor: [72, 64] },
];

function Satellite({ sat, product, index, mx, my }: { sat: Sat; product: Product; index: number; mx: MotionValue<number>; my: MotionValue<number> }) {
  const x = useTransform(mx, (v) => v * 10 * sat.depth);
  const y = useTransform(my, (v) => v * 10 * sat.depth);
  return (
    <div
      data-sat
      data-dx={50 - sat.x - 7.5}
      data-dy={46 - sat.y - 8}
      className={cn(
        "absolute left-[var(--mx)] top-[var(--my)] w-[38%] sm:w-[26%] lg:left-[var(--x)] lg:top-[var(--y)] lg:w-[15%]",
        !sat.mobile && "hidden lg:block",
      )}
      style={
        {
          "--x": `${sat.x}%`,
          "--y": `${sat.y}%`,
          "--mx": `${sat.mobile?.[0] ?? 0}%`,
          "--my": `${sat.mobile?.[1] ?? 0}%`,
        } as React.CSSProperties
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.05 + index * 0.08 }}
      >
        <motion.div style={{ x, y }}>
          <AppChip product={product} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  const cx = useTransform(mx, (v) => v * -4);
  const cy = useTransform(my, (v) => v * -4);

  // Scroll: satellites converge into the central workspace as the hero leaves.
  useEffect(() => {
    if (!stage.current || prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = getGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: stage.current, start: "top 18%", end: "bottom 20%", scrub: 0.6 },
        });
        gsap.utils.toArray<HTMLElement>("[data-sat]").forEach((el) => {
          tl.to(el, { xPercent: Number(el.dataset.dx) * 2.6, yPercent: Number(el.dataset.dy) * 2.2, scale: 0.72, opacity: 0, ease: "power2.in" }, 0);
        });
        tl.to("[data-links]", { opacity: 0, ease: "none" }, 0);
        tl.to("[data-core]", { scale: 0.96, ease: "none" }, 0);
      });
    }, stage);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden pt-[120px] md:pt-[140px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-10%] h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.14),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="container-x flex flex-col items-center text-center">
        <motion.a
          href="/platform"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/80 py-1 pl-1 pr-3 text-[12px] font-medium sm:pr-3.5 sm:text-[13px] text-navy ring-1 ring-line-strong backdrop-blur transition hover:ring-brand/40"
        >
          <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">New</span>
          A more connected way to run your business
          <span className="text-muted transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
        </motion.a>

        <TextReveal
          as="h1"
          trigger="mount"
          delay={0.2}
          stagger={0.06}
          lines={["One platform.", "Every part of", "your business."]}
          highlight={["Every", "part"]}
          className="text-display mt-7 max-w-[14ch] text-balance text-navy"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
          className="text-lead mt-7 max-w-[58ch] text-muted"
        >
          Bring your people, processes and business applications together with Melorite. Start with the tools you need and build a
          connected system around the way your business works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.78 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <ButtonLink href="/platform" size="lg" arrow magnetic>
            Explore the Platform
          </ButtonLink>
          <ButtonLink href={site.demoHref} size="lg" variant="secondary">
            Book a Demo
          </ButtonLink>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13.5px] text-muted"
        >
          {["Flexible applications", "Connected workflows", "Industry-specific solutions"].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-3">
              {i > 0 && <span className="size-1 rounded-full bg-line-strong" aria-hidden />}
              {t}
            </span>
          ))}
        </motion.p>
      </div>

      {/* Visualization */}
      <div className="container-x mt-14 md:mt-20">
        <div
          ref={stage}
          className="relative mx-auto aspect-[4/3] max-w-[1320px] sm:aspect-[16/10.5] lg:aspect-[16/8.4]"
          onPointerMove={(e) => {
            if (!fine) return;
            const r = e.currentTarget.getBoundingClientRect();
            rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2 * 0.8);
            rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2 * 0.8);
          }}
          onPointerLeave={() => {
            rawX.set(0);
            rawY.set(0);
          }}
        >
          {/* Connection lines */}
          <svg
            data-links
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden
          >
            {SATS.map((s, i) => {
              const sx = s.x + 7.5;
              const sy = s.y + 6;
              return (
                <g key={s.id}>
                  <motion.path
                    d={`M ${sx} ${sy} C ${(sx + s.anchor[0]) / 2} ${sy}, ${(sx + s.anchor[0]) / 2} ${s.anchor[1]}, ${s.anchor[0]} ${s.anchor[1]}`}
                    fill="none"
                    stroke="rgba(37,99,235,0.35)"
                    strokeWidth="1.2"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: EASE, delay: 1.35 + i * 0.07 }}
                  />
                  <path
                    d={`M ${sx} ${sy} C ${(sx + s.anchor[0]) / 2} ${sy}, ${(sx + s.anchor[0]) / 2} ${s.anchor[1]}, ${s.anchor[0]} ${s.anchor[1]}`}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeDasharray="6 120"
                    vectorEffect="non-scaling-stroke"
                    className="animate-[hero-flow_3.2s_linear_infinite]"
                    style={{ animationDelay: `${2 + i * 0.4}s` }}
                  />
                </g>
              );
            })}
            <style>{`@keyframes hero-flow{from{stroke-dashoffset:126}to{stroke-dashoffset:0}}`}</style>
          </svg>

          {/* Core workspace */}
          <div data-core className="absolute left-1/2 top-[4%] w-[100%] -translate-x-1/2 sm:w-[82%] lg:w-[68%]">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.85 }}
            >
              <motion.div style={{ x: cx, y: cy }}>
                <LauncherMock apps={["crm", "sales", "finance", "hr", "projects", "analytics"].map((id) => productById(id)!)} />
              </motion.div>
            </motion.div>
          </div>

          {SATS.map((s, i) => (
            <Satellite key={s.id} sat={s} product={products.find((p) => p.id === s.id)!} index={i} mx={mx} my={my} />
          ))}
        </div>
      </div>

      <div className="relative pb-16 pt-6 md:pb-20">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted">16 business applications · one connected workspace</p>
        <AppMarquee />
      </div>
    </section>
  );
}
