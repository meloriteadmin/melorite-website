"use client";

import { motion } from "motion/react";

/** Thick glossy ribbon in brand indigo, drawn as layered strokes for a 3D tube feel. */
function Ribbon({ d, w, delay = 0 }: { d: string; w: number; delay?: number }) {
  return (
    <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 9, delay, repeat: Infinity, ease: "easeInOut" }}>
      <path d={d} fill="none" stroke="#4a4ee0" strokeWidth={w + 6} strokeLinecap="round" opacity=".55" />
      <path d={d} fill="none" stroke="url(#rib)" strokeWidth={w} strokeLinecap="round" />
      <path d={d} fill="none" stroke="url(#hi)" strokeWidth={w * 0.34} strokeLinecap="round" transform={`translate(${-w * 0.12} ${-w * 0.2})`} opacity=".85" filter="url(#soft)" />
    </motion.g>
  );
}

/** Shared indigo ribbon backdrop used by the home hero and every inner-page hero. */
export function RibbonScene() {
  return (
    <svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-x-0 -top-[16%] h-[116%] w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_26%,black_100%)]" aria-hidden>
      <defs>
        <linearGradient id="rib" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a5a8ff" /><stop offset=".45" stopColor="#5f63f2" /><stop offset="1" stopColor="#3a3ec9" />
        </linearGradient>
        <linearGradient id="hi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".9" /><stop offset="1" stopColor="#c9cbff" stopOpacity=".1" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <Ribbon d="M860 330 C1040 -40, 1540 -60, 1650 260 C1730 500, 1400 700, 1230 480" w={200} />
      <Ribbon d="M-100 330 C60 130, 330 580, 640 420" w={180} delay={1.5} />
      <Ribbon d="M-60 640 C150 500, 330 760, 520 660" w={130} delay={3} />
    </svg>
  );
}
