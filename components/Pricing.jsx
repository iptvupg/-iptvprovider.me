"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];
const WHATSAPP = "https://wa.me/10000000000";

const PLANS = [
  {
    name: "1 Month",
    price: 16,
    per: "$16.00 / month",
    highlight: false,
  },
  {
    name: "3 Months",
    price: 39,
    per: "Equivalent to $13.00 / month",
    highlight: false,
  },
  {
    name: "6 Months",
    price: 60,
    per: "Equivalent to $10.00 / month",
    highlight: false,
  },
  {
    name: "12 Months",
    price: 90,
    per: "Equivalent to $7.50 / month",
    highlight: true,
    badge: "Best Value",
  },
];

const FEATURES = [
  "20,000+ Live Channels",
  "Extensive VOD Library",
  "HD / 4K Streaming Quality",
  "24/7 Customer Support",
  "Instant Activation",
  "Anti-Freeze Technology",
];

function Check({ acid }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={acid ? "text-[#041207]" : "text-acid"}
    >
      <path
        d="m5 12.5 4 4L19 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Pricing</p>
          <AnimatedHeading
            delay={0.05}
            className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-editorial text-primary"
            lines={[<span key="1">Choose your IPTV package</span>]}
          />
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-secondary">
            Simple, transparent pricing. All plans include every feature — pick
            the duration that suits you best.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
              className={`relative flex flex-col rounded-3xl border p-7 transition-transform duration-500 hover:-translate-y-1 ${
                p.highlight
                  ? "border-transparent bg-acid text-[#041207] shadow-[0_20px_60px_-15px_rgba(0,255,132,0.5)]"
                  : "surface hairline hover:hairline-strong"
              }`}
            >
              {p.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-[#041207] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-acid">
                  {p.badge}
                </span>
              )}

              <h3
                className={`font-display text-[19px] font-semibold tracking-editorial ${
                  p.highlight ? "text-[#041207]" : "text-primary"
                }`}
              >
                {p.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={`font-display text-[3.2rem] font-semibold leading-none tracking-editorial ${
                    p.highlight ? "text-[#041207]" : "text-primary"
                  }`}
                >
                  ${p.price}
                </span>
              </div>
              <p
                className={`mt-2 text-[13px] ${
                  p.highlight ? "text-[#041207]/70" : "text-tertiary"
                }`}
              >
                {p.per}
              </p>

              <div
                className={`my-6 h-px ${
                  p.highlight ? "bg-[#041207]/15" : "bg-[color:var(--hair)]"
                }`}
              />

              <ul className="flex-1 space-y-3">
                {FEATURES.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 text-[13.5px] ${
                      p.highlight ? "text-[#041207]/90" : "text-secondary"
                    }`}
                  >
                    <Check acid={p.highlight} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-transform duration-500 hover:scale-[1.03] active:scale-95 ${
                  p.highlight
                    ? "bg-[#041207] text-acid"
                    : "bg-acid text-[#041207]"
                }`}
              >
                Order Now
                <span className="transition-transform duration-500">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
