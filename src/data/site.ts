export const site = {
  name: "Melorite",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://melorite.com").replace(/\/$/, ""),
  tagline: "One connected platform that adapts to the way your business works.",
  description:
    "Bring your essential business applications together with Melorite. Explore a modular platform designed to support connected operations and industry-specific requirements.",
  logo: "/brand/melorite-logo.png",
  logoWhite: "/brand/melorite-logo-white.png",
  /**
   * Verified public contact details. Leave a value `null` until it has been
   * approved — components hide anything that is not set.
   */
  contact: {
    email: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null) as string | null,
    phone: (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? null) as string | null,
    location: null as string | null,
  },
  /** Official social accounts only. Add URLs when they exist. */
  social: [] as { label: string; href: string }[],
  demoHref: "/company?enquiry=demo#contact",
  salesHref: "/company?enquiry=product#contact",
} as const;
