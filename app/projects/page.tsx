// app/projects/page.tsx
import ProjectRow from '@/components/projects/ProjectRow';
import { getAllProjects } from '@/libs/projects';

export const metadata = {
  title: 'Projects - Ashutosh Rana Lab',
  description: 'All personal and public projects: TEE, ProofOfTerms, ScrapyChain and more.',
};

export default function ProjectsPage() {
  const list = getAllProjects();

  return (
    <main className="py-10">
      <h1 className="text-3xl font-semibold text-white mb-6">Projects</h1>
      <p className="text-gray-400 mb-6">
        A running list of projects some shipped, some in progress, some just ideas.
      </p>

      <div className="space-y-4">
        {list.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
