
import type {
  Product,
  WebSite,
  Organization,
  FAQPage,
  BreadcrumbList,
  Article,
  HowTo,
  Service,
  SearchAction,
  Brand,
  Offer,
  AggregateOffer,
  WithContext
} from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

// Reusable parts of schemas
const defaultPublisher = {
  '@type': 'Organization' as const,
  'name': siteConfig.name,
  'logo': {
    '@type': 'ImageObject' as const,
    'url': `${siteConfig.url}/api/og`,
  },
};

export const defaultBrand = {
  '@type': 'Brand' as const,
  name: 'IPTVProvider.me',
};

export const defaultMerchantReturnPolicy = {
  '@type': 'MerchantReturnPolicy' as const,
  applicableCountry: 'US',
  returnPolicyCountry: 'US',
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: 7,
  returnFees: 'https://schema.org/FreeReturn',
};

export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': `${siteConfig.url}/tv`,
    'name': siteConfig.name,
    'alternateName': ["IPTV Providers", "best iptv provider"],
    // `query-input` is a Google-specific extension for the sitelinks search box
    // that schema-dts does not model, so we cast to the base SearchAction type.
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${siteConfig.url}/tv/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string',
    } as SearchAction,
  };
}

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteConfig.name,
    'url': `${siteConfig.url}/tv`,
    'logo': `${siteConfig.url}/api/og`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': siteConfig.links.email,
      'contactType': 'Customer Service',
    },
    'sameAs': [
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  ratingValue?: string;
  reviewCount?: string;
  price?: string;
  offers?: any;
  sku?: string;
  mpn?: string;
  brand?: any;
}

export function generateProductSchema(props: ProductSchemaProps): WithContext<Product> {
    const { name, description, image, ratingValue, reviewCount, price, offers, sku, mpn, brand } = props;
    
    const offerDetails = offers || (price ? {
        '@type': 'Offer' as const,
        price: price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock' as const,
        itemCondition: 'https://schema.org/NewCondition' as const,
        url: `${siteConfig.url}/tv/pricing`,
        priceValidUntil: '2026-12-31',
        hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
    } : undefined);

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image,
        sku: sku || 'iptv-subscription',
        mpn: mpn || 'iptv-subscription',
        brand: brand || defaultBrand,
        ...(ratingValue && reviewCount ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue,
            reviewCount: Number(reviewCount),
          },
        } : {}),
        offers: offerDetails,
    };
}


export function generateFAQPageSchema(mainEntity: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(itemListElement: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

interface ArticleSchemaProps {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified: string;
    authorName?: string;
    publisherName?: string;
    url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps): WithContext<Article> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.headline,
        description: props.description,
        image: props.image,
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        author: {
            '@type': 'Organization',
            name: props.authorName || siteConfig.name,
        },
        publisher: defaultPublisher,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': props.url,
        },
    };
}

interface HowToSchemaProps {
    name: string;
    description: string;
    image?: { url: string; width?: number; height?: number; };
    steps: { name: string; text: string; url: string; }[];
    totalTime?: string;
}

export function generateHowToSchema(props: HowToSchemaProps): WithContext<HowTo> {
    const { name, description, image, steps, totalTime } = props;
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        image: image ? {
            '@type': 'ImageObject',
            url: image.url,
            width: image.width?.toString(),
            height: image.height?.toString(),
        } : undefined,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text,
            url: step.url,
            position: index + 1,
        })),
        totalTime: totalTime,
    };
}


interface ServiceSchemaProps {
    serviceType: string;
    providerName: string;
    areaServed: { type: string, name: string};
    name: string;
    description: string;
    offers?: Offer | AggregateOffer;
}

export function generateServiceSchema(props: ServiceSchemaProps): WithContext<Service> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: props.serviceType,
        provider: {
            '@type': 'Organization',
            name: props.providerName
        },
        areaServed: {
            '@type': props.areaServed.type as any,
            name: props.areaServed.name,
        },
        name: props.name,
        description: props.description,
        offers: props.offers
    }
}

export function generateHomeGraphSchema(faqsList: { question: string; answer: string }[]) {
  const lowPrice = "7.50";
  const highPrice = "16.00";

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: `${siteConfig.url}/tv`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}/api/og`,
          caption: siteConfig.name,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteConfig.links.email,
          telephone: '+44 7848 197761',
          contactType: 'Customer Service',
          availableLanguage: ['English', 'German', 'French', 'Spanish', 'Arabic', 'Italian'],
        },
        sameAs: [
          siteConfig.links.twitter,
          siteConfig.links.facebook,
          siteConfig.links.instagram,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/tv`,
        name: siteConfig.name,
        alternateName: ["IPTV Providers", "best iptv provider", "Best IPTV Service"],
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/tv/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/tv#webpage`,
        url: `${siteConfig.url}/tv`,
        name: 'Best IPTV Service 2026 — 24,000+ Live Channels & 4K VOD',
        description: siteConfig.description,
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${siteConfig.url}/tv#service`,
        },
        mainEntity: {
          '@id': `${siteConfig.url}/tv#service`,
        },
      },
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/tv#service`,
        name: "Premium IPTV Subscription Service",
        serviceType: "Internet Protocol Television (IPTV) Streaming Service",
        description: "High-definition television streaming service providing 24,000+ live broadcast channels, 80,000+ VOD movies and series, and live sports over broadband IP networks.",
        provider: {
          '@id': `${siteConfig.url}/#organization`,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide (197 Countries)',
        },
      },
      {
        '@type': 'Product',
        '@id': `${siteConfig.url}/tv#product`,
        name: "Premium IPTV Subscription",
        description: "Get the best IPTV service with over 24,000 live channels and a massive 80,000+ VOD library. Instant activation, HD/4K quality, 2 simultaneous connections, and 24/7 support.",
        image: `${siteConfig.url}/api/og`,
        sku: "iptv-premium-service",
        mpn: "iptv-premium-service",
        brand: defaultBrand,
        offers: {
          '@type': 'AggregateOffer',
          '@id': `${siteConfig.url}/tv#aggregate-offer`,
          priceCurrency: 'USD',
          lowPrice: lowPrice,
          highPrice: highPrice,
          offerCount: 4,
          priceValidUntil: '2026-12-31',
          url: `${siteConfig.url}/tv/pricing`,
          offers: [
            {
              '@type': 'Offer',
              name: '1-Month IPTV Subscription',
              price: '16.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              priceValidUntil: '2026-12-31',
              url: `${siteConfig.url}/tv/pricing`,
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
            {
              '@type': 'Offer',
              name: '3-Month IPTV Subscription',
              price: '39.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              priceValidUntil: '2026-12-31',
              url: `${siteConfig.url}/tv/pricing`,
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
            {
              '@type': 'Offer',
              name: '6-Month IPTV Subscription',
              price: '60.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              priceValidUntil: '2026-12-31',
              url: `${siteConfig.url}/tv/pricing`,
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
            {
              '@type': 'Offer',
              name: '12-Month IPTV Subscription',
              price: '90.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              priceValidUntil: '2026-12-31',
              url: `${siteConfig.url}/tv/pricing`,
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/tv#faq`,
        isPartOf: {
          '@id': `${siteConfig.url}/tv#webpage`,
        },
        mainEntity: faqsList.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  };
}

export function generateTrialGraphSchema(faqsList: { question: string; answer: string }[]) {
  const pageUrl = `${siteConfig.url}/tv/iptv-free-trial`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: `${siteConfig.url}/tv`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}/api/og`,
          caption: siteConfig.name,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteConfig.links.email,
          telephone: '+44 7848 197761',
          contactType: 'Customer Service',
          availableLanguage: ['English', 'German', 'French', 'Spanish', 'Arabic', 'Italian'],
        },
        sameAs: [
          siteConfig.links.twitter,
          siteConfig.links.facebook,
          siteConfig.links.instagram,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/tv`,
        name: siteConfig.name,
        alternateName: ["IPTV Providers", "best iptv provider", "Best IPTV Service"],
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Free Trial IPTV (2026): 24-Hour Instant Access — No Credit Card',
        description: 'Get an instant 24-hour free trial for IPTV with access to 24,000+ live HD/4K channels, live sports & VOD. No credit card required. Start streaming in minutes.',
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${pageUrl}#service`,
        },
        mainEntity: {
          '@id': `${pageUrl}#service`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteConfig.url}/tv`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'IPTV Free Trial',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: '24-Hour IPTV Free Trial',
        serviceType: 'Internet Protocol Television (IPTV) Free Trial Service',
        description: 'Instant 24-hour free trial providing unrestricted access to 24,000+ live channels, 80,000+ VOD titles, and live sports with zero credit card required.',
        provider: {
          '@id': `${siteConfig.url}/#organization`,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide (197 Countries)',
        },
        offers: {
          '@type': 'Offer',
          '@id': `${pageUrl}#offer`,
          name: '24-Hour IPTV Free Trial',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
          priceValidUntil: '2026-12-31',
          description: '100% free 24-hour trial access to 24,000+ live TV channels, sports, and movies with automated credential delivery and no payment details required.',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${pageUrl}#howto`,
        name: 'How to Activate Your 24-Hour IPTV Free Trial',
        description: 'Step-by-step instructions to request, receive, and configure an IPTV free trial test account on any streaming device.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Request Trial on WhatsApp',
            text: 'Click the WhatsApp button to message our 24/7 activation team and request your free trial test line.',
            url: `${pageUrl}#step1`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Receive Xtream Codes & M3U Credentials',
            text: 'Our team delivers your unique Xtream Codes API login (Server URL, Username, Password) and M3U playlist URL in minutes.',
            url: `${pageUrl}#step2`,
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Enter Login in Player App & Start Streaming',
            text: 'Open your preferred player app (such as TiviMate, IPTV Smarters Pro, IBO Player, or VLC) on Firestick, Smart TV, or PC and enter your credentials to enjoy 24 hours of full access.',
            url: `${pageUrl}#step3`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        isPartOf: {
          '@id': `${pageUrl}#webpage`,
        },
        mainEntity: faqsList.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  };
}

export function generatePricingGraphSchema(faqsList: { question: string; answer: string }[]): Record<string, unknown> {
  const pageUrl = `${siteConfig.url}/tv/pricing`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: `${siteConfig.url}/tv`,
        logo: `${siteConfig.url}/api/og`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: '+44 7848 197761',
          url: 'https://wa.me/447848197761',
          availableLanguage: ['English', 'French', 'Spanish', 'German', 'Arabic'],
        },
        sameAs: [
          siteConfig.links.twitter,
          siteConfig.links.facebook,
          siteConfig.links.instagram,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/tv`,
        name: siteConfig.name,
        alternateName: ["IPTV Providers", "best iptv provider", "Best IPTV Service"],
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'IPTV Subscription Plans & Pricing 2026 | From $7.50/mo',
        description: 'Compare IPTV subscription plans from $7.50/month. 24,000+ HD/4K channels, 2 concurrent connections, instant activation, and 7-day money-back guarantee.',
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${pageUrl}#product`,
        },
        mainEntity: {
          '@id': `${pageUrl}#product`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteConfig.url}/tv`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        name: 'Premium IPTV Subscription Service',
        description: 'Full-access IPTV subscription including 24,000+ live HD/4K channels, 80,000+ VOD movies and series, 2 simultaneous device connections, anti-freeze streaming, and 24/7 support.',
        image: `${siteConfig.url}/api/og`,
        sku: 'iptv-pricing-plans',
        mpn: 'iptv-pricing-plans',
        brand: defaultBrand,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '7.50',
          highPrice: '16.00',
          offerCount: 4,
          offers: [
            {
              '@type': 'Offer',
              '@id': `${pageUrl}#offer-1-month`,
              name: '1-Month IPTV Subscription',
              price: '16.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              url: `${pageUrl}#pricing-plans`,
              priceValidUntil: '2026-12-31',
              description: '1 month of full IPTV access on 2 devices with 24,000+ channels and 80,000+ VOD titles.',
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
            {
              '@type': 'Offer',
              '@id': `${pageUrl}#offer-3-months`,
              name: '3-Month IPTV Subscription',
              price: '39.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              url: `${pageUrl}#pricing-plans`,
              priceValidUntil: '2026-12-31',
              description: '3 months of full IPTV access ($13.00/mo) on 2 devices with 19% savings.',
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
            {
              '@type': 'Offer',
              '@id': `${pageUrl}#offer-6-months`,
              name: '6-Month IPTV Subscription',
              price: '60.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              url: `${pageUrl}#pricing-plans`,
              priceValidUntil: '2026-12-31',
              description: '6 months of full IPTV access ($10.00/mo) on 2 devices with 38% savings.',
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
            {
              '@type': 'Offer',
              '@id': `${pageUrl}#offer-12-months`,
              name: '12-Month IPTV Subscription',
              price: '90.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              url: `${pageUrl}#pricing-plans`,
              priceValidUntil: '2026-12-31',
              description: '12 months of full IPTV access ($7.50/mo) on 2 devices with 53% savings and priority support.',
              hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        isPartOf: {
          '@id': `${pageUrl}#webpage`,
        },
        mainEntity: faqsList.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  };
}

export interface PlanGraphInput {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  price: number;
  durationLabel: string;
  faqs: { question: string; answer: string }[];
}

export function generatePlanGraphSchema(plan: PlanGraphInput): Record<string, unknown> {
  const pageUrl = `${siteConfig.url}/tv/${plan.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: `${siteConfig.url}/tv`,
        logo: `${siteConfig.url}/api/og`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: '+44 7848 197761',
          url: 'https://wa.me/447848197761',
          availableLanguage: ['English', 'French', 'Spanish', 'German', 'Arabic'],
        },
        sameAs: [
          siteConfig.links.twitter,
          siteConfig.links.facebook,
          siteConfig.links.instagram,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/tv`,
        name: siteConfig.name,
        alternateName: ["IPTV Providers", "best iptv provider", "Best IPTV Service"],
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: plan.metaTitle,
        description: plan.metaDescription,
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${pageUrl}#product`,
        },
        mainEntity: {
          '@id': `${pageUrl}#product`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteConfig.url}/tv`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing',
            item: `${siteConfig.url}/tv/pricing`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${plan.name} Subscription`,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        name: `${plan.name} IPTV Subscription`,
        description: `${plan.name} IPTV subscription with 24,000+ live HD/4K channels, 80,000+ VOD titles, 2 concurrent connections, anti-freeze streaming, and 24/7 support.`,
        image: `${siteConfig.url}/api/og`,
        sku: `iptv-${plan.slug}`,
        mpn: `iptv-${plan.slug}`,
        brand: defaultBrand,
        offers: {
          '@type': 'Offer',
          '@id': `${pageUrl}#offer`,
          name: `${plan.name} IPTV Subscription`,
          price: plan.price.toFixed(2),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: pageUrl,
          priceValidUntil: '2026-12-31',
          description: `${plan.durationLabel} of full IPTV access on 2 devices with 24,000+ live channels, sports, and VOD movies.`,
          hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
          seller: {
            '@id': `${siteConfig.url}/#organization`,
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        isPartOf: {
          '@id': `${pageUrl}#webpage`,
        },
        mainEntity: plan.faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  };
}




