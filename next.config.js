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
        // Safe, non-breaking security headers on every route. HSTS is set at the
        // Cloudflare edge. CSP is shipped in Report-Only mode (never blocks) so
        // we can observe violations before enforcing — the app statically
        // prerenders and inlines scripts (theme toggle + JSON-LD), which rules
        // out per-request nonces without deopting static rendering.
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
          {
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' https://wsrv.nl data: blob:",
              "font-src 'self'",
              "media-src 'self'",
              "connect-src 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "object-src 'none'",
            ].join("; "),
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
