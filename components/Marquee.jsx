"use client";

export default function Marquee({ children, reverse = false, slow = false }) {
  return (
    <div className="mask-fade-x group relative flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        } ${reverse ? "[animation-direction:reverse]" : ""} group-hover:[animation-play-state:paused]`}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
