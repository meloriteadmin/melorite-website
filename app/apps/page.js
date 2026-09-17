import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BUSINESS_APPS } from "@/data/catalog";

const GROUPS = [
  { id: "commercial", title: "Commercial and financial management", copy: "Connect the records and workflows that turn demand into revenue, fulfilment and financial visibility.", apps: ["crm", "sales", "finance", "procurement", "inventory"] },
  { id: "people", title: "People, delivery and operations", copy: "Give every team a focused workspace for people, payroll, projects, service and the work that keeps the business moving.", apps: ["hr", "payroll", "projects", "service", "operations"] },
  { id: "growth", title: "Growth and shared platform services", copy: "Coordinate marketing, communications, documents, automation and insight on the same platform core.", apps: ["marketing", "campaigns", "documents", "automation", "analytics"] },
];

export const metadata = { title: "Business Apps | Melorite" };

export default function AppsPage() {
  return <><section className="page-hero"><div className="container"><Reveal as="div"><span className="eyebrow">Business Apps</span><h1>Start with the work that matters most. Expand without rebuilding.</h1><p className="lede">Melorite Business Apps are modular capabilities that share one platform core for data, files, activities, notifications, integrations, automation, analytics and audit.</p><div className="btn-row"><Link href="/contact" className="btn">Talk to our team</Link><Link href="/platform" className="btn btn-outline">Explore the platform</Link></div></Reveal></div></section>{GROUPS.map((group, groupIndex) => <section key={group.id} id={group.id} className={groupIndex % 2 ? "bg-sand" : undefined}><div className="container"><Reveal as="div" className="section-head left"><span className="eyebrow">{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group.title}</h2><p className="lede">{group.copy}</p></Reveal><Reveal as="div" stagger className="feature-grid app-catalog-grid">{group.apps.map((slug) => { const item = BUSINESS_APPS[slug]; return <Link href={`/apps/${slug}`} className="feature-card catalog-card" key={slug}><span className="catalog-kicker">Business app</span><h3>{item.name}</h3><p>{item.lede}</p><span className="catalog-link">Explore app →</span></Link>; })}</Reveal></div></section>)}</>;
}
