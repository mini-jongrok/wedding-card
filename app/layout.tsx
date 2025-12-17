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

import { Noto_Serif_KR } from "next/font/google";

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "서상민 & 백종록 결혼합니다",
  description: "2026년 4월 5일, 결혼식에 초대합니다.",
  openGraph: {
    title: "서상민 & 백종록 결혼합니다",
    description: "2026년 4월 5일, 결혼식에 초대합니다.",
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
        {children}
      </body>
    </html>
  );
}
