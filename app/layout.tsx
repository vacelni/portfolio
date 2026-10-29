import type { Metadata } from 'next'
import { Atkinson_Hyperlegible_Next, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  variable: '--font-atkinson',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vacelnino Faiz Fadeli, software engineer',
    template: '%s | Vacelnino Faiz Fadeli',
  },
  description:
    'Full-stack and computer-vision engineer in Indonesia. Builds software that small businesses run on: an offline-first point-of-sale app and a training and e-invoicing platform, both in production.',
  openGraph: { type: 'website', locale: 'en_US' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${atkinson.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  )
}
