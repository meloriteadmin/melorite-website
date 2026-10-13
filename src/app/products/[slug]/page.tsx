import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/animation/PageTransition";
import { ProductPageView } from "@/components/product/ProductPage";
import { productPages } from "@/data/product-pages";
import { productBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  const content = productPages[slug];
  if (!product || !content) return {};
  return {
    title: product.name,
    description: content.subhead,
    alternates: { canonical: `/products/${slug}` },
    openGraph: { title: `${product.name} | ${content.headline.join(" ")}`, description: content.subhead, url: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = productBySlug(slug);
  const content = productPages[slug];
  if (!product || !content) notFound();
  return <PageTransition><ProductPageView content={content} /></PageTransition>;
}
