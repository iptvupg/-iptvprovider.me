"use client";

const CHANNELS = [
  { n: "HBO Max 4K", c: "#8B5CF6", live: true },
  { n: "ESPN Ultra", c: "#EF4444", live: true },
  { n: "Sky Sports F1", c: "#06B6D4", live: true },
  { n: "Netflix Originals", c: "#E50914" },
  { n: "Apple TV+", c: "#f5f5f5" },
  { n: "BeIN Sports 1", c: "#00FF84" },
];

export default function StreamUI({ compact = false }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-ink-900 text-white">
      {/* now playing */}
      <div className="relative h-[58%] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 20% 0%, #133a2b 0%, #0a1a14 45%, #060a08 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,255,132,0.18),transparent)] mix-blend-screen" />
        {/* faux poster */}
        <div className="absolute inset-0 flex items-end p-4 sm:p-5">
          <div className="w-full">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-red-500/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Live
              </span>
              <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold tracking-wide">
                4K · HDR
              </span>
            </div>
            <h4 className="text-lg font-semibold leading-tight tracking-tight sm:text-xl">
              UEFA Champions League
            </h4>
            <p className="text-[11px] text-white/50">Final · Wembley Stadium</p>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[64%] rounded-full bg-acid" />
            </div>
          </div>
        </div>
        {/* play control */}
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-acid">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* channel rail */}
      <div className="h-[42%] space-y-1.5 p-3 sm:p-4">
        <div className="mb-1 flex items-center justify-between px-1">
          <span className="text-[11px] font-semibold text-white/80">
            Continue watching
          </span>
          <span className="text-[10px] text-acid">20,412 live</span>
        </div>
        {CHANNELS.slice(0, compact ? 3 : 4).map((ch) => (
          <div
            key={ch.n}
            className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-2.5 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[9px] font-bold text-black"
              style={{ background: ch.c }}
            >
              {ch.n.slice(0, 2)}
            </span>
            <span className="flex-1 truncate text-[12px] font-medium text-white/90">
              {ch.n}
            </span>
            {ch.live && (
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
