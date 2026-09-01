import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';
import { industries, projects, services, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-09-01');
  const entries: MetadataRoute.Sitemap = [
    ['', 1, 'weekly'], ['/about', .7, 'monthly'], ['/solutions', .9, 'monthly'], ['/industries', .8, 'monthly'], ['/projects', .8, 'monthly'], ['/blog', .8, 'weekly'], ['/contact', .8, 'yearly'],
  ].map(([path, priority, changeFrequency]) => ({ url: `${site.url}${path}`, lastModified: updated, priority: priority as number, changeFrequency: changeFrequency as 'weekly' | 'monthly' | 'yearly' }));
  const serviceEntries = services.map((item) => ({ url: `${site.url}/solutions/${item.slug}`, lastModified: updated, changeFrequency: 'monthly' as const, priority: .8 }));
  const industryEntries = industries.map((item) => ({ url: `${site.url}/industries/${item.slug}`, lastModified: updated, changeFrequency: 'monthly' as const, priority: .7 }));
  const projectEntries = projects.map((item) => ({ url: `${site.url}/projects/${item.slug}`, lastModified: updated, changeFrequency: 'monthly' as const, priority: .7 }));
  const articleEntries = getBlogPosts().map((item) => ({ url: `${site.url}/blog/${item.slug}`, lastModified: new Date(item.updated || item.date), changeFrequency: 'monthly' as const, priority: .7 }));
  return [...entries, ...serviceEntries, ...industryEntries, ...projectEntries, ...articleEntries];
}
