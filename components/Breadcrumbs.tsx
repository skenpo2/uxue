import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const entries = [{ label: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>{entries.map((item, index) => <li key={`${item.label}-${index}`}>{item.href && index < entries.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol>
      </nav>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: entries.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.label, item: item.href ? `${site.url}${item.href}` : undefined })) }} />
    </>
  );
}
