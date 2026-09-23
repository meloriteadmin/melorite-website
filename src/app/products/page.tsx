import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { site } from "@/data/site";
import { productFaqs } from "@/data/faqs";
import { PageTransition } from "@/components/animation/PageTransition";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import { CTASection } from "@/components/shared/CTASection";
import { FAQ } from "@/components/shared/FAQ";

const ProductShowcase = dynamic(() => import("@/components/products/ProductShowcase").then((m) => m.ProductShowcase));
const ProductCapabilities = dynamic(() => import("@/components/products/ProductCapabilities").then((m) => m.ProductCapabilities));
const WorkspaceBuilder = dynamic(() => import("@/components/products/WorkspaceBuilder").then((m) => m.WorkspaceBuilder));
const WhyConnected = dynamic(() => import("@/components/products/WhyConnected").then((m) => m.WhyConnected));

const title = "Melorite Products | Business Applications in One Platform";
const description =
  "Explore Melorite's 16 business applications — CRM, Sales, Finance, Procurement, Inventory, HR, Payroll, Projects, Service and more — working together in one connected workspace.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title, description, url: "/products" },
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <ProductsHero />
      <ProductExplorer />
      <ProductShowcase />
      <ProductCapabilities />
      <WorkspaceBuilder />
      <WhyConnected />
      <FAQ items={productFaqs} title={["Product", "questions."]} />
      <CTASection
        title={["Find the right combination", "for your business."]}
        description="Tell us which applications interest you and we'll walk you through how they work together."
        primary={{ label: "Book a Demo", href: site.demoHref }}
        secondary={{ label: "Explore Solutions", href: "/solutions" }}
      />
    </PageTransition>
  );
}
