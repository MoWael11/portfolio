import { ModalProvider } from '@/components/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mohamed Wael',
    template: '%s | Mohamed Wael',
  },
  description: 'A passionate developer',
  generator: 'Next.js',
  applicationName: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Mohamed', 'Wael', 'MoWael', 'Portofolio', 'Skills', 'Dev', 'Developer', 'Software', 'Engineer'],
  authors: [{ name: 'Mohamed', url: 'https://github.com/MoWael11' }],
  creator: 'Mohamed Wael',
  publisher: 'Mohamed Wael',
  category: 'Personal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon/favicon.svg',
    shortcut: '/icon/favicon.svg',
    apple: '/icon/apple-touch-icon.png',
    other: {
      rel: 'android-chrome-192x192.png',
      url: '/icon/android-chrome-192x192.png',
    },
  },
  classification: 'Portfolio',
  openGraph: {
    images: {
      url: '/images/thumbnail.png',
    },
  },
  twitter: {
    title: 'Mohamed Wael',
    description: 'Passionate Developer',
    images: {
      url: '/images/thumbnail.png',
    },
    creator: '@mowael11',
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://mowael.com'),
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='google-site-verification' content='N8NSxi7VrsgAzWOI5BgFhaAAv9BpHNVvTRGMYYpjXgc' />
      </head>
      <body className={inter.className}>
        {children}
        <ModalProvider />
        <Toaster />
      </body>
    </html>
  )
}
