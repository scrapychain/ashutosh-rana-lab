import { ReactNode } from 'react'

type Props = { title: string; subtitle?: string; children: ReactNode }
export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
      <div className="mt-4">{children}</div>
    </section>
  )
}
