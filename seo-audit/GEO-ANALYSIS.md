# GEO / AI-Search Analysis — /iptv-smarters-pro

_Analyzed 2026-07-08 (local render + prod robots.txt). Target: https://www.iptvprovider.me/iptv-smarters-pro_

## GEO Readiness Score: 61/100

| Category | Weight | Score |
|----------|--------|-------|
| Citability | 25% | 65/100 |
| Structural readability | 20% | 82/100 |
| Multi-modal content | 15% | 60/100 |
| Authority & brand signals | 20% | 35/100 |
| Technical accessibility | 20% | 60/100 |

The page is **technically clean and well-structured** for AI extraction, but two things cap the score: (1) robots.txt blocks key AI crawlers, and (2) near-zero external authority/brand signals — the lever that correlates most strongly with AI citation.

---

## Platform breakdown

| Platform | Status | Why |
|----------|--------|-----|
| **Google AI Overviews** | ✅ Works | Uses `Googlebot` (allowed). Google-Extended block only affects Gemini *training*, not AIO. |
| **Perplexity** | ✅ Works | `PerplexityBot` is **not** blocked. |
| **Bing Copilot** | ✅ Works | `Bingbot` allowed; IndexNow now enabled. |
| **ChatGPT** | ⚠️ Partial | `GPTBot` **blocked** (no training/index), but `ChatGPT-User` + `OAI-SearchBot` are not blocked → live browsing citations still possible. |
| **Claude** | ❌ Blocked | `ClaudeBot` is `Disallow: /` → cannot fetch the page. |

---

## 1. AI Crawler Access Status

**Blocked (`Disallow: /`, Cloudflare-managed block):**
`GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, `Bytespider`, `Amazonbot`, `Applebot-Extended`, `meta-externalagent`, `CloudflareBrowserRenderingCrawler`
Plus `Content-Signal: search=yes, ai-train=no, use=reference` (reserves training rights; allows search/reference).

**Allowed (fall under `User-agent: * / Allow: /`):**
`Googlebot`, `Bingbot`, `PerplexityBot`, `OAI-SearchBot`, `ChatGPT-User`, `anthropic-ai`, `cohere-ai`

**Assessment:** This is a deliberate anti-AI-training posture (likely a DMCA/rights stance appropriate for an IPTV brand). It does NOT kill AI-search visibility — AIO, Perplexity, Bing, and ChatGPT-browsing all still work. The only pure loss is **Claude** (ClaudeBot blocked) and ChatGPT's index (GPTBot blocked, though browsing remains). **Recommendation is a business call, not a bug** — see options below.

## 2. llms.txt Status
✅ Present at `/llms.txt` (HTTP 200), well-formed: title + summary blockquote, key-pages list, details, contact. No change needed.

## 3. Server-Side Rendering
✅ Fully SSR/prerendered. Title, canonical, meta, all 5 JSON-LD blocks, and body copy are in the initial 200 HTML. AI crawlers (which don't run JS) get full content. Best-in-class.

## 4. Schema (AI discoverability)
✅ Organization, WebSite, Product/Offer, BreadcrumbList, FAQPage (11 Q). Gaps: no `Service`/`FAQ dateModified`, no `Person`/author entity, no `sameAs` links to social profiles.

## 5. Brand Mention Analysis (weakest lever)
⚠️ Not independently verifiable in this session, but as a commercial IPTV reseller the domain almost certainly has **no Wikipedia entry, minimal Reddit/YouTube/LinkedIn footprint**. Per the Ahrefs Dec-2025 data, brand mentions correlate ~3× more with AI citations than backlinks — this is the single biggest untapped GEO opportunity, and it's off-site (not code).

## 6. Passage-Level Citability
**Strengths:** concise, factual, quotable claims (54,000+ channels, 120,000+ movies, 15 Mbps HD / 25 Mbps 4K, $7.50/mo, 30-day guarantee, 24-hour trial). FAQ is 11 self-contained Q&A with question-based headings — ideal for featured-snippet-style extraction.
**Gaps:**
- No **definitional block** — nothing answering "What is IPTV Smarters Pro?" / "What is IPTV?" in the first 40–60 words of a section (a top AI-citation pattern).
- Answers are short (15–31 words). Great for direct snippets, but there are **no 134–167-word self-contained passages** for deeper AI answers.
- Claims are unattributed (no source/date on the "15 Mbps" / channel-count figures).
- Comparative data (devices, plan terms) is in **lists, not tables** — tables get selected more often.

---

## Top 5 Highest-Impact Changes

1. **[Business decision] Decide the AI-crawler posture.** If AI-search visibility matters more than training-rights reservation, unblock at minimum `ClaudeBot` and `GPTBot` in the Cloudflare-managed robots block. If the anti-training stance is intentional (likely, given the content type), leave as-is — you still keep AIO/Perplexity/Bing/ChatGPT-browsing. _Off-code (Cloudflare)._
2. **Build off-site brand mentions** (Reddit threads, a YouTube setup/review video, consistent LinkedIn/brand profiles). Highest correlation with AI citation; entirely off-site.
3. **Add a "What is IPTV / IPTV Smarters Pro?" definitional passage** (40–60 word direct answer, then a 134–167-word self-contained explainer) high on the page. _Code-actionable._
4. **Convert the plans + device-compatibility lists into comparison tables** with data columns. _Code-actionable._
5. **Add authority signals**: a `dateModified` on the page/FAQ schema, a named author/editor entity (`Person` + `sameAs`), and `sameAs` social links on the Organization node. _Code-actionable._

## Schema Recommendations
- Add `dateModified` / `datePublished` to Product & FAQPage.
- Add `sameAs: [...]` to Organization (social/brand profiles) once they exist.
- Consider a `Service` node ("IPTV subscription service") with `areaServed` (USA, Canada, Worldwide) and `Offer` catalog.

## Content Reformatting Suggestions
- New H2 "What is IPTV Smarters Pro?" → 1st sentence = direct definition; follow with a ~150-word block covering what it is, supported devices, and how it differs from cable.
- Turn "IPTV subscription plans" into a `<table>` (term / price / channels / support).
- Turn the device strip into a "Supported devices" table (device / app / notes).
- Add a one-line source/method note to headline stats (e.g. "channel count as of July 2026").

_Note: RSL 1.0 licensing not implemented — optional; low priority for a commercial LP._
