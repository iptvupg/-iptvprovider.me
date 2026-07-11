export default function Marquee({ children, reverse = false, slow = false }) {
  return (
    <div className="mask-fade-x group relative flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        } ${reverse ? "[animation-direction:reverse]" : ""} group-hover:[animation-play-state:paused]`}
      >
        {children}
        {/* Duplicate track for the seamless loop — hidden from the a11y tree
            and search so the catalog content isn't announced/counted twice.
            `contents` keeps the posters as direct flex items (no layout box). */}
        <span aria-hidden="true" className="contents">
          {children}
        </span>
      </div>
    </div>
  );
}
