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

const siteUrl = 'https://mdl-welcome-site.vercel.app'; // TODO: Update with actual production URL

export const metadata: Metadata = {
  title: {
    default: 'MDL新入生向け紹介ページ | メディアデザインラボ',
    template: '%s | MDL',
  },
  description: '茨城高専の学生団体MDL（メディアデザインラボ）の新入生向け紹介ページです。ものづくりで未来を創造する学生団体として、Web開発、ハードウェア開発、チーム開発など幅広い活動を行っています。',
  keywords: [
    'MDL',
    'メディアデザインラボ',
    '茨城高専',
    '茨城工業高等専門学校',
    '学生団体',
    'ものづくり',
    'Web開発',
    'ハードウェア開発',
    '新入生',
    '新入生歓迎',
    'DCON',
    'プログラミング',
    '技術サークル',
  ],
  authors: [
    { name: 'MDL (Media Design Lab)' },
  ],
  creator: 'MDL',
  publisher: 'MDL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'MDL新入生向け紹介ページ',
    title: 'MDL新入生向け紹介ページ | メディアデザインラボ',
    description: '茨城高専の学生団体MDL（メディアデザインラボ）の新入生向け紹介ページです。ものづくりで未来を創造する学生団体として、Web開発、ハードウェア開発、チーム開発など幅広い活動を行っています。',
    images: [
      {
        url: '/mdl-logo.png',
        width: 2228,
        height: 628,
        alt: 'MDLロゴ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDL新入生向け紹介ページ | メディアデザインラボ',
    description: '茨城高専の学生団体MDL（メディアデザインラボ）の新入生向け紹介ページです。ものづくりで未来を創造する学生団体。',
    images: ['/mdl-logo.png'],
  },
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
  verification: {
    // TODO: Add Google Search Console verification code if available
    // google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}