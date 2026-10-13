"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { CSSProperties, HTMLAttributes } from "react";
import { EASE, DURATION } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  y?: number;
  duration?: number;
};

/** A progressive fade-up that never gates content on IntersectionObserver support. */
export function Reveal({ delay = 0, y = 24, duration = DURATION.reveal, children, ...rest }: RevealProps) {
  const { className = "", style, ...divProps } = rest;
  return (
    <div
      className={`reveal-safe ${className}`}
      style={{ ...style, "--reveal-y": `${y}px`, animationDelay: `${delay}s`, animationDuration: `${duration}s` } as CSSProperties}
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
