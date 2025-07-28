import SocialRow from '@/components/ui/SocialRow'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800/80">
      <div className="mx-auto max-w-3xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Ashutosh Rana</p>
        <SocialRow
          links={{
            twitter: 'https://x.com/your-handle',
            github: 'https://github.com/your-handle',
            linkedin: 'https://www.linkedin.com/in/your-handle/',
          }}
        />
      </div>
    </footer>
  )
}