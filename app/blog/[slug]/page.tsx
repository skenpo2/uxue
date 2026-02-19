import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import { getBlogPost, getBlogSlugs } from '@/lib/blog';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-800 hover:text-primary-900 mb-8"
          >
            ← Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 font-medium">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>{post.author}</span>
            </div>
            <h1 className="mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="relative h-96 mb-12 bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="mb-6 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Need Security or Technology Solutions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our team to discuss your requirements
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </>
  );
}
