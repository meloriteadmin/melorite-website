import Link from "next/link";
import { productCategories, productsByCategory, products } from "@/data/products";
import { industryGroups, industriesByGroup, industries, type IndustryGroupId } from "@/data/industries";
import type { ProductCategoryId } from "@/data/products";
import { productHref, solutionHref } from "@/data/navigation";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { Arrow } from "@/components/shared/Button";
import { IndustryVisual } from "@/components/mockups/IndustryVisual";

/** Groups stacked into three balanced columns (by item count) so the menu stays compact. */
const PRODUCT_COLUMNS: ProductCategoryId[][] = [["customers", "people"], ["finance-supply", "delivery"], ["growth", "intelligence"]];
const SOLUTION_COLUMNS: IndustryGroupId[][] = [["healthcare", "property"], ["supply-chain", "community"], ["services"]];

function MenuItem({ href, icon, accent, title, description }: { href: string; icon: string; accent: string; title: string; description: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="group flex-row items-start gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-[8px] ring-1 ring-inset transition-transform duration-300 group-hover:scale-105" style={{ background: tint(accent, 0.08), color: accent, boxShadow: `inset 0 0 0 1px ${tint(accent, 0.14)}` }}>
          <Icon name={icon} className="size-4" style={{ color: accent }} />
        </span>
        <span className="min-w-0">
          <span className="block text-[14px] font-medium leading-5 text-navy">{title}</span>
          <span className="line-clamp-1 text-[12.5px] leading-5 text-muted">{description}</span>
        </span>
      </Link>
    </NavigationMenuLink>
  );
}

export function ProductsMenu() {
  return (
    <div className="grid w-[min(1060px,calc(100vw-3rem))] grid-cols-[1fr_260px]">
      <div className="grid grid-cols-3 gap-x-4 p-6">
        {PRODUCT_COLUMNS.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-5">
            {col.map((id) => {
              const cat = productCategories.find((c) => c.id === id)!;
              return (
                <div key={cat.id}>
                  <div className="mb-1 px-2.5 text-[11.5px] font-medium uppercase tracking-[0.08em] text-slate-400">{cat.name}</div>
                  <ul>
                    {productsByCategory(cat.id).map((p) => (
                      <li key={p.id}>
                        <MenuItem href={productHref(p.id)} icon={p.icon} accent={p.accent} title={p.shortName === "CRM" || p.shortName === "HR" ? p.name : p.shortName} description={p.tagline} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between border-l border-line bg-paper p-6">
        <div>
          <p className="text-[15px] font-semibold tracking-[-0.01em] text-navy">{products.length} applications, one workspace</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted">Start with one app and add more to the same organization as you grow.</p>
          <div className="mt-5 grid grid-cols-4 gap-2" aria-hidden>
            {products.slice(0, 12).map((p) => (
              <span key={p.id} className="grid aspect-square place-items-center rounded-[8px] bg-white ring-1 ring-line">
                <Icon name={p.icon} className="size-4" style={{ color: p.accent }} />
              </span>
            ))}
          </div>
        </div>
        <NavigationMenuLink asChild>
          <Link href="/products" className="group/btn mt-6 flex-row items-center gap-1.5 px-0 text-[14px] font-medium text-brand hover:bg-transparent hover:text-brand-700 focus:bg-transparent">
            View all products <Arrow />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}

export function SolutionsMenu() {
  const feature = industries.find((i) => i.id === "manufacturing")!;
  return (
    <div className="grid w-[min(1060px,calc(100vw-3rem))] grid-cols-[1fr_280px]">
      <div className="grid grid-cols-3 gap-x-4 p-6">
        {SOLUTION_COLUMNS.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-5">
            {col.map((id) => {
              const g = industryGroups.find((x) => x.id === id)!;
              return (
                <div key={g.id}>
                  <div className="mb-1 px-2.5 text-[11.5px] font-medium uppercase tracking-[0.08em] text-slate-400">{g.name}</div>
                  <ul>
                    {industriesByGroup(g.id).map((ind) => (
                      <li key={ind.id}>
                        <MenuItem href={solutionHref(ind.id)} icon={ind.icon} accent={ind.accent} title={ind.name} description={ind.description} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex flex-col border-l border-line bg-paper p-5">
        <IndustryVisual industry={feature} className="aspect-[16/10] rounded-[12px]" sizes="280px" />
        <p className="mt-4 text-[15px] font-semibold tracking-[-0.01em] text-navy">Built on the same connected apps</p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{industries.length} industry solutions extend CRM, Finance, Inventory, HR and more — never copies of them.</p>
        <NavigationMenuLink asChild>
          <Link href="/solutions" className="group/btn mt-auto flex-row items-center gap-1.5 px-0 pt-5 text-[14px] font-medium text-brand hover:bg-transparent hover:text-brand-700 focus:bg-transparent">
            Explore all solutions <Arrow />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}
