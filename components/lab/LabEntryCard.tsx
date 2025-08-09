import Link from 'next/link';
import type { PostMeta } from '@/libs/posts';
import TagPill from './TagPill';

type Props = { post: PostMeta; showDescription?: boolean };

export default function LabEntryCard({ post, showDescription = true }: Props) {
  const formatted = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  timeZone: 'UTC',
}).format(new Date(`${post.date}T00:00:00Z`));

  return (
    <Link
      href={`/lab/${post.slug}`}
      aria-label={`Read: ${post.title}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded-lg"
    >
      <article
        className="
          card group rounded-lg p-4 
          border-gray-800 bg-surface/70
          hover:bg-surface/90 hover:border-gray-600
          transition-colors
        "
      >
        {/* Meta row */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <time dateTime={post.date}>{formatted}</time>
          {post.readTime ? <span>{post.readTime} min read</span> : null}
        </div>

        {/* Title */}
        <h3
          className="
            mt-2 text-[17px] font-semibold text-gray-100
            group-hover:text-white
          "
        >
          {post.title}
        </h3>

        {/* Optional description */}
        {showDescription && post.description ? (
          <p className="mt-2 text-sm text-gray-400 line-clamp-2">
            {post.description}
          </p>
        ) : null}

        {/* Tags */}
        {post.tags?.length ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t}>
                <TagPill label={t} />
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </Link>
  );
}
