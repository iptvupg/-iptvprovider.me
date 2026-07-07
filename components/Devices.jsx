"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";
import StreamUI from "./StreamUI";

const EASE = [0.16, 1, 0.3, 1];

const DEVICES = ["Smart TV", "iPhone & iPad", "Apple TV", "Firestick", "Android", "Web"];

export default function Devices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yTv = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [130, -110]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, -4]);

  return (
    <section id="devices" className="relative overflow-hidden py-28 sm:py-40">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Everywhere you are</p>
          <AnimatedHeading
            delay={0.1}
            className="mt-7 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1] tracking-editorial text-white"
            lines={[
              <span key="1">One subscription.</span>,
              <span key="2" className="serif text-white/80">
                Every screen you own.
              </span>,
            ]}
          />
          <p className="mx-auto mt-7 max-w-md text-[17px] leading-relaxed text-smoke">
            Start on the sofa, finish on the train. Perfectly in sync across up
            to five screens at once.
          </p>
        </Reveal>

        {/* composition */}
        <div
          ref={ref}
          className="relative mx-auto mt-24 flex h-[420px] max-w-4xl items-center justify-center sm:h-[540px]"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.07),transparent)] blur-[70px]" />

          {/* TV */}
          <motion.div
            style={{ y: yTv, rotate }}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative z-10 w-[82%] max-w-3xl"
          >
            <div className="rounded-[22px] border border-white/[0.1] bg-ink-900 p-2.5 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.95)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(130% 130% at 20% 8%, #103c2c 0%, #0a1912 46%, #050807 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,255,132,0.1),transparent_72%)] mix-blend-screen" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-9">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-medium backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Live · 4K
                  </span>
                  <div className="grid grid-cols-5 gap-3">
                    {["#7C3AED", "#EF4444", "#06B6D4", "#F59E0B", "#EC4899"].map(
                      (c, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: EASE }}
                          className="aspect-[2/3] rounded-lg"
                          style={{ background: `linear-gradient(160deg, ${c}55, ${c}11)` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-1 h-5 w-20 rounded-b-lg bg-gradient-to-b from-ink-800 to-ink-950" />
            <div className="mx-auto h-1 w-36 rounded-full bg-ink-800" />
          </motion.div>

          {/* Phone */}
          <motion.div
            style={{ y: yPhone }}
            initial={{ opacity: 0, x: 30, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 7 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
            className="absolute -right-2 bottom-2 z-30 w-[22%] max-w-[158px] sm:-right-8"
          >
            <div className="rounded-[26px] border border-white/[0.14] bg-ink-900 p-1.5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.95)]">
              <div className="relative">
                <div className="absolute left-1/2 top-1.5 z-10 h-1 w-8 -translate-x-1/2 rounded-full bg-white/20" />
                <div className="aspect-[9/19] overflow-hidden rounded-[20px] bg-ink-950">
                  <StreamUI compact />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Reveal className="mx-auto mt-20 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {DEVICES.map((d) => (
            <span
              key={d}
              className="text-[14px] font-light tracking-[0.02em] text-white/40 transition-colors duration-500 hover:text-white"
            >
              {d}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
