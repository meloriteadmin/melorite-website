const defaultSiteUrl = "https://melorite.com";

export const site = {
  name: "Melorite",
  url: defaultSiteUrl,
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
  social: [
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/melorite" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/melorite/" },
    { label: "Instagram", href: "https://instagram.com/melorite_" },
  ] as { label: string; href: string }[],
  demoHref: "/book-demo",
  salesHref: "/contact",
} as const;
