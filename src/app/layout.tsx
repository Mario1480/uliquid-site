import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { HeaderNav } from "@/components/HeaderNav";
import { brandDescription, brandName, defaultOgImage, siteUrl } from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
export const metadata: Metadata = {
  title: brandName,
  description: brandDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: brandName,
    description: brandDescription,
    url: siteUrl,
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "uLiquid Desk and Market Maker product preview",
      },
    ],
    siteName: brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: brandName,
    description: brandDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-text antialiased`}
      >
        <HeaderNav />
        <main className="relative min-h-[60vh] overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
