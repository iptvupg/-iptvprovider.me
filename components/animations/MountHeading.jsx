import { createElement } from "react";

/**
 * Server-rendered heading whose lines rise in via pure CSS keyframes
 * (`.anim-line-mount`). No "use client", no JS — ideal for the LCP heading.
 */
export default function MountHeading({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.09,
}) {
  return createElement(
    as,
    { className: className || undefined },
    lines.map((line, i) => (
      <span key={i} className="anim-mask">
        <span
          className="anim-line-mount"
          style={{ "--line-delay": `${(delay + i * stagger) * 1000}ms` }}
        >
          {line}
        </span>
      </span>
    ))
  );
}
