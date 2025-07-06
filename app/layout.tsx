import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ZNews - Tin tức mới nhất',
  description: 'Cập nhật tin tức mới nhất từ Việt Nam và thế giới',
  keywords: ['tin tức', 'báo', 'vietnam', 'thời sự'],
  authors: [{ name: 'ZNews Team' }],
  creator: 'ZNews',
  publisher: 'ZNews',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://znews.vn'),
  openGraph: {
    type: 'website',
    siteName: 'ZNews',
    title: 'ZNews - Tin tức mới nhất',
    description: 'Cập nhật tin tức mới nhất từ Việt Nam và thế giới',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZNews - Tin tức mới nhất',
    description: 'Cập nhật tin tức mới nhất từ Việt Nam và thế giới',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
