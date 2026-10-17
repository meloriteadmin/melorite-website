import { pageMetadata, jsonLd as serializeJsonLd } from "@/lib/seo";
import { productSeo } from "@/data/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/animation/PageTransition";
import { ProductPageView } from "@/components/product/ProductPage";
import { productPages } from "@/data/product-pages";
import { productBySlug, products } from "@/data/products";
import { productDetails } from "@/data/product-details";
import { site } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  const content = productPages[slug];
  if (!product || !content) return {};
  return pageMetadata(`/products/${slug}`, productSeo[slug].title, productSeo[slug].description);
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = productBySlug(slug);
  const content = productPages[slug];
  if (!product || !content) notFound();
  const detail = productDetails[slug];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: product.name, applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${site.url}/products/${slug}`, description: content.subhead, publisher: { "@id": `${site.url}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` }, { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}/products/${slug}` }] },
      { "@type": "FAQPage", mainEntity: detail.faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
  return <PageTransition><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} /><ProductPageView content={content} /></PageTransition>;
}
