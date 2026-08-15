import { unstable_cache as cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { getGuideBySlug, allGuides } from "@/lib/guides";
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQPageSchema } from '@/lib/schema';

export const getGuidePageData = cache(
  async (slug: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    const guide = getGuideBySlug(slug);
    if (!guide) {
      notFound();
    }

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", item: `${baseUrl}/` },
      { name: "Guides", item: `${baseUrl}/guides` },
      { name: guide.h1, item: `${baseUrl}/guides/${slug}` }
    ]);

    const articleSchema = generateArticleSchema({
      headline: guide.h1,
      description: guide.description,
      datePublished: `${guide.updatedAt}T00:00:00Z`,
      dateModified: `${guide.updatedAt}T00:00:00Z`,
      authorName: guide.author.name,
      url: `${baseUrl}/guides/${slug}`
    });

    const faqSchema = generateFAQPageSchema(guide.faq);

    return {
      guide,
      breadcrumbSchema,
      articleSchema,
      faqSchema
    };
  },
  ['guide-page-data'],
  {
    revalidate: 3600,
    tags: ['pages', 'guide-page'],
  }
);
