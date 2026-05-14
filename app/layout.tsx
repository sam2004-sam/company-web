import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from '@/components/providers';
import { BackgroundParticles } from '@/components/background-particles';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jericho Joy | Faith Tech Joy - Innovative Electronics Solutions',
  description:
    'Empowering lives through innovative electronics in Robotics, IoT, Healthcare, Biomedical, and Agriculture. Affordable, custom solutions made with empathy. Made in India.',
  keywords: [
    'Jericho Joy',
    'Faith Tech Joy',
    'Electronics Innovation',
    'IoT Solutions',
    'Healthcare Electronics',
    'Robotics',
    'Biomedical Devices',
    'Agriculture Technology',
    'Made in India',
    'Affordable Electronics',
  ],
  authors: [{ name: 'Kokkiligadda Samebenezhar' }],
  creator: 'Jericho Joy OPC Pvt Ltd',
  openGraph: {
    title: 'Jericho Joy | Faith Tech Joy',
    description: 'Keep Faith in Us and Let Our Tech Make You Joy',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jericho Joy | Faith Tech Joy',
    description: 'Keep Faith in Us and Let Our Tech Make You Joy',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1628' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Providers>
          <BackgroundParticles />
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
