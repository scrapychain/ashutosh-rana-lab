import Link from 'next/link'
import { getLatestPosts } from '@/libs/posts'
import LabEntryCard from '@/components/lab/LabEntryCard'
import Hero from '@/components/ui/Hero'
import Section from '@/components/ui/Section'
import SocialRow from '@/components/ui/SocialRow'
import ProjectRow from '@/components/projects/ProjectRow';
import { getFeaturedProjects } from '@/libs/projects';


export const metadata = {
  title: 'Ashutosh Lab — Builder\'s Journal',
  description:
    'A dark, minimal lab journal exploring AI × Blockchain × Education. Latest experiments, notes, and projects.',
}

export default async function HomePage() {
  const latest = await getLatestPosts(3)

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Hero */}
      <Hero
        title="Hi, I’m Ashutosh"
        paragraphs={[
          'I work as a software engineer fulltime.',
          'Right now, I’m focused on building a Term Extraction Engine (TEE) to automate knowledge extraction.',
        ]}
        cta={{ href: '/lab', label: 'LAB ENTRIES' }}
      />

      <div className="mt-6 flex justify-center">
        <SocialRow
          links={{
            twitter: 'https://x.com/scrapychain',
            github: 'https://github.com/scrapychain',
            linkedin: 'https://www.linkedin.com/in/ashutosh-rana-b09428167/',
          }}
        />
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-800" />

      {/* Lab Journal Preview */}
      
<div className="full-bleed">
  <div className="full-bleed-inner  max-w-7xl mx-auto px-4 py-12">
    <Section title="Lab Journal" subtitle="Latest notes and experiments">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <li key={post.slug} className="min-w-0">
            <LabEntryCard post={post} showDescription={false} />
          </li>
        ))}
      </ul>
    </Section>
  </div>
</div>


      {/* Divider */}
      <hr className="full-bleed my-8 border-gray-800" />

      {/* Projects */}
  <Section title="Projects">
  <div className="space-y-4">
    {getFeaturedProjects(3).map((p) => (
      <ProjectRow key={p.slug} project={p} />
    ))}
  </div>

  <div className="mt-6">
    <Link href="/projects" className="text-sm text-gray-300 hover:text-white underline">
      View all projects →
    </Link>
  </div>
</Section>


    </main>
  )
}
