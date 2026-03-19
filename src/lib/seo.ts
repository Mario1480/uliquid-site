import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uliquid.vip";

export const brandName = "uLiquid";
export const brandDescription =
  "uLiquid builds specialized crypto products for liquidity operations and vault-based trading, including Market Maker for professional liquidity operations and Desk for user-friendly Hyperliquid vault access.";

export const marketMakerName = "uLiquid Market Maker";
export const marketMakerDescription =
  "Managed VPS market-making suite with volume execution, CEX and DEX price intelligence, AI advisory, risk controls, and license-based feature gates.";

export const deskName = "uLiquid Desk";
export const deskDescription =
  "The vault layer for Hyperliquid. A user-friendly platform for accessing vault-based strategies, automation, allocation, and performance visibility.";

type PageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  siteName?: string;
  openGraphTitle?: string;
};

export function createPageMetadata({
  title,
  description,
  canonical,
  siteName = brandName,
  openGraphTitle,
}: PageMetadataOptions): Metadata {
  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description,
      url: new URL(canonical, siteUrl).toString(),
      type: "website",
      siteName,
      images: ["/logo.png"],
    },
  };
}
