import Link from "next/link";
import { ArrowRight, Building2, Headset, Megaphone, ShoppingBag, Stethoscope, Users, X, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import { products, type Product } from "@/data/products";
import { LogoMark } from "@/components/shared/Logo";
import { CitySky, MountainSky } from "./Scenery";
import { RecordCard } from "./RecordCard";
import { Reveal } from "@/components/animation/Reveal";

export const icons: Record<Product["icon"], LucideIcon> = { Users, Building2, Stethoscope, Megaphone, ShoppingBag, Headset };

/** Dark skyline hero: eyebrow, serif headline and a data card on the right. */
export function CityHero({ eyebrow, icon: Icon, title, lead, slug, cta = "Book a demo" }: { eyebrow: string; icon?: LucideIcon; title: React.ReactNode; lead: string; slug: string; cta?: string }) {
  return (
    <section data-nav="light" className="rails relative isolate overflow-hidden bg-[#15171b] pt-[60px] text-[#111735]">
      <CitySky className="absolute inset-0 -z-10 size-full" />
      <div className="hero-fade absolute inset-0 -z-10" />
      <div className="rail-inner grid min-h-[min(900px,calc(100svh-60px))] items-end gap-12 pb-[clamp(48px,7vw,96px)] pt-[clamp(72px,12vw,180px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:items-center lg:gap-[clamp(32px,6vw,110px)]">
        <div className="max-w-[580px]">
          <p className="mono-label flex items-center gap-2.5 text-[#111735]/65">
            {Icon ? <Icon className="size-[18px]" strokeWidth={1.6} /> : <LogoMark tone="light" className="w-[22px]" />}
            {eyebrow}
          </p>
          <h1 className="h-hero mt-7">{title}</h1>
          <p className="mt-7 max-w-[46ch] text-[clamp(1rem,.9rem+.4vw,1.2rem)] leading-[1.55] text-[#111735]/65">{lead}</p>
          <Link href={site.demoHref} className="pill pill-dark mt-9 h-[46px] px-6 text-[15px]">{cta}<ArrowRight className="size-3.5" /></Link>
        </div>
        <RecordCard slug={slug} className="w-full" />
      </div>
    </section>
  );
}

/** Centered statement over an alpenglow peak. */
export function MountainHero({ lead, soft, sub }: { lead: string; soft: string; sub: string }) {
  return (
    <section data-nav="light" className="relative isolate overflow-hidden bg-[#22394b] pt-[60px] text-[#111735]">
      <div className="relative mx-3 mt-3 min-h-[min(760px,calc(100svh-90px))] overflow-hidden rounded-[2px] md:mx-[18px]">
        <MountainSky className="absolute inset-0 size-full" />
        <div className="relative flex min-h-[inherit] flex-col items-center justify-center px-6 pb-[16vh] pt-24 text-center">
          <h1 className="h-hero max-w-[18ch] sm:max-w-[22ch]">{lead}<br /><span className="text-[#111735]/65">{soft}</span></h1>
          <p className="mt-8 max-w-[56ch] text-[clamp(.95rem,.9rem+.25vw,1.1rem)] text-[#111735]/70">{sub}</p>
        </div>
      </div>
    </section>
  );
}

/** Light page intro for inner pages. */
export function PageIntro({ label, title, lead, cta }: { label: string; title: React.ReactNode; lead?: string; cta?: boolean }) {
  return (
    <section className="rails rails-light bg-pg pt-[60px]">
      <div className="rail-inner pb-[clamp(56px,7vw,100px)] pt-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mono-label text-muted">{label}</p>
          <h1 className="h-hero mt-6 max-w-[16ch]">{title}</h1>
          {lead && <p className="mt-7 max-w-[54ch] text-[clamp(1.02rem,.95rem+.3vw,1.2rem)] leading-[1.55] text-muted">{lead}</p>}
          {cta && <Link href={site.demoHref} className="pill pill-dark mt-9 h-[46px] px-6">Book a demo<ArrowRight className="size-3.5" /></Link>}
        </div>
      </div>
    </section>
  );
}

/** Page body inside the vertical rails. */
export function Rail({ children, grey, className = "", id }: { children: React.ReactNode; grey?: boolean; className?: string; id?: string }) {
  return (
    <section id={id} className={`rails rails-light ${grey ? "bg-pg-grey" : "bg-pg"} ${className}`}>
      <div className="rail-inner"><div className="mx-auto max-w-[1200px]">{children}</div></div>
    </section>
  );
}

/** "The problem ———————  [button]" */
export function SectionHead({ label, cta }: { label: string; cta?: boolean }) {
  return (
    <div className="flex items-center gap-5">
      <h2 className="font-serif text-[22px] tracking-[-0.02em] text-ink">{label}</h2>
      <span className="h-px flex-1 bg-line" />
      {cta && <Link href={site.demoHref} className="pill pill-dark pill-sm">Book a demo</Link>}
    </div>
  );
}

/** Aira's "stale record": what the business looks like without the product. */
export function StaleCard({ pain }: { pain: string }) {
  const rows: [string, string][] = [["Last call back", "Unknown"], ["Next step", "Unknown"], ["Owner", "Unknown"], ["Payment status", "Unknown"], ["History", "Unknown"], ["Notes", "Unknown"]];
  return (
    <div className="overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_1px_2px_rgba(0,0,0,.03)]">
      <div className="flex items-start justify-between border-b border-line px-5 py-4">
        <div><p className="text-[15px] font-medium">Customer record</p><p className="text-[12px] text-muted">Kept in a notebook · last touched weeks ago</p></div>
        <span className="mono-label flex items-center gap-1.5 rounded-[3px] border border-coral/50 bg-[#fdf1ed] px-2 py-1 !text-[9.5px] text-coral"><i className="size-1.5 rounded-full bg-coral" />Stale</span>
      </div>
      <div className="grid grid-cols-2">
        {rows.map(([k, v], i) => (
          <div key={k} className={`border-b border-line px-5 py-3.5 ${i % 2 ? "border-l" : ""}`}>
            <p className="mono-label !text-[9.5px] text-muted/80">{k}</p>
            <p className="mt-1 text-[14px] italic text-muted/55">{v}</p>
          </div>
        ))}
      </div>
      <p className="flex items-center gap-2.5 bg-[#fdf6f3] px-5 py-3.5 text-[12.5px] text-muted"><X className="size-3.5 shrink-0 text-coral" />{pain}</p>
    </div>
  );
}

/** Two-column solution card with a coloured dot and mono sub-label. */
export function SolutionCard({ dot, title, sub, children }: { dot: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="bg-white px-7 py-8 sm:px-9">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
        <i className="size-2.5 rounded-full" style={{ background: dot }} />
        <span className="font-mono">{title}</span>
        <span className="h-3.5 w-px bg-line" />
        <span className="mono-label !text-[10.5px] text-muted">{sub}</span>
      </p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/** Numbered 2-col list of capabilities. */
export function Capabilities({ items }: { items: string[] }) {
  return (
    <ul className="grid card-grid sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={t} className="flex gap-5 card px-6 py-7">
          <span className="mono-label pt-1 !text-[10.5px] text-muted/70">0{i + 1}</span>
          <span className="text-[17px] leading-snug text-ink">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Product tile in the style of Aira's news cards. */
export function ProductTile({ p }: { p: Product }) {
  const I = icons[p.icon];
  return (
    <Link href={`/products/${p.slug}`} className="group block">
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#e9e7e3] to-[#dcd9d4] transition-colors group-hover:from-[#e4e2dd]">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(232,130,106,.28),transparent_55%),radial-gradient(circle_at_20%_85%,rgba(86,194,184,.28),transparent_55%)]" />
        <span className="relative grid size-[72px] place-items-center rounded-full bg-white text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,.25)] transition-transform duration-500 group-hover:scale-105"><I className="size-8" strokeWidth={1.4} /></span>
      </div>
      <p className="mono-label mt-5 !text-[10.5px] text-muted">{p.kicker}</p>
      <h3 className="h-card mt-2">{p.name}</h3>
      <p className="mt-3 max-w-[40ch] text-[15px] leading-snug text-muted">{p.summary}</p>
    </Link>
  );
}

export function ProductGrid() {
  return (
    <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.06}><ProductTile p={p} /></Reveal>)}
    </div>
  );
}

/** Closing call to action. */
export function CTA({ title = "See it for yourself.", body = "Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." }: { title?: string; body?: string }) {
  return (
    <section data-nav="light" className="rails relative isolate overflow-hidden bg-[#15171b] text-[#111735]">
      <CitySky className="absolute inset-0 -z-10 size-full opacity-70" />
      <div className="hero-fade absolute inset-0 -z-10" />
      <div className="rail-inner flex flex-col items-start gap-10 py-[clamp(72px,9vw,140px)] lg:flex-row lg:items-end lg:justify-between">
        <div className="mx-auto w-full max-w-[1200px] lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div>
            <h2 className="h-hero max-w-[12ch]">{title}</h2>
            <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-[#111735]/65">{body}</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3 lg:mt-0">
            <Link href={site.demoHref} className="pill pill-dark h-[48px] px-7">Book a demo<ArrowRight className="size-3.5" /></Link>
            <Link href={site.salesHref} className="pill pill-ghost-dark h-[48px] px-7">Talk to sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
