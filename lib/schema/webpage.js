import { SITE } from "@/config";
import { CONTEXT } from "./context";

/**
 * Build a WebPage JSON-LD node linked into the site @graph via #website and
 * #organization. `datePublished`/`dateModified` are optional and, when present,
 * are appended in that order after `inLanguage`.
 * @param {object} o
 * @param {string} o.url             canonical page URL
 * @param {string} o.name            page name / title
 * @param {string} [o.datePublished] ISO date
 * @param {string} [o.dateModified]  ISO date
 * @returns {object} schema.org WebPage node
 */
export function webPageSchema({ url, name, datePublished, dateModified }) {
  return {
    "@context": CONTEXT,
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    isPartOf: { "@id": `${SITE}#website` },
    about: { "@id": `${SITE}#organization` },
    inLanguage: "en",
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}
