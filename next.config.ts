import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    const r = (source: string, destination: string) => ({ source, destination, permanent: true });
    return [
      r("/platform", "/"), r("/platform/:path*", "/"),
      r("/resources", "/company"),
      r("/ai", "/products/ai-calling"), r("/ai/:path*", "/products/ai-calling"),
      r("/business-applications", "/products"), r("/business-applications/:path*", "/products"),
      r("/industries", "/products"), r("/industries/:path*", "/products"),
      r("/solutions/hospital", "/products/clinic"), r("/solutions/clinic", "/products/clinic"),
      r("/solutions/real-estate", "/products/real-estate"), r("/solutions/marketing-agency", "/products/agency"),
      r("/solutions", "/products"), r("/solutions/:path*", "/products"),
      r("/products/crm-growth", "/products/crm"),
      r("/products/:slug(finance|hrms|projects|service|procurement-inventory)", "/products"),
    ];  },
};

export default nextConfig;
