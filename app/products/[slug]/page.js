import { notFound } from "next/navigation";
import AppPage from "@/components/AppPage";
import { APP_SLUGS, BUSINESS_APPS, PRODUCT_PAGES } from "@/data/catalog";

const PRODUCT_SLUGS = Object.keys(PRODUCT_PAGES);

export function generateStaticParams() {
  return [...APP_SLUGS, ...PRODUCT_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCT_PAGES[slug] || BUSINESS_APPS[slug];
  return { title: product ? `${product.name} | Melorite` : "Melorite" };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = PRODUCT_PAGES[slug] || BUSINESS_APPS[slug];
  if (!product) notFound();
  return <AppPage app={product} />;
}
