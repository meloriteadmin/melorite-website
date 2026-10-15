import type { Metadata } from "next";
import { ResourcesView } from "@/components/resources/ResourcesView";
const description = "Verified Melorite customer stories and outcomes, published only when real results are available.";
export const metadata: Metadata = { title: "Case Studies", description, alternates: { canonical: "/resources/case-studies" }, openGraph: { title: "Melorite Case Studies", description, url: "/resources/case-studies" } };
export default function Page() { return <ResourcesView section="case-studies" />; }
