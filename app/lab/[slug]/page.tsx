import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllSlugs,
  getPostBySlug,
  getAdjacentPosts,
  PostData,
} from '@/libs/posts';

// Build-time static params for each entry
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic SEO per entry
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPostBySlug(params.slug);
    const title = post.title;
    const description = post.description ?? post.title;
    const url = `http://localhost:3000//lab/${params.slug}`;

    const images = post.ogImage ? [{ url: post.ogImage }] : [];

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title,
        description,
        images, // empty array if none
      },
      twitter: {
        card: images.length ? 'summary_large_image' : 'summary',
        title,
        description,
        images: images.length ? images.map((i) => i.url) : undefined,
      },
    };
  } catch {
    // If the post fails to load, let Next render a simple default
    return { title: 'Lab Entry', description: 'Lab entry not found.' };
  }
}

export default async function LabEntryPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: PostData;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    return notFound();
  }

  const { previous, next } = await getAdjacentPosts(params.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <article className="prose prose-invert">
        {/* Entry Header */}
        <header className="not-prose mb-6">
          <h1 className="text-3xl font-semibold text-white">{post.title}</h1>

          <div className="mt-2 text-sm text-gray-400 flex flex-wrap items-center gap-x-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">•</span>
            <span>{post.readTime} min read</span>
            <span aria-hidden="true">•</span>
            <span>By {post.author}</span>
          </div>

          {post.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded border border-gray-700/70 bg-surface px-2 py-0.5 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        {/* Body */}
        <div dangerouslySetInnerHTML={{ __html: post.contentHTML }} />
      </article>

      {/* Adjacent navigation */}
      <nav className="mt-10 flex justify-between text-sm text-gray-300">
        {previous ? (
          <Link
            href={`/lab/${previous.slug}`}
            className="hover:text-white transition-colors"
          >
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/lab/${next.slug}`}
            className="hover:text-white transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}

// Utils
function formatDate(iso: string) {
  const d = new Date(iso);
  // Use a consistent, readable format (you can localize if needed)
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

function buildArticleJsonLd({
  url,
  title,
  description,
  datePublished,
  author,
  wordCount,
  tags,
  ogImage,
}: {
  url: string;
  title: string;
  description: string;
  datePublished: string;
  author: string;
  wordCount: number;
  tags: string[];
  ogImage?: string;
}) {
  const payload: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: url,
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Person', name: author },
    wordCount,
    keywords: tags.join(', '),
    url,
  };
  if (ogImage) {
    payload.image = [ogImage];
  }
  return JSON.stringify(payload);
}