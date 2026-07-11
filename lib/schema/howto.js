import { SITE } from "@/config";
import { CONTEXT } from "./context";

/**
 * Build a HowTo JSON-LD node from device-guide data.
 * @param {object}   o
 * @param {string}   o.device        device name (fills "How to Install IPTV on …")
 * @param {string}   o.description
 * @param {string}   o.totalTime     ISO 8601 duration, e.g. "PT10M"
 * @param {string[]} [o.supplies=[]] HowToSupply names
 * @param {string}   [o.app]         player app → single HowToTool
 * @param {Array<{ name: string, text: string }>} o.steps ordered steps
 * @param {string}   o.url           canonical page URL (anchors each step)
 * @returns {object} schema.org HowTo node
 */
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
