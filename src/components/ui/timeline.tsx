"use client";

import { useLayoutEffect, useRef, useSyncExternalStore, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export type TimelineItem = {
  id: string;
  label: string;
  title: string;
  content: string;
};

export type TimelineProps = {
  eyebrow?: string;
  title?: string;
  periodLabel?: string;
  items: readonly TimelineItem[];
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  className?: string;
};

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia(MOTION_QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );
}

/**
 * A reusable version of the supplied pinned horizontal journey. It keeps the
 * alternating stems, drawing progress line and scroll-led movement, while
 * accepting real page content instead of a hard-coded product history.
 */
export default function Timeline({
  eyebrow = "The journey",
  title = "From first step to lasting progress.",
  periodLabel = "Keep scrolling",
  items,
  textColor = "#111735",
  mutedTextColor = "rgba(17, 23, 53, .62)",
  activeColor = "#5f63f2",
  backgroundColor = "#f4f5ff",
  className = "",
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
    height: `${Math.max(180, 104 + items.length * 28)}vh`,
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !viewport || !track || !progress) return;

    const context = gsap.context(() => {
      const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth + 48);
      gsap.set(track, { x: 0 });
      gsap.set(progress, { scaleX: reducedMotion ? 1 : 0, transformOrigin: "left center" });

      if (reducedMotion) return;

      const trackTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-timeline-item]").forEach((item) => {
        const stem = item.querySelector<HTMLElement>("[data-timeline-stem]");
        const dot = item.querySelector<HTMLElement>("[data-timeline-dot]");
        const copy = item.querySelector<HTMLElement>("[data-timeline-copy]");
        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            containerAnimation: trackTween,
            start: "left 88%",
            end: "left 62%",
            scrub: true,
          },
        });
        reveal.fromTo(stem, { scaleY: 0 }, { scaleY: 1, ease: "none" })
          .fromTo(dot, { scale: 0 }, { scale: 1, ease: "back.out(1.7)" }, "<")
          .fromTo(copy, { y: 28, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out" }, "<.08");
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
      context.revert();
    };
  }, [items, reducedMotion]);

  if (!items.length) return null;

  return (
    <section
      ref={sectionRef}
      data-nav="light"
      aria-labelledby="timeline-heading"
      className={`relative w-full ${className}`}
      style={sectionStyle}
    >
      <div ref={viewportRef} className="sticky top-0 h-svh overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_420px_at_12%_8%,rgba(255,190,150,.3),transparent_68%),radial-gradient(900px_520px_at_88%_94%,rgba(165,168,255,.34),transparent_68%)]" />
        <div
          ref={trackRef}
          className="relative flex h-full w-max items-center px-[max(24px,6vw)] will-change-transform"
        >
          <header className="mr-[clamp(72px,10vw,160px)] w-[min(78vw,460px)] shrink-0 self-center">
            <p className="eyebrow-pill">{eyebrow}</p>
            <h2 id="timeline-heading" className="h-section mt-5 max-w-[12ch]">{title}</h2>
            <p className="mt-6 text-[15px] font-medium" style={{ color: mutedTextColor }}>{periodLabel} <span aria-hidden>→</span></p>
          </header>

          <div className="relative flex h-[min(74vh,660px)] items-stretch pr-[18vw]">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#111735]/12" />
            <div ref={progressRef} className="absolute left-0 right-0 top-1/2 h-[2px]" style={{ backgroundColor: activeColor }} />

            {items.map((item, index) => {
              const top = index % 2 === 0;
              return (
                <article
                  key={item.id}
                  data-timeline-item
                  className="relative w-[min(76vw,340px)] shrink-0"
                >
                  <div className={`absolute left-0 flex h-1/2 w-full ${top ? "top-0 flex-col justify-end" : "bottom-0 flex-col"}`}>
                    {top ? <TimelineCopy item={item} mutedTextColor={mutedTextColor} /> : null}
                    <div
                      data-timeline-stem
                      className={`ml-0 h-[clamp(72px,12vh,112px)] w-px origin-bottom ${top ? "" : "origin-top"}`}
                      style={{ backgroundColor: activeColor }}
                    />
                    <span
                      data-timeline-dot
                      className="-ml-[5px] block size-[11px] rounded-full ring-4 ring-white/75"
                      style={{ backgroundColor: activeColor }}
                    />
                    {!top ? <TimelineCopy item={item} mutedTextColor={mutedTextColor} /> : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCopy({ item, mutedTextColor }: { item: TimelineItem; mutedTextColor: string }) {
  return (
    <div data-timeline-copy className="glass glass-sheen my-3 w-[min(70vw,285px)] rounded-[14px] p-5">
      <p className="mono-label inline-flex rounded-full bg-[#5f63f2]/12 px-2.5 py-1 !text-[10.5px] text-[#4346d6]">{item.label}</p>
      <h3 className="mt-3 text-[clamp(1.3rem,2vw,1.75rem)] font-semibold leading-[1.08] tracking-[-.035em]">{item.title}</h3>
      <p className="mt-2.5 text-[14.5px] leading-[1.5]" style={{ color: mutedTextColor }}>{item.content}</p>
    </div>
  );
}
