import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/products", priority: 0.9 },
    ...products.map(({ slug }) => ({ path: `/products/${slug}`, priority: 0.8 })),
    { path: "/custom-solutions", priority: 0.7 },
    { path: "/company", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/book-demo", priority: 0.6 },
  ];
  return routes.map((r) => ({ url: `${site.url}${r.path}`, lastModified: new Date(), changeFrequency: "monthly", priority: r.priority }));
}
