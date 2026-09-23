import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { WorkspaceShowcase } from "@/components/platform/WorkspaceShowcase";
import { CTASection } from "@/components/shared/CTASection";

const Architecture = dynamic(() => import("@/components/platform/Architecture").then((m) => m.Architecture));
const OrgManagement = dynamic(() => import("@/components/platform/OrgManagement").then((m) => m.OrgManagement));
const WorkflowDiagram = dynamic(() => import("@/components/platform/WorkflowDiagram").then((m) => m.WorkflowDiagram));
const Capabilities = dynamic(() => import("@/components/platform/Capabilities").then((m) => m.Capabilities));
const GrowthTimeline = dynamic(() => import("@/components/platform/GrowthTimeline").then((m) => m.GrowthTimeline));
const SecuritySection = dynamic(() => import("@/components/platform/SecuritySection").then((m) => m.SecuritySection));

const title = "Melorite Platform | A Connected Foundation for Business";
const description =
  "See how Melorite works: one Client Workspace, a modular architecture, entitlement-based application access, shared business records and a security-first platform core.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/platform" },
  openGraph: { title, description, url: "/platform" },
};

export default function PlatformPage() {
  return (
    <PageTransition>
      <PlatformHero />
      <WorkspaceShowcase />
      <Architecture />
      <OrgManagement />
      <WorkflowDiagram />
      <Capabilities />
      <GrowthTimeline />
      <SecuritySection />
      <CTASection
        title={["See how Melorite", "fits your business."]}
        description="Walk through the workspace with our team and explore the applications that matter to you."
        primary={{ label: "Book a Demo", href: site.demoHref }}
        secondary={{ label: "Explore Products", href: "/products" }}
      />
    </PageTransition>
  );
}
