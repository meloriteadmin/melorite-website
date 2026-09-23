import Link from "next/link";
import { productCategories, productsByCategory } from "@/data/products";
import { industryGroups, industriesByGroup } from "@/data/industries";
import { productHref, solutionHref } from "@/data/navigation";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { TextLink } from "@/components/shared/Button";
import { LauncherMock } from "@/components/mockups/WorkspaceMock";
import { products } from "@/data/products";

export function ProductsMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-9 grid grid-cols-3 gap-x-6 gap-y-7">
        {productCategories.map((cat) => (
          <div key={cat.id}>
            <div className="mb-2.5 px-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">{cat.name}</div>
            <ul className="space-y-0.5">
              {productsByCategory(cat.id).map((p) => (
                <li key={p.id}>
                  <Link
                    href={productHref(p.id)}
                    onClick={onNavigate}
                    className="group flex items-start gap-3 rounded-[10px] p-2 transition-colors hover:bg-paper focus-visible:bg-paper"
                  >
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-[8px] transition-transform duration-300 group-hover:scale-105"
                      style={{ background: tint(p.accent, 0.1), color: p.accent }}
                    >
                      <Icon name={p.icon} className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14px] font-medium text-navy">{p.shortName === p.name ? p.name : `${p.shortName}`}</span>
                      <span className="line-clamp-1 block text-[12.5px] text-muted">{p.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="col-span-3 flex flex-col justify-between rounded-[16px] bg-paper p-5 ring-1 ring-line">
        <div>
          <LauncherMock apps={products.slice(0, 6)} chrome={false} className="pointer-events-none" title="Workspace" />
          <p className="mt-4 text-[15px] font-medium tracking-[-0.01em] text-navy">16 business applications, one workspace.</p>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">Start with one app and add more to the same organization as you grow.</p>
        </div>
        <TextLink href="/products" className="mt-4 text-[14px]">
          <span onClick={onNavigate}>View all products</span>
        </TextLink>
      </div>
    </div>
  );
}

export function SolutionsMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-9 grid grid-cols-3 gap-x-6 gap-y-7">
        {industryGroups.map((g) => (
          <div key={g.id}>
            <div className="mb-2.5 px-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">{g.name}</div>
            <ul className="space-y-0.5">
              {industriesByGroup(g.id).map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={solutionHref(ind.id)}
                    onClick={onNavigate}
                    className="group flex items-center gap-3 rounded-[10px] p-2 transition-colors hover:bg-paper focus-visible:bg-paper"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-[8px]" style={{ background: tint(ind.accent, 0.1), color: ind.accent }}>
                      <Icon name={ind.icon} className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14px] font-medium text-navy">{ind.name}</span>
                      <span className="line-clamp-1 block text-[12.5px] text-muted">{ind.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[16px] bg-navy p-5 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <div className="relative">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-200">Industry solutions</span>
          <p className="mt-3 text-[18px] font-medium leading-snug tracking-[-0.02em]">Industry workflows on top of the same connected apps.</p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/60">15 industry packs extend CRM, Finance, Inventory, HR and more — never forks of them.</p>
        </div>
        <TextLink href="/solutions" dark className="relative mt-6 text-[14px]">
          <span onClick={onNavigate}>Explore all solutions</span>
        </TextLink>
      </div>
    </div>
  );
}
