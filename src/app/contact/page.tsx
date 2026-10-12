import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

const description = "Talk to Melorite about the product made for your business, a custom solution, or a free demo.";
export const metadata: Metadata = { title: "Contact", description, alternates: { canonical: "/contact" }, openGraph: { title: "Contact Melorite", description, url: "/contact" } };

export default function Page() {
  return <ContactPage type="sales" />;
}
