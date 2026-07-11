import { CONTEXT } from "./context";

// BreadcrumbList. `crumbs` is an ordered array of { name, item } where `item`
// is an absolute URL.
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
