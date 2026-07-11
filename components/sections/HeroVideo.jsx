"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Decorative hero background video, deferred so it never competes with the
 * LCP text or the initial mobile payload. It only loads when the browser is
 * idle and the user hasn't opted out via Save-Data or reduced-motion.
 */
export default function HeroVideo() {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const conn =
      typeof navigator !== "undefined" ? navigator.connection : undefined;
    if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ""))) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const start = () => setLoad(true);
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 2500 })
      : window.setTimeout(start, 1200);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  // Pause decoding whenever the hero scrolls out of view to free the GPU/decoder.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  if (!load) return null;

  return (
    <video
      ref={videoRef}
      className="hero-video absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/media/hero.webm" type="video/webm" />
    </video>
  );
}
