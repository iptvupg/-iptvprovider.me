import { BRAND } from "@/config";

// Page-level Next.js metadata builder. It DRYs the parts that are constant on
// every indexable page (site name, locale, canonical→og:url wiring, the
// index/follow robots directive) while taking every page-specific string as an
// explicit argument. Optional blocks (keywords, robots, openGraph, twitter) are
// only emitted when supplied, so a page that omits `robots` still emits no
// robots meta — output matches the previous hand-written objects exactly.
//
// Note: the returned object's key order is irrelevant; Next.js emits <head>
// tags in its own fixed order, so only the values and which keys are present
// affect the rendered HTML.
//
// @param {object}   o
// @param {string}   o.title         → title.absolute
// @param {string}   o.description
// @param {string}   o.canonical     absolute URL; also used as openGraph.url
// @param {string[]} [o.keywords]
// @param {boolean}  [o.robots=true] emit index/follow robots directive
// @param {object}   [o.openGraph]   { type='website', title, description, images }
// @param {object}   [o.twitter]     full twitter card object, passed through
export function pageMetadata({
  title,
  description,
  canonical,
  keywords,
  robots = true,
  openGraph,
  twitter,
}) {
  const og = openGraph
    ? {
        type: openGraph.type || "website",
        url: canonical,
        title: openGraph.title,
        description: openGraph.description,
        siteName: BRAND,
        locale: "en_US",
        ...(openGraph.images ? { images: openGraph.images } : {}),
      }
    : undefined;

  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    ...(robots ? { robots: { index: true, follow: true } } : {}),
    ...(og ? { openGraph: og } : {}),
    ...(twitter ? { twitter } : {}),
  };
}
