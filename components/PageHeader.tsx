import Section from './Section';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-primary-50">
      <div className="max-w-4xl">
        <h1 className="mb-6 bg-gradient-to-br from-slate-900 via-primary-900 to-primary-700 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">{description}</p>
      </div>
    </Section>
  );
}
