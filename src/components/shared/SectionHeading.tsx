import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";

/** Deliberately quiet label; hierarchy comes from type and position, not a badge. */
export function Eyebrow({ children, dark, className }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn("text-[13px] font-medium tracking-[-0.01em]", dark ? "text-white/60" : "text-muted", className)}>{children}</p>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string[];
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  /** h1 for page heroes, h2 for sections (default), h3 for sub-sections. */
  size?: "h1" | "h2" | "h3";
  as?: "h1" | "h2" | "h3";
  className?: string;
  highlight?: string[];
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark,
  size = "h2",
  as,
  className,
  highlight,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex max-w-[820px] flex-col", align === "center" && "mx-auto items-center text-center", className)}>
      {eyebrow && (
        <Reveal y={8} className="mb-5">
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <TextReveal
        as={as ?? (size === "h1" ? "h1" : size === "h3" ? "h3" : "h2")}
        lines={title}
        highlight={highlight}
        className={cn(size === "h1" ? "text-h1" : size === "h3" ? "text-h3" : "text-h2", dark ? "text-white" : "text-navy", "text-balance")}
      />
      {description && (
        <Reveal delay={0.12} y={12}>
          <p className={cn("text-lead mt-6 max-w-[52ch]", dark ? "text-white/65" : "text-muted", align === "center" && "mx-auto")}>{description}</p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.2} y={10} className="mt-8">
          {children}
        </Reveal>
      )}
    </div>
  );
}
