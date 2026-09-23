import Image from "next/image";
import { cn } from "@/lib/utils";

/** Melorite wordmark (approved brand asset, 1200×260). */
export function Logo({ white, className, priority }: { white?: boolean; className?: string; priority?: boolean }) {
  return (
    <Image
      src={white ? "/brand/melorite-logo-white.png" : "/brand/melorite-logo.png"}
      alt="Melorite"
      width={1200}
      height={260}
      priority={priority}
      className={cn("h-[26px] w-auto", className)}
    />
  );
}

/** The "M" symbol drawn as vector geometry — used for favicons, hubs and small marks. */
export function LogoMark({ className, color = "#0025CC" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 351 256" className={className} aria-hidden fill={color}>
      <rect x="0" y="133" width="105" height="123" rx="2" />
      <path d="M0 0h135l107 131-78 65z" />
      <path d="M248 86 351 1v255H248z" />
    </svg>
  );
}
