import { CONTEXT } from "./context";

/**
 * Build a BreadcrumbList JSON-LD node.
 * @param {Array<{ name: string, item: string }>} crumbs ordered trail; `item`
 *   is an absolute URL.
 * @returns {object} schema.org BreadcrumbList node
 */
export function breadcrumbSchema(crumbs) {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}
