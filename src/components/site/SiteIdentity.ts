import { site } from "@/data/site";
export const siteIdentity = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, logo: `${site.url}${site.logo}`, description: "Melorite builds business software for sales, real estate, clinics, agencies, ecommerce and AI calling.", sameAs: site.social.map(({ href }) => href), ...(site.contact.email ? { email: site.contact.email } : {}), ...(site.contact.phone ? { telephone: `+91${site.contact.phone}` } : {}) },
  { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, publisher: { "@id": `${site.url}/#organization` } }
] };
