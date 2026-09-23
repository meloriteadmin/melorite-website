"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Check } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { productHref } from "@/data/navigation";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TextLink } from "@/components/shared/Button";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";
import { Reveal } from "@/components/animation/Reveal";
import { useMedia } from "@/hooks/use-media";

const AUTOPLAY_MS = 7000;

export function FeaturedProducts() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useMedia("(prefers-reduced-motion: reduce)", false);
  const playing = inView && !paused && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % featuredProducts.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [playing, index]);

  const p = featuredProducts[index];

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Product preview"
          title={["Powerful tools.", "One connected experience."]}
          description="A selection of Melorite applications. Each shares the same workspace, design and underlying records."
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div role="tablist" aria-label="Featured applications" aria-orientation="vertical" className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
              {featuredProducts.map((fp, i) => {
                const on = i === index;
                return (
                  <button
                    key={fp.id}
                    role="tab"
                    id={`fp-tab-${fp.id}`}
                    aria-selected={on}
                    aria-controls="fp-panel"
                    onClick={() => setIndex(i)}
                    className={cn(
                      "relative flex shrink-0 items-center gap-3 rounded-[14px] px-3.5 py-3 text-left transition-colors lg:px-4 lg:py-4",
                      on ? "text-navy" : "text-slate-500 hover:text-navy",
                    )}
                  >
                    {on && (
                      <motion.span layoutId="fp-active" className="absolute inset-0 rounded-[14px] bg-white shadow-soft ring-1 ring-line" transition={{ type: "spring", stiffness: 380, damping: 34 }} />
                    )}
                    <span
                      className="relative grid size-9 place-items-center rounded-[10px] transition-colors"
                      style={{ background: on ? tint(fp.accent, 0.12) : "#f1f5f9", color: on ? fp.accent : "#64748b" }}
                    >
                      <Icon name={fp.icon} className="size-[18px]" />
                    </span>
                    <span className="relative">
                      <span className="block text-[15.5px] font-semibold tracking-[-0.01em]">{fp.shortName}</span>
                      <span className="hidden text-[13px] text-muted lg:block">{fp.tagline}</span>
                    </span>
                    {on && (
                      <span className="absolute inset-x-4 bottom-1.5 hidden h-[2px] overflow-hidden rounded-full bg-line lg:block" aria-hidden>
                        <motion.span
                          key={`${index}-${playing}`}
                          className="block h-full origin-left rounded-full"
                          style={{ background: fp.accent }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: playing ? 1 : 0 }}
                          transition={{ duration: playing ? AUTOPLAY_MS / 1000 : 0.2, ease: "linear" }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="mt-8 hidden border-t border-line pt-8 lg:block"
              >
                <p className="text-[15.5px] leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.capabilities.slice(0, 4).map((c) => (
                    <li key={c.title} className="flex items-start gap-2.5 text-[14.5px] text-navy">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      {c.title}
                    </li>
                  ))}
                </ul>
                <TextLink href={productHref(p.id)} className="mt-7">
                  Explore {p.shortName}
                </TextLink>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Preview */}
          <Reveal className="lg:col-span-8" y={30}>
            <div id="fp-panel" role="tabpanel" aria-labelledby={`fp-tab-${p.id}`} className="relative">
              <div className="absolute -inset-6 -z-10 hidden rounded-[40px] opacity-60 blur-2xl lg:block transition-colors duration-700" style={{ background: `radial-gradient(60% 60% at 60% 40%, ${tint(p.accent, 0.18)}, transparent)` }} aria-hidden />
              <div className="grid">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={p.id}
                    className="[grid-area:1/1]"
                    initial={{ opacity: 0, clipPath: "inset(0 0 0 12% round 20px)", scale: 0.985 }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0 0% round 20px)", scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <WorkspaceMock product={p} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="mt-6 lg:hidden">
              <p className="text-[15px] leading-relaxed text-muted">{p.description}</p>
              <TextLink href={productHref(p.id)} className="mt-4">
                Explore {p.shortName}
              </TextLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
