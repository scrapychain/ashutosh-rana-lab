// components/projects/ProjectRow.tsx
import clsx from 'clsx';

export type Status = 'Concept' | 'In Progress' | 'Shipped';

export function ProjectRow({
  name,
  status,
  progress = 0,
}: { name: string; status: Status; progress?: number }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">{name}</h3>
        <StatusBadge status={status} />
      </div>
      <div className="mt-3 h-2 w-full rounded bg-gray-800">
        <div
          className="h-2 rounded bg-gray-600"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-700/60 px-2 py-0.5 text-xs text-gray-300">
      <span
        className={clsx('mr-2 inline-block h-2.5 w-2.5 rounded-full', {
          'bg-gray-400': status === 'Concept',
          'bg-blue-400': status === 'In Progress',
          'bg-green-400': status === 'Shipped',
        })}
      />
      {status}
    </span>
  );
}

// Provide a default export so `import ProjectRow from ...` works.
export default ProjectRow;
