export default function TagPill({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex items-center rounded-md
        border border-gray-700/70 bg-gray-800/40
        px-2 py-0.5 text-[11px] leading-5 text-gray-300
      "
    >
      {label}
    </span>
  );
}
