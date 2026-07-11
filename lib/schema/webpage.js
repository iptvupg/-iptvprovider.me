import { SITE } from "@/config";
import { CONTEXT } from "./context";

// WebPage node linked into the site @graph. `datePublished`/`dateModified` are
// optional and, when present, are appended in that order after `inLanguage`.
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
