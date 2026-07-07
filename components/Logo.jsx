export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#36FF9A" />
            <stop offset="1" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <path
          d="M16 1.5 29.5 9v14L16 30.5 2.5 23V9L16 1.5Z"
          stroke="url(#lg)"
          strokeWidth="1.4"
          className="opacity-70"
        />
        <path
          d="M16 8.5 23 12.5v7L16 23.5 9 19.5v-7L16 8.5Z"
          fill="url(#lg)"
          className="opacity-90"
        />
        <circle cx="16" cy="16" r="2.2" fill="#041207" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-primary">
        IPTV Provider
      </span>
    </span>
  );
}
