"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Check } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { productHref } from "@/data/navigation";
import { Icon } from "@/lib/icons";
import { EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TextLink } from "@/components/shared/Button";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";
import { Reveal } from "@/components/animation/Reveal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { useMedia } from "@/hooks/use-media";

const AUTOPLAY_MS = 8000;

/**
 * Featured applications: shadcn Tabs choose the app; the large screenshot
 * masks in and the details swap with a motion-primitives TransitionPanel.
 * Autoplay pauses on hover/focus, off-screen and under reduced motion.
 */
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
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured applications"
            title={["Powerful tools.", "One connected experience."]}
            description="Every Melorite application shares the same workspace, design and underlying records."
          />
          <Reveal delay={0.15}>
            <TextLink href="/products">View all 16 applications</TextLink>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Tabs value={p.id} onValueChange={(v) => setIndex(featuredProducts.findIndex((x) => x.id === v))}>
            <div className="no-scrollbar -mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:px-0">
              <TabsList className="h-auto w-max gap-1 lg:w-full">
                {featuredProducts.map((fp, i) => (
                  <TabsTrigger key={fp.id} value={fp.id} className="relative h-10 flex-1 gap-2 overflow-hidden px-4">
                    <Icon name={fp.icon} className="size-4" style={{ color: fp.accent }} />
                    {fp.shortName}
                    {i === index && playing && (
                      <motion.span
                        key={`${index}-bar`}
                        className="absolute inset-x-3 bottom-0.5 h-[2px] origin-left rounded-full"
                        style={{ background: fp.accent }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                        aria-hidden
                      />
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:pt-4" aria-live="polite">
              <TransitionPanel
                activeIndex={index}
                transition={{ duration: 0.35, ease: EASE }}
                variants={{ enter: { opacity: 0, y: 12, filter: "blur(4px)" }, center: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, y: -8, filter: "blur(4px)" } }}
              >
                {featuredProducts.map((fp) => (
                  <div key={fp.id}>
                    <span className="grid size-11 place-items-center rounded-[12px]" style={{ background: tint(fp.accent, 0.1), color: fp.accent }}>
                      <Icon name={fp.icon} className="size-[22px]" />
                    </span>
                    <h3 className="text-h3 mt-5 text-navy">{fp.name}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{fp.description}</p>
                    <ul className="mt-6 space-y-3">
                      {fp.capabilities.slice(0, 4).map((c) => (
                        <li key={c.title} className="flex items-start gap-3 text-[14.5px] text-slate-700">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full" style={{ background: tint(fp.accent, 0.12), color: fp.accent }}>
                            <Check className="size-3" aria-hidden />
                          </span>
                          <span>
                            <span className="font-medium text-navy">{c.title}.</span> {c.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <TextLink href={productHref(fp.id)} className="mt-7">
                      Explore {fp.shortName}
                    </TextLink>
                  </div>
                ))}
              </TransitionPanel>
            </div>

            <Reveal className="lg:col-span-8" y={24}>
              <div className="grid grid-cols-1">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={p.id}
                    className="min-w-0 [grid-area:1/1]"
                    initial={{ opacity: 0, clipPath: "inset(0 0 0 8% round 20px)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0 0% round 20px)" }}
                    exit={{ opacity: 0, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <WorkspaceMock product={p} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
