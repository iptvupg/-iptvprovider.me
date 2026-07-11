"use client";

import { useEffect, useRef, useState, createElement } from "react";
import { observe } from "@/lib/observer";

function useInView(once = true) {
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

  return [ref, inView];
}

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  once = true,
  className = "",
}) {
  const [ref, inView] = useInView(once);
  return createElement(
    as,
    {
      ref,
      className: `reveal${inView ? " is-in" : ""} ${className}`.trim(),
      style: delay ? { "--reveal-delay": `${delay * 1000}ms` } : undefined,
    },
    children
  );
}

export function Stagger({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView(true);
  return (
    <div
      ref={ref}
      className={`${inView ? "anim-in " : ""}${className}`.trim()}
      style={delay ? { "--reveal-delay": `${delay * 1000}ms` } : undefined}
      data-stagger
    >
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
