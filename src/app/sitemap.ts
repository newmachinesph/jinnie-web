import type { MetadataRoute } from 'next';
import { apps } from '@/lib/apps';
import { site } from '@/lib/site';

const pages = ['', '/apps', '/how-it-works', '/developers', '/community', '/security', '/about', '/download', '/support', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map(p => ({ url: `${site.url}${p}`, lastModified, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...apps.map(a => ({ url: `${site.url}/apps/${a.id}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
