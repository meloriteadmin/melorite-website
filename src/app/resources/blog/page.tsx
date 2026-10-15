import type { Metadata } from "next";
import { ResourcesView } from "@/components/resources/ResourcesView";
const description = "Clear, practical articles from Melorite on sales, service and everyday business operations.";
export const metadata: Metadata = { title: "Blog", description, alternates: { canonical: "/resources/blog" }, openGraph: { title: "Melorite Blog", description, url: "/resources/blog" } };
export default function Page() { return <ResourcesView section="blog" />; }
