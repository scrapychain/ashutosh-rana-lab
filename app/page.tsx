import Link from 'next/link'
import { getLatestPosts } from '@/libs/posts'
import LabEntryCard from '@/components/lab/LabEntryCard'
import Hero from '@/components/ui/Hero'
import Section from '@/components/ui/Section'
import SocialRow from '@/components/ui/SocialRow'
import  ProjectRow from '@/components/projects/ProjectRow'

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
          'Lorem ipsum dolor sit amet, consectetur ridianit eiusmod ligula eget aiiquet.',
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
      <Section title="Lab Journal" subtitle="Latest notes and experiments">
        {latest.length ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <li key={post.slug} className="min-w-0">
                <LabEntryCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No entries yet — coming soon.</p>
        )}
      </Section>

      {/* Divider */}
      <hr className="my-8 border-gray-800" />

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-4">
          <ProjectRow name="TEE" status="In Progress" progress={68} />
          <ProjectRow name="ProofOfTerms" status="Concept" progress={24} />
          <ProjectRow name="ScrapyChain" status="Shipped" progress={100} />
        </div>
      </Section>

      {/* Divider */}
      <hr className="my-8 border-gray-800" />

      {/* Contact (minimal per wireframe) */}
      <Section title="Contact">
        <form className="grid gap-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="col-span-1 rounded border border-gray-700 bg-surface px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600" />

          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="col-span-1 rounded border border-gray-700 bg-surface px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600" />

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" rows={4} className="sm:col-span-2 rounded border border-gray-700 bg-surface px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600" />

          <div className="sm:col-span-2">
            <button type="submit" className="btn-outline">Send</button>
          </div>
        </form>
      </Section>
    </main>
  )
}
