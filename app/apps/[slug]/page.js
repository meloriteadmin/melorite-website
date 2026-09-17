import { notFound } from "next/navigation";
import AppPage from "@/components/AppPage";
import { APP_SLUGS, BUSINESS_APPS } from "@/data/catalog";

export function generateStaticParams() {
  return APP_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = BUSINESS_APPS[slug];
  return { title: app ? `${app.name} | Melorite` : "Melorite" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const app = BUSINESS_APPS[slug];
  if (!app) notFound();
  return <AppPage app={app} />;
}
