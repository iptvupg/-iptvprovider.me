
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
  offers?: Offer | AggregateOffer;
  sku?: string;
  mpn?: string;
  brand?: Brand;
}

export function generateProductSchema(props: ProductSchemaProps): WithContext<Product> {
    const { name, description, image, ratingValue, reviewCount, price, offers, sku, mpn, brand } = props;
    
    const offerDetails = offers || (price ? {
        '@type': 'Offer' as const,
        price: price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock' as const,
        url: `${siteConfig.url}/tv/pricing`,
        priceValidUntil: "2026-12-31",
    } : undefined);

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image,
        sku,
        mpn,
        brand,
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
        image: `${siteConfig.url}/og-image.jpg`,
        sku: "iptv-premium-service",
        mpn: "iptv-premium-service",
        brand: {
          '@id': `${siteConfig.url}/#organization`,
        },
        offers: {
          '@type': 'AggregateOffer',
          '@id': `${siteConfig.url}/tv#aggregate-offer`,
          priceCurrency: 'USD',
          lowPrice: lowPrice,
          highPrice: highPrice,
          offerCount: 4,
          priceValidUntil: '2026-12-31',
          url: `${siteConfig.url}/tv/pricing`,
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

