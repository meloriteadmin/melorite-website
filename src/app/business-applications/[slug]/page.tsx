import { redirect } from "next/navigation";
import { businessApplicationBySlug } from "@/data/catalog";

export default async function LegacyBusinessApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(businessApplicationBySlug(slug) ? `/products/${slug}` : "/products");
}
