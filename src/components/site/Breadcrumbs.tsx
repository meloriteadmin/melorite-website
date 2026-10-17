import Link from "next/link";
import { site } from "@/data/site";
import { jsonLd } from "@/lib/seo";
export function Breadcrumbs({ items, schema = true }: { items: { name: string; href?: string }[]; schema?: boolean }) {
  const crumbs = [{ name: "Home", href: "/" }, ...items];
  return <nav aria-label="Breadcrumb" className="rail-inner pt-6 text-sm text-[#111735]/70"><ol className="flex flex-wrap gap-2">{crumbs.map((item, i) => <li key={item.name} className="flex items-center gap-2">{i > 0 && <span aria-hidden>/</span>}{item.href ? <Link className="underline-offset-4 hover:underline" href={item.href}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}</li>)}</ol>{schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, ...(item.href ? { item: `${site.url}${item.href === "/" ? "" : item.href}` } : {}) })) }) }} />}</nav>;
}
