import Link from 'next/link'
const links = [
  { href: '/lab', label: 'Lab' },
  { href: '/projects', label: 'Projects' },
  { href: '/vision', label: 'Vision' },
]

export default function Header() {
  return (
    <header className="border-b border-gray-800/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white tracking-tight">ashutosh-rana-lab</Link>
        <ul className="flex items-center gap-5 text-sm text-gray-300">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="hover:text-white transition-colors" href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

