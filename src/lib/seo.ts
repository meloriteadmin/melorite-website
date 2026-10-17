import type { Metadata } from "next";
import { site } from "@/data/site";
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = title.includes("Melorite") ? title : `${title} | Melorite`;
  return { title: { absolute: fullTitle }, description, alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, title: fullTitle, description, url: path, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/opengraph-image"] } };
}
export function jsonLd(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }
