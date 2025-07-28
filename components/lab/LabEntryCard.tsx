// components/lab/LabEntryCard.tsx
import Link from 'next/link';
import type { PostMeta } from '@/libs/posts';

type Props = { post: PostMeta };

export default function LabEntryCard({ post }: Props) {
  const date = new Date(post.date);
  const formatted = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <article className="card">
      <header className="flex items-baseline justify-between gap-2">
        <time className="text-xs text-gray-400" dateTime={post.date}>
          {formatted}
        </time>
        <span className="text-xs text-gray-400">
          {post.readTime} min read
        </span>
      </header>

      <h2 className="mt-2 text-lg font-semibold">
        <Link href={`/lab/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      {post.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <li
              key={t}
              className="text-xs border border-gray-700/70 rounded px-2 py-0.5 text-gray-300"
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
