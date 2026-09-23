"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn, EASE } from "@/lib/utils";

export type StoryStep = { id: string; kicker?: string; title: string; body: React.ReactNode; extra?: React.ReactNode };

/**
 * Sticky storytelling: text steps scroll on one side while a pinned visual
 * updates on the other. Uses CSS `position: sticky` (no scroll-jacking) and an
 * IntersectionObserver to pick the active step. Below lg, each step renders its
 * own visual inline instead of pinning.
 */
export function StickyStory({
  steps,
  renderVisual,
  visualSide = "right",
  className,
  numbered = true,
  onStepChange,
}: {
  steps: StoryStep[];
  renderVisual: (active: number) => React.ReactNode;
  visualSide?: "left" | "right";
  className?: string;
  numbered?: boolean;
  onStepChange?: (i: number) => void;
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            setActive(i);
            onStepChange?.(i);
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [onStepChange]);

  return (
    <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16", className)}>
      <div className={cn("lg:col-span-5", visualSide === "left" && "lg:order-2 lg:col-start-8")}>
        {steps.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="flex flex-col justify-center py-10 lg:min-h-[78vh] lg:py-0"
          >
            <motion.div
              animate={{ opacity: active === i ? 1 : 0.35 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="max-lg:opacity-100!"
            >
              <div className="flex items-center gap-3">
                {numbered && (
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-full font-mono text-[12px] font-medium ring-1 transition-colors duration-500",
                      active === i ? "bg-brand text-white ring-brand" : "text-muted ring-line-strong",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                {s.kicker && <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted">{s.kicker}</span>}
              </div>
              <h3 className="text-h3 mt-5 max-w-[20ch] text-navy">{s.title}</h3>
              <div className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted">{s.body}</div>
              {s.extra && <div className="mt-6">{s.extra}</div>}
            </motion.div>
            <div className="mt-8 lg:hidden">{renderVisual(i)}</div>
          </div>
        ))}
      </div>
      <div className={cn("hidden lg:col-span-7 lg:block", visualSide === "left" && "lg:order-1 lg:col-start-1")}>
        <div className="sticky top-24 flex h-[calc(100vh-7rem)] min-h-[520px] items-center">
          <div className="w-full">{renderVisual(active)}</div>
        </div>
      </div>
    </div>
  );
}
