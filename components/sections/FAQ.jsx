"use client";

import { useState } from "react";
import Reveal, { Stagger } from "@/components/animations/Reveal";
import { WHATSAPP } from "@/config";
import { faqSchema } from "@/lib/schema";

const ITEMS = [
  {
    q: "How do I set up my subscription after I buy?",
    a: "As soon as your order is confirmed, we email your login credentials and a step-by-step setup guide, usually within minutes. Enter your details into any supported app and you're watching.",
  },
  {
    q: "Which devices work with our IPTV service?",
    a: "Smart TVs, Firestick, Apple TV, Roku, MAG boxes, Android, iOS, Windows and Mac. If it connects to the internet and runs an IPTV player, it works.",
  },
  {
    q: "How fast is activation?",
    a: "Minutes. Once your payment is confirmed on WhatsApp, your login arrives by email straight away.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Card, PayPal and crypto, all through encrypted checkout. You place the order over WhatsApp and pay securely.",
  },
  {
    q: "What internet speed do I need?",
    a: "Around 15 Mbps for smooth HD and 25 Mbps or more for stable 4K. A wired connection or solid Wi-Fi gives the best result.",
  },
  {
    q: "Can I customise my playlist of channels, movies and series?",
    a: "Yes. Tell us what you watch most and we'll shape the lineup around it.",
  },
  {
    q: "Can I use my account while travelling abroad?",
    a: "Yes. Your subscription follows you anywhere with an internet connection, and every plan includes built-in VPN protection.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes, 30 days. If the service isn't right for you, ask for a refund and you'll get it.",
  },
  {
    q: "Can I cancel?",
    a: "Anytime. Plans are billed once and nothing auto-renews, so there's no subscription to chase down.",
  },
  {
    q: "Do you offer a free IPTV trial?",
    a: "Yes, a free 24-hour trial. Test the channels and picture quality before you pay anything. Contact us on WhatsApp to get started.",
    cta: { href: "/iptv-free-trial-2026", label: "Start your free 24-hour trial →" },
  },
  {
    q: "How much does an IPTV subscription cost?",
    a: "Plans start at $7.50/mo on the annual option. You can also go monthly at $16, or pick 3 or 6 months. Every plan includes the full channel list and movie library.",
  },
];

function Row({ item, open, onToggle, index }) {
  return (
    <div
      className="reveal border-b border-[color:var(--hair)]"
      style={{ "--reveal-delay": `${index * 40}ms` }}
    >
      <button
        onClick={() => onToggle(index)}
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
      <div className={`faq-panel${open ? " open" : ""}`}>
        <div className="overflow-hidden">
          <p className="max-w-2xl pr-10 text-[15px] leading-relaxed text-secondary">
            {item.a}
          </p>
          {item.cta && (
            <a
              href={item.cta.href}
              className="link-underline mt-3 inline-block pb-6 text-[15px] font-medium text-acid"
            >
              {item.cta.label}
            </a>
          )}
          {!item.cta && <div className="pb-6" />}
        </div>
      </div>
    </div>
  );
}

const faqLd = faqSchema(ITEMS.map((item) => [item.q, item.a]));

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
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

          <Stagger>
            {ITEMS.map((item, i) => (
              <Row
                key={item.q}
                item={item}
                index={i}
                open={open === i}
                onToggle={toggle}
              />
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
