"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Cinematic line-by-line mask reveal.
 * Pass `lines` as an array of strings or JSX nodes.
 */
export default function AnimatedHeading({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.09,
  duration = 1.15,
  once = true,
  amount = 0.25,
  mount = false,
}) {
  const Tag = motion[as] || motion.h2;
  // Above-the-fold headings animate on mount; the rest reveal on scroll.
  const revealProps = mount
    ? { animate: { y: "0%" } }
    : { whileInView: { y: "0%" }, viewport: { once, amount } };
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden py-[0.12em] -my-[0.12em]"
        >
          <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            {...revealProps}
            transition={{ duration, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
