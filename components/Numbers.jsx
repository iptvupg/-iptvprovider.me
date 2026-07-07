"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { to: 20, suffix: "K+", label: "Live channels", sub: "in 180+ countries" },
  { to: 100, suffix: "K+", label: "Films & series", sub: "same-day releases" },
  { raw: "4K", label: "Dolby Vision", sub: "HDR10+ · Atmos" },
  { to: 99.99, suffix: "%", decimals: 2, label: "Uptime", sub: "measured yearly" },
];

export default function Numbers() {
  return (
    <section className="relative border-y border-white/[0.06] py-28 sm:py-36">
      <div className="container-x">
        <div className="grid gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
              className={`text-center lg:px-10 lg:text-left ${
                i > 0 ? "lg:border-l lg:border-white/[0.07]" : ""
              }`}
            >
              <div className="font-display text-[clamp(3rem,7vw,4.5rem)] font-light leading-none tracking-editorial text-white">
                {s.raw ? (
                  <span>
                    4<span className="serif text-acid">K</span>
                  </span>
                ) : (
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    decimals={s.decimals || 0}
                  />
                )}
              </div>
              <p className="mt-5 text-[15px] font-medium text-white">
                {s.label}
              </p>
              <p className="mt-1 text-[13px] text-white/40">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
