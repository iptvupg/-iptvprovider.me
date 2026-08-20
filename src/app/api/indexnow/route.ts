
import { NextRequest, NextResponse } from 'next/server'
import { howToArticles } from '@/lib/how-to';
import { allGuides } from '@/lib/guides';

const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow';
const SITE_URL = process.env.SITE_URL || 'https://www.iptvprovider.me';
const API_KEY = '34703b31e96542ffb49bffed790d5e29';

async function submitUrls(urlList: string[]) {
  const payload = {
    host: new URL(SITE_URL).hostname,
    key: API_KEY,
    keyLocation: `${SITE_URL}/${API_KEY}.txt`,
    urlList: urlList,
  };

  try {
    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`IndexNow API error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    return { success: true, status: response.status, payload };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during IndexNow submission';
    console.error('IndexNow Submission Error:', errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function GET(req: NextRequest) {
    const staticPages = [
        '/',
        '/pricing',
        '/faq',
        '/contact',
        '/iptv-free-trial',
        '/iptv-1-month-subscription',
        '/iptv-3-month-subscription',
        '/iptv-6-month-subscription',
        '/iptv-12-month-subscription',
        '/guides',
    ];

    const devicePages = howToArticles.map(article => `/devices/${article.id}`);
    const guidePages = allGuides.map(guide => `/guides/${guide.slug}`);

    // Every route is served under the /tv prefix, so submit the final 200 URLs.
    const allUrls = [
        ...staticPages.map(path => `${SITE_URL}/tv${path === '/' ? '' : path}`),
        ...devicePages.map(path => `${SITE_URL}/tv${path}`),
        ...guidePages.map(path => `${SITE_URL}/tv${path}`),
    ];
    
    const result = await submitUrls(allUrls);

    if (result.success) {
        return NextResponse.json({ message: 'URLs submitted to IndexNow successfully.', details: result });
    } else {
        return NextResponse.json({ error: 'Failed to submit URLs to IndexNow.', details: result }, { status: 500 });
    }
}
