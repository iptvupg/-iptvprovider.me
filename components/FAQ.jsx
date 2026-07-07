"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];
const WHATSAPP = "https://wa.me/10000000000";

const ITEMS = [
  {
    q: "What is IPTV?",
    a: "IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over the internet instead of traditional satellite or cable. All you need is a compatible device and a stable internet connection.",
  },
  {
    q: "How do I get started?",
    a: "Choose a subscription plan that suits you, complete your order, and you'll receive your login details within minutes. Enter them into your preferred app and start watching right away.",
  },
  {
    q: "Which devices are supported?",
    a: "Our service works on Smart TVs, Amazon Firestick, Android boxes and phones, Apple TV, iOS, Windows, macOS, MAG boxes, and any modern web browser. Setup guides are provided for each platform.",
  },
  {
    q: "How many channels do you offer?",
    a: "We provide access to 20,000+ live channels from around the world, plus an extensive video-on-demand library featuring the latest movies and TV series.",
  },
  {
    q: "What internet speed do I need?",
    a: "We recommend a minimum of 15 Mbps for smooth HD streaming and 25 Mbps or higher for flawless 4K playback. A stable wired or Wi-Fi connection gives the best experience.",
  },
  {
    q: "Will the stream buffer or freeze?",
    a: "Our anti-freeze technology and load-balanced servers keep playback smooth and stable. With a good connection, you'll enjoy uninterrupted streaming in the highest quality your screen supports.",
  },
  {
    q: "Can I watch on multiple devices?",
    a: "Yes. Depending on your plan you can use multiple simultaneous connections, so different people in your household can watch different content at the same time.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, we offer a risk-free trial so you can test the service and quality before committing to a full subscription. Contact us on WhatsApp to get started.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept a range of secure payment options. Reach out to our support team on WhatsApp and we'll guide you through the quickest way to activate your subscription.",
  },
  {
    q: "How can I contact support?",
    a: "Our support team is available 24/7. The fastest way to reach us is via WhatsApp, and you can also email us at support@iptvprovider.me any time.",
  },
];

function Row({ item, open, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.04 }}
      className="border-b border-[color:var(--hair)]"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`font-display text-[17px] font-medium tracking-editorial transition-colors sm:text-[19px] ${
            open ? "text-primary" : "text-secondary"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
            open
              ? "border-acid/40 bg-acid/10 text-acid"
              : "border-[color:var(--hair-strong)] text-tertiary"
          }`}
        >
          <span
            className="absolute h-3 w-px bg-current transition-transform duration-300"
            style={{ transform: open ? "rotate(90deg)" : "none" }}
          />
          <span className="h-px w-3 bg-current" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-secondary">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
              Frequently asked questions
            </h2>
            <p className="mt-6 max-w-xs text-[16px] leading-relaxed text-secondary">
              Everything worth knowing before you start. Still curious? Our team
              replies in minutes, around the clock.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-8 inline-block text-[15px] font-medium text-primary"
            >
              Talk to support →
            </a>
          </Reveal>

          <div>
            {ITEMS.map((item, i) => (
              <Row
                key={item.q}
                item={item}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
