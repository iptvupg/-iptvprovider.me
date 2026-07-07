"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];

const REVIEWS = [
  {
    q: "I switched from cable and never looked back. 4K sport with literally zero buffering — it's uncanny how smooth it feels.",
    name: "Marcus Bennett",
    role: "Member · 2 years",
    c: "#7C3AED",
  },
  {
    q: "Activation really did take under a minute. Every channel I could ever want, wrapped in an interface that feels genuinely expensive.",
    name: "Elena Reyes",
    role: "Member · 8 months",
    c: "#EC4899",
  },
  {
    q: "TV, iPad and phone at once — perfect sync, perfect quality. Support answered me at two in the morning. This is how it should feel.",
    name: "David Kim",
    role: "Member · 1 year",
    c: "#06B6D4",
  },
  {
    q: "As a football fanatic this is the holy grail. Every league, every match, in crystal 4K. Worth every single cent.",
    name: "Tomás Lund",
    role: "Member · 3 years",
    c: "#22C55E",
  },
];

function Stars() {
  return (
    <div className="flex justify-center gap-1 text-acid">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((v) => (v + 1) % REVIEWS.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const r = REVIEWS[i];

  return (
    <section id="reviews" className="relative overflow-hidden py-28 sm:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.05),transparent)] blur-[70px]" />

      <div className="container-x">
        <Reveal className="text-center">
          <Stars />
          <p className="mt-4 text-[13px] tracking-[0.14em] text-white/40">
            4.9 / 5 · BASED ON 18,420 REVIEWS
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 flex min-h-[300px] max-w-4xl items-center justify-center sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-center"
            >
              <blockquote className="mx-auto max-w-3xl font-display text-[clamp(1.5rem,3.6vw,2.6rem)] font-light leading-[1.28] tracking-editorial text-white text-balance">
                “{r.q}”
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-center gap-3.5">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[14px] font-semibold text-black"
                  style={{ background: r.c }}
                >
                  {r.name.slice(0, 1)}
                </span>
                <div className="text-left">
                  <p className="text-[15px] font-medium text-white">{r.name}</p>
                  <p className="text-[13px] text-white/40">{r.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* nav dots */}
        <div className="mt-14 flex items-center justify-center gap-2.5">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Review ${idx + 1}`}
              className="group relative h-2 w-2"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  idx === i
                    ? "scale-100 bg-white"
                    : "scale-75 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
