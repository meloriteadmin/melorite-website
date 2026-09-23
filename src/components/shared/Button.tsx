import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animation/Magnetic";

type Variant = "primary" | "secondary" | "dark" | "ghost" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_1px_0_rgb(255_255_255/0.2)_inset,0_8px_20px_-8px_rgb(37_99_235/0.7)] hover:bg-brand-600",
  secondary: "bg-white text-navy ring-1 ring-line-strong hover:ring-navy/30 hover:bg-paper",
  dark: "bg-navy text-white hover:bg-navy-800",
  ghost: "text-navy hover:bg-navy/5",
  light: "bg-white text-navy hover:bg-brand-50",
  "outline-light": "text-white ring-1 ring-white/25 hover:bg-white/10 hover:ring-white/40",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13.5px] gap-1.5 rounded-[10px]",
  md: "h-11 px-5 text-[15px] gap-2 rounded-[11px]",
  lg: "h-[52px] px-6 text-[15.5px] gap-2.5 rounded-[12px]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(
    "group/btn relative inline-flex select-none items-center justify-center whitespace-nowrap font-medium tracking-[-0.01em] transition-[background-color,box-shadow,color,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
  prefetch?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", size = "md", arrow = false, magnetic = false, className }: ButtonLinkProps) {
  const link = (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </Link>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}

/** Arrow that slides on hover of the parent `group/btn`. */
export function Arrow({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex size-4 overflow-hidden", className)} aria-hidden>
      <ArrowRight className="absolute inset-0 size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-full" />
      <ArrowRight className="absolute inset-0 size-4 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0" />
    </span>
  );
}

/** Inline text link with animated arrow. */
export function TextLink({ href, children, className, dark }: { href: string; children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "group/btn inline-flex items-center gap-1.5 text-[15px] font-medium tracking-[-0.01em] transition-colors",
        dark ? "text-white hover:text-brand-200" : "text-brand hover:text-brand-700",
        className,
      )}
    >
      {children}
      <Arrow />
    </Link>
  );
}
