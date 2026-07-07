"use client";

import Marquee from "./Marquee";
import Reveal from "./Reveal";

const PRESS = [
  "CNET",
  "TechRadar",
  "Digital Trends",
  "Hacker News",
  "Engadget",
  "The Verge",
  "PCMag",
  "Wired",
];

export default function LogoCloud() {
  return (
    <section className="relative pb-16 pt-4 sm:pb-24">
      <div className="container-x">
        <Reveal className="mb-10 text-center">
          <p className="text-[12px] uppercase tracking-[0.22em] text-tertiary">
            As featured in
          </p>
        </Reveal>
      </div>
      <Marquee slow>
        {PRESS.map((p) => (
          <span
            key={p}
            className="mx-9 select-none whitespace-nowrap font-display text-xl font-semibold tracking-tight text-primary opacity-25 grayscale transition-opacity duration-500 hover:opacity-70 sm:mx-12 sm:text-2xl"
          >
            {p}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
