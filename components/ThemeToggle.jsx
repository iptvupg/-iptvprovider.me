"use client";

import { useState } from "react";

export default function ThemeToggle() {
  // Knob position/colour are driven entirely by CSS from the `html.light` class
  // (applied by the inline head script before hydration), so the markup is
  // theme-independent and identical on server and client — no flash, no nested
  // hydration mismatch. React state only tracks aria-pressed + toggle logic.
  const [light, setLight] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("light")
  );

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      aria-pressed={light}
      suppressHydrationWarning
      className="relative flex h-7 w-12 items-center rounded-full border border-white/[0.1] bg-white/[0.03] px-0.5 transition-colors hairline"
    >
      <span
        className="theme-knob flex h-5 w-5 items-center justify-center rounded-full transition-all duration-500"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <svg
          className="theme-icon-sun"
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="theme-icon-moon"
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </span>
    </button>
  );
}
