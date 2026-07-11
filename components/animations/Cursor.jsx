"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dEl = dot.current;
    const rEl = ring.current;
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let x = rx;
    let y = ry;
    let raf = 0;

    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (rEl) rEl.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      // Halt once the ring has effectively caught up to the pointer so the
      // main thread isn't doing per-frame work while the cursor is idle.
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dEl) dEl.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor]")) {
        rEl?.classList.add("is-hover");
      }
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor]")) {
        rEl?.classList.remove("is-hover");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseout", out, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
