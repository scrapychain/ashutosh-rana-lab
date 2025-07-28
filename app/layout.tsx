import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Container from '@/components/ui/Container'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Ashutosh Lab',
  description:
    'A builder’s lab journal exploring AI × Blockchain × Education — experiments, notes, and projects.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-background text-primary antialiased">
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )}