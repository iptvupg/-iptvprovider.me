import { SITE } from "@/config";
import { CONTEXT } from "./context";

/**
 * Build an Article JSON-LD node for editorial pages (learn / compare). The
 * organization is the author, publisher and reviewer; `url` links the article
 * to its WebPage node via #webpage.
 * @param {object} o
 * @param {string} o.headline
 * @param {string} o.description
 * @param {string} o.url            canonical page URL
 * @param {string} o.datePublished  ISO date
 * @param {string} o.dateModified   ISO date
 * @returns {object} schema.org Article node
 */
export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}) {
  return {
    "@context": CONTEXT,
    "@type": "Article",
    headline,
    description,
    image: `${SITE}/opengraph-image`,
    author: { "@id": `${SITE}#organization` },
    publisher: { "@id": `${SITE}#organization` },
    reviewedBy: { "@id": `${SITE}#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished,
    dateModified,
    inLanguage: "en",
  };
}
