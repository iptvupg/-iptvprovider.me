"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/* Visuals                                                             */
/* ------------------------------------------------------------------ */

function Frame({ children, tint = "rgba(0,255,132,0.10)" }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-white/[0.07] bg-ink-900">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at 25% 12%, ${tint}, transparent 60%)`,
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center p-8 sm:p-12">
        {children}
      </div>
    </div>
  );
}

function SignalViz() {
  return (
    <Frame>
      <div className="w-full">
        <svg viewBox="0 0 400 120" className="w-full" fill="none">
          <motion.path
            d="M0 60 H120 L140 60 L150 20 L165 100 L178 40 L190 60 H400"
            stroke="#00FF84"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: EASE }}
          />
        </svg>
        <div className="mt-10 text-center">
          <p className="font-display text-[clamp(3rem,7vw,5rem)] font-light leading-none tracking-editorial text-white">
            0.2<span className="serif text-acid">s</span>
          </p>
          <p className="mt-3 text-[13px] tracking-[0.14em] text-white/40">
            AVERAGE CHANNEL SWITCH
          </p>
        </div>
      </div>
    </Frame>
  );
}

function LibraryViz() {
  const cols = [
    ["#7C3AED", "#EF4444"],
    ["#EC4899", "#10B981"],
    ["#F59E0B", "#3B82F6"],
  ];
  return (
    <Frame tint="rgba(60,120,255,0.10)">
      <div className="grid w-full grid-cols-3 gap-4">
        {cols.map((col, i) => (
          <motion.div
            key={i}
            animate={{ y: i === 1 ? [0, -14, 0] : [0, 12, 0] }}
            transition={{ duration: 9 + i, repeat: Infinity, ease: "easeInOut" }}
            className="space-y-4"
          >
            {col.map((c, j) => (
              <div
                key={j}
                className="aspect-[2/3] rounded-xl border border-white/[0.06]"
                style={{
                  background: `linear-gradient(160deg, ${c}44, ${c}0d)`,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function UptimeViz() {
  const R = 90;
  const C = 2 * Math.PI * R;
  return (
    <Frame>
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 220 220" className="h-56 w-56 -rotate-90">
          <circle cx="110" cy="110" r={R} stroke="rgba(255,255,255,0.07)" strokeWidth="2" fill="none" />
          <motion.circle
            cx="110"
            cy="110"
            r={R}
            stroke="#00FF84"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: C * 0.0001 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: EASE }}
          />
        </svg>
        <div className="absolute text-center">
          <p className="font-display text-[clamp(2.4rem,5vw,3.4rem)] font-light leading-none tracking-editorial text-white">
            99.99<span className="serif text-acid text-2xl">%</span>
          </p>
          <p className="mt-2 text-[12px] tracking-[0.14em] text-white/40">
            UPTIME
          </p>
        </div>
      </div>
    </Frame>
  );
}

const VISUALS = [SignalViz, LibraryViz, UptimeViz];

/* ------------------------------------------------------------------ */
/* Chapters                                                            */
/* ------------------------------------------------------------------ */

const CHAPTERS = [
  {
    index: "01",
    label: "Anti-freeze engine",
    title: "Buffering, abolished.",
    body: "Our v4 streaming engine predicts network dips before they happen and pre-fetches frames across a 14-region edge. Channels switch in two-tenths of a second. Nothing stutters. Nothing waits.",
  },
  {
    index: "02",
    label: "The library",
    title: "Everything, gathered.",
    body: "Twenty thousand live channels. A hundred thousand films and series. Every league, every premiere — in native 4K with Dolby Vision, arriving the same day the world sees them.",
  },
  {
    index: "03",
    label: "Reliability",
    title: "Built to never blink.",
    body: "A 99.99% uptime commitment held up by redundant edge across 180 countries. If one node falters, another catches the frame mid-air. You will never know it happened.",
  },
];

function Chapter({ i, chapter, setActive }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const Visual = VISUALS[i];

  useEffect(() => {
    if (inView) setActive(i);
  }, [inView, i, setActive]);

  return (
    <div
      ref={ref}
      className="flex min-h-[70vh] flex-col justify-center py-16 lg:min-h-screen lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[13px] text-acid">{chapter.index}</span>
          <span className="h-px w-10 bg-white/15" />
          <span className="text-[12px] uppercase tracking-[0.24em] text-white/45">
            {chapter.label}
          </span>
        </div>
        <h3 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.02] tracking-editorial text-white">
          {chapter.title}
        </h3>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed text-smoke">
          {chapter.body}
        </p>

        {/* mobile visual */}
        <div className="mt-10 lg:hidden">
          <Visual />
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="relative py-28 sm:py-40">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Why Aurora</p>
          <AnimatedHeading
            delay={0.1}
            className="mt-7 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1] tracking-editorial text-white"
            lines={[
              <span key="1">Engineered like</span>,
              <span key="2" className="serif text-white/80">
                premium hardware.
              </span>,
            ]}
          />
        </Reveal>

        <div className="mt-24 grid gap-x-20 lg:grid-cols-2">
          {/* sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative w-full">
                {VISUALS.map((Visual, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scale: active === i ? 1 : 0.96,
                      filter: active === i ? "blur(0px)" : "blur(8px)",
                    }}
                    transition={{ duration: 0.8, ease: EASE }}
                    style={{ pointerEvents: active === i ? "auto" : "none" }}
                  >
                    <Visual />
                  </motion.div>
                ))}
                {/* spacer to give the stack height */}
                <div className="invisible">
                  <SignalViz />
                </div>
              </div>
            </div>
          </div>

          {/* chapters */}
          <div>
            {CHAPTERS.map((c, i) => (
              <Chapter key={c.index} i={i} chapter={c} setActive={setActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
