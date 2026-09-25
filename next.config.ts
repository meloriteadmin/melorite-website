import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/business-applications", destination: "/products", permanent: true },
      { source: "/business-applications/:slug", destination: "/products/:slug", permanent: true },
      { source: "/industries", destination: "/solutions", permanent: true },
      { source: "/industries/:slug", destination: "/solutions/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
