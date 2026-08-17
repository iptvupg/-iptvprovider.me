export interface PlanPageData {
  slug: string;
  planId: string;
  name: string;
  durationLabel: string;
  durationMonths: number;
  price: number;
  monthlyEquivalent: number;
  savings: string | null;
  savingsDollars: string | null;
  isPopular?: boolean;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSubtitle: string;
  idealFor: string;
  whyChooseHeading: string;
  whyChooseText: string;
  buyerScenarioTitle: string;
  buyerScenarioText: string;
  buyerChecklist: string[];
  checkoutUrl: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const planPagesData: Record<string, PlanPageData> = {
  "1-month": {
    slug: "iptv-1-month-subscription",
    planId: "1-month",
    name: "1 Month",
    durationLabel: "1 Month",
    durationMonths: 1,
    price: 16.00,
    monthlyEquivalent: 16.00,
    savings: null,
    savingsDollars: null,
    isPopular: false,
    metaTitle: "1 Month IPTV Subscription (2026): $16/mo Flexible Plan — Instant Access",
    metaDescription: "Get a 1-month IPTV subscription for $16.00 with 24,000+ live HD/4K channels, 80,000+ VOD titles, 2 concurrent streams, instant activation, and 7-day money-back guarantee.",
    eyebrow: "Flexible Monthly Streaming",
    h1: "1 Month IPTV Subscription: Flexible Monthly Streaming Plan",
    heroSubtitle: "Experience unrestricted access to 24,000+ live HD/4K channels, 80,000+ VOD movies and series, and live sports on 2 concurrent devices with zero long-term commitment.",
    idealFor: "First-time subscribers testing service quality and viewers wanting monthly flexibility.",
    whyChooseHeading: "Why Choose the 1-Month IPTV Subscription?",
    whyChooseText: "The 1-month plan is our most flexible option. It provides full access to our entire channel catalog, sports package, and VOD library with zero contracts and zero recurring auto-debit traps. It is the perfect tier to evaluate streaming stability across all your household devices under real-world internet conditions before deciding on a longer-term discount package.",
    buyerScenarioTitle: "Evaluation & Short-Term Freedom",
    buyerScenarioText: "If you are new to IPTV or only need service for a specific event (e.g. an upcoming fight or a one-month holiday stay), the 1-month plan delivers premium performance without locking up capital.",
    buyerChecklist: [
      "Pay-as-you-go with no recurring subscription contracts",
      "Full access to 24,000+ channels and 80,000+ VOD library",
      "2 simultaneous device streams included at no extra cost",
      "Eligible for prorated upgrade credit to longer plans at any time",
      "Backed by our unconditional 7-day money-back guarantee"
    ],
    checkoutUrl: "/checkout?plan=1-month",
    faqs: [
      {
        question: "What is a 1-month IPTV subscription?",
        answer: "A 1-month IPTV subscription is a 30-day full-access service tier that lets you stream 24,000+ live channels, 80,000+ VOD movies, and live sports in HD and 4K on 2 devices simultaneously with no contracts."
      },
      {
        question: "How much does the 1-month IPTV subscription cost?",
        answer: "The 1-month IPTV subscription costs a one-time payment of $16.00 with zero hidden activation fees or mandatory auto-renewals."
      },
      {
        question: "How many devices can I use with the 1-month plan?",
        answer: "The 1-month plan includes 2 simultaneous connections, allowing two family members to watch different channels or movies at the same time on Smart TVs, Firesticks, Android, Apple TV, or mobile devices."
      },
      {
        question: "Does the 1-month subscription renew automatically?",
        answer: "No. We never bill recurring payments without your consent. When your 30 days approach expiration, you receive a reminder and can manually renew or upgrade."
      },
      {
        question: "Can I upgrade from 1 month to a 6 or 12-month plan later?",
        answer: "Yes. You can upgrade to a 3, 6, or 12-month plan at any time. Our 24/7 support team will apply a prorated credit for any remaining days toward your extended plan."
      },
      {
        question: "Is there a refund policy on the 1-month plan?",
        answer: "Yes. All paid subscription plans include a 100% 7-day money-back guarantee. If our engineering team cannot resolve any technical playback issue within 7 days, you receive a full refund."
      }
    ]
  },

  "3-months": {
    slug: "iptv-3-month-subscription",
    planId: "3-months",
    name: "3 Months",
    durationLabel: "3 Months",
    durationMonths: 3,
    price: 39.00,
    monthlyEquivalent: 13.00,
    savings: "Save 19%",
    savingsDollars: "Save $9.00",
    isPopular: false,
    metaTitle: "3 Month IPTV Subscription (2026): $39 ($13/mo) — Save 19%",
    metaDescription: "Get a 3-month IPTV subscription for $39.00 ($13.00/month). Save 19% with access to 24,000+ live channels, 80,000+ VOD, 2 connections, and 7-day money-back guarantee.",
    eyebrow: "Quarterly Sports & Entertainment",
    h1: "3 Month IPTV Subscription: Quarterly Sports & Entertainment Plan",
    heroSubtitle: "Save 19% with our quarterly package. Stream 24,000+ live HD/4K channels, 80,000+ VOD titles, and complete live sports coverage on 2 concurrent devices for just $13.00 per month.",
    idealFor: "Sports fans following seasonal tournaments and viewers seeking lower monthly rates than 1-month billing.",
    whyChooseHeading: "Why Choose the 3-Month IPTV Subscription?",
    whyChooseText: "The 3-month subscription strikes the perfect balance between short-term flexibility and meaningful cost savings. At $39.00 for the full quarter ($13.00/month), you save 19% compared to three consecutive monthly renewals. It aligns seamlessly with major sports seasons — such as football tournament knockouts, basketball playoffs, or motorsport championships — providing uninterrupted 60fps streaming.",
    buyerScenarioTitle: "Quarterly Tournaments & Seasonal Cord-Cutting",
    buyerScenarioText: "If you know you will be watching television throughout the coming season, the 3-month plan provides seamless continuity without monthly renewal friction.",
    buyerChecklist: [
      "Save 19% ($9.00 savings) compared to 1-month renewals",
      "Effective rate of only $13.00 per month for 90 days of access",
      "Covers a full quarterly sporting season with 60fps live feeds",
      "2 simultaneous streams included for multi-room viewing",
      "Instant automated credential delivery and 7-day refund guarantee"
    ],
    checkoutUrl: "/checkout?plan=3-months",
    faqs: [
      {
        question: "What is a 3-month IPTV subscription?",
        answer: "A 3-month IPTV subscription provides 90 days of continuous access to 24,000+ live TV channels, 80,000+ VOD titles, and all sports events on 2 devices simultaneously."
      },
      {
        question: "How much does the 3-month IPTV plan cost?",
        answer: "The 3-month IPTV plan costs $39.00 as a one-time payment, which equals an effective rate of $13.00 per month."
      },
      {
        question: "How much do I save with the 3-month plan?",
        answer: "You save 19% ($9.00 savings) compared to paying $16.00 each month for three consecutive months."
      },
      {
        question: "How many simultaneous connections are included?",
        answer: "The 3-month plan includes 2 simultaneous connections, allowing two household screens to stream at the same time."
      },
      {
        question: "What sports are included in the 3-month plan?",
        answer: "All major live sports are included: Premier League, UEFA Champions League, NFL, NBA, MLB, NHL, UFC, Boxing, Formula 1, and international cricket in 60fps HD and 4K."
      },
      {
        question: "What is the refund policy on the 3-month plan?",
        answer: "The 3-month plan includes a full 7-day money-back guarantee. If you experience technical issues that cannot be resolved, you receive a 100% refund within the first 7 days."
      }
    ]
  },

  "6-months": {
    slug: "iptv-6-month-subscription",
    planId: "6-months",
    name: "6 Months",
    durationLabel: "6 Months",
    durationMonths: 6,
    price: 60.00,
    monthlyEquivalent: 10.00,
    savings: "Save 38%",
    savingsDollars: "Save $36.00",
    isPopular: false,
    metaTitle: "6 Month IPTV Subscription (2026): $60 ($10/mo) — Save 38%",
    metaDescription: "Get a 6-month IPTV subscription for $60.00 ($10.00/month). Save 38% on 24,000+ live HD/4K channels, 80,000+ VOD, 2 concurrent streams, and 7-day money-back guarantee.",
    eyebrow: "Semi-Annual Household Value",
    h1: "6 Month IPTV Subscription: Semi-Annual Household Plan",
    heroSubtitle: "Save 38% with semi-annual billing. Enjoy 24,000+ live channels, 80,000+ VOD movies and series, and live sports on 2 concurrent devices for just $10.00 per month.",
    idealFor: "Families, multi-room households, and regular cord-cutters wanting budget-friendly semi-annual entertainment.",
    whyChooseHeading: "Why Choose the 6-Month IPTV Subscription?",
    whyChooseText: "The 6-month plan is our most popular mid-tier option for families and serious cord-cutters. Priced at $60.00 for half a year ($10.00/month), you save 38% ($36.00 savings) compared to standard monthly billing. It provides long-term peace of mind, continuous daily VOD library updates, and priority server routing during peak global broadcasting events.",
    buyerScenarioTitle: "Semi-Annual Budget Optimization",
    buyerScenarioText: "For households that stream television daily, the 6-month tier drops the monthly cost to just $10.00 without committing to a full 12 months.",
    buyerChecklist: [
      "Save 38% ($36.00 savings) compared to 1-month renewals",
      "Affordable flat rate of just $10.00 per month for 180 days",
      "Includes 2 simultaneous device streams for household sharing",
      "Full access to 24,000+ channels and 80,000+ on-demand catalog",
      "Backed by our 7-day money-back guarantee and 24/7 support"
    ],
    checkoutUrl: "/checkout?plan=6-months",
    faqs: [
      {
        question: "What is a 6-month IPTV subscription?",
        answer: "A 6-month IPTV subscription provides 180 days of unrestricted streaming of 24,000+ live channels, 80,000+ VOD movies and series, and all sports events on 2 devices simultaneously."
      },
      {
        question: "How much does the 6-month IPTV plan cost?",
        answer: "The 6-month plan costs a one-time payment of $60.00, which equals an effective rate of $10.00 per month."
      },
      {
        question: "How much do I save with the 6-month plan?",
        answer: "You save 38% ($36.00 savings) compared to paying $16.00 each month over 6 months."
      },
      {
        question: "How many devices can stream simultaneously?",
        answer: "Every 6-month subscription includes 2 concurrent streams, so you can watch live sports on your main TV while someone else streams VOD on another screen."
      },
      {
        question: "How is the 6-month subscription delivered?",
        answer: "Your login credentials (Xtream Codes API & M3U playlist URLs) are delivered automatically to your email and WhatsApp within 1 to 5 minutes of payment confirmation."
      },
      {
        question: "What is the refund policy on the 6-month plan?",
        answer: "The 6-month plan includes a full 7-day money-back guarantee. If you encounter unresolved technical issues, contact our support team within 7 days for a complete refund."
      }
    ]
  },

  "12-months": {
    slug: "iptv-12-month-subscription",
    planId: "12-months",
    name: "12 Months",
    durationLabel: "12 Months",
    durationMonths: 12,
    price: 90.00,
    monthlyEquivalent: 7.50,
    savings: "Save 53%",
    savingsDollars: "Save $102.00",
    isPopular: true,
    metaTitle: "12 Month IPTV Subscription (2026): $90 ($7.50/mo) — Save 53% Best Value",
    metaDescription: "Get an annual 12-month IPTV subscription for $90.00 ($7.50/month). Save 53% ($102/yr) with 24,000+ live channels, 80,000+ VOD, 2 connections, and priority support.",
    eyebrow: "Best Value: Maximum Annual Savings",
    h1: "12 Month IPTV Subscription: Annual Best Value Plan ($7.50/mo)",
    heroSubtitle: "Save 53% ($102/year) with our annual package. Stream 24,000+ live HD/4K channels, 80,000+ VOD movies and series, and live sports on 2 concurrent devices for just $7.50 per month.",
    idealFor: "Permanent cord-cutters, families, and long-term viewers seeking the lowest monthly price and VIP server priority.",
    whyChooseHeading: "Why Choose the 12-Month IPTV Subscription?",
    whyChooseText: "The 12-month annual subscription is our flagship tier and undisputed best value. At just $90.00 for the entire year ($7.50/month), you save 53% ($102.00 savings) compared to paying $16.00 monthly. In addition to full catalog access and 2 simultaneous connections, 12-month subscribers receive priority server load-balancing allocation and dedicated VIP technical support routing.",
    buyerScenarioTitle: "Permanent Cord-Cutting & Ultimate Cost Efficiency",
    buyerScenarioText: "If you have cut the cord on expensive cable or satellite contracts, the 12-month plan replaces hundred-dollar monthly bills with a single, economical $7.50/mo flat rate.",
    buyerChecklist: [
      "Maximum savings of 53% ($102.00/year savings vs. monthly)",
      "Lowest monthly equivalent rate: just $7.50 per month",
      "Full 365 days of uninterrupted 24,000+ channel & VOD streaming",
      "2 simultaneous device streams for multi-room household access",
      "VIP priority technical assistance and 7-day money-back guarantee"
    ],
    checkoutUrl: "/checkout?plan=12-months",
    faqs: [
      {
        question: "What is a 12-month IPTV subscription?",
        answer: "A 12-month IPTV subscription is a 365-day annual membership that delivers unlimited streaming of 24,000+ live channels, 80,000+ VOD movies and series, and live sports in HD and 4K on 2 devices simultaneously."
      },
      {
        question: "How much does the 12-month IPTV plan cost?",
        answer: "The 12-month IPTV plan costs a one-time payment of $90.00, which equals an industry-leading rate of just $7.50 per month."
      },
      {
        question: "How much do I save with the annual plan?",
        answer: "You save 53% ($102.00 savings per year) compared to renewing a 1-month plan ($16/month x 12 = $192/year)."
      },
      {
        question: "How many devices can I connect on the 12-month plan?",
        answer: "The 12-month plan includes 2 simultaneous connections, allowing two independent screens in your household to watch different live channels or on-demand titles at the same time."
      },
      {
        question: "Does the 12-month plan include priority support?",
        answer: "Yes. Annual subscribers receive priority routing for technical inquiries, ensuring rapid assistance via WhatsApp and dedicated email ticketing."
      },
      {
        question: "What is the refund policy on the 12-month plan?",
        answer: "All paid subscriptions include our unconditional 7-day money-back guarantee. If you are not completely satisfied within your first 7 days, you receive a 100% full refund."
      }
    ]
  }
};
