import type { Metadata } from "next";
import { PageTransition } from "@/components/animation/PageTransition";
import { ContactIntro, ContactSection } from "@/components/company/ContactSection";
export const metadata: Metadata = { title: "Book a Demo | Melorite", description: "Book a Melorite demo and see the connected platform in context.", alternates: { canonical: "/book-demo" }, openGraph: { title: "Book a Demo | Melorite", url: "/book-demo" } };
export default function BookDemoPage() { return <PageTransition><ContactIntro /><ContactSection /></PageTransition>; }
