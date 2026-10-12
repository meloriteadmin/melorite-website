import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = { title: "Book a Demo", description: "Book a free Melorite demo and see the product made for your business.", alternates: { canonical: "/book-demo" }, openGraph: { title: "Book a Demo | Melorite", url: "/book-demo" } };

export default function Page() {
  return <ContactPage type="demo" />;
}
