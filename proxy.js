import { NextResponse } from "next/server";

// The site was rebuilt from a large multi-page IPTV site down to a single
// landing page. This proxy handles legacy URLs indexed by search engines:
//   - "/" and equivalent commerce/pricing/trial pages 301 to the landing page.
//   - Every other deleted page returns 410 Gone (a clean "removed" signal),
//     rather than 404 or a soft-404 redirect-to-home.
// Next.js config redirects() only emit 308, so a proxy is used for true 301s.

const DEST = "/iptv-smarters-pro";

// Pages whose intent is fully satisfied by the current landing page (pricing,
// plans, subscriptions, free trial) → permanent 301 redirect.
const REDIRECTS = new Set([
  "/pricing",
  "/iptv-pricing",
  "/iptv-pricing-guide",
  "/iptv-plans",
  "/plans/monthly",
  "/plans/quarterly",
  "/plans/bi-annual",
  "/plans/yearly",
  "/product/1-month-iptv-subscription",
  "/product/3-months-iptv-subscription",
  "/product/6-months-iptv-subscription",
  "/product/12-months-iptv-subscription",
  "/iptv-subscription",
  "/iptv-subscription/1-month/iptv",
  "/iptv-subscription/3-months/iptv",
  "/iptv-subscription/6-months/iptv",
  "/iptv-subscription/12-months/iptv",
  "/iptv/1-month",
  "/iptv/3-months",
  "/iptv/6-months",
  "/iptv/12-months",
  "/iptv/free-trial",
  "/iptv-free-trial",
  "/iptv-free-trial-24-hours",
  "/free-iptv-trial/24-hours",
  "/trial/24h-access",
  "/iptv-smarters-pro-firestick-free",
]);

// Prefix/suffix patterns for deleted page families → 410 Gone.
const GONE_PATTERNS = [
  /^\/best-iptv-/, // country + topic landing pages
  /^\/country(\/|$)/,
  /^\/coverage(\/|$)/,
  /^\/countries$/,
  /^\/locations?$/,
  /^\/devices(\/|$)/,
  /^\/setup(\/|$)/,
  /^\/guides?(\/|$)/,
  /^\/blog(\/|$)/,
  /^\/post(\/|$)/,
  /^\/article$/,
  /^\/company(\/|$)/,
  /^\/team(\/|$)/,
  /^\/legal(\/|$)/,
  /^\/support(\/|$)/,
  /-iptv$/, // android-iptv, roku-iptv, fire-tv-iptv, {country}-iptv, etc.
  /^\/wp-/, // legacy WordPress: wp-admin, wp-content, wp-json
  /^\/xmlrpc\.php$/,
];

// Individual deleted pages (informational, legal, misc) → 410 Gone.
const GONE_EXACT = new Set([
  "/faq",
  "/coverage",
  "/countries",
  "/locations",
  "/location",
  "/iptv-algeria",
  "/iptv-andorra",
  "/iptv-for-ppv",
  "/iptv-for-sports",
  "/iptv-guide",
  "/iptv-services",
  "/iptv-risks",
  "/iptv-vpn-guide",
  "/iptv-vs-streaming-services",
  "/iptv-what-is",
  "/iptv-why-vpn-blocking",
  "/how-iptv-works",
  "/what-is-iptv",
  "/why-vpn-blocking-iptv",
  "/is-iptv-free",
  "/is-iptv-legal",
  "/is-iptv-legal-usa",
  "/is-iptv-smarters-pro-worth-it",
  "/state-of-iptv-2026",
  "/acceptable-use-policy",
  "/dmca-policy",
  "/gdpr",
  "/licensing-disclaimer",
  "/refund-policy",
  "/terms-of-service",
  "/review-process",
  "/guide",
  "/guides",
  // NOTE: /privacy, /about and /contact were revived as live trust pages.
  "/search",
  "/admin",
  "/private",
  "/staging",
  "/ee",
  "/ew",
  "/we",
  "/web",
  "/feed",
  "/wp-json",
  "/api",
  "/api/og",
]);

const GONE_BODY = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>410 — Page removed</title>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#060707;color:#e5e7eb;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;text-align:center}a{color:#22c55e;text-decoration:none}main{padding:2rem}h1{font-size:1.5rem;margin:0 0 .5rem}p{color:#9ca3af;margin:0 0 1.25rem}</style>
</head><body><main>
<h1>410 — This page has been removed</h1>
<p>The page you requested no longer exists.</p>
<a href="/iptv-smarters-pro">Go to IPTV Provider &rarr;</a>
</main></body></html>`;

function gone() {
  return new NextResponse(GONE_BODY, {
    status: 410,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export function proxy(request) {
  const raw = request.nextUrl.pathname;
  const path = raw.length > 1 ? raw.replace(/\/+$/, "") : raw;

  // Homepage and its commerce/pricing/trial equivalents → 301.
  if (path === "/" || REDIRECTS.has(path)) {
    return NextResponse.redirect(new URL(DEST, request.url), 301);
  }

  // Deleted pages → 410 Gone.
  if (GONE_EXACT.has(path) || GONE_PATTERNS.some((re) => re.test(path))) {
    return gone();
  }

  // Everything else (the live landing page, real assets) passes through.
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all paths except Next internals and static assets.
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|icon.svg|opengraph-image|sports/|media/).*)",
  ],
};
