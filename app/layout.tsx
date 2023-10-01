import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const roobert = localFont({
  src: [
    {
      path: '../public/fonts/roobert.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-roobert',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tomasferreras.dev'),
  title: {
    default: 'tomas ferreras',
    template: '%s | tomas ferreras',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Tomas Ferreras',
    description: 'Developer, writer, and creator.',
    url: 'https://tomasferreras.dev',
    siteName: 'Tomas Ferreras',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Tomas Ferreras',
    card: 'summary_large_image',
  },
  themeColor: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roobert.variable} font-roobert bg-black`}>
        {children}
      </body>
    </html>
  );
}
