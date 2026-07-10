import PageShell from "@/components/PageShell";

const SITE = "https://www.iptvprovider.me";
const WHATSAPP = "https://wa.me/447848197761";

// Shared body for the /how-to/install-iptv-on-* device guides. Each page passes
// its own device-specific data (steps, chips, supplies, FAQ) plus any extra
// prose sections as children; this component renders the consistent chrome and
// builds the HowTo + FAQPage JSON-LD so every guide stays structurally uniform
// while keeping unique, device-accurate content.
//
// Props:
//   slug         path without leading slash, e.g. "how-to/install-iptv-on-android"
//   eyebrow, breadcrumb, title, intro, updated ({ iso, label })
//   device       plain device name for the HowTo name/description
//   app          player app name (HowTo tool + chip). Optional.
//   totalTime    ISO 8601 duration, e.g. "PT10M"
//   chips        array of short strings shown as pills
//   supplies     array of strings → HowToSupply
//   beforeIntro  lead sentence for the "Before you start" list
//   beforeItems  array of JSX nodes rendered as <li> items
//   steps        array of { name, text }
//   stepsHeading heading above the numbered steps
//   faqItems     array of [question, answer]
//   children     device-specific prose sections rendered between steps and FAQ
export default function HowToGuide({
  slug,
  eyebrow,
  breadcrumb,
  title,
  intro,
  updated,
  device,
  app,
  totalTime = "PT10M",
  chips = [],
  supplies = [],
  beforeIntro = "Make sure you have these ready:",
  beforeItems = [],
  steps = [],
  stepsHeading,
  faqItems = [],
  children,
}) {
  const URL = `${SITE}/${slug}`;

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Install IPTV on ${device}`,
    description: intro,
    totalTime,
    image: `${SITE}/opengraph-image`,
    supply: supplies.map((s) => ({ "@type": "HowToSupply", name: s })),
    ...(app ? { tool: [{ "@type": "HowToTool", name: app }] } : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${URL}#step-${i + 1}`,
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <PageShell
      slug={slug}
      eyebrow={eyebrow}
      parent={{ name: "How to set up IPTV", href: "/how-to" }}
      breadcrumb={breadcrumb}
      title={title}
      intro={intro}
      updated={updated}
      author="IPTV Provider Editorial"
      schemas={[howToLd, faqLd]}
    >
      {chips.length ? (
        <div className="not-prose mb-8 flex flex-wrap gap-3">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[color:var(--hair-strong)] px-4 py-1.5 text-[13px] text-secondary"
            >
              {c}
            </span>
          ))}
        </div>
      ) : null}

      {beforeItems.length ? (
        <>
          <h2>Before you start</h2>
          <p>{beforeIntro}</p>
          <ul>{beforeItems}</ul>
        </>
      ) : null}

      <h2>{stepsHeading || `Install IPTV on ${device}: step by step`}</h2>
      <ol className="mt-4 list-none space-y-4 pl-0">
        {steps.map((s, i) => (
          <li
            key={s.name}
            id={`step-${i + 1}`}
            className="surface hairline flex gap-4 rounded-2xl p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-acid text-[14px] font-bold text-[#041207]">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-[17px] font-semibold tracking-editorial text-primary">
                {s.name}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-secondary">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {children}

      {faqItems.length ? (
        <>
          <h2>Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-[color:var(--hair)] border-y border-[color:var(--hair)]">
            {faqItems.map(([q, a]) => (
              <details key={q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-medium text-primary">
                  {q}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-acid hairline transition-transform duration-300 group-open:rotate-45">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-[14px] leading-relaxed text-secondary">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </>
      ) : null}

      <div className="not-prose mt-12 rounded-[2rem] border border-[color:var(--hair-strong)] bg-[var(--bg-2)] p-8 text-center">
        <h2 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-semibold tracking-editorial text-primary">
          No line yet?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-secondary">
          Start a free 24-hour trial and follow this guide with the full channel
          and movie library — no card required.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/iptv-free-trial-2026"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-7 py-3.5 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
          >
            Start free trial
            <span aria-hidden>→</span>
          </a>
          <a
            href="/iptv-subscription-plans"
            className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
          >
            View plans
          </a>
        </div>
      </div>
    </PageShell>
  );
}

export { WHATSAPP };
