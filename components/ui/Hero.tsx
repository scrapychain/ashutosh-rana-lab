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
          <Link href={cta.href} className="inline-flex items-center justify-center
    rounded-xl border border-white/30
    px-7 py-3 text-[15px] font-semibold uppercase tracking-wide
    text-white/90 bg-transparent
    shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
    hover:text-white hover:border-white/50 hover:bg-white/5
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20
    transition">{cta.label}</Link>
        </div>
      )}
    </section>
  )
}
