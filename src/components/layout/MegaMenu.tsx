import Link from "next/link";
import { Building2, Headset, Megaphone, ShoppingBag, Stethoscope, Users, type LucideIcon } from "lucide-react";
import { products } from "@/data/products";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export const productIcons: Record<string, LucideIcon> = { Users, Building2, Stethoscope, Megaphone, ShoppingBag, Headset };

export function ProductsMenu() {
  return (
    <div className="w-[min(640px,90vw)] p-3 text-[#111735]">
      <ul className="grid gap-1 sm:grid-cols-2">
        {products.map((p) => {
          const I = productIcons[p.icon];
          return (
            <li key={p.slug}>
              <NavigationMenuLink asChild>
                <Link href={`/products/${p.slug}`} className="flex-row items-start gap-3 rounded-md p-3 hover:bg-black/[.04]">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md bg-[#eeeffe] text-[#4b4fe0]"><I className="size-4" /></span>
                  <span><span className="block text-[14px] font-medium">{p.name}</span><span className="mt-0.5 block text-[12px] leading-snug text-black/50">{p.summary}</span></span>
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-2 border-t border-black/[.07] pt-2">
        <NavigationMenuLink asChild><Link href="/products" className="flex-row justify-between rounded-md px-3 py-2 text-[13px] text-black/60 hover:bg-black/[.04] hover:text-black">View all products <span aria-hidden>→</span></Link></NavigationMenuLink>
      </div>
    </div>
  );
}
