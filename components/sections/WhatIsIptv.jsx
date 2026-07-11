import AnimatedHeading from "@/components/animations/AnimatedHeading";
import Reveal from "@/components/animations/Reveal";

// Comparison rows: IPTV (via IPTV Smarters Pro) vs traditional cable/satellite.
const COMPARE = [
  { feature: "Live TV channels", iptv: "54,000+ worldwide", cable: "100–300 regional" },
  { feature: "On-demand movies & series", iptv: "120,000+ titles", cable: "Limited / pay-per-view" },
  { feature: "Picture quality", iptv: "Up to 4K, HD & SD", cable: "Mostly HD" },
  { feature: "Contract", iptv: "None — billed once", cable: "12–24 month lock-in" },
  { feature: "Devices", iptv: "Any device with an IPTV app", cable: "Provider set-top box" },
  { feature: "Setup time", iptv: "Minutes (login by email)", cable: "Days (engineer visit)" },
  { feature: "Starting price", iptv: "$7.50 / month", cable: "$50–100+ / month" },
];

export default function WhatIsIptv() {
  return (
    <section id="what-is-iptv" className="cv-section relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">The basics</p>
          <AnimatedHeading
            delay={0.05}
            className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-editorial text-primary"
            lines={[<span key="1">What is IPTV Smarters Pro?</span>]}
          />
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-2xl">
          {/* Direct answer first (40–60 words) for AI-citation extraction. */}
          <p className="text-[17px] leading-relaxed text-primary">
            IPTV (Internet Protocol Television) streams live TV and on-demand
            video over your internet connection instead of a satellite dish or
            cable line. IPTV Smarters Pro is a free player app that turns those
            streams into a clean, Netflix-style interface — you simply enter the
            login we send you and start watching.
          </p>
          <p className="mt-5 text-[16px] leading-relaxed text-secondary">
            After you order, we email your credentials within minutes. You open
            IPTV Smarters Pro (or any compatible player like TiviMate or IBO
            Player) on your Smart TV, Firestick, phone, tablet or PC, type in
            those details once, and the full lineup loads instantly. There is no
            engineer visit, no set-top box to rent, and no long contract. Because
            everything is delivered over the internet, the same subscription
            follows you between devices and works anywhere you have a stable
            connection — around 15 Mbps for smooth HD and 25 Mbps or more for
            stable 4K.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl surface hairline">
          <table className="w-full border-collapse text-left text-[14.5px]">
            <caption className="sr-only">
              IPTV via IPTV Smarters Pro compared with traditional cable and
              satellite TV
            </caption>
            <thead>
              <tr className="border-b border-[color:var(--hair)]">
                <th scope="col" className="px-5 py-4 font-medium text-tertiary">
                  Feature
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-acid">
                  IPTV Smarters Pro
                </th>
                <th scope="col" className="px-5 py-4 font-medium text-tertiary">
                  Cable / Satellite
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i < COMPARE.length - 1
                      ? "border-b border-[color:var(--hair)]"
                      : ""
                  }
                >
                  <th
                    scope="row"
                    className="px-5 py-4 font-medium text-secondary"
                  >
                    {row.feature}
                  </th>
                  <td className="px-5 py-4 text-primary">{row.iptv}</td>
                  <td className="px-5 py-4 text-tertiary">{row.cable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] text-tertiary">
          Last updated 8 July 2026
        </p>
      </div>
    </section>
  );
}
