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

function toISO(date: string): string{
    return new Date(date).toISOString();
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