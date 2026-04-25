import { SITE } from "@/content/brand";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: SITE.url,
        foundingDate: SITE.founded,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.state,
          addressCountry: SITE.country,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phoneE164,
            email: SITE.email,
            contactType: "sales",
            availableLanguage: ["English", "Tamil", "Hindi"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.legalName,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.state,
          addressCountry: SITE.country,
        },
        priceRange: "$$$",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
