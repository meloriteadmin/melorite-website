import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = pageMetadata("/book-demo", "Book a Melorite Product Demo", "Request a focused demo of Melorite CRM, Real Estate, Clinic, Agency, Commerce or AI Calling. Share your workflow so we can show the relevant product.");

export default function Page() {
  return <ContactPage type="demo" />;
}
