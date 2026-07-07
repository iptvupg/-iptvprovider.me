import { ImageResponse } from "next/og";

export const alt = "IPTV Provider — 20,000+ channels in HD/4K";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(120% 100% at 50% 0%, #0b2018 0%, #050505 55%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#00FF84",
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#00FF84",
            }}
          />
          IPTV Provider
        </div>
        <div
          style={{
            marginTop: 28,
            color: "#ffffff",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          The World&apos;s Premier IPTV Service
        </div>
        <div
          style={{
            marginTop: 30,
            color: "#A5A5A5",
            fontSize: 34,
            maxWidth: 820,
          }}
        >
          20,000+ live channels & extensive VOD in HD/4K. Instant activation.
        </div>
      </div>
    ),
    { ...size }
  );
}
