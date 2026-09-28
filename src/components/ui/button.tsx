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
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium tracking-[-0.01em] whitespace-nowrap select-none transition-[background-color,border-color,color,transform] duration-200 ease-out outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-55 aria-invalid:ring-destructive/25 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-[#dfe9ff] text-[#213b72] ring-1 ring-[#c8d8fb] ring-inset hover:bg-[#d3e1ff]",
        default:
          "bg-[#dfe9ff] text-[#213b72] ring-1 ring-[#c8d8fb] ring-inset hover:bg-[#d3e1ff]",
        secondary: "bg-white text-navy ring-1 ring-border ring-inset hover:bg-paper hover:ring-line-strong",
        outline: "bg-transparent text-navy ring-1 ring-line-strong ring-inset hover:bg-accent",
        ghost: "text-slate-700 hover:bg-accent hover:text-navy",
        text: "h-auto px-0 text-primary hover:text-brand-700 active:scale-100",
        link: "h-auto px-0 text-primary underline-offset-4 hover:underline active:scale-100",
        dark: "bg-[#e8e3ff] text-[#43386f] ring-1 ring-[#d8cff8] ring-inset hover:bg-[#ddd5fb]",
        light: "bg-white text-navy hover:bg-fog-white",
        "outline-light": "text-white ring-1 ring-white/25 ring-inset hover:bg-white/10 hover:ring-white/40",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-3.5 text-[13px] has-[>svg]:px-3",
        default: "h-11 px-4.5 text-[14px] has-[>svg]:px-4",
        lg: "h-[46px] px-5 text-[14.5px] has-[>svg]:px-4.5",
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
