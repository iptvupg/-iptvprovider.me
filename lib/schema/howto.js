import { SITE } from "@/config";
import { CONTEXT } from "./context";

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
