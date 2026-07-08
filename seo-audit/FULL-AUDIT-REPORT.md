# Full SEO Audit — iptvprovider.me

**Date:** 2026-07-08
**Site:** https://www.iptvprovider.me
**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · served behind Cloudflare
**Pages audited:** `/iptv-smarters-pro` (canonical home), `/iptv-free-trial-2026`, plus redirect/gone infrastructure
**Business type:** IPTV subscription reseller (e-commerce / lead-gen via WhatsApp)

---

## Executive Summary

### Overall SEO Health Score: **82 / 100** (B+)

The site is technically excellent for its size: clean canonicalization, proper `410 Gone`
handling for deleted pages, valid schema, fast TTFB, single-H1 pages, and fully alt-texted
images. The score is held back by three things: (1) the brand-new free-trial page is
**orphaned** with no internal links, (2) **AI crawlers are blocked** at the Cloudflare edge
(a GEO decision, not a bug), and (3) missing HTTP **security headers** and thin **E-E-A-T**
trust signals.

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 88 | 22% | 19.4 |
| Content Quality | 72 | 23% | 16.6 |
| On-Page SEO | 90 | 20% | 18.0 |
| Schema / Structured Data | 92 | 10% | 9.2 |
| Performance (CWV) | 88 | 10% | 8.8 |
| AI Search Readiness | 55 | 10% | 5.5 |
| Images | 95 | 5% | 4.8 |
| **Total** | | | **82.2** |

### Top 5 Critical / High Issues
1. **[HIGH] `/iptv-free-trial-2026` is orphaned** — only referenced in `sitemap.xml`. No nav, footer, or in-body internal link points to it. Orphan pages crawl slowly and rank weakly.
2. **[HIGH · DECISION] AI crawlers blocked at the edge** — `robots.txt` disallows GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, meta-externalagent, Applebot-Extended, Amazonbot, plus `Content-Signal: ai-train=no`. This blocks citation in ChatGPT / Claude / Perplexity / Gemini. Intentional content protection or an AEO loss — needs an owner decision.
3. **[MEDIUM] No HTTP security headers** — missing `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
4. **[MEDIUM] Weak E-E-A-T / trust signals** — no About/company page, no named authors, no verifiable reviews, no `Organization.sameAs`. Thin for a money (YMYL-adjacent) niche.
5. **[MEDIUM] No `llms.txt`** (404) — missing AI-guidance file for generative engines.

### Top 5 Quick Wins
1. Add an internal link to `/iptv-free-trial-2026` from the nav and/or footer and the "free trial" FAQ answer (fixes the orphan in minutes).
2. Add security headers via `next.config` `headers()` or Cloudflare Transform Rules.
3. Add `preconnect`/`dns-prefetch` to `https://wsrv.nl` (20 poster images load from it).
4. Add `Organization.sameAs` (social/profile URLs) to strengthen entity identity.
5. Publish an `llms.txt` and (if desired) selectively allow reputable AI crawlers.

---

## Technical SEO — 88/100

**Strengths**
- **Redirect architecture is textbook:**
  - `http://…` → `https://…` = **308**
  - apex `iptvprovider.me` → `www` = **308**
  - `/` → `/iptv-smarters-pro` = **301**
  - Deleted URLs (`/about`, `/best-iptv-usa`, `/iptv-free-trial` family) = **410 Gone** (not soft-404) — excellent for pruning legacy pages.
  - No chains or loops; single hop to a 200.
- `robots.txt` valid, Googlebot allowed (`search=yes`, `Allow: /`), sitemap declared.
- `sitemap.xml` valid XML, lists only live 200 pages (no redirecting root, no hash fragments).
- One self-referencing `<link rel="canonical">` per page; `<meta name="robots" content="index, follow">` — no conflicts.
- `<html lang="en">`, responsive `viewport` present.
- **HSTS** present (`max-age=63072000`).
- TTFB ~0.22s (Cloudflare edge).

**Issues**
| Sev | Issue | Detail |
|---|---|---|
| MEDIUM | Missing security headers | No CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. |
| LOW | HSTS not hardened | Lacks `includeSubDomains` and `preload`. |
| LOW | No resource hints | No `preconnect`/`dns-prefetch` to third-party image host `wsrv.nl`. |
| INFO | Edge stack | `server: cloudflare` fronts the Vercel/Next app; the managed `robots.txt` block originates from Cloudflare, not `app/robots.js`. |

---

## Content Quality — 72/100

**Strengths**
- Substantial copy: `/iptv-smarters-pro` ≈ **5,677 words**, `/iptv-free-trial-2026` ≈ **3,373 words**.
- Clear, benefit-led, readable prose; consistent brand numbers (54,000+ channels / 120,000+ VOD) across pages.
- FAQ content is genuine Q&A, well structured for featured snippets.
- No duplicate content — `/` redirects; the two live pages are distinct in intent (buy vs. trial).

**Issues**
| Sev | Issue | Detail |
|---|---|---|
| MEDIUM | Thin E-E-A-T | No About/company page (deliberately 410'd), no named authors, no verifiable third-party reviews, no trust/credential signals. |
| LOW | No social proof | Testimonials/reviews absent (aggregateRating was correctly removed to avoid fabricated markup — replace with *genuine* proof). |
| LOW | Single-intent coverage | Only two commercial pages; no supporting informational content to capture top-of-funnel queries (note: prior info pages were intentionally pruned to 410). |

---

## On-Page SEO — 90/100

**Strengths**
- **Titles** keyword-rich and well-sized:
  - `Best IPTV Service USA, Canada & Worldwide – 54,000+ Channels` (~60 chars)
  - `Free IPTV Trial 2026 — 24 Hours, No Card | 54,000+ Channels` (~59 chars)
- **Meta descriptions** compelling and ~155–160 chars on both pages.
- **Single H1** per page; logical H2→H3 hierarchy (smarters: 1×H1, 7×H2, 41×H3; trial: 1×H1, 5×H2, 11×H3).
- Open Graph + Twitter card tags complete, including `og:image`/`twitter:image` on both pages.

**Issues**
| Sev | Issue | Detail |
|---|---|---|
| HIGH | Orphaned page | `/iptv-free-trial-2026` has **zero** internal inbound links (verified in source + live HTML) — only in `sitemap.xml`. |
| LOW | Nav/footer links are hash-only | `Navbar`/`Footer` link to on-page anchors (`#pricing`, `#faq`, …); no cross-page links to the trial page. |
| LOW | Anchor links on trial page | Trial page's nav anchors (`#pricing`, `#steps`) don't resolve there (they exist only on the Landing page); its own section IDs (`#apply`, `#steps`, `#faq`) do work. |

---

## Schema & Structured Data — 92/100

**Detected (all valid JSON-LD):**
- Site-wide `@graph`: **Organization**, **WebSite**, **Product** (in `layout.js`)
- **FAQPage** — now co-located with the visible FAQ component, so each page carries exactly one FAQPage that matches on-page content
- **BreadcrumbList** on `/iptv-free-trial-2026`

**Issues**
| Sev | Issue | Detail |
|---|---|---|
| LOW | Product optional fields | `Product` has `offers` but no `review`/`aggregateRating` → Google will emit a non-critical "missing field" note. Only add back with *real* reviews. |
| LOW | No entity links | `Organization` lacks `sameAs` (social profiles) — weakens knowledge-graph/entity confidence. |
| INFO | Breadcrumb coverage | Consider a BreadcrumbList on the canonical page too for consistency. |

---

## Performance (Core Web Vitals) — 88/100

**Lab / server signals** (field CrUX data not available — no Google API credentials configured):
- **TTFB** ≈ 0.22s (excellent, edge-cached).
- Total HTML transfer ≈ **219 KB** (heavier than ideal — inline RSC payload + JSON-LD + 47 inline script blocks), but a single gzipped document.
- **1** stylesheet, **2** preloads, deferred JS chunks (12 external), hero video deferred until idle → strong **INP/LCP** posture.
- Poster images are lazy-loaded, WebP, quality-50 via `wsrv.nl`, and carry explicit `width`/`height` → good **CLS** control.
- LCP is the Sora-rendered H1 (font preloaded) — fast first paint.

**Issues**
| Sev | Issue | Detail |
|---|---|---|
| LOW | No image-CDN preconnect | 20 posters from `wsrv.nl` with no `preconnect`/`dns-prefetch`. |
| LOW | Page weight | 219 KB HTML; acceptable but monitor as content grows. |
| INFO | No field data | Enable Google Search Console / CrUX to replace lab estimates with real LCP/INP/CLS. |

---

## AI Search Readiness (GEO) — 55/100

**Strengths**
- FAQPage + clear Q&A passages are highly citable/extractable.
- Google AI Overviews can still use the site (Googlebot allowed, `search=yes`).

**Issues**
| Sev | Issue | Detail |
|---|---|---|
| HIGH · DECISION | AI crawlers blocked | `robots.txt` disallows **GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, meta-externalagent, Applebot-Extended, Amazonbot** and sets `Content-Signal: ai-train=no, use=reference`. Blocks ChatGPT/Claude/Gemini/Meta AI citation & training. |
| MEDIUM | No `llms.txt` | Returns 404 — no machine-readable guidance for LLM crawlers. |
| LOW | No entity/authority signals | Missing `sameAs`, verifiable brand mentions, external citations. |

> **Note:** The AI-crawler block is a Cloudflare *managed* setting and may be an intentional
> content-protection choice. If AEO visibility (being cited by AI assistants) is a goal, it
> must be relaxed selectively. If protecting content from AI training is the goal, keep it —
> but then the GEO score is "N/A by design" rather than a defect.

---

## Images — 95/100

- **All images have alt text** (30/30 on the canonical page; the trial page uses SVG/CSS, 0 raster images).
- Posters optimized: WebP + `q=50` + explicit dimensions via `wsrv.nl` proxy.
- `og:image` valid PNG, 1200×630, 80 KB.
- Only gap: no `preconnect` to the image host (see Performance).

---

## Crawl Notes
- Effective live surface is small: 2 indexable pages + assets. Legacy URLs correctly return **410**, so there is little crawl-budget waste.
- No `noindex` on any live page; no robots/meta conflicts.
- Cloudflare fronts the origin; some SEO controls (robots managed block, headers) live at the edge, not just in the Next.js app.
