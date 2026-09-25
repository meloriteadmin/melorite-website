import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/platform", priority: 0.9 },
    { path: "/business-applications", priority: 0.9 },
    { path: "/business-applications/crm-growth", priority: 0.8 }, { path: "/business-applications/finance", priority: 0.8 }, { path: "/business-applications/hrms", priority: 0.8 }, { path: "/business-applications/commerce", priority: 0.8 }, { path: "/business-applications/projects", priority: 0.8 }, { path: "/business-applications/service", priority: 0.8 }, { path: "/business-applications/procurement-inventory", priority: 0.8 },
    { path: "/ai", priority: 0.9 }, { path: "/ai/agent", priority: 0.8 }, { path: "/ai/calling", priority: 0.8 },
    { path: "/industries", priority: 0.9 }, { path: "/industries/hospital", priority: 0.8 }, { path: "/industries/clinic", priority: 0.8 }, { path: "/industries/real-estate", priority: 0.8 }, { path: "/industries/education", priority: 0.8 }, { path: "/industries/hospitality", priority: 0.8 }, { path: "/industries/marketing-agency", priority: 0.8 },
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
