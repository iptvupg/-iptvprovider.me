import { CONTEXT } from "./context";

/**
 * Build an FAQPage JSON-LD node from an array of [question, answer] tuples.
 * @param {Array<[string, string]>} items ordered [question, answer] pairs
 * @returns {object} schema.org FAQPage node
 */
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
