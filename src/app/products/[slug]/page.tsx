import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { businessApplications, businessApplicationBySlug } from "@/data/catalog";
import { OfferingStory } from "@/components/offering/OfferingStory";
import { PageTransition } from "@/components/animation/PageTransition";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return businessApplications.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const item = businessApplicationBySlug((await params).slug); if (!item) return {}; const titles: Record<string, string> = { "crm-growth": "CRM & Growth Software", finance: "Finance & Accounting Software", hrms: "HRMS, Payroll & Workforce Management", commerce: "Commerce & Order Management Platform", projects: "Project Management Software", service: "Customer Service & Work Order Management", "procurement-inventory": "Procurement & Inventory Management Software" }; const title = titles[item.slug]; return { title, description: item.description, alternates: { canonical: `/products/${item.slug}` }, openGraph: { title, description: item.description, url: `/products/${item.slug}`, images: ["/opengraph-image"] }, twitter: { card: "summary_large_image" } }; }
export default async function ProductPage({ params }: Props) { const item = businessApplicationBySlug((await params).slug); if (!item) notFound(); return <PageTransition><OfferingStory offering={item} kind="product" /></PageTransition>; }
