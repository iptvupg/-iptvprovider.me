import { SITE, BRAND, EMAIL, PHONE_INTL, LANGUAGES } from "@/config";

// Organization node for the site-wide @graph (emitted without its own
// @context because it lives inside the graph wrapper in the root layout).
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE}#organization`,
    name: BRAND,
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/icon.svg`,
    },
    image: `${SITE}/opengraph-image`,
    description:
      "Premium IPTV service for the USA, Canada and worldwide with 54,000+ live channels and 120,000+ movies & series in HD/4K.",
    email: EMAIL,
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Kingdom" },
      "Worldwide",
    ],
    knowsAbout: [
      "IPTV",
      "IPTV Smarters Pro",
      "Live TV streaming",
      "4K streaming",
      "Firestick setup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: PHONE_INTL,
      email: EMAIL,
      availableLanguage: LANGUAGES,
      areaServed: ["US", "CA", "GB", "Worldwide"],
    },
  };
}
