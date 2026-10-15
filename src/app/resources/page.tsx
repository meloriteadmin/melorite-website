import type { Metadata } from "next";
import { ResourcesView } from "@/components/resources/ResourcesView";
const description = "Melorite articles, guides and verified case studies for teams improving sales, service and business operations.";
export const metadata: Metadata = { title: "Resources", description, alternates: { canonical: "/resources" }, openGraph: { title: "Melorite Resources", description, url: "/resources" } };
export default function Page() { return <ResourcesView />; }
