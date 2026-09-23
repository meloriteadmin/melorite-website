import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full px-2.5 py-0.5 text-[12px] font-medium whitespace-nowrap transition-[color,box-shadow,background-color] focus-visible:ring-[3px] focus-visible:ring-ring/35 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-brand-600",
        secondary: "bg-secondary text-secondary-foreground ring-1 ring-border ring-inset",
        outline: "text-slate-600 ring-1 ring-border ring-inset [a&]:hover:bg-accent",
        /** Section label — used above section headings. */
        section:
          "gap-2 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand shadow-[0_1px_2px_rgb(10_37_64/0.05)] ring-1 ring-border ring-inset",
        "section-dark":
          "gap-2 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-200 ring-1 ring-white/15 ring-inset",
        success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15 ring-inset",
        info: "bg-brand-50 text-brand-700 ring-1 ring-brand/15 ring-inset",
        warning: "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20 ring-inset",
        neutral: "bg-slate-100 text-slate-600 ring-1 ring-slate-400/20 ring-inset",
        destructive: "bg-destructive text-white",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
