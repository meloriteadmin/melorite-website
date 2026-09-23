import Image from "next/image";
import { cn } from "@/lib/utils";

/** Melorite wordmark (official logo; 1200×253 source). `white` for dark surfaces. */
export function Logo({ white, className, priority }: { white?: boolean; className?: string; priority?: boolean }) {
  return (
    <Image
      src={white ? "/brand/melorite-wordmark-white.png" : "/brand/melorite-wordmark.png"}
      alt="Melorite"
      width={240}
      height={51}
      priority={priority}
      className={cn("h-[24px] w-auto", className)}
    />
  );
}

/**
 * The "m" symbol from the official logo (with its red accent) — used for hubs,
 * small marks and icons. Pass a white `color` (or `tone="light"`) on dark surfaces.
 */
export function LogoMark({ className, color, tone }: { className?: string; color?: string; tone?: "light" | "dark" }) {
  const light = tone === "light" || (color ? /^#?f{3}(f{3})?$/i.test(color.replace("#", "")) || color.toLowerCase() === "white" : false);
  return (
    <Image
      src={light ? "/brand/melorite-mark-white.png" : "/brand/melorite-mark.png"}
      alt=""
      aria-hidden
      width={246}
      height={155}
      className={cn("h-auto", className)}
    />
  );
}
