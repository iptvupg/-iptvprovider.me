/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Auto-memoizes every client component at build time, removing the need for
  // hand-written memo/useCallback and cutting re-renders on interaction.
  reactCompiler: true,
  async headers() {
    return [
      {
        // Safe, non-breaking security headers on every route. CSP and
        // origin-level HSTS are intentionally omitted: the app inlines scripts
        // (theme + JSON-LD) so CSP needs nonce plumbing, and HSTS is already set
        // at the Cloudflare edge.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
