import type { Metadata } from "next";
export { default } from "@/app/industries/page";
const title = "Industry Solutions";
const description = "Industry-specific workflows for hospitals, clinics, real estate, education, hospitality and marketing agencies.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/solutions" }, openGraph: { title, description, url: "/solutions" } };
