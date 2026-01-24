import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { HeaderNav } from "@/components/HeaderNav";

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

export const metadata: Metadata = {
  title: {
    default: "uLiquid Market Maker",
    template: "%s | uLiquid Market Maker",
  },
  description:
    "uLiquid Market Maker is a managed crypto market-making system with volume execution, price follow, price support, and enterprise-grade security.",
  metadataBase: new URL("https://uliquid.vip"),
  openGraph: {
    title: "uLiquid Market Maker",
    description:
      "uLiquid Market Maker is a managed crypto market-making system with volume execution, price follow, price support, and enterprise-grade security.",
    url: "https://uliquid.vip",
    images: ["/og.png"],
    siteName: "uLiquid Market Maker",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-text antialiased`}
      >
        <HeaderNav />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
