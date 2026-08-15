
import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.url;

  // AI-crawler policy: this is a commercial site that benefits from AI visibility
  // (citations in ChatGPT, Gemini, Perplexity, Claude drive brand awareness and
  // referral traffic), so all AI crawlers — training and browsing alike — are
  // allowed consistently. Only genuinely private paths are disallowed, matching
  // the wildcard rule.
  const aiCrawlers = [
    'GPTBot',        // OpenAI training
    'ChatGPT-User',  // OpenAI browsing/citations
    'Google-Extended', // Gemini training
    'anthropic-ai',  // Anthropic (legacy token)
    'ClaudeBot',     // Anthropic training
    'PerplexityBot', // Perplexity search + training
  ];

  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/staging/'],
        },
        ...aiCrawlers.map((userAgent) => ({
            userAgent,
            allow: '/',
            disallow: ['/api/', '/admin/', '/staging/'],
        })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
