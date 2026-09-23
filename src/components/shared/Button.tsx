import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/animation/Magnetic";

type Variant = "primary" | "secondary" | "outline" | "dark" | "ghost" | "light" | "outline-light" | "text";
type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, "sm" | "default" | "lg"> = { sm: "sm", md: "default", lg: "lg" };

/** Class helper for links styled as buttons — delegates to the shadcn Button variants. */
export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(buttonVariants({ variant, size: SIZE[size] }), className);
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
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

/** Arrow that slides through on hover of the parent `group/btn`. */
export function Arrow({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex size-4 overflow-hidden", className)} aria-hidden>
      <ArrowRight className="absolute inset-0 size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-full" />
      <ArrowRight className="absolute inset-0 size-4 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0" />
    </span>
  );
}

/** Text button — inline link with animated arrow. */
export function TextLink({ href, children, className, dark }: { href: string; children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "text" }),
        "gap-1.5 text-[14.5px]",
        dark && "text-white hover:text-brand-200",
        className,
      )}
    >
      {children}
      <Arrow />
    </Link>
  );
}
