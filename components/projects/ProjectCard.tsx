import Link from 'next/link'
import type { Project } from '@/libs/projects'

type CardProps = { project: Project; className?: string }

export default function ProjectCard({ project, className = '' }: CardProps) {
  const progress = clamp(project.progress ?? 0, 0, 100)

  return (
    <article
      className={`card rounded-lg p-4 hover:bg-surface/90 focus-within:ring-1 focus-within:ring-gray-600 ${className}`}
      aria-labelledby={`project-${project.slug}-title`}
    >
      {/* Title + status */}
      <header className="flex items-start justify-between gap-3">
        <h3 id={`project-${project.slug}-title`} className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </header>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-300">{project.description}</p>

      {/* Tags */}
      {project.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="text-xs border border-gray-700/70 rounded px-2 py-0.5 text-gray-300">
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Footer: repo + progress */}
      <footer className="mt-4 flex items-center justify-between">
        {project.repo ? (
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 underline-offset-2 hover:text-white hover:underline transition-colors"
            aria-label={`Open ${project.title} on GitHub`}
          >
            View on GitHub →
          </Link>
        ) : (
          <span className="text-sm text-gray-500">Private / No repo</span>
        )}

        {/* Progress bar (hidden on very small viewports) */}
        <div className="ml-4 hidden sm:block w-40 h-2 rounded bg-gray-800" aria-hidden>
          <div className="h-2 rounded bg-gray-600" style={{ width: `${progress}%` }} />
        </div>
      </footer>
    </article>
  )
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const dot =
    status === 'Shipped' ? 'bg-green-400' : status === 'In Progress' ? 'bg-blue-400' : 'bg-gray-400'
  return (
    <span className="inline-flex items-center rounded-full border border-gray-700/60 px-2 py-0.5 text-xs text-gray-300">
      <span className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${dot}`} />
      {status}
    </span>
  )
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}