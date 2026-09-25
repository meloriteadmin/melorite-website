import type { Metadata } from "next";
export { default } from "@/app/business-applications/page";
const title = "Business Applications & AI";
const description = "Seven connected Business Applications plus Melorite AI, designed to work together in one workspace.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/products" }, openGraph: { title, description, url: "/products" } };
