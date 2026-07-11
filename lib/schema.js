// JSON-LD factories. These reproduce, byte-for-byte, the structured-data
// objects that were previously hand-built inside individual pages and the
// PageShell / HowToGuide components. Centralizing them keeps every page's
// schema consistent and eliminates copy-paste drift. Output is unchanged.

import { SITE } from "@/lib/site";

const CONTEXT = "https://schema.org";

// FAQPage from an array of [question, answer] tuples.
export function faqSchema(items) {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

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

// WebPage node linked into the site @graph.
export function webPageSchema({ url, name, dateModified }) {
  return {
    "@context": CONTEXT,
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    isPartOf: { "@id": `${SITE}#website` },
    about: { "@id": `${SITE}#organization` },
    inLanguage: "en",
    ...(dateModified ? { dateModified } : {}),
  };
}

// HowTo from device-guide data. `steps` is an array of { name, text }.
export function howToSchema({
  device,
  description,
  totalTime,
  supplies = [],
  app,
  steps,
  url,
}) {
  return {
    "@context": CONTEXT,
    "@type": "HowTo",
    name: `How to Install IPTV on ${device}`,
    description,
    totalTime,
    image: `${SITE}/opengraph-image`,
    supply: supplies.map((s) => ({ "@type": "HowToSupply", name: s })),
    ...(app ? { tool: [{ "@type": "HowToTool", name: app }] } : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${url}#step-${i + 1}`,
    })),
  };
}
