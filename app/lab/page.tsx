// app/lab/page.tsx
import { getAllPostsMeta } from '@/libs/posts';
import LabEntryCard from '@/components/lab/LabEntryCard';

export const dynamic = 'force-static'; // static list by default

export const metadata = {
  title: 'Lab Journal',
  description:
    'A running log of experiments, notes, and builds exploring AI × Blockchain × Education.',
};

export default async function LabPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-white mb-6">Lab Journal</h1>

      <section className="grid gap-4">
        {posts.map((post) => (
          <LabEntryCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
