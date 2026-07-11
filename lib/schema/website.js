import { SITE, BRAND } from "@/config";

// WebSite node for the site-wide @graph (no own @context; see organization.js).
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE}#website`,
    url: SITE,
    name: BRAND,
    publisher: { "@id": `${SITE}#organization` },
    inLanguage: "en",
  };
}
