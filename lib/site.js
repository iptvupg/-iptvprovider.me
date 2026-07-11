// Single source of truth for site-wide constants. Previously the canonical
// origin (`SITE`) was re-declared in 22 files and the WhatsApp/support details
// were scattered across components; centralizing them here removes that
// duplication without changing any rendered output.

export const SITE = "https://www.iptvprovider.me";

export const BRAND = "IPTV Provider";

// Support / contact — all real, used in schema and page copy.
export const EMAIL = "support@iptvprovider.me";
export const WHATSAPP_NUMBER = "447848197761";
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_INTL = "+44-7848-197761";

// Catalogue figures quoted across the site.
export const CHANNELS = "54,000+";
export const MOVIES = "120,000+";

// The four real, purchasable plans (1/3/6/12 months), in USD.
export const PLANS = [
  { name: "1 Month", months: 1, price: "16" },
  { name: "3 Months", months: 3, price: "39" },
  { name: "6 Months", months: 6, price: "60" },
  { name: "12 Months", months: 12, price: "90" },
];
