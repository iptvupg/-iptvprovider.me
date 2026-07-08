# SEO Action Plan — iptvprovider.me

**Date:** 2026-07-08 · **Health Score:** 82/100 (B+)
Priority order: **Critical → High → Medium → Low**. Effort: S (<30 min), M (1–3 h), L (>3 h).

---

## 🔴 Critical
_None. No indexing blockers or penalties detected._

---

## 🟠 High (fix within 1 week)

### H1 — De-orphan `/iptv-free-trial-2026` · Effort: S
The page has zero internal inbound links (only in `sitemap.xml`). Add links so it can be
crawled and pass authority:
- Add **"Free Trial"** to `components/Navbar.jsx` `LINKS` → `href="/iptv-free-trial-2026"`.
- Add it to `components/Footer.jsx` `QUICK_LINKS`.
- Update the "Do you offer a free IPTV trial?" **FAQ answer** in `components/FAQ.jsx` to link to `/iptv-free-trial-2026`.
- Optionally add a hero secondary CTA on `/iptv-smarters-pro` → "Try free for 24 hours".

**Impact:** Faster indexing + internal PageRank to the new conversion page.
_Owner approval needed only on nav placement/label._

### H2 — Decide on AI-crawler policy · Effort: S (decision) / M (implement)
`robots.txt` currently blocks GPTBot, ClaudeBot, Google-Extended, CCBot, Perplexity-adjacent,
Meta AI, etc. (`Content-Signal: ai-train=no`).
- **If AEO visibility is wanted:** relax the Cloudflare managed rule to allow reputable
  answer engines (e.g., `GPTBot`, `PerplexityBot`, `OAI-SearchBot`) while keeping training
  bots blocked if preferred. Set `ai-input` signal appropriately.
- **If content protection is the priority:** keep as-is and treat GEO score as N/A.

**Impact:** Determines whether ChatGPT/Perplexity/Gemini can cite the brand.
_This is a business decision — do not change without owner sign-off._

---

## 🟡 Medium (fix within 1 month)

### M1 — Add HTTP security headers · Effort: M
Add via `next.config` `async headers()` (or Cloudflare Transform Rules):
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors`)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy` (start report-only; the site already inlines scripts/JSON-LD, so scope carefully).

**Impact:** Security best-practice, trust, and a small ranking/UX safety signal.

### M2 — Strengthen E-E-A-T / trust · Effort: L
- Add genuine, verifiable social proof (real testimonials, a support-response SLA, uptime).
- Add `Organization.sameAs` with real social/support profiles.
- Consider a lightweight, honest "How it works / who we are" trust block (without re-creating a 410'd page if pruning was deliberate).

**Impact:** Better conversion + eligibility for trust-sensitive rankings.

### M3 — Publish `llms.txt` · Effort: S
Add `/llms.txt` (currently 404) summarizing the brand, key pages, and offer, to guide LLM
crawlers. Pair with H2 if pursuing AEO.

---

## 🟢 Low (backlog)

| ID | Task | Effort | Notes |
|---|---|---|---|
| L1 | `preconnect`/`dns-prefetch` to `https://wsrv.nl` | S | 20 poster images load from it. |
| L2 | Harden HSTS: add `includeSubDomains; preload` | S | Only after confirming all subdomains are HTTPS. |
| L3 | Add BreadcrumbList to `/iptv-smarters-pro` | S | Consistency with the trial page. |
| L4 | Re-add `Product.aggregateRating` **only** with real reviews | M | Never fabricate — Google policy. |
| L5 | Fix trial-page nav anchors | S | Nav uses `#pricing/#steps` which don't exist on that page; point cross-page links to `/iptv-smarters-pro#…`. |
| L6 | Enable GSC + CrUX field data | S | Replaces lab CWV estimates; enables indexation monitoring. |
| L7 | Monitor HTML weight (219 KB) as content grows | — | Mostly inline RSC/JSON-LD. |

---

## Suggested Sequence
1. **This week:** H1 (de-orphan) → H2 decision → M3 (`llms.txt` if AEO).
2. **Next:** M1 (security headers) → L1/L2/L5 (quick technical wins).
3. **This month:** M2 (E-E-A-T) → L3/L4 (schema polish).
4. **Ongoing:** L6 (field data) → L7 (weight monitoring).

## Verification checklist (after changes)
- [ ] `/iptv-free-trial-2026` appears in internal links on the canonical page (crawl re-check).
- [ ] Security headers visible via `curl -I`.
- [ ] `robots.txt` reflects the chosen AI policy.
- [ ] `llms.txt` returns 200 (if added).
- [ ] Rich Results Test passes for Organization/WebSite/Product/FAQPage/BreadcrumbList.
