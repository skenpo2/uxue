import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { pageMetadata } from '@/lib/metadata';
import { getService, services } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? pageMetadata(service.name, service.summary, `/solutions/${slug}`, service.image) : {};
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
