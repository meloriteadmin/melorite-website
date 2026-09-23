import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";

export function Eyebrow({ children, dark, className }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em]",
        dark ? "text-brand-200" : "text-brand",
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-[2px]", dark ? "bg-brand-200" : "bg-brand")} aria-hidden />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string[];
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  size?: "h1" | "h2";
  as?: "h1" | "h2";
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
  as = "h2",
  className,
  highlight,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-5", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <Reveal y={10}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <TextReveal
        as={as}
        lines={title}
        highlight={highlight}
        className={cn(size === "h1" ? "text-h1" : "text-h2", dark ? "text-white" : "text-navy", "text-balance")}
      />
      {description && (
        <Reveal delay={0.15} y={14}>
          <p className={cn("text-lead max-w-[46ch]", dark ? "text-white/65" : "text-muted", align === "center" && "mx-auto")}>{description}</p>
        </Reveal>
      )}
      {children && <Reveal delay={0.25} y={12}>{children}</Reveal>}
    </div>
  );
}
