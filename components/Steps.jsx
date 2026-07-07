import AnimatedHeading from "./AnimatedHeading";
import Reveal, { Stagger } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Choose Your Plan",
    body: "Pick the term that suits you: 1, 3, 6 or 12 months. Every plan unlocks the full channel list and movie library.",
    icon: (
      <path
        d="M4 7h16M4 12h16M4 17h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    n: "02",
    title: "Confirm on WhatsApp",
    body: "Send us your order on WhatsApp and pay by card, PayPal or crypto. No payment is taken on this site.",
    icon: (
      <path
        d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "03",
    title: "Get Instant Activation",
    body: "Your login credentials land in your inbox within minutes of the order being confirmed.",
    icon: (
      <path
        d="M13 2 4.5 13.5H11l-1 8.5L18.5 10H12l1-8Z"
        fill="currentColor"
      />
    ),
  },
  {
    n: "04",
    title: "Start Streaming",
    body: "Open any supported app, enter your details, and watch live channels, movies and sports on any device.",
    icon: (
      <>
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M10 9.5v5l4-2.5-4-2.5Z"
          fill="currentColor"
        />
      </>
    ),
  },
];

export default function Steps() {
  return (
    <section id="steps" className="cv-section relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <AnimatedHeading
            delay={0.05}
            className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-editorial text-primary"
            lines={[<span key="1">How to set up IPTV in 4 steps</span>]}
          />
        </Reveal>

        <Stagger className="relative mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              style={{ "--reveal-delay": `${i * 100}ms` }}
              className="reveal surface hairline group relative rounded-3xl p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border text-acid hairline transition-colors duration-500 group-hover:hairline-strong">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {s.icon}
                  </svg>
                </span>
                <span className="font-display text-[2.4rem] font-semibold leading-none tracking-editorial text-[color:var(--hair-strong)]">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-7 font-display text-[20px] font-semibold tracking-editorial text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-secondary">
                {s.body}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
