// Single source of truth for site navigation. The header, footer and any other
// chrome read their links from here so labels/targets never drift between them.
//
// All links use absolute canonical-page targets so the same entry works from any
// route: on /iptv-smarters-pro only the #fragment changes (the browser scrolls),
// and from any other route the browser navigates to the canonical page first.
export const HOME = "/iptv-smarters-pro";

// Primary header navigation (desktop bar + mobile menu).
export const PRIMARY_NAV = [
  { label: "Home", href: `${HOME}#top` },
  { label: "Pricing", href: "/iptv-subscription-plans" },
  { label: "Learn", href: "/learn" },
  { label: "Setup", href: "/how-to" },
  { label: "Free Trial", href: "/iptv-free-trial-2026" },
  { label: "FAQ", href: `${HOME}#faq` },
  { label: "Contact", href: `${HOME}#contact` },
];

// Footer — "Quick Links" column.
export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: `${HOME}#top` },
  { label: "Subscription Plans", href: "/iptv-subscription-plans" },
  { label: "How it works", href: `${HOME}#steps` },
  { label: "Free Trial", href: "/iptv-free-trial-2026" },
  { label: "Devices", href: `${HOME}#devices` },
  { label: "FAQ", href: `${HOME}#faq` },
];

// Footer — "Resources" column.
export const FOOTER_RESOURCE_LINKS = [
  { label: "Learn IPTV", href: "/learn" },
  { label: "What is IPTV?", href: "/learn/iptv-explained" },
  { label: "Setup guides", href: "/how-to" },
  { label: "IPTV on Firestick", href: "/how-to/install-iptv-on-firestick" },
  { label: "Compare apps", href: "/compare" },
];

// Footer — "Legal" bottom row.
export const FOOTER_LEGAL_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
];

// Footer — "Setup Guides" (per-device install pages).
export const FOOTER_DEVICE_LINKS = [
  { label: "Smart TV", href: "/how-to/install-iptv-on-smart-tv" },
  { label: "Amazon Firestick", href: "/how-to/install-iptv-on-firestick" },
  { label: "Android", href: "/how-to/install-iptv-on-android" },
  { label: "Apple TV & iOS", href: "/how-to/install-iptv-on-apple-tv" },
  { label: "MAG Box", href: "/how-to/install-iptv-on-mag-box" },
  { label: "Windows & macOS", href: "/how-to/install-iptv-on-windows-mac" },
];
