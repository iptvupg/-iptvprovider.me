"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { observe } from "@/lib/observer";

/**
 * Cinematic line-by-line mask reveal on scroll — pure CSS, no animation library.
 * Uses a lightweight IntersectionObserver to add `.anim-in` when in view.
 * (For above-the-fold headings that should autoplay without JS, use the server
 * component MountHeading instead.)
 */
export default function AnimatedHeading({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.09,
  once = true,
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let dispose;
    dispose = observe(el, (entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) dispose?.();
      } else if (!once) {
        setInView(false);
      }
    });
    return () => dispose?.();
  }, [once]);

  return createElement(
    as,
    { ref, className: `${inView ? "anim-in " : ""}${className}`.trim() },
    lines.map((line, i) => (
      <span key={i} className="anim-mask">
        <span
          className="anim-line"
          style={{ "--line-delay": `${(delay + i * stagger) * 1000}ms` }}
        >
          {line}
        </span>
      </span>
    ))
  );
}
