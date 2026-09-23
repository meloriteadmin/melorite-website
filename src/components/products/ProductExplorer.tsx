"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X } from "lucide-react";
import { productCategories, products, type Product } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Arrow } from "@/components/shared/Button";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";
import { productSelection, scrollToId } from "@/lib/selection-store";

function explore(id: string) {
  productSelection.set(id);
  scrollToId("showcase");
}

function ProductCard({ p, large }: { p: Product; large?: boolean }) {
  const category = productCategories.find((c) => c.id === p.category)!;
  return (
    <motion.article
      layout
      id={`product-${p.id}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: EASE }}
      className={cn(
        "group relative flex scroll-mt-28 flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(10,37,64,0.35)]",
        large && "md:col-span-2",
      )}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: p.accent }} aria-hidden />
      <div className={cn("flex flex-1 flex-col p-6", large && "md:grid md:grid-cols-[1fr_1.25fr] md:gap-6")}>
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <span className="grid size-11 place-items-center rounded-[12px] transition-transform duration-500 group-hover:scale-105" style={{ background: tint(p.accent, 0.1), color: p.accent }}>
              <Icon name={p.icon} className="size-[22px]" />
            </span>
            <StatusBadge status={p.status} />
          </div>
          <div className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">{category.name}</div>
          <h3 className="mt-1.5 text-[20px] font-semibold tracking-[-0.02em] text-navy">{p.shortName === p.name ? p.name : `${p.shortName}`}</h3>
          {p.shortName !== p.name && <div className="text-[13px] text-muted">{p.name}</div>}
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{p.tagline}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key capabilities">
            {p.capabilities.slice(0, large ? 5 : 3).map((c) => (
              <li key={c.title} className="rounded-full bg-paper px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-line">
                {c.title}
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => explore(p.id)} className="group/btn mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-[14.5px] font-medium text-brand hover:text-brand-700">
            Explore {p.shortName} <Arrow />
          </button>
        </div>
        {large && (
          <div className="relative mt-6 hidden md:mt-0 md:block">
            <div className="absolute left-2 top-2 w-[150%] origin-top-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
              <WorkspaceMock product={p} chrome={false} />
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function ProductExplorer() {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState(productCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter((p) => [p.name, p.shortName, p.tagline, p.description, ...p.modules, ...p.capabilities.map((c) => c.title)].join(" ").toLowerCase().includes(s));
  }, [q]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveCat((e.target as HTMLElement).dataset.cat as typeof activeCat)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    Object.values(sectionRefs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [filtered]);

  return (
    <section id="explorer" className="section-y scroll-mt-16 bg-paper">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Product explorer" title={[`${products.length} applications.`, "Six areas of your business."]} />
          <div className="relative w-full lg:max-w-[380px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted" aria-hidden />
            <label htmlFor="product-search" className="sr-only">
              Search applications
            </label>
            <input
              id="product-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search apps, modules or capabilities"
              className="h-12 w-full rounded-[12px] bg-white pl-11 pr-10 text-[15px] text-navy ring-1 ring-line-strong placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand"
            />
            {q && (
              <button type="button" onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-paper">
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Category navigation */}
          <nav aria-label="Product categories" className="lg:col-span-3">
            <ul className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:sticky lg:top-28 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
              {productCategories.map((c) => {
                const count = filtered.filter((p) => p.category === c.id).length;
                const on = activeCat === c.id;
                return (
                  <li key={c.id} className="shrink-0">
                    <button
                      type="button"
                      disabled={count === 0}
                      onClick={() => scrollToId(`cat-${c.id}`)}
                      aria-current={on ? "true" : undefined}
                      className={cn(
                        "relative flex w-full items-center gap-3 rounded-[12px] px-3.5 py-2.5 text-left text-[14.5px] font-medium transition-colors disabled:opacity-40",
                        on ? "text-navy" : "text-slate-500 hover:text-navy",
                      )}
                    >
                      {on && <motion.span layoutId="cat-active" className="absolute inset-0 rounded-[12px] bg-white shadow-soft ring-1 ring-line" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                      <Icon name={c.icon} className="relative size-4" />
                      <span className="relative whitespace-nowrap">{c.name}</span>
                      <span className="relative ml-auto hidden font-mono text-[12px] text-muted lg:inline">{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Catalog */}
          <div className="space-y-16 lg:col-span-9">
            {filtered.length === 0 && (
              <div className="rounded-[20px] bg-white p-10 text-center ring-1 ring-line">
                <p className="text-[16px] font-medium text-navy">No applications match “{q}”.</p>
                <p className="mt-1 text-[14.5px] text-muted">Try a module name such as “Invoices” or “Timesheets”.</p>
              </div>
            )}
            {productCategories.map((c) => {
              const items = filtered.filter((p) => p.category === c.id);
              if (!items.length) return null;
              return (
                <section
                  key={c.id}
                  id={`cat-${c.id}`}
                  data-cat={c.id}
                  ref={(el) => {
                    sectionRefs.current[c.id] = el;
                  }}
                  aria-labelledby={`cat-h-${c.id}`}
                  className="scroll-mt-28"
                >
                  <div className="mb-5 flex items-end justify-between gap-4 border-b border-line pb-4">
                    <div>
                      <h3 id={`cat-h-${c.id}`} className="text-[22px] font-semibold tracking-[-0.025em] text-navy">{c.name}</h3>
                      <p className="mt-1 text-[14.5px] text-muted">{c.description}</p>
                    </div>
                  </div>
                  <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                      {items.map((p, i) => (
                        <ProductCard key={p.id} p={p} large={!q && i === 0 && items.length % 2 === 1} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
