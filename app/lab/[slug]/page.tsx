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

