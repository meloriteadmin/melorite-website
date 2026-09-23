"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/utils";

const FROM: Record<string, string> = {
  left: "inset(0 100% 0 0 round 20px)",
  right: "inset(0 0 0 100% round 20px)",
  up: "inset(100% 0 0 0 round 20px)",
  down: "inset(0 0 100% 0 round 20px)",
};

/**
 * Masked reveal for product screenshots — clips rather than scales, so interface
 * imagery is never distorted. The viewport trigger sits on an unclipped wrapper
 * (a fully clipped element reports no visible area to IntersectionObserver).
 */
export function ImageReveal({ children, direction = "up", delay = 0, className }: { children: React.ReactNode; direction?: "left" | "right" | "up" | "down"; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <motion.div
        variants={{
          hidden: { clipPath: FROM[direction] },
          show: { clipPath: "inset(0 0 0 0 round 20px)", transition: { duration: 1, ease: EASE, delay } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
