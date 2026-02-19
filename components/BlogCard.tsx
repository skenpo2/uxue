import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
    >
      <div className="relative h-64 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full">
            {post.category}
          </span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
        <h3 className="mb-3 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
        <span className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
          Read more
          <svg
            className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
