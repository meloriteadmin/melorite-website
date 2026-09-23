import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Melorite button system (shadcn/ui base).
 * primary · secondary · outline · ghost · text · dark · light · outline-light
 * All variants share radius, focus ring, disabled and pressed states.
 */
const buttonVariants = cva(
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] font-medium tracking-[-0.01em] whitespace-nowrap select-none transition-[background-color,color,box-shadow,transform] duration-200 ease-out outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-55 aria-invalid:ring-destructive/25 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_1px_2px_rgb(10_37_64/0.16)] hover:bg-brand-600 hover:shadow-[0_3px_8px_rgb(37_99_235/0.22)]",
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_2px_rgb(10_37_64/0.16)] hover:bg-brand-600 hover:shadow-[0_3px_8px_rgb(37_99_235/0.22)]",
        secondary:
          "bg-white text-navy shadow-[0_1px_2px_rgb(10_37_64/0.06)] ring-1 ring-border ring-inset hover:bg-paper hover:ring-line-strong",
        outline: "bg-transparent text-navy ring-1 ring-line-strong ring-inset hover:bg-accent",
        ghost: "text-slate-700 hover:bg-accent hover:text-navy",
        text: "h-auto px-0 text-primary hover:text-brand-700 active:scale-100",
        link: "h-auto px-0 text-primary underline-offset-4 hover:underline active:scale-100",
        dark: "bg-navy text-white hover:bg-navy-800",
        light: "bg-white text-navy hover:bg-brand-50",
        "outline-light": "text-white ring-1 ring-white/25 ring-inset hover:bg-white/10 hover:ring-white/40",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-3.5 text-[13.5px] has-[>svg]:px-3",
        default: "h-10 px-4 text-[14.5px] has-[>svg]:px-3.5",
        lg: "h-12 px-5 text-[15px] has-[>svg]:px-4.5",
        xs: "h-7 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        icon: "size-10",
        "icon-xs": "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    compoundVariants: [
      { variant: "text", className: "h-auto px-0" },
      { variant: "link", className: "h-auto px-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
