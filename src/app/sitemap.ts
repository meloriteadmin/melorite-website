import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/platform", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    { path: "/products/crm-growth", priority: 0.8 }, { path: "/products/finance", priority: 0.8 }, { path: "/products/hrms", priority: 0.8 }, { path: "/products/commerce", priority: 0.8 }, { path: "/products/projects", priority: 0.8 }, { path: "/products/service", priority: 0.8 }, { path: "/products/procurement-inventory", priority: 0.8 },
    { path: "/ai", priority: 0.9 }, { path: "/ai/agent", priority: 0.8 }, { path: "/ai/calling", priority: 0.8 },
    { path: "/solutions", priority: 0.9 }, { path: "/solutions/hospital", priority: 0.8 }, { path: "/solutions/clinic", priority: 0.8 }, { path: "/solutions/real-estate", priority: 0.8 }, { path: "/solutions/education", priority: 0.8 }, { path: "/solutions/hospitality", priority: 0.8 }, { path: "/solutions/marketing-agency", priority: 0.8 },
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
