import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { MobileNav } from '@/components/mobile-nav'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohamed Wael - Software Developer',
  description:
    "Explore Mohamed Wael's software developer portfolio showcasing projects, skills, and expertise in web development.",
  verification: {
    google: 'N8NSxi7VrsgAzWOI5BgFhaAAv9BpHNVvTRGMYYpjXgc'
  },
  generator: 'Next.js',
  applicationName: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Mohamed Wael',
    'MoWael',
    'Software Developer',
    'Web Development',
    'Portfolio',
    'Projects',
    'Engineer',
    'Skills'
  ],
  authors: [{ name: 'Mohamed', url: 'https://github.com/MoWael11' }],
  creator: 'Mohamed Wael',
  publisher: 'Mohamed Wael',
  category: 'Personal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: '/icon/favicon.svg',
    shortcut: '/icon/favicon.svg',
    apple: '/icon/apple-touch-icon.png',
    other: {
      rel: 'android-chrome-192x192.png',
      url: '/icon/android-chrome-192x192.png'
    }
  },
  classification: 'Portfolio',
  openGraph: {
    images: {
      url: '/images/main.webp',
      type: 'image/webp'
    }
  },
  twitter: {
    title: 'Mohamed Wael- Software Developer',
    description:
      "Hi! I'm Mohamed, a passionate developer with expertise in web development. Let's build something amazing together!",
    images: {
      url: '/images/main.png',
      type: 'image/webp'
    },
    creator: '@mowael11',
    card: 'summary_large_image'
  },
  metadataBase: new URL('https://mowael.com')
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          storageKey="theme"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <MobileNav />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
