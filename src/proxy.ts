import { NextRequest, NextResponse } from "next/server";

// Global redirect: serve the entire site under the /tv prefix.
// Every route that is not already under /tv (and isn't an internal/static
// asset) is 301-redirected to its /tv equivalent, preserving path + query.
// The /tv/* URLs are served by a rewrite in next.config.js that maps them
// back to the real routes, so redirects land on real content (no 404).

// Paths that must never be redirected (internal routes, SEO/meta files).
const EXCLUDED_PREFIXES = ["/tv", "/_next", "/api"];
const EXCLUDED_FILES = new Set([
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.json",
]);

// Any request for a file with an extension (e.g. .png, .css, .js) is a static
// asset and is left untouched.
const STATIC_FILE = /\.[a-zA-Z0-9]+$/;

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Deleted programmatic country routes: return HTTP 410 Gone
  if (
    pathname === "/country" ||
    pathname.startsWith("/country/") ||
    pathname === "/tv/country" ||
    pathname.startsWith("/tv/country/")
  ) {
    return new NextResponse("410 Gone: This resource has been permanently removed.", {
      status: 410,
      headers: {
        "Content-Type": "text/plain",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  const isExcludedPrefix = EXCLUDED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  if (
    isExcludedPrefix ||
    EXCLUDED_FILES.has(pathname) ||
    STATIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Rewrite the path under /tv, preserving the full path and query string.
  const url = request.nextUrl.clone();
  url.pathname = `/tv${pathname}`;
  url.search = search;

  return NextResponse.redirect(url, 301);
}

export const config = {
  // Only run on routes that could actually be redirected or return 410.
  matcher: [
    "/((?!_next/static|_next/image|api|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
