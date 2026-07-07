"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({
  children,
  href = "#",
  variant = "acid",
  className = "",
  strength = 0.4,
  glow = true,
  as,
  ...props
}) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 200, damping: 15, mass: 0.3 });
  const cx = useTransform(sx, (v) => v * 0.35);
  const cy = useTransform(sy, (v) => v * 0.35);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) * strength);
    my.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const base =
    variant === "acid"
      ? "bg-acid text-[#041207] hover:bg-acid-hover"
      : "border border-white/[0.12] bg-white/[0.02] text-white hover:border-white/25 hover:bg-white/[0.06]";

  const Tag = as === "button" ? motion.button : motion.a;

  return (
    <Tag
      ref={ref}
      href={as === "button" ? undefined : href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold tracking-tight transition-colors duration-300 ${base} ${className}`}
      {...props}
    >
      {glow && variant === "acid" && (
        <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-acid/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      )}
      <motion.span
        style={{ x: cx, y: cy }}
        className="relative inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </Tag>
  );
}
