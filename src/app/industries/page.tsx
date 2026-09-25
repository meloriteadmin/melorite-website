import type { Metadata } from "next";
import Link from "next/link";
import { industrySolutions } from "@/data/catalog";
import { PageTransition } from "@/components/animation/PageTransition";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { CTASection } from "@/components/shared/CTASection";
import { site } from "@/data/site";
const title = "Industry Solutions | Melorite";
const description = "Six industry solutions built on Melorite's connected platform for hospitals, clinics, real estate, education, hospitality and marketing agencies.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/industries" }, openGraph: { title, description, url: "/industries" } };
export default function IndustriesPage() { return <PageTransition><section className="border-b border-line bg-paper pb-20 pt-[132px] md:pt-[152px]"><div className="container-x max-w-5xl"><p className="text-[13px] font-semibold uppercase tracking-[.09em] text-brand">Industry Solutions</p><h1 className="text-h1 mt-4 max-w-[16ch] text-navy">Built for the work your industry actually does.</h1><p className="text-lead mt-6 max-w-[60ch] text-muted">Industry Solutions layer purpose-built workflows onto the shared Melorite platform—without disconnecting your data, teams or operations.</p></div></section><section className="section-y"><div className="container-x"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{industrySolutions.map(solution => <Link key={solution.slug} href={`/industries/${solution.slug}`} className="group border border-line bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"><span className="grid size-11 place-items-center rounded-xl" style={{ background: tint(solution.accent,.1), color: solution.accent }}><Icon name={solution.icon} className="size-5" /></span><h2 className="mt-7 text-h3 text-navy">{solution.name}</h2><p className="mt-3 text-[15px] leading-relaxed text-muted">{solution.description}</p><span className="mt-6 inline-block text-sm font-semibold text-brand">Explore solution →</span></Link>)}</div></div></section><CTASection title={["A platform that fits", "your industry."]} description="Talk to our team about the workflows and applications your organization needs." primary={{ label: "Contact Sales", href: site.salesHref }} /></PageTransition>; }
