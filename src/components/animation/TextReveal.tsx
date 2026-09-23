"use client";

import { motion } from "motion/react";
import { cn, EASE } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type TextRevealProps = {
  /** Each entry is a line hint on wide screens; text still wraps naturally. */
  lines: string[];
  as?: Tag;
  className?: string;
  lineClassName?: string;
  /** "mount" animates immediately (page heroes), "view" when scrolled into view. */
  trigger?: "mount" | "view";
  delay?: number;
  /** "line" (default, used for section headings) or "word" (hero headlines). */
  by?: "line" | "word";
  stagger?: number;
  /** Words to render in brand blue. */
  highlight?: string[];
};

/**
 * The one heading reveal used across the site: text rises out of a mask.
 * Line mode keeps section headings calm; word mode is reserved for heroes.
 */
export function TextReveal({
  lines,
  as = "h2",
  className,
  lineClassName,
  trigger = "view",
  delay = 0,
  by = "line",
  stagger,
  highlight = [],
}: TextRevealProps) {
  const Tag = motion[as];
  const step = stagger ?? (by === "word" ? 0.05 : 0.09);
  const trig =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.5 } };
  const item = (i: number) => ({
    hidden: { y: "108%" },
    show: { y: "0%", transition: { duration: by === "word" ? 0.8 : 0.75, ease: EASE, delay: delay + i * step } },
  });
  const paint = (word: string) => (highlight.includes(word.replace(/[.,]/g, "")) ? "text-brand" : undefined);

  let w = 0;
  return (
    <Tag className={className} aria-label={lines.join(" ")} {...trig}>
      {lines.map((line, li) =>
        by === "line" ? (
          <span key={li} aria-hidden className={cn("block overflow-hidden pb-[0.1em] -mb-[0.1em]", lineClassName)}>
            <motion.span className="block will-change-transform" variants={item(li)}>
              {line.split(" ").map((word, wi, arr) => (
                <span key={wi} className={paint(word)}>
                  {word}
                  {wi < arr.length - 1 && " "}
                </span>
              ))}
            </motion.span>
          </span>
        ) : (
          <span key={li} aria-hidden className={cn("block", lineClassName)}>
            {line.split(" ").map((word, wi, arr) => {
              const idx = w++;
              return (
                <span key={wi} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
                  <motion.span className={cn("inline-block will-change-transform", paint(word))} variants={item(idx)}>
                    {word}
                  </motion.span>
                  {wi < arr.length - 1 && " "}
                </span>
              );
            })}
          </span>
        ),
      )}
    </Tag>
  );
}
