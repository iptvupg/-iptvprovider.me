import { SITE } from "@/config";
import { CONTEXT } from "./context";

// ItemList from cards shaped { title, href }. `href` is a site-relative path.
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
