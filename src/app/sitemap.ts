import type { MetadataRoute } from 'next';

// Required for `output: 'export'`.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      changeFrequency: 'yearly',
      priority: 1,
    },
    { url: '/products', changeFrequency: 'yearly', priority: 0.8 },
    { url: '/how-it-works', changeFrequency: 'yearly', priority: 0.7 },
    { url: '/about', changeFrequency: 'yearly', priority: 0.6 },
    { url: '/contact', changeFrequency: 'yearly', priority: 0.9 },
  ];
}
