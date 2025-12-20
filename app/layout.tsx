import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import KakaoScript from "@/components/KakaoScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Noto_Serif_KR } from "next/font/google";

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  referrer: 'same-origin', // recommended for security, but for Kakao 4019 debugging we need at least origin. 
  // actually Kakao needs domain. 'strict-origin-when-cross-origin' is default in many browsers but let's be explicit
  other: {
    "referrer": "strict-origin-when-cross-origin"
  },
  title: "서상민 ♥ 백종록 결혼합니다",
  description: "2026년 4월 5일 11시 30분, 라비두스",
  openGraph: {
    title: "서상민 ♥ 백종록 결혼합니다",
    description: "2026년 4월 5일 11시 30분, 라비두스",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Wedding Invitation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifKr.variable} font-mapo antialiased`}
      >
        <div className="w-full max-w-[430px] mx-auto min-h-screen shadow-2xl relative overflow-hidden">
          {/* Main Card Background */}
          {children}
          <KakaoScript />
        </div>
      </body>
    </html >
  );
}
