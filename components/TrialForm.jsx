"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "447848197761";

const DEVICES = [
  "Android Box",
  "Amazon Firestick",
  "Smart TV (Samsung / LG)",
  "Android Phone / Tablet",
  "Apple TV / iOS",
  "Windows / macOS",
  "MAG Box",
  "Nvidia Shield",
];

const APPS = [
  "IPTV Smarters Pro",
  "TiviMate",
  "IBO Player",
  "XCIPTV",
  "Not sure — recommend one",
];

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Ireland",
  "Australia",
  "New Zealand",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Mexico",
  "Brazil",
  "Argentina",
  "United Arab Emirates",
  "Saudi Arabia",
  "Other",
];

const inputClass =
  "w-full rounded-2xl border border-[color:var(--hair-strong)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-primary placeholder:text-tertiary outline-none transition-colors focus:border-acid";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function TrialForm() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState(DEVICES[0]);
  const [app, setApp] = useState(APPS[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !country.trim()) {
      setError("Please add your name and country.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    const lines = [
      "Hi! I'd like to start my free 24-hour IPTV trial.",
      "",
      `Name: ${name.trim()}`,
      `Country: ${country.trim()}`,
      `Email: ${email.trim()}`,
      `Device: ${device}`,
      `App: ${app}`,
      note.trim() ? `Note: ${note.trim()}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="apply"
      className="surface hairline w-full rounded-3xl p-6 shadow-card sm:p-8"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-acid shadow-[0_0_10px_2px_rgba(0,255,132,0.7)]" />
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-secondary">
          Apply for your free trial
        </p>
      </div>
      <h2 className="mt-3 font-display text-[24px] font-semibold tracking-editorial text-primary sm:text-[28px]">
        Get 24 hours free
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-secondary">
        No credit card required. Fill this in and we&apos;ll send your trial
        line — usually within minutes.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name *"
          className={inputClass}
        />

        <select
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`${inputClass} ${country ? "" : "text-tertiary"}`}
        >
          <option value="" disabled>
            Select your country *
          </option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c} className="text-primary">
              {c}
            </option>
          ))}
        </select>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address *"
          className={inputClass}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.14em] text-tertiary">
              Device type
            </span>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className={inputClass}
            >
              {DEVICES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.14em] text-tertiary">
              IPTV app
            </span>
            <select
              value={app}
              onChange={(e) => setApp(e.target.value)}
              className={inputClass}
            >
              {APPS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          placeholder="Any questions or notes? (optional)"
          className={`${inputClass} resize-none`}
        />

        {error && (
          <p className="text-[13px] font-medium text-[#ff6b6b]">{error}</p>
        )}

        <button
          type="submit"
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid px-6 py-4 text-[14px] font-bold uppercase tracking-[0.08em] text-[#041207] transition-transform duration-500 hover:scale-[1.02] active:scale-95"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Get my free trial
        </button>

        <p className="pt-1 text-center text-[12px] leading-relaxed text-tertiary">
          After you apply, you&apos;ll get a reply within 1–30 min. Please check
          your inbox (and spam folder).
        </p>
      </form>
    </div>
  );
}
