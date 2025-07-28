import Link from 'next/link'

type Props = {
  title: string
  paragraphs: string[]
  cta?: { href: string; label: string }
}

export default function Hero({ title, paragraphs, cta }: Props) {
  return (
    <section className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{title}</h1>
      <div className="mt-6 space-y-4 text-gray-300">
        {paragraphs.map((p, i) => (
          <p key={i} className="mx-auto max-w-2xl leading-relaxed">{p}</p>
        ))}
      </div>
      {cta && (
        <div className="mt-8">
          <Link href={cta.href} className="btn-outline inline-block px-6 py-2">{cta.label}</Link>
        </div>
      )}
    </section>
  )
}
