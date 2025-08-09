import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import gfm from 'remark-gfm';
import { cache } from 'react';

const POSTS_DIR = path.join(process.cwd(), 'content/lab');
const IS_PROD = process.env.NODE_ENV === 'production';
const DEFAULT_AUTHOR = 'Ashutosh Rana';

// creating types
export type PostMeta ={
    slug: string;
    title: string;
    date: string;
    description?: string;
    author: string;
    tags?: string[];
    draft? :boolean;
    ogImage?: string;
    readTime: number;
    wordCount: number;
}

export type PostData = PostMeta & {
    contentHTML: string;
}

// Helper functions


function normalizeFrontmatterDate(date: string): string {
  // If it's already YYYY-MM-DD, keep it verbatim (no timezone math).
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;

  // Otherwise, parse and collapse to YYYY-MM-DD to avoid TZ shifts.
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid date: ${date}`);
  }
  return d.toISOString().slice(0, 10); // keep only the date part
}

function computeWordCount(content: string): number {
    const text = content.trim();
    if (!text) return 0;
    return content.split(/\s+/).length;
}

function computeReadTime(wordCount: number, fallback?: unknown): number {
  // Prefer explicit frontmatter readTime if valid number; otherwise compute @ 200 wpm.
  const explicit =
    typeof fallback === 'number'
      ? fallback
      : typeof fallback === 'string' && fallback.trim() !== ''
      ? Number(fallback)
      : NaN;

  const fromFM = Number.isFinite(explicit)
    ? Math.max(1, Math.round(Number(explicit)))
    : NaN;

  if (Number.isFinite(fromFM)) return fromFM as number;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function normalizeTags(tags: unknown): string[] | undefined {
  if (!Array.isArray(tags)) return undefined;
  const t = tags
    .filter((x): x is string => typeof x === 'string')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.toLowerCase());
  return t.length ? Array.from(new Set(t)) : undefined;
}

// -------------------------
// Core loader (cached)
// -------------------------
type Loaded = { meta: PostMeta; content: string };

const loadAll = cache(async (): Promise<Loaded[]> => {
  const files = await fs.readdir(POSTS_DIR);
  const mdFiles = files.filter((f) => f.endsWith('.md'));

  const items = await Promise.all(
    mdFiles.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = await fs.readFile(path.join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(raw);

      // Required fields
      const title = typeof data.title === 'string' ? data.title.trim() : '';
      const date = typeof data.date === 'string' ? data.date : '';
      if (!title) throw new Error(`Missing/invalid "title" in ${slug}`);
      if (!date || Number.isNaN(Date.parse(date))) {
        throw new Error(`Missing/invalid "date" in ${slug}`);
      }

      // Optional fields + normalization
      const description =
        typeof data.description === 'string' ? data.description.trim() : undefined;
      const author =
        typeof data.author === 'string' && data.author.trim()
          ? data.author.trim()
          : DEFAULT_AUTHOR;
      const tags = Array.isArray(data.tags) ? normalizeTags(data.tags) : undefined;
      const draft = typeof data.draft === 'boolean' ? data.draft : false;
     const ogImage =
  typeof data.ogImage === 'string' && data.ogImage?.trim()
    ? data.ogImage.trim()
    : undefined;
      // Computed fields
      const wordCount = computeWordCount(content);
      const readTime = computeReadTime(
  wordCount,
  typeof data.readTime === 'string' || typeof data.readTime === 'number'
    ? data.readTime
    : undefined
);


      const meta: PostMeta = {
        slug,
        title,
        date: normalizeFrontmatterDate(date),
        description,
        author,
        tags,
        draft,
        ogImage,     // optional
        readTime,
        wordCount,
      };

      return { meta, content };
    })
  );

  return items
    .filter(({ meta }) => (IS_PROD ? !meta.draft : true))
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
});


/** All post metadata, newest → oldest */
export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const items = await loadAll();
  return items.map((x) => x.meta);
}

/** Single post by slug: HTML + metadata */
export async function getPostBySlug(slug: string): Promise<PostData> {
  const items = await loadAll();
  const found = items.find((x) => x.meta.slug === slug);
  if (!found) throw new Error(`Post not found: ${slug}`);
  if (IS_PROD && found.meta.draft) throw new Error('Post not found');

  const processed = await remark().use(gfm).use(remarkHtml).process(found.content);
  const contentHTML = processed.toString();
  return { ...found.meta, contentHTML };
}

/** Previous / Next neighbors relative to a slug */
export async function getAdjacentPosts(slug: string): Promise<{
  previous: PostMeta | null;
  next: PostMeta | null;
}> {
  const metas = await getAllPostsMeta();
  const i = metas.findIndex((p) => p.slug === slug);
  return {
    previous: i < metas.length - 1 ? metas[i + 1] : null,
    next: i > 0 ? metas[i - 1] : null,
  };
}

/** All slugs for static generation */
export async function getAllSlugs(): Promise<string[]> {
  const metas = await getAllPostsMeta();
  return metas.map((m) => m.slug);
}

/** Latest N posts (default 3) for previews */
export async function getLatestPosts(limit = 3): Promise<PostMeta[]> {
  const metas = await getAllPostsMeta();
  return metas.slice(0, Math.max(0, limit));
}

/** Filter posts by tag */
export async function getPostsByTag(tag: string): Promise<PostMeta[]> {
  const metas = await getAllPostsMeta();
  return metas.filter((m) => m.tags?.includes(tag.toLowerCase()));
}

/** Unique sorted tag list */
export async function getAllTags(): Promise<string[]> {
  const metas = await getAllPostsMeta();
  const set = new Set<string>();
  metas.forEach((m) => m.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
