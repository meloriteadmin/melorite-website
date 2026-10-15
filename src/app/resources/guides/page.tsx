import type { Metadata } from "next";
import { ResourcesView } from "@/components/resources/ResourcesView";
const description = "Practical Melorite guides for choosing software, improving workflows and helping growing teams work clearly.";
export const metadata: Metadata = { title: "Guides", description, alternates: { canonical: "/resources/guides" }, openGraph: { title: "Melorite Guides", description, url: "/resources/guides" } };
export default function Page() { return <ResourcesView section="guides" />; }
