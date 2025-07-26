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