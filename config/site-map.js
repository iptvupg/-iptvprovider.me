// Internal-linking relationship graph — a single, queryable source of truth for
// how the site's pages relate to one another (parent → children, siblings,
// related). Every edge below is grounded in a link that ALREADY exists in the
// rendered pages, so nothing here invents new relationships:
//
//   • `parent` mirrors each page's breadcrumb trail (PageShell / HowToGuide).
//   • `children` mirrors the hub card grids on /learn, /how-to and /compare and
//     the primary silos linked from the header nav on the home page.
//   • `related` mirrors the hand-curated "next steps" / cross-link rows on the
//     hub pages.
//
// This module is pure data + is consumed by the helpers in lib/links. It does
// not render anything and does not alter existing HTML on its own; pages opt in
// where they want generated links.

export const HOME = "/iptv-smarters-pro";

// Keyed by canonical path. `label` is the page's own breadcrumb label so any
// generated link uses the exact wording already shown in breadcrumbs.
export const ROUTES = {
  "/iptv-smarters-pro": {
    label: "IPTV Smarters Pro",
    parent: null,
    children: [
      "/iptv-subscription-plans",
      "/iptv-free-trial-2026",
      "/learn",
      "/how-to",
      "/compare",
    ],
    related: [],
  },

  "/iptv-subscription-plans": {
    label: "Subscription Plans",
    parent: "/iptv-smarters-pro",
    children: [],
    related: ["/iptv-free-trial-2026", "/how-to", "/compare"],
  },
  "/iptv-free-trial-2026": {
    label: "Free Trial",
    parent: "/iptv-smarters-pro",
    children: [],
    related: ["/iptv-subscription-plans", "/how-to"],
  },

  "/learn": {
    label: "Learn",
    parent: "/iptv-smarters-pro",
    children: ["/learn/iptv-explained"],
    related: [
      "/how-to",
      "/compare/iptv-smarters-pro-vs-tivimate",
      "/iptv-subscription-plans",
    ],
  },
  "/learn/iptv-explained": {
    label: "What is IPTV?",
    parent: "/learn",
    children: [],
    related: ["/how-to", "/compare/iptv-smarters-pro-vs-tivimate"],
  },

  "/how-to": {
    label: "How to set up IPTV",
    parent: "/iptv-smarters-pro",
    // Order mirrors the hub card grid, so sibling previous/next matches the page.
    children: [
      "/how-to/install-iptv-on-firestick",
      "/how-to/install-iptv-on-android",
      "/how-to/install-iptv-on-smart-tv",
      "/how-to/install-iptv-on-apple-tv",
      "/how-to/install-iptv-on-mag-box",
      "/how-to/install-iptv-on-windows-mac",
    ],
    related: [
      "/learn/iptv-explained",
      "/compare/iptv-smarters-pro-vs-tivimate",
      "/iptv-free-trial-2026",
      "/iptv-subscription-plans",
    ],
  },
  "/how-to/install-iptv-on-firestick": {
    label: "Install on Firestick",
    parent: "/how-to",
    children: [],
    related: ["/compare/iptv-smarters-pro-vs-tivimate"],
  },
  "/how-to/install-iptv-on-android": {
    label: "Install on Android",
    parent: "/how-to",
    children: [],
    related: ["/compare/iptv-smarters-pro-vs-tivimate"],
  },
  "/how-to/install-iptv-on-smart-tv": {
    label: "Install on Smart TV",
    parent: "/how-to",
    children: [],
    related: [],
  },
  "/how-to/install-iptv-on-apple-tv": {
    label: "Install on Apple TV & iOS",
    parent: "/how-to",
    children: [],
    related: [],
  },
  "/how-to/install-iptv-on-mag-box": {
    label: "Set up on MAG Box",
    parent: "/how-to",
    children: [],
    related: [],
  },
  "/how-to/install-iptv-on-windows-mac": {
    label: "Install on Windows & Mac",
    parent: "/how-to",
    children: [],
    related: [],
  },

  "/compare": {
    label: "IPTV comparisons",
    parent: "/iptv-smarters-pro",
    children: ["/compare/iptv-smarters-pro-vs-tivimate"],
    related: [
      "/learn/iptv-explained",
      "/how-to/install-iptv-on-firestick",
      "/iptv-subscription-plans",
    ],
  },
  "/compare/iptv-smarters-pro-vs-tivimate": {
    label: "Smarters Pro vs TiviMate",
    parent: "/compare",
    children: [],
    related: ["/how-to/install-iptv-on-firestick", "/iptv-subscription-plans"],
  },

  "/about": { label: "About", parent: "/iptv-smarters-pro", children: [], related: [] },
  "/contact": { label: "Contact", parent: "/iptv-smarters-pro", children: [], related: [] },
  "/privacy": { label: "Privacy Policy", parent: "/iptv-smarters-pro", children: [], related: [] },
  "/terms": { label: "Terms of Service", parent: "/iptv-smarters-pro", children: [], related: [] },
  "/refund": { label: "Refund Policy", parent: "/iptv-smarters-pro", children: [], related: [] },
};
