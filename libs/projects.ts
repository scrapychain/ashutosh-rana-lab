export type ProjectStatus = 'Concept' | 'In Progress' | 'Shipped'

export type Project = {
  slug: string
  title: string
  description: string
  repo?: string
  tags?: string[]
  status: ProjectStatus
  progress?: number // 0..100
}

const PROJECTS: readonly Project[] = [
  {
    slug: 'tee',
    title: 'TEE (Term Extraction Engine)',
    description:
      'Hybrid NLP pipeline to extract domain‑specific terms from large technical docs and research PDFs.',
    repo: 'https://github.com/scrapychain/tee',
    tags: ['ai', 'nlp', 'pipelines'],
    status: 'In Progress',
    progress: 10,
  },
  {
    slug: 'proofofterms',
    title: 'ProofOfTerms',
    description:
      'Web3 glossary powered by TEE‑extracted terms with provenance and versioning.',
    repo: 'https://github.com/scrapychain/proof-of-terms',
    tags: ['web3', 'react'],
    status: 'Concept',
    progress: 0,
  },

] as const

// ---------- Public helpers (import these in pages/components) ----------
export function getAllProjects(): Project[] {
  return PROJECTS.slice()
}

export function getFeaturedProjects(limit = 3): Project[] {
  return PROJECTS.slice(0, Math.max(0, limit))
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
