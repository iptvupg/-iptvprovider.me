import { SITE } from "@/config";
import { CONTEXT } from "./context";

// Article node for editorial pages (learn / compare). The organization is the
// author, publisher and reviewer; `url` is the canonical page URL and links the
// article to its WebPage node via #webpage.
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
