import { NextResponse } from "next/server";

// Permanent 301 redirect: homepage → IPTV Smarters Pro landing page.
// Next.js config redirects() only emit 308, so a proxy is used to send a
// true 301 as requested.
export function proxy(request) {
  return NextResponse.redirect(
    new URL("/iptv-smarters-pro", request.url),
    301
  );
}

export const config = { matcher: "/" };
