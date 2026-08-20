
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-cdn.ubuy.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iptvwell.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      }
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';

    // Content-Security-Policy. Allow-lists the third-party origins the site
    // actually loads: Google Analytics (googletagmanager + google-analytics),
    // Ahrefs analytics, and the visitors.now analytics script. In development we
    // additionally permit 'unsafe-eval' and websocket connections so that Next's
    // HMR/dev tooling keeps working; production omits both.
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.ahrefs.com https://cdn.visitors.now`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      `connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.ahrefs.com https://cdn.visitors.now${isDev ? ' ws: wss:' : ''}`,
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      'upgrade-insecure-requests',
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      // Serve the whole site under the /tv prefix without moving any files:
      // /tv/:path* is internally rendered by the real routes (/:path*).
      // The proxy (src/proxy.ts) 301-redirects non-/tv requests to /tv/*,
      // and this rewrite maps them back to the actual pages. The URL stays
      // /tv/* in the browser while Next serves the underlying route.
      {
        source: '/tv',
        destination: '/',
      },
      {
        source: '/tv/:path*',
        destination: '/:path*',
      },
    ]
  },
  async redirects() {
    return [
      // Commercial alias
      {
        source: '/iptv-subscription',
        destination: '/tv/pricing',
        permanent: true,
      },
      // Legacy locations
      {
        source: '/locations',
        destination: '/tv/guides',
        permanent: true,
      },
      {
        source: '/tv/locations',
        destination: '/tv/guides',
        permanent: true,
      },
      // Consolidated device troubleshooting -> knowledge base guide
      {
        source: '/devices/troubleshooting',
        destination: '/tv/guides/iptv-buffering-troubleshooting',
        permanent: true,
      },
      {
        source: '/tv/devices/troubleshooting',
        destination: '/tv/guides/iptv-buffering-troubleshooting',
        permanent: true,
      },
      // Consolidated fire TV guide -> Fire TV hardware hub
      {
        source: '/guides/iptv-on-fire-tv',
        destination: '/tv/devices/fire-tv',
        permanent: true,
      },
      {
        source: '/tv/guides/iptv-on-fire-tv',
        destination: '/tv/devices/fire-tv',
        permanent: true,
      },
      // Consolidated generic setup -> Guides hub
      {
        source: '/guides/iptv-setup-guide',
        destination: '/tv/guides',
        permanent: true,
      },
      {
        source: '/tv/guides/iptv-setup-guide',
        destination: '/tv/guides',
        permanent: true,
      },
      // Consolidated streaming services comparison -> Cable comparison guide
      {
        source: '/guides/iptv-vs-streaming-services',
        destination: '/tv/guides/iptv-vs-cable',
        permanent: true,
      },
      {
        source: '/tv/guides/iptv-vs-streaming-services',
        destination: '/tv/guides/iptv-vs-cable',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
