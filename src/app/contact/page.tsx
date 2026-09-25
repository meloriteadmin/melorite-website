import type { Metadata } from "next";
import { PageTransition } from "@/components/animation/PageTransition";
import { ContactIntro, ContactSection } from "@/components/company/ContactSection";

const title = "Contact Melorite | Book a Demo";
const description = "Talk to Melorite about Business Applications, Melorite AI, Industry Solutions or a complete connected platform.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/contact" }, openGraph: { title, description, url: "/contact" } };

export default function ContactPage() {
  return <PageTransition><ContactIntro /><ContactSection /></PageTransition>;
}
