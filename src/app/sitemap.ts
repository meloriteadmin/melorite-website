import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { businessApplications, industrySolutions } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/platform", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    ...businessApplications.map(({ slug }) => ({ path: `/products/${slug}`, priority: 0.8 })),
    { path: "/ai", priority: 0.9 }, { path: "/ai/agent", priority: 0.8 }, { path: "/ai/calling", priority: 0.8 },
    { path: "/solutions", priority: 0.9 },
    ...industrySolutions.map(({ slug }) => ({ path: `/solutions/${slug}`, priority: 0.8 })),
    { path: "/resources", priority: 0.7 }, { path: "/contact", priority: 0.6 }, { path: "/book-demo", priority: 0.6 },
    { path: "/company", priority: 0.8 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
