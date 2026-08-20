
import { unstable_cache as cache } from 'next/cache';
import { generateTrialGraphSchema } from '@/lib/schema';

export const trialFaqs = [
    {
        question: "Is the IPTV free trial really free?",
        answer: "Yes. Our 24-hour IPTV trial is 100% free with zero hidden costs. We do not ask for credit card numbers, payment details, or billing information. It is a completely risk-free test of our live streams and VOD catalog."
    },
    {
        question: "Do I need a credit card to get the free trial?",
        answer: "No. You never need to provide a credit card or payment method to start your trial. Simply request your trial on WhatsApp, and our team will generate your instant login credentials."
    },
    {
        question: "How long does the IPTV trial last and when does it start?",
        answer: "The trial provides 24 hours of full, unrestricted access starting from the moment your activation credentials are generated and delivered to you on WhatsApp."
    },
    {
        question: "What channels, live sports, and VOD movies are included in the trial?",
        answer: "Your free trial includes unrestricted access to our entire catalog: over 24,000 live HD/4K channels from the USA, UK, Canada, and worldwide, all live sports broadcasts in 60fps, major PPV events, and 80,000+ on-demand movies and TV series."
    },
    {
        question: "How are my trial login credentials delivered?",
        answer: "Trial credentials (both Xtream Codes API username/password and M3U playlist URLs) are delivered directly to you via WhatsApp within minutes of your request."
    },
    {
        question: "What devices and player apps work with the IPTV trial?",
        answer: "Our trial works across all major hardware platforms: Amazon Firestick & Fire TV, Android TV boxes, Samsung Smart TVs (Tizen), LG Smart TVs (webOS), Apple TV, iPhone, iPad, Windows PC, and Mac. You can use popular player apps such as TiviMate, IPTV Smarters Pro, IBO Player, and VLC."
    },
    {
        question: "What internet speed is recommended for buffer-free streaming?",
        answer: "While individual 1080p HD streams use 8–10 Mbps and 4K streams use 20–25 Mbps, we recommend a broadband connection of 25–50 Mbps or higher to ensure stable, buffer-free viewing during concurrent home usage."
    },
    {
        question: "What happens when my 24-hour trial expires?",
        answer: "The trial automatically expires after 24 hours. There is no auto-billing, no subscription contract, and no cancellation required. If you decide not to subscribe, access simply closes with zero obligation."
    },
    {
        question: "How do I upgrade to a paid IPTV subscription after testing?",
        answer: "If you love the streaming quality and channel selection during your trial, you can choose any subscription plan ($7.50 to $16.00/mo) on our pricing page or message us on WhatsApp to activate a full subscription without losing your playlist configuration."
    },
    {
        question: "Why do you deliver trial credentials via WhatsApp?",
        answer: "WhatsApp delivery ensures instant, real-time activation without email spam delays or lost messages, while giving you immediate access to our 24/7 technical support team if you need help with setup or app configuration."
    }
];

export const getIptvFreeTrialPageData = cache(
  async () => {
    const trialGraphSchema = generateTrialGraphSchema(trialFaqs);

    return {
      trialGraphSchema,
      trialFaqs
    };
  },
  ['iptv-free-trial-page-data'],
  {
    revalidate: 3600,
    tags: ['pages', 'iptv-free-trial-page'],
  }
);


    