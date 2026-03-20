import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { HeaderNav } from "@/components/HeaderNav";
import { brandDescription, brandName } from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: brandName,
  description: brandDescription,
  metadataBase: new URL("https://uliquid.vip"),
  openGraph: {
    title: brandName,
    description: brandDescription,
    url: "https://uliquid.vip",
    type: "website",
    images: ["/logo.png"],
    siteName: brandName,
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
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-text antialiased`}
      >
        <HeaderNav />
        <main className="relative min-h-[60vh] overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
