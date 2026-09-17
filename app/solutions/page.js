import Link from "next/link";
import Reveal from "@/components/Reveal";
import { INDUSTRY_SOLUTIONS } from "@/data/catalog";

const GROUPS = [
  { id: "healthcare", title: "Healthcare and community", solutions: ["hospital", "clinic", "education", "nonprofit"] },
  { id: "built", title: "Built environment and field operations", solutions: ["real-estate", "construction", "facilities", "automotive"] },
  { id: "commerce", title: "Commerce, production and movement", solutions: ["manufacturing", "hospitality", "retail", "logistics", "distribution"] },
  { id: "services", title: "Service organisations", solutions: ["professional-services", "recruitment"] },
];

export const metadata = { title: "Industry Solutions | Melorite" };

export default function SolutionsPage() {
  return <><section className="page-hero"><div className="container"><Reveal as="div"><span className="eyebrow">Industry Solutions</span><h1>Industry workflows on a shared business platform.</h1><p className="lede">Each Melorite Industry Solution adds specialist records and workflows while reusing the Business Apps your organisation already relies on. No forks. No separate software stack.</p><div className="btn-row"><Link href="/contact" className="btn">Plan your rollout</Link><Link href="/apps" className="btn btn-outline">Explore Business Apps</Link></div></Reveal></div></section>{GROUPS.map((group, index) => <section key={group.id} id={group.id} className={index % 2 ? "bg-sand" : undefined}><div className="container"><Reveal as="div" className="section-head left"><span className="eyebrow">Industry group</span><h2>{group.title}</h2><p className="lede">Use specialised workflows without losing the shared customer, employee, vendor, product, document and financial context across your business.</p></Reveal><Reveal as="div" stagger className="feature-grid app-catalog-grid">{group.solutions.map((slug) => { const item = INDUSTRY_SOLUTIONS[slug]; return <Link href={`/solutions/industries/${slug}`} className="feature-card catalog-card" key={slug}><span className="catalog-kicker">Industry solution</span><h3>{item.title}</h3><p>{item.lede}</p><span className="catalog-link">Explore solution →</span></Link>; })}</Reveal></div></section>)}</>;
}
