"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DockItem = {
  label: string;
  href?: string;
  onSelect?: () => void;
  icon: LucideIcon;
  active?: boolean;
  primary?: boolean;
  /** Hide on small screens so the dock fits a phone. */
  desktopOnly?: boolean;
};

const BASE = 42;
const PEAK = 78;
const RANGE = 140;
const spring = { mass: 0.12, stiffness: 170, damping: 13 };

function DockIcon({ item, mouseX }: { item: DockItem; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);
  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect();
    return b ? x - (b.left + b.width / 2) : RANGE * 2;
  });
  const size = useSpring(useTransform(distance, [-RANGE, 0, RANGE], [BASE, PEAK, BASE]), spring);
  const iconSize = useSpring(useTransform(distance, [-RANGE, 0, RANGE], [18, 34, 18]), spring);
  const { icon: Icon, label, href, active, primary } = item;

  const shared = {
    ref: ref as never,
    "aria-label": label,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onFocus: () => setHover(true), onBlur: () => setHover(false),
    className: cn("relative flex items-end justify-center focus-visible:outline-none", item.desktopOnly && "max-sm:hidden"),
  };
  const inner = (
    <>
      <AnimatePresence>
        {hover && (
          <motion.span initial={{ opacity: 0, y: 6, scale: .92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 4, scale: .94 }} transition={{ duration: .16 }}
            className="pointer-events-none absolute -top-9 left-1/2 z-10 w-max -translate-x-1/2 rounded-lg border border-white/80 bg-white/80 px-2.5 py-1 text-[11.5px] font-semibold text-[#111735] shadow-[0_10px_28px_-12px_rgba(17,23,53,.5)] backdrop-blur-xl">
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span style={{ width: size, height: size }}
        className={cn("grid place-items-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_8px_20px_-10px_rgba(17,23,53,.45)] backdrop-blur-md transition-colors",
          primary ? "border-white/20 bg-gradient-to-b from-[#6a6efa] to-[#3f43d8] text-white" : "border-white/80 bg-white/70 text-[#111735]/75 hover:text-[#111735]", active && !primary && "bg-white text-[#4b4fe0]")}>
        <motion.span style={{ width: iconSize, height: iconSize }} className="grid place-items-center"><Icon className="size-full" strokeWidth={1.7} /></motion.span>
      </motion.span>
      {active && <i className="absolute -bottom-[7px] size-1 rounded-full bg-[#4b4fe0]" />}
    </>
  );
  return href
    ? <Link {...shared} href={href} aria-current={active ? "page" : undefined}>{inner}</Link>
    : <button type="button" {...shared} onClick={item.onSelect} aria-pressed={active}>{inner}</button>;
}

/** macOS-style magnifying dock: icons swell as the pointer approaches. */
export function Dock({ items, className }: { items: DockItem[]; className?: string }) {
  const mouseX = useMotionValue(Infinity);
  return (
    <div onMouseMove={(e) => mouseX.set(e.clientX)} onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("flex items-end gap-2 rounded-[16px] border border-white/80 bg-gradient-to-b from-white/70 to-white/40 p-2.5 shadow-[inset_0_1px_0_#fff,0_24px_60px_-24px_rgba(60,63,196,.55)] backdrop-blur-2xl backdrop-saturate-150", className)}
      style={{ height: BASE + 20 }}>
      {items.map((item) => <DockIcon key={item.label} item={item} mouseX={mouseX} />)}
    </div>
  );
}

export function FloatingDock({ items, className }: { items: DockItem[]; className?: string }) {
  return (
    <motion.nav aria-label="Quick navigation"
      initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 sm:bottom-4", className)}>
      <Dock items={items} className="pointer-events-auto" />
    </motion.nav>
  );
}
