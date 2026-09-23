"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type TextRevealProps = {
  /** Each entry is rendered as its own line on wide screens. Words still wrap naturally. */
  lines: string[];
  as?: Tag;
  className?: string;
  lineClassName?: string;
  /** "mount" animates immediately (hero), "view" when scrolled into view. */
  trigger?: "mount" | "view";
  delay?: number;
  stagger?: number;
  /** Words (in any line) to highlight in brand blue. */
  highlight?: string[];
};

/**
 * Masked word-by-word reveal. Works with responsive wrapping because every word
 * is its own inline mask; lines are hints, not hard constraints.
 */
export function TextReveal({
  lines,
  as = "h2",
  className,
  lineClassName,
  trigger = "view",
  delay = 0,
  stagger = 0.045,
  highlight = [],
}: TextRevealProps) {
  const Tag = motion[as];
  let i = 0;
  const animateProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <Tag className={className} aria-label={lines.join(" ")} {...animateProps}>
      {lines.map((line, li) => (
        <span key={li} aria-hidden className={cn("block", lineClassName)}>
          {line.split(" ").map((word, wi) => {
            const idx = i++;
            const hl = highlight.includes(word.replace(/[.,]/g, ""));
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
                <motion.span
                  className={cn("inline-block will-change-transform", hl && "text-brand")}
                  variants={{
                    hidden: { y: "105%" },
                    show: { y: "0%", transition: { duration: 0.8, ease: EASE, delay: delay + idx * stagger } },
                  }}
                >
                  {word}
                </motion.span>
                {wi < line.split(" ").length - 1 && " "}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
