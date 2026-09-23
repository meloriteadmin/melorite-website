"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Search, X } from "lucide-react";
import { productCategories, products, type Product, type ProductCategoryId } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Arrow } from "@/components/shared/Button";
import { cardVariants } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { productSelection, scrollToId } from "@/lib/selection-store";

function explore(id: string) {
  productSelection.set(id);
  scrollToId("showcase");
}

/** Product card — one consistent structure: icon, name, description, key capabilities, CTA. */
function ProductCard({ p }: { p: Product }) {
  const category = productCategories.find((c) => c.id === p.category)!;
  return (
    <motion.article
      layout
      id={`product-${p.id}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={cn(cardVariants({ variant: "interactive", padding: "none" }), "group relative scroll-mt-28 gap-0 overflow-hidden p-6")}
    >
      <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: p.accent }} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-[12px]" style={{ background: tint(p.accent, 0.1), color: p.accent }}>
          <Icon name={p.icon} className="size-[22px]" />
        </span>
        <StatusBadge status={p.status} />
      </div>
      <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-navy">{p.name}</h3>
      <p className="mt-0.5 text-[12.5px] font-medium text-muted">{category.name}</p>
      <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{p.tagline}</p>
      <ul className="mt-5 space-y-2 border-t border-line pt-5" aria-label="Key capabilities">
        {p.capabilities.slice(0, 3).map((c) => (
          <li key={c.title} className="flex items-center gap-2 text-[13.5px] text-slate-700">
            <Check className="size-3.5 shrink-0" style={{ color: p.accent }} aria-hidden />
            {c.title}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => explore(p.id)} className="group/btn mt-6 inline-flex items-center gap-1.5 self-start text-[14px] font-medium text-brand hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 rounded-md">
        Explore {p.shortName} <Arrow />
      </button>
    </motion.article>
  );
}

export function ProductExplorer() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ProductCategoryId | "all">("all");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!s || [p.name, p.shortName, p.tagline, p.description, ...p.modules, ...p.capabilities.map((c) => c.title)].join(" ").toLowerCase().includes(s)),
    );
  }, [q, cat]);
  const activeCategory = productCategories.find((c) => c.id === cat);

  return (
    <section id="explorer" className="section-y scroll-mt-16 border-t border-line bg-paper">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Product explorer" title={[`${products.length} applications.`, "Six areas of your business."]} description="Filter by business area or search by module and capability." />
          <div className="relative w-full lg:max-w-[360px]">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <label htmlFor="product-search" className="sr-only">
              Search applications
            </label>
            <Input id="product-search" type="search" value={q} onChange={(e) => {
                setQ(e.target.value);
                if (e.target.value) setCat("all");
              }} placeholder="Search apps, modules or capabilities" className="pl-10 pr-10" />
            {q && (
              <button type="button" onClick={() => setQ("")} aria-label="Clear search" className="absolute right-2.5 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-accent">
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        <Tabs value={cat} onValueChange={(v) => setCat(v as ProductCategoryId | "all")} className="mt-10">
          <div className="no-scrollbar -mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:px-0">
            <TabsList className="w-max" aria-label="Filter by business area">
              <TabsTrigger value="all">
                All <span className="ml-1 font-mono text-[11px] text-muted">{products.length}</span>
              </TabsTrigger>
              {productCategories.map((c) => (
                <TabsTrigger key={c.id} value={c.id}>
                  <Icon name={c.icon} className="size-4" />
                  {c.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.p key={activeCategory.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-5 text-[14.5px] text-muted">
              {activeCategory.description}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <div className="mt-8 rounded-[16px] border border-line bg-white p-10 text-center">
            <p className="text-[16px] font-medium text-navy">No applications match “{q}”.</p>
            <p className="mt-1 text-[14.5px] text-muted">Try a module name such as “Invoices” or “Timesheets”, or choose All.</p>
          </div>
        )}
      </div>
    </section>
  );
}
