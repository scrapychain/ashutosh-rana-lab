
import Link from 'next/link'

type Links = { twitter?: string; github?: string; linkedin?: string }
export default function SocialRow({ links }: { links: Links }) {
  const IconWrap = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition">
      {children}
    </span>
  )
  return (
    <div className="flex items-center gap-4">
      {links.twitter && (
        <Link aria-label="Twitter" href={links.twitter} target="_blank">
          <IconWrap>
            {/* X / Twitter icon */}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.49 11.24H16.28l-5.37-7.02-6.14 7.02H1.46l7.73-8.84L1 2.25h6.9l4.86 6.44 5.484-6.44Zm-1.158 19.5h1.833L7.01 3.873H5.048L17.086 21.75Z"/></svg>
          </IconWrap>
        </Link>
      )}
      {links.github && (
        <Link aria-label="GitHub" href={links.github} target="_blank">
          <IconWrap>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 .5A11.5 11.5 0 0 0 .5 12.16c0 5.16 3.35 9.53 7.98 11.07.58.12.8-.26.8-.58v-2.03c-3.24.72-3.93-1.39-3.93-1.39-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.82 2.74 1.29 3.41.98.1-.77.41-1.29.75-1.58-2.59-.3-5.31-1.34-5.31-5.98 0-1.32.46-2.4 1.21-3.25-.12-.3-.52-1.52.12-3.17 0 0 .98-.32 3.21 1.24a10.9 10.9 0 0 1 5.84 0c2.23-1.56 3.21-1.24 3.21-1.24.64 1.65.24 2.87.12 3.17.76.85 1.21 1.93 1.21 3.25 0 4.66-2.73 5.68-5.33 5.98.42.37.8 1.1.8 2.23v3.3c0 .32.22.7.8.58A11.53 11.53 0 0 0 23.5 12.16 11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
          </IconWrap>
        </Link>
      )}
      {links.linkedin && (
        <Link aria-label="LinkedIn" href={links.linkedin} target="_blank">
          <IconWrap>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.45-2.16 2.95v5.68H9.31V9h3.41v1.56h.05c.47-.89 1.63-1.83 3.35-1.83 3.59 0 4.25 2.36 4.25 5.42v6.3ZM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45Z"/></svg>
          </IconWrap>
        </Link>
      )}
    </div>
  )
}
