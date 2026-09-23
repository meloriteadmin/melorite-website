import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about the custom type scale so `text-h2` isn't mistaken for a colour.
const twMerge = extendTailwindMerge({
  extend: { classGroups: { "font-size": [{ text: ["display", "h1", "h2", "h3", "lead"] }] } },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shared motion constants — keep all component motion on these values. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const DURATION = { micro: 0.2, reveal: 0.55, section: 0.8 } as const;

/** Hex → rgba string helper for accent tints. */
export function tint(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
