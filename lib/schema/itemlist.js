import { SITE } from "@/config";
import { CONTEXT } from "./context";

/**
 * Build an ItemList JSON-LD node from hub cards.
 * @param {Array<{ title: string, href: string }>} items `href` is a
 *   site-relative path; it is resolved against SITE to an absolute URL.
 * @returns {object} schema.org ItemList node
 */
export function itemListSchema(items) {
  return {
    "@context": CONTEXT,
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      url: `${SITE}${it.href}`,
    })),
  };
}
