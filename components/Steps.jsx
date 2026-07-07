"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];

const STEPS = [
  {
    n: "01",
    title: "Choose Your Plan",
    body: "Pick the subscription duration that fits you best. Every plan unlocks the full library of channels and on-demand content.",
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
    title: "Get Instant Activation",
    body: "Complete your order and receive your login details within minutes. No waiting, no complicated setup required.",
    icon: (
      <path
        d="M13 2 4.5 13.5H11l-1 8.5L18.5 10H12l1-8Z"
        fill="currentColor"
      />
    ),
  },
  {
    n: "03",
    title: "Start Watching",
    body: "Log in on any device and enjoy thousands of live channels, movies, and sports in stunning HD and 4K quality.",
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
    <section id="steps" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <AnimatedHeading
            delay={0.05}
            className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-editorial text-primary"
            lines={[<span key="1">Get started in 3 simple steps</span>]}
          />
        </Reveal>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="surface hairline group relative rounded-3xl p-8"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
