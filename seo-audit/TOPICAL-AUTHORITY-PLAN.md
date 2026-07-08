# IPTV Topical Authority Plan — iptvprovider.me

> Goal: make iptvprovider.me the most authoritative topical resource on IPTV for
> both Google and AI answer engines, funnelling authority into the commercial
> pages `/iptv-smarters-pro`, `/iptv-subscription-plans` and `/iptv-free-trial-2026`.
> Built without keyword stuffing, spun content, or deceptive tactics.

---

## 0. The binding constraint (read first)

`proxy.js` returns **410 Gone** for the exact page families a topic cluster
normally uses. These slugs/patterns are BLOCKED and must **not** be used:

| Blocked | Rule in proxy.js |
|---|---|
| `/guides`, `/guide`, `/blog/*`, `/post/*` | `GONE_PATTERNS` |
| `/setup/*`, `/devices/*`, `/coverage/*`, `/country/*` | `GONE_PATTERNS` |
| `/best-iptv-*` (anything starting `best-iptv-`) | `GONE_PATTERNS` |
| **Anything ending in `-iptv`** (e.g. `what-is-iptv`, `android-iptv`) | `/-iptv$/` |
| `/what-is-iptv`, `/how-iptv-works`, `/iptv-guide`, `/iptv-vs-streaming-services`, `/iptv-vpn-guide`, `/is-iptv-legal`, `/iptv-risks`, `/faq` … | `GONE_EXACT` |

### The namespace decision
Build the entire cluster under **five clean namespaces that are not blocked**:

- `/learn/…` — definitions, education, formats, security, performance (pillar hub)
- `/apps/…` — IPTV apps & players (pillar hub)
- `/compare/…` — head-to-head and "best of" comparisons (pillar hub)
- `/how-to/…` — installation & setup on every device (pillar hub)
- `/fix/…` — troubleshooting & problem-solving (pillar hub)

**Two hard slug rules:**
1. A slug may **never end in `-iptv`** (globally 410'd). Put "iptv" earlier: use
   `/learn/iptv-explained`, not `/learn/what-is-iptv`.
2. Never reuse a legacy slug from `GONE_EXACT`/`REDIRECTS` — pick fresh wording.

This keeps us off penalized URLs, avoids touching `proxy.js` risk, and gives a
clean semantic structure Google can map to entities.

> **Legal note (not SEO):** reviving legality/DMCA-adjacent pages (`is IPTV
> legal`, `IPTV VPN`, `IPTV risks`) was deliberately removed. Re-introducing that
> content is a legal-exposure decision for the owner, not just an SEO call. This
> plan keeps educational content factual and avoids making legality claims about
> the service. Flag before building any "is IPTV legal" page.

---

## Phase 1 — Topical map

Core entity: **IPTV (Internet Protocol Television)**.

```
IPTV
├── 1. IPTV Basics & Concepts
│     what is IPTV · how IPTV works · IPTV vs cable/satellite · IPTV vs OTT/streaming
│     M3U/Xtream Codes · EPG · VOD · catch-up TV · IPTV glossary
├── 2. IPTV Apps & Players
│     IPTV Smarters Pro · TiviMate · XCIPTV · IBO Player · Smart IPTV (SIPTV)
│     SmartOne · Perfect Player · GSE · Flix IPTV · best IPTV apps
├── 3. Devices & Platforms
│     Firestick/Fire TV · Android TV box · Smart TV (Samsung/LG) · Apple TV/iOS
│     Windows · macOS · MAG box · NVIDIA Shield · Roku · Chromecast
├── 4. Installation & Setup (How-To)
│     install app · load M3U · load Xtream Codes · add playlist · set up EPG
│     per-device install guides · first-time setup checklist
├── 5. Streaming & Formats
│     M3U vs Xtream · HLS · transcoding · bitrate/resolution · HD vs 4K
│     multi-connection · bandwidth requirements
├── 6. Performance & Quality
│     stop buffering · anti-freeze · internet speed for IPTV · router/DNS tuning
│     best settings · reduce lag
├── 7. Security & Privacy
│     do you need a VPN · best VPN for IPTV · safe payment · avoid scams
│     account safety
├── 8. Troubleshooting
│     buffering · freezing · not working · channels not loading · EPG missing
│     login/expired code · black screen · audio out of sync
├── 9. Comparisons
│     app vs app · IPTV vs cable · IPTV vs Netflix/streaming · plan comparisons
├── 10. Free Trial (commercial)          → /iptv-free-trial-2026 (LIVE)
├── 11. Subscription & Pricing (commercial) → /iptv-subscription-plans (LIVE)
└── 12. Brand / Trust                     → /about /contact /privacy /terms /refund (LIVE)
```

---

## Phase 2 — Content silos (architecture)

Five educational/commercial silos, each with a **pillar hub** that links down to
children and across to commercial pages. Existing live pages act as the money
silo the clusters point into.

### Silo A — Learn (Basics, Formats, Security, Performance)
- **Pillar:** `/learn` — "IPTV Explained: How It Works, Formats & Setup"
- Children: `/learn/iptv-explained`, `/learn/how-iptv-works`, `/learn/iptv-vs-cable`,
  `/learn/iptv-vs-streaming`, `/learn/m3u-vs-xtream-codes`, `/learn/what-is-epg`,
  `/learn/what-is-vod`, `/learn/iptv-glossary`, `/learn/internet-speed-for-iptv`,
  `/learn/do-you-need-a-vpn`, `/learn/hd-vs-4k-streaming`, `/learn/multi-connection`
- Commercial exits: → `/iptv-free-trial-2026`, `/iptv-subscription-plans`

### Silo B — Apps & Players
- **Pillar:** `/apps` — "Best IPTV Apps & Players (2026)"
- Children: `/apps/iptv-smarters-pro-review`, `/apps/tivimate`, `/apps/xciptv`,
  `/apps/ibo-player`, `/apps/smart-iptv-siptv`, `/apps/smartone`, `/apps/perfect-player`,
  `/apps/gse-smart`, `/apps/flix`
- Commercial exit: every app page → `/iptv-subscription-plans` + trial

### Silo C — How-To (Installation by device)
- **Pillar:** `/how-to` — "How to Set Up IPTV on Any Device"
- Children: `/how-to/install-iptv-on-firestick`, `/how-to/install-on-android-tv`,
  `/how-to/install-on-samsung-tv`, `/how-to/install-on-lg-tv`,
  `/how-to/install-on-apple-tv`, `/how-to/install-on-ios`,
  `/how-to/install-on-windows`, `/how-to/install-on-mac`,
  `/how-to/install-on-mag-box`, `/how-to/install-on-nvidia-shield`,
  `/how-to/install-on-roku`, `/how-to/load-m3u-playlist`,
  `/how-to/load-xtream-codes`, `/how-to/set-up-epg`
- Commercial exit: each → trial + subscription

### Silo D — Compare
- **Pillar:** `/compare` — "IPTV Comparisons: Apps, Plans & Alternatives"
- Children: `/compare/iptv-smarters-pro-vs-tivimate`, `/compare/tivimate-vs-xciptv`,
  `/compare/iptv-vs-cable`, `/compare/iptv-vs-netflix`, `/compare/iptv-vs-sling`,
  `/compare/m3u-vs-xtream-codes`, `/compare/iptv-plans`

### Silo E — Fix (Troubleshooting)
- **Pillar:** `/fix` — "IPTV Troubleshooting: Fix Buffering, Freezing & Errors"
- Children: `/fix/iptv-buffering`, `/fix/iptv-freezing`, `/fix/iptv-not-working`,
  `/fix/channels-not-loading`, `/fix/epg-not-showing`, `/fix/expired-code`,
  `/fix/black-screen`, `/fix/audio-out-of-sync`, `/fix/best-settings`,
  `/fix/reduce-buffering-firestick`

Each silo pillar is linked from the global nav/footer once (a "Learn"/"Help"
menu), so no cluster is orphaned.

---

## Phase 3 — Page inventory (100 pages)

Priority: **P0** = weeks 1–4, **P1** = weeks 5–8, **P2** = backlog. Intent: I =
Informational, C = Commercial, T = Transactional. Every slug obeys the two slug
rules in Phase 0.

### Money pages (live / commercial) — 6
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|1|/iptv-smarters-pro|iptv smarters pro|C|Landing|Live|Product, FAQ, WebPage|
|2|/iptv-subscription-plans|iptv subscription|C|Pricing|Live|Product+Offers, FAQ|
|3|/iptv-free-trial-2026|iptv free trial|T|Lead|Live|FAQ, WebPage|
|4|/apps/iptv-smarters-pro-review|iptv smarters pro review|C|Review|P0|Review/Product, FAQ|
|5|/compare/iptv-plans|iptv plans comparison|C|Comparison|P1|Product, FAQ|
|6|/how-to/install-iptv-on-firestick|iptv on firestick|C|HowTo|P0|HowTo, FAQ|

### Silo A — Learn (15)
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|7|/learn|what is iptv (hub)|I|Pillar|P0|WebPage, BreadcrumbList|
|8|/learn/iptv-explained|what is iptv|I|Definition|P0|Article, FAQ|
|9|/learn/how-iptv-works|how does iptv work|I|Explainer|P0|Article, FAQ|
|10|/learn/iptv-vs-cable|iptv vs cable|I|Comparison|P0|Article, FAQ|
|11|/learn/iptv-vs-streaming|iptv vs streaming services|I|Comparison|P1|Article, FAQ|
|12|/learn/m3u-vs-xtream-codes|m3u vs xtream codes|I|Explainer|P1|Article, FAQ|
|13|/learn/what-is-epg|what is epg iptv|I|Definition|P1|Article, FAQ|
|14|/learn/what-is-vod|iptv vod meaning|I|Definition|P2|Article, FAQ|
|15|/learn/iptv-glossary|iptv terms glossary|I|Reference|P2|DefinedTermSet|
|16|/learn/internet-speed-for-iptv|internet speed for iptv|I|Guide|P1|Article, FAQ|
|17|/learn/do-you-need-a-vpn|do you need a vpn for iptv|I|Guide|P1|Article, FAQ|
|18|/learn/hd-vs-4k-streaming|hd vs 4k iptv|I|Explainer|P2|Article, FAQ|
|19|/learn/multi-connection|iptv multiple devices|I|Guide|P2|Article, FAQ|
|20|/learn/iptv-catch-up|iptv catch up tv|I|Definition|P2|Article, FAQ|
|21|/learn/iptv-buffering-causes|why does iptv buffer|I|Explainer|P1|Article, FAQ|

### Silo B — Apps & Players (14)
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|22|/apps|best iptv apps|C|Pillar|P0|ItemList, FAQ|
|23|/apps/tivimate|tivimate|I/C|Review|P0|SoftwareApplication, Review|
|24|/apps/xciptv|xciptv player|I/C|Review|P1|SoftwareApplication, Review|
|25|/apps/ibo-player|ibo player|I/C|Review|P1|SoftwareApplication, Review|
|26|/apps/smart-iptv-siptv|smart iptv siptv|I/C|Review|P1|SoftwareApplication, Review|
|27|/apps/smartone|smartone player|I/C|Review|P2|SoftwareApplication, Review|
|28|/apps/perfect-player|perfect player iptv|I/C|Review|P2|SoftwareApplication, Review|
|29|/apps/gse-smart|gse smart iptv|I/C|Review|P2|SoftwareApplication, Review|
|30|/apps/flix|flix iptv player|I/C|Review|P2|SoftwareApplication, Review|
|31|/apps/duplex-play|duplex play|I/C|Review|P2|SoftwareApplication, Review|
|32|/apps/net-tv|net iptv|I/C|Review|P2|SoftwareApplication, Review|
|33|/apps/implayer|implayer|I/C|Review|P2|SoftwareApplication, Review|
|34|/apps/best-for-firestick|best iptv app for firestick|C|Roundup|P1|ItemList, FAQ|
|35|/apps/best-for-android|best iptv app for android|C|Roundup|P2|ItemList, FAQ|

### Silo C — How-To / Installation (24)
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|36|/how-to|how to set up iptv|C|Pillar|P0|HowTo, FAQ|
|37|/how-to/install-on-android-tv|iptv on android tv box|C|HowTo|P0|HowTo, FAQ|
|38|/how-to/install-on-samsung-tv|iptv on samsung smart tv|C|HowTo|P0|HowTo, FAQ|
|39|/how-to/install-on-lg-tv|iptv on lg smart tv|C|HowTo|P1|HowTo, FAQ|
|40|/how-to/install-on-apple-tv|iptv on apple tv|C|HowTo|P1|HowTo, FAQ|
|41|/how-to/install-on-ios|iptv on iphone ipad|C|HowTo|P1|HowTo, FAQ|
|42|/how-to/install-on-windows|iptv on windows pc|C|HowTo|P1|HowTo, FAQ|
|43|/how-to/install-on-mac|iptv on mac|C|HowTo|P2|HowTo, FAQ|
|44|/how-to/install-on-mag-box|iptv on mag box|C|HowTo|P1|HowTo, FAQ|
|45|/how-to/install-on-nvidia-shield|iptv on nvidia shield|C|HowTo|P2|HowTo, FAQ|
|46|/how-to/install-on-roku|iptv on roku|C|HowTo|P2|HowTo, FAQ|
|47|/how-to/install-on-chromecast|iptv on chromecast google tv|C|HowTo|P2|HowTo, FAQ|
|48|/how-to/install-on-fire-tv-cube|iptv on fire tv cube|C|HowTo|P2|HowTo, FAQ|
|49|/how-to/load-m3u-playlist|how to add m3u playlist|C|HowTo|P0|HowTo, FAQ|
|50|/how-to/load-xtream-codes|how to add xtream codes|C|HowTo|P0|HowTo, FAQ|
|51|/how-to/set-up-epg|how to set up epg|C|HowTo|P1|HowTo, FAQ|
|52|/how-to/smarters-pro-firestick|iptv smarters pro firestick setup|C|HowTo|P0|HowTo, FAQ|
|53|/how-to/tivimate-firestick|tivimate firestick setup|C|HowTo|P1|HowTo, FAQ|
|54|/how-to/first-time-setup|iptv setup guide|C|Checklist|P1|HowTo, FAQ|
|55|/how-to/enable-sideloading-firestick|downloader app firestick|C|HowTo|P2|HowTo, FAQ|
|56|/how-to/change-dns-for-iptv-streaming|best dns for iptv|C|HowTo|P2|HowTo, FAQ|
|57|/how-to/set-up-vpn-for-streaming|set up vpn firestick|C|HowTo|P2|HowTo, FAQ|
|58|/how-to/record-live-tv|iptv record live tv|C|HowTo|P2|HowTo, FAQ|
|59|/how-to/add-favourites|iptv favourite channels|C|HowTo|P2|HowTo, FAQ|

### Silo D — Compare (14)
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|60|/compare|iptv comparison hub|C|Pillar|P1|ItemList, FAQ|
|61|/compare/iptv-smarters-pro-vs-tivimate|smarters pro vs tivimate|C|Versus|P0|Article, FAQ|
|62|/compare/tivimate-vs-xciptv|tivimate vs xciptv|C|Versus|P1|Article, FAQ|
|63|/compare/smarters-pro-vs-xciptv|smarters vs xciptv|C|Versus|P2|Article, FAQ|
|64|/compare/iptv-vs-cable|iptv vs cable tv|I|Versus|P0|Article, FAQ|
|65|/compare/iptv-vs-netflix|iptv vs netflix|I|Versus|P1|Article, FAQ|
|66|/compare/iptv-vs-sling|iptv vs sling tv|I|Versus|P2|Article, FAQ|
|67|/compare/iptv-vs-youtube-tv|iptv vs youtube tv|I|Versus|P2|Article, FAQ|
|68|/compare/iptv-vs-fubo|iptv vs fubo|I|Versus|P2|Article, FAQ|
|69|/compare/iptv-vs-satellite|iptv vs satellite|I|Versus|P2|Article, FAQ|
|70|/compare/m3u-vs-xtream-codes|m3u vs xtream|I|Versus|P1|Article, FAQ|
|71|/compare/free-vs-paid-iptv|free vs paid iptv|C|Versus|P1|Article, FAQ|
|72|/compare/best-for-sports|best iptv for sports|C|Roundup|P1|ItemList, FAQ|
|73|/compare/best-for-international|best iptv international channels|C|Roundup|P2|ItemList, FAQ|

### Silo E — Fix / Troubleshooting (14)
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|74|/fix|iptv troubleshooting|I|Pillar|P0|FAQ, HowTo|
|75|/fix/iptv-buffering|how to stop iptv buffering|I|Solution|P0|HowTo, FAQ|
|76|/fix/iptv-freezing|iptv keeps freezing|I|Solution|P0|HowTo, FAQ|
|77|/fix/iptv-not-working|iptv not working|I|Solution|P0|HowTo, FAQ|
|78|/fix/channels-not-loading|iptv channels not loading|I|Solution|P1|HowTo, FAQ|
|79|/fix/epg-not-showing|iptv epg not working|I|Solution|P1|HowTo, FAQ|
|80|/fix/expired-code|iptv expired line|I|Solution|P1|HowTo, FAQ|
|81|/fix/black-screen|iptv black screen|I|Solution|P2|HowTo, FAQ|
|82|/fix/audio-out-of-sync|iptv audio out of sync|I|Solution|P2|HowTo, FAQ|
|83|/fix/best-settings|best iptv smarters settings|I|Guide|P1|HowTo, FAQ|
|84|/fix/reduce-buffering-firestick|firestick iptv buffering|I|Solution|P1|HowTo, FAQ|
|85|/fix/slow-on-wifi|iptv slow on wifi|I|Solution|P2|HowTo, FAQ|
|86|/fix/isp-throttling|isp throttling iptv|I|Solution|P2|HowTo, FAQ|
|87|/fix/app-keeps-crashing|iptv app keeps crashing|I|Solution|P2|HowTo, FAQ|

### Streaming / Formats / Performance / Security depth (under /learn) — 13
| # | URL | Primary keyword | Intent | Type | Pri | Schema |
|--|--|--|--|--|--|--|
|88|/learn/what-is-m3u|what is m3u playlist|I|Definition|P1|Article, FAQ|
|89|/learn/what-is-xtream-codes|what is xtream codes api|I|Definition|P1|Article, FAQ|
|90|/learn/hls-streaming|what is hls streaming|I|Definition|P2|Article, FAQ|
|91|/learn/bitrate-and-resolution|iptv bitrate resolution|I|Explainer|P2|Article, FAQ|
|92|/learn/bandwidth-requirements|iptv bandwidth requirements|I|Guide|P1|Article, FAQ|
|93|/learn/anti-freeze-technology|iptv anti freeze|I/C|Explainer|P1|Article, FAQ|
|94|/learn/best-vpn-for-streaming|best vpn for iptv|I|Roundup|P1|ItemList, FAQ|
|95|/learn/avoid-iptv-scams|how to avoid iptv scams|I|Guide|P0|Article, FAQ|
|96|/learn/safe-payment-methods|safe iptv payment|I/C|Guide|P1|Article, FAQ|
|97|/learn/iptv-picture-quality|iptv picture quality tips|I|Guide|P2|Article, FAQ|
|98|/learn/reseller-vs-provider|iptv reseller vs provider|I|Explainer|P2|Article, FAQ|
|99|/learn/iptv-for-beginners|iptv for beginners|I|Guide|P0|Article, FAQ|
|100|/learn/choosing-a-provider|how to choose iptv provider|C|Buying guide|P0|Article, FAQ|

**Conversion opportunity** (applies site-wide): every P0/P1 page carries one
primary CTA to `/iptv-free-trial-2026` (top of funnel) and one to
`/iptv-subscription-plans` (bottom of funnel), plus a WhatsApp contact. Reviews,
roundups and buying guides carry both prominently; pure definitions carry a
single soft "Try free for 24 hours" inline CTA.

---

## Phase 4 — Internal linking model

**Rules (enforced on every page):**
- **Up:** each child links to its silo pillar (`/learn`, `/apps`, `/how-to`,
  `/compare`, `/fix`) with descriptive anchor (e.g. "IPTV setup guides").
- **Down:** each pillar links to all its children (curated list, not a dump).
- **Sideways:** 3–5 sibling links to closely related pages in the same silo.
- **Cross-silo:** a how-to links to the relevant app review and troubleshooting
  page; a comparison links to the app reviews it compares; a fix page links to
  the how-to that prevents the problem.
- **Commercial:** every page links at least once to `/iptv-subscription-plans`
  and `/iptv-free-trial-2026` with natural anchors ("start a free 24-hour
  trial", "see subscription plans").
- **Money-page inbound:** `/iptv-smarters-pro` should receive contextual links
  from `/apps/iptv-smarters-pro-review`, all `/how-to/*smarters*`, and
  `/compare/*smarters*`.
- **No orphans:** the global nav gets a "Learn" and a "Help" menu exposing the
  five pillars; the footer lists the five pillars + top 5 how-tos.

**Anchor text policy:** descriptive and varied, never exact-match spam. Prefer
"how to install IPTV on Firestick" over repeated "IPTV Firestick" anchors.

**Example link graph for `/how-to/install-iptv-on-firestick`:**
- Up → `/how-to`
- Down/related → `/how-to/enable-sideloading-firestick`, `/fix/reduce-buffering-firestick`
- App → `/apps/iptv-smarters-pro-review`, `/apps/tivimate`
- Compare → `/compare/iptv-smarters-pro-vs-tivimate`
- Commercial → `/iptv-free-trial-2026`, `/iptv-subscription-plans`
- Definition → `/learn/how-iptv-works`

---

## Phase 5 — Content structure (reusable templates)

Rather than 100 near-identical spec blocks, here are the **page-type templates**
that mechanically produce every page consistently, plus deep specs for the P0
priority pages. Each template already satisfies Phase 7 (AI-search) requirements.

### Template: Definition / Explainer (`/learn/*`)
- **H1:** entity-first ("What Is IPTV? A Plain-English Explanation")
- **First 40–55 words:** a direct, self-contained answer (the "summary box" AI
  engines quote). Bold the definition sentence.
- **H2s:** Definition · How it works (numbered) · IPTV vs [alternative] (table) ·
  What you need · Is it right for you · FAQ
- **H3s:** one per sub-concept (EPG, VOD, M3U…)
- **Must include:** 1 comparison table, 1 definition list, 3–6 FAQ, "Last updated"
  date, entity-rich paragraph naming real products/standards.
- **Media:** 1 diagram (how IPTV delivers streams), 1 screenshot.
- **CTA:** single inline "Try it free for 24 hours".
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`.
- **Words:** 900–1,400.

### Template: App Review (`/apps/*`)
- **H1:** "[App] Review (2026): Features, Setup & Is It Worth It?"
- **Summary box:** verdict in 2 sentences + rating rationale (no fake star
  ratings — only rate if you have a genuine editorial basis).
- **H2s:** What is [app] · Key features · Supported devices (table) · How to set
  up (link to how-to) · Pros & cons · [App] vs alternatives (table) · Pricing to
  run it · FAQ
- **Media:** app UI screenshots, device-support table.
- **Schema:** `SoftwareApplication` (name, operatingSystem, applicationCategory)
  + `FAQPage`. Add `Review`/`aggregateRating` ONLY with real review basis.
- **CTA:** "Use [app] with our service — start free trial" → subscription plans.
- **Words:** 1,000–1,600.

### Template: How-To (`/how-to/*`)
- **H1:** "How to Install IPTV on [Device] (Step-by-Step, 2026)"
- **Summary box:** the answer in one paragraph + time/skill required.
- **Ordered steps:** numbered `<ol>`, one action per step, screenshot each.
- **H2s:** Before you start (requirements) · Steps · Load your playlist ·
  Troubleshooting (link to /fix) · FAQ
- **Schema:** `HowTo` (with `step`, `tool`, `totalTime`) + `FAQPage` +
  `BreadcrumbList`.
- **CTA:** "Get a line to activate — free 24-hour trial".
- **Words:** 700–1,200.

### Template: Comparison / Versus (`/compare/*`)
- **H1:** "[A] vs [B]: Which Is Better in 2026?"
- **Summary box:** one-line verdict + "choose A if… / choose B if…".
- **Comparison table** near the top (the AI-citable asset): rows = features,
  columns = the two options.
- **H2s:** Quick verdict · Full comparison table · [A] strengths · [B] strengths
  · Which should you choose · FAQ
- **Schema:** `Article` + `FAQPage`. (Avoid `Product` comparisons unless prices
  are real.)
- **Words:** 900–1,400.

### Template: Troubleshooting (`/fix/*`)
- **H1:** "IPTV [Problem]? Here's How to Fix It"
- **Summary box:** the single most common fix in the first 2 sentences.
- **H2s:** Why this happens · Fix 1…Fix N (each a mini `HowTo` step set) · When
  to contact support · Prevent it next time · FAQ
- **Schema:** `HowTo` + `FAQPage`.
- **CTA:** "Still stuck? Message 24/7 support on WhatsApp" + trial.
- **Words:** 700–1,100.

### Deep spec — `/learn/iptv-explained` (P0 anchor definition)
- **H1:** What Is IPTV? How Internet TV Works in 2026
- **Summary (place first, ~50 words):** "IPTV (Internet Protocol Television)
  delivers live TV channels and on-demand video over a standard internet
  connection instead of an aerial, satellite dish or cable. You watch through an
  app such as IPTV Smarters Pro on a TV, phone, Firestick or computer — no
  special hardware required."
- **H2s:** What IPTV means · How IPTV works (4 numbered steps: content →
  encoding → server → player) · IPTV vs cable vs satellite (table) · What you
  need to watch IPTV · Types of IPTV (live, VOD, catch-up) · Is IPTV right for
  you · FAQ (6 Q).
- **Entities to name:** IPTV, M3U, Xtream Codes, EPG, VOD, HLS, IPTV Smarters
  Pro, Firestick, codec, bitrate.
- **Media:** delivery diagram; Smarters Pro screenshot.
- **Schema:** Article + FAQPage + BreadcrumbList.
- **Internal links:** → /learn/how-iptv-works, /learn/iptv-vs-cable, /how-to,
  /apps/iptv-smarters-pro-review, /iptv-free-trial-2026.

### Deep spec — `/how-to/install-iptv-on-firestick` (P0, highest-traffic how-to)
- **H1:** How to Install IPTV on Amazon Firestick (2026 Step-by-Step)
- **Summary:** one paragraph + "Time: ~10 minutes · Difficulty: easy".
- **Requirements list:** Firestick, internet, an IPTV subscription or trial line,
  the IPTV Smarters Pro app.
- **Ordered steps:** enable apps from unknown sources → install Downloader →
  install IPTV Smarters Pro → enter Xtream Codes / M3U → load channels → set EPG.
- **H2s:** Before you start · Step-by-step install · Add your playlist ·
  Fix buffering on Firestick (→ /fix/reduce-buffering-firestick) · FAQ.
- **Schema:** HowTo (steps + totalTime PT10M) + FAQPage + BreadcrumbList.
- **CTA:** "No line yet? Start a free 24-hour trial" → /iptv-free-trial-2026.

### Deep spec — `/apps` (P0 pillar) & `/apps/iptv-smarters-pro-review`
- `/apps` **H1:** Best IPTV Apps & Players for 2026. Intro summary box ranking the
  top 5 with one-line reasons; `ItemList` schema; table of app × platform ×
  headline feature; links down to each review; CTA to plans.
- Review page follows the App Review template; it is the strongest internal
  linker into `/iptv-smarters-pro`.

---

## Phase 6 — Topical / entity coverage map

Google/AI must be able to answer each question from your site. Owner page in
parentheses:

| Question Google/AI asks | Owning page |
|---|---|
| What is IPTV? | /learn/iptv-explained |
| How does IPTV work? | /learn/how-iptv-works |
| Who is IPTV for? | /learn/iptv-for-beginners, /learn/choosing-a-provider |
| Best IPTV apps? | /apps |
| Which app is best (X vs Y)? | /compare/* |
| How do I install it on [device]? | /how-to/* |
| What devices work? | /how-to (hub) + each install page |
| M3U vs Xtream / formats? | /learn/what-is-m3u, /learn/what-is-xtream-codes |
| Streaming tech (HLS, bitrate)? | /learn/hls-streaming, /learn/bitrate-and-resolution |
| Why is it buffering / not working? | /fix/* |
| Do I need a VPN / is it safe? | /learn/do-you-need-a-vpn, /learn/avoid-iptv-scams |
| How fast internet do I need? | /learn/internet-speed-for-iptv |
| Alternatives to cable/streaming? | /compare/iptv-vs-cable, /compare/iptv-vs-netflix |
| What does it cost / how to buy? | /iptv-subscription-plans |
| Can I try it first? | /iptv-free-trial-2026 |

**Entity reinforcement:** name the same core entities (IPTV, EPG, VOD, M3U,
Xtream Codes, HLS, IPTV Smarters Pro, TiviMate, Firestick, 4K) consistently
across pages, and keep the `Organization`/`WebSite` `@id` graph in `layout.js`
so every page ties back to the brand entity.

---

## Phase 7 — AI-search optimization (bake into every page)

Reusable blocks every P0/P1 page must contain:

1. **Direct-answer summary box** — first 40–55 words answer the query in a
   self-contained way (quotable by AI Overviews / ChatGPT / Perplexity). Bold the
   key sentence.
2. **One comparison or spec table** — tables are disproportionately cited by AI.
3. **FAQ block** with `FAQPage` schema — 3–6 real questions, answers ≤ 60 words.
4. **HowTo block** with `HowTo` schema on any install/fix page.
5. **Definition list** for concept pages (`DefinedTerm`/`DefinedTermSet` on the
   glossary).
6. **Citation-friendly paragraphs** — short (2–4 sentences), one idea each, lead
   with the claim, name the entity explicitly (avoid "it"/"this" as subjects).
7. **"Last updated [date]"** visible + `dateModified` in `WebPage` schema.
8. **Entity optimization** — consistent named entities + internal links to their
   definition pages.

**Site-level AI enablement:**
- Add **`/llms.txt`** listing the pillar + key pages with one-line descriptions.
- Keep robots/AI-crawler policy deliberate (current Cloudflare `Content-Signal`
  is `search=yes, ai-train=no, use=reference` — fine; ensure it doesn't block
  AI *search* crawlers you want citing you).
- Ensure all content is **server-rendered** (it already is) so crawlers see it
  without JS.

---

## Phase 8 — Implementation roadmap

Priority = SEO reach × commercial pull × build effort. Ship 3–6 pages/week,
fully finished (content + schema + internal links + media) — never publish thin
stubs.

### Week 1 — Foundations & highest-intent (the spine)
- Ship pillars **`/learn`** and **`/how-to`** (hubs, even if children arrive
  later — link to what exists).
- `/learn/iptv-explained` · `/learn/how-iptv-works` · `/learn/choosing-a-provider`
- `/how-to/install-iptv-on-firestick` · `/how-to/install-on-android-tv`
- Add "Learn" + "Help" menus to nav; add pillars to footer.
- Publish **`/llms.txt`**.

### Week 2 — Apps silo + commercial pull
- Pillar **`/apps`** · `/apps/iptv-smarters-pro-review` · `/apps/tivimate`
- `/how-to/load-xtream-codes` · `/how-to/load-m3u-playlist`
- `/how-to/smarters-pro-firestick`
- Wire every new page's CTA into `/iptv-subscription-plans` + trial.

### Week 3 — Comparisons + troubleshooting (capture problem/decision intent)
- Pillar **`/fix`** · `/fix/iptv-buffering` · `/fix/iptv-freezing` ·
  `/fix/iptv-not-working`
- `/compare/iptv-smarters-pro-vs-tivimate` · `/compare/iptv-vs-cable`
- `/learn/avoid-iptv-scams` (trust/E-E-A-T signal)

### Week 4 — Device coverage + depth
- `/how-to/install-on-samsung-tv` · `/how-to/install-on-apple-tv` ·
  `/how-to/install-on-windows` · `/how-to/install-on-mag-box`
- `/apps` roundups (`/apps/best-for-firestick`)
- Pillar **`/compare`** hub; `/learn/internet-speed-for-iptv`,
  `/learn/do-you-need-a-vpn`.
- Submit new URLs via IndexNow (`npm run indexnow` — extend the URL list) and add
  every new page to `app/sitemap.js`.

**Weeks 5–8 (P1) and backlog (P2):** work down the inventory silo by silo, always
finishing a pillar's core children before starting the next silo. Re-audit
internal links monthly; keep no orphan pages.

### Definition of done (per page)
- [ ] Direct-answer summary box in first 55 words
- [ ] Correct schema (per template) rendered in SSR HTML
- [ ] 1 table + FAQ block where applicable
- [ ] Up / down / sibling / commercial internal links present
- [ ] "Last updated" + `dateModified`
- [ ] Added to `sitemap.js` + submitted via IndexNow
- [ ] Slug is clean (not in GONE lists, does not end in `-iptv`)

---

## Engineering notes for build time
- Reuse the existing `PageShell` pattern (Navbar + JSON-LD + prose + Footer) for
  `/learn`, `/fix`, `/compare` article pages; extend it to accept `Article`,
  `HowTo`, `FAQPage` schema props.
- Reuse `CheckoutProvider` + `Pricing` (as done on `/iptv-subscription-plans`)
  wherever a commercial CTA/embedded pricing is wanted.
- Consider a lightweight file-based content source (MDX or a `content/` data
  module) so 100 pages don't become 100 hand-maintained JSX files.
- Do **not** touch `proxy.js` block lists unless deliberately reviving a specific
  legacy URL — the fresh namespaces make that unnecessary.
```
