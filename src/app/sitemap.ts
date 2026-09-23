import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/platform", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    { path: "/solutions", priority: 0.9 },
    { path: "/company", priority: 0.8 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
