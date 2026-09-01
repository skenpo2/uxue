import type { Metadata } from 'next';
import { site } from '@/lib/site';

export function pageMetadata(title: string, description: string, path: string, image = '/images/projectbg.jpg'): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: site.name, locale: 'en_KE', type: 'website', images: [{ url: image, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
