"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react";
import { EASE, DURATION } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  y?: number;
  duration?: number;
};

/** Scroll-triggered fade-up: content eases in once, as it enters the viewport. A failsafe timer reveals it regardless. */
export function Reveal({ delay = 0, y = 28, duration = 0.9, children, ...rest }: RevealProps) {
  const { className = "", style, ...divProps } = rest;
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPending(true);
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
    io.observe(el);
    const failsafe = window.setTimeout(() => setShown(true), 4000);
    return () => { io.disconnect(); window.clearTimeout(failsafe); };
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${pending && !shown ? "reveal-pending" : ""} ${shown ? "reveal-in" : ""} ${className}`}
      style={{ ...style, "--reveal-y": `${y}px`, "--reveal-d": `${delay}s`, "--reveal-t": `${duration}s` } as CSSProperties}
      {...divProps}
    >
      {children}
    </div>
  );
}

/** Staggers direct `RevealItem` children as the group enters the viewport. */
export function RevealGroup({ stagger = 0.08, delay = 0, amount = 0.2, children, ...rest }: HTMLMotionProps<"div"> & { stagger?: number; delay?: number; amount?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ y = 20, children, ...rest }: HTMLMotionProps<"div"> & { y?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
