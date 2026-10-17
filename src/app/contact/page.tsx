import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = pageMetadata("/contact", "Contact Melorite | Sales, Support & Business Enquiries", "Contact Melorite about product selection, sales, support or custom business software. Share your workflow and reach the team by email or phone.");

export default function Page() {
  return <ContactPage type="sales" />;
}
