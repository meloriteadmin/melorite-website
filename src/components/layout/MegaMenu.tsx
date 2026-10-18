import Link from "next/link";
import { Building2, Headset, Megaphone, ShoppingBag, Stethoscope, Users, type LucideIcon } from "lucide-react";
import { products } from "@/data/products";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export const productIcons: Record<string, LucideIcon> = { Users, Building2, Stethoscope, Megaphone, ShoppingBag, Headset };

export function ProductsMenu() {
  return (
    <div className="w-[min(640px,90vw)] p-3 text-[#111735]">
      <div className="mt-2 border-t border-black/[.07] pt-2">
        <NavigationMenuLink asChild><Link href="/products" className="flex-row justify-between rounded-xl px-3 py-2 text-[13px] text-black/60 hover:bg-white/70 hover:text-black">All Products <span aria-hidden>→</span></Link></NavigationMenuLink>
      </div>
      <ul className="grid gap-1 sm:grid-cols-2">
        {products.map((p) => {
          const I = productIcons[p.icon];
          return (
            <li key={p.slug}>
              <NavigationMenuLink asChild>
                <Link href={`/products/${p.slug}`} className="flex-row items-start gap-3 rounded-2xl p-3 hover:bg-white/70">
                  <span className="icon-chip !size-9 !rounded-xl shrink-0"><I className="size-4" /></span>
                  <span><span className="block text-[14px] font-medium">{p.short}</span><span className="mt-0.5 block text-[12px] leading-snug text-black/50">{p.summary}</span></span>
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const secondaryMenus = {
  resources: [
    ["Blog", "/resources/blog", "Practical ideas for everyday business operations."],
    ["Guides", "/resources/guides", "Work through a complete business process."],
    ["Case Studies", "/resources/case-studies", "Customer stories and verified outcomes."],
  ],
  company: [
    ["About Melorite", "/company", "What we build, why we exist and how we work."],
    ["Contact", "/contact", "Talk to our team about a product or your workflow."],
  ],
} as const;

export function SimpleMenu({ type }: { type: keyof typeof secondaryMenus }) {
  return (
    <div className="w-[min(390px,90vw)] p-3 text-[#111735]">
      <ul className="space-y-1">
        {secondaryMenus[type].map(([label, href, description]) => (
          <li key={href}>
            <NavigationMenuLink asChild>
              <Link href={href} className="block rounded-2xl p-3 hover:bg-white/70">
                <span className="block text-[14px] font-medium">{label}</span>
                <span className="mt-1 block text-[12px] leading-snug text-black/50">{description}</span>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
