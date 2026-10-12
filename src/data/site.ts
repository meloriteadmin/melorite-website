const defaultSiteUrl = "https://melorite.com";

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) return defaultSiteUrl;

  try {
    const url = new URL(configuredUrl);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.toString().replace(/\/$/, "")
      : defaultSiteUrl;
  } catch {
    return defaultSiteUrl;
  }
}

export const site = {
  name: "Melorite",
  url: getSiteUrl(),
  tagline: "Software that fits your business. Built for your industry, simple for your team.",
  description:
    "Ready-to-use software for real estate, clinics, marketing agencies, online sellers and sales teams, plus AI calling that answers and makes your calls.",
  logo: "/brand/melorite-wordmark.png",
  logoWhite: "/brand/melorite-wordmark-white.png",
  /**
   * Verified public contact details. Leave a value `null` until it has been
   * approved — components hide anything that is not set.
   */
  contact: {
    email: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "meloriteadmin@gmail.com") as string | null,
    phone: (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "8482976478") as string | null,
    location: null as string | null,
  },
  /** Official social accounts only. Add URLs when they exist. */
  social: [] as { label: string; href: string }[],
  demoHref: "/book-demo",
  salesHref: "/contact",
} as const;
