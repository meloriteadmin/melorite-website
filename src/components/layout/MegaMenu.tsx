"use client";

import Link from "next/link";
import { useState } from "react";
import { businessApplications, industrySolutions } from "@/data/catalog";
import { detailsFor } from "@/data/catalog-content";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Arrow } from "@/components/shared/Button";

function Item({ href, title, description, icon = "ArrowUpRight", accent = "#2563eb", onFocus, onMouseEnter }: { href: string; title: string; description: string; icon?: string; accent?: string; onFocus?: () => void; onMouseEnter?: () => void }) {
  return <NavigationMenuLink asChild><Link href={href} onFocus={onFocus} onMouseEnter={onMouseEnter} className="group flex-row items-start gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-lg" style={{ background: tint(accent,.1), color: accent }}><Icon name={icon} className="size-4" /></span><span><span className="block text-sm font-medium text-navy">{title}</span><span className="block text-[12px] leading-5 text-muted">{description}</span></span></Link></NavigationMenuLink>;
}

export function ProductsMenu() {
  const [active, setActive] = useState(businessApplications[0].slug);
  const product = businessApplications.find(item => item.slug === active) ?? businessApplications[0];
  const details = detailsFor(product.slug);
  return <div className="w-[min(980px,calc(100vw-3rem))] p-5"><div className="grid grid-cols-[1.25fr_.75fr] gap-5"><div><div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[.1em] text-slate-400">Business applications</div><div className="grid grid-cols-2 gap-1">{businessApplications.map(item => <Item key={item.slug} href={`/products/${item.slug}`} title={item.name} description={item.eyebrow} icon={item.icon} accent={item.accent} onFocus={()=>setActive(item.slug)} onMouseEnter={()=>setActive(item.slug)}/>)}</div><div className="mb-2 mt-4 px-2 text-[11px] font-semibold uppercase tracking-[.1em] text-slate-400">Melorite AI</div><div className="grid grid-cols-2 gap-1"><Item href="/ai/agent" title="AI Agent" description="Ask, understand and act across the workspace." icon="Sparkles"/><Item href="/ai/calling" title="AI Calling" description="Conversations with structured follow-through." icon="PhoneCall" accent="#a0278c"/></div></div><div className="rounded-xl border border-line bg-paper p-4"><div className="flex items-center gap-2"><Icon name={product.icon} className="size-4" style={{color:product.accent}}/><p className="text-[11px] font-semibold text-navy">{product.name} preview</p></div><div className="mt-4 grid grid-cols-3 gap-1.5">{details.metrics.map(([label,value])=><div key={label} className="rounded-md bg-white p-2"><p className="truncate text-[8px] text-muted">{label}</p><p className="mt-1 text-[10px] font-semibold text-navy">{value}</p></div>)}</div><div className="mt-2 overflow-hidden rounded-lg border border-line bg-white">{details.records.map(record=><div key={record.primary} className="grid grid-cols-[1fr_auto] border-b border-line px-3 py-2 last:border-0"><div><p className="truncate text-[9px] font-semibold text-navy">{record.primary}</p><p className="mt-0.5 truncate text-[8px] text-muted">{record.secondary}</p></div><span className="text-[8px] font-medium" style={{color:product.accent}}>{record.status}</span></div>)}</div><NavigationMenuLink asChild><Link href={`/products/${product.slug}`} className="group/btn mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:bg-transparent">Explore {product.name} <Arrow/></Link></NavigationMenuLink></div></div><div className="mt-4 border-t border-line pt-4"><NavigationMenuLink asChild><Link href="/products" className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:bg-transparent">View all Products <Arrow /></Link></NavigationMenuLink></div></div>;
}

export function SolutionsMenu() {
  return <div className="w-[min(820px,calc(100vw-3rem))] p-6"><div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[.1em] text-slate-400">Industry solutions</div><div className="grid grid-cols-2 gap-x-5 gap-y-1">{industrySolutions.map(item => <Item key={item.slug} href={`/solutions/${item.slug}`} title={item.name} description={item.description} icon={item.icon} accent={item.accent}/>)}</div><div className="mt-4 border-t border-line pt-4"><NavigationMenuLink asChild><Link href="/solutions" className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:bg-transparent">Explore all Solutions <Arrow /></Link></NavigationMenuLink></div></div>;
}

export function CompanyMenu() {
  return <div className="w-[360px] p-6"><div className="space-y-1"><Item href="/company" title="About Melorite" description="Our platform philosophy and approach."/><Item href="/resources" title="Resources" description="Insights and product guidance." icon="BookOpen" accent="#7c3aed"/><Item href="/company#careers" title="Careers" description="Join the team behind Melorite." icon="Briefcase" accent="#059669"/><Item href="/contact" title="Contact" description="Speak with the Melorite team." icon="Mail" accent="#ea580c"/></div><div className="mt-4 border-t border-line pt-4"><NavigationMenuLink asChild><Link href="/company" className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:bg-transparent">About Melorite <Arrow /></Link></NavigationMenuLink></div></div>;
}
