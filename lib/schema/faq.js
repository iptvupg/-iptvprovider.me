import { CONTEXT } from "./context";

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
