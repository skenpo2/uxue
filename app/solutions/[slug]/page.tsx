import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { pageMetadata } from '@/lib/metadata';
import { getService, services } from '@/lib/site';
import { getServiceHeroImages } from '@/lib/hero-images';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? pageMetadata(service.name, service.summary, `/solutions/${slug}`, getServiceHeroImages(slug)[0].src) : {};
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
