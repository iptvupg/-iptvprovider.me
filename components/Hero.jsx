"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const EASE = [0.16, 1, 0.3, 1];
const WHATSAPP = "https://wa.me/10000000000";

const TRUST = [
  {
    label: "Instant activation",
    icon: (
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    ),
  },
  {
    label: "All devices",
    icon: (
      <>
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.96 3.15" />
        <path d="M7 19h5" />
        <rect width="6" height="10" x="16" y="12" rx="2" />
      </>
    ),
  },
  {
    label: "HD/4K Quality",
    icon: (
      <>
        <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
        <rect x="2" y="3" width="20" height="14" rx="2" />
      </>
    ),
  },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden pt-36 pb-24 sm:pt-40"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="/media/hero.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-[var(--bg)]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]" />
        <div className="absolute left-1/2 top-[6%] h-[440px] w-[760px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.13),transparent)] blur-[70px]" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            color: "var(--fg)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(75% 55% at 50% 20%, #000 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(75% 55% at 50% 20%, #000 0%, transparent 72%)",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container-x text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="eyebrow justify-center"
        >
          <span className="h-1 w-1 rounded-full bg-acid shadow-[0_0_10px_2px_rgba(0,255,132,0.7)]" />
          Trusted by 250,000+ viewers worldwide
        </motion.p>

        <AnimatedHeading
          as="h1"
          mount
          delay={0.28}
          stagger={0.1}
          className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.6rem,7.5vw,5.5rem)] font-semibold leading-[0.98] tracking-editorial text-primary"
          lines={[
            <span key="1">The World&apos;s Premier</span>,
            <span key="2" className="relative inline-block">
              IPTV{" "}
              <span className="relative text-primary">
                Provider
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 1 }}
                  className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-acid/80 sm:h-2"
                />
              </span>
            </span>,
          ]}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.85 }}
          className="mx-auto mt-8 max-w-xl text-pretty text-[16px] leading-relaxed text-secondary sm:text-[17px]"
        >
          Unlock a world of entertainment with one of the world&apos;s best IPTV
          providers. Start your subscription now, from just{" "}
          <span className="font-medium text-primary">$7.50/mo</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3.5 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
          >
            <span className="absolute -inset-2 -z-10 rounded-full bg-acid/35 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            View Pricing
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-acid">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contact on WhatsApp
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center gap-2 text-[13px] text-secondary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-acid"
              >
                {t.icon}
              </svg>
              {t.label}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
