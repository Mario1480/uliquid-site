import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uliquid.vip";

export const brandName = "uLiquid";
export const brandDescription =
  "uLiquid builds crypto trading software for Hyperliquid vaults, bot automation, AI-assisted workflows, and professional market-making operations.";

export const defaultOgImage = "/og/uliquid-og.jpg";

export const marketMakerName = "uLiquid Market Maker";
export const marketMakerDescription =
  "Managed VPS market-making suite with volume execution, CEX and DEX price intelligence, AI advisory, risk controls, and license-based feature gates.";

export const deskName = "uLiquid Desk";
export const deskDescription =
  "The Hyperliquid-first vault, bot and trading workflow layer. A user-friendly platform for vaults, bots, AI-assisted workflows, strategy discovery, automation, allocation, performance visibility, and connected CEX trading paths such as Bitget and MEXC where supported.";

type PageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  siteName?: string;
  openGraphTitle?: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  canonical,
  siteName = brandName,
  openGraphTitle,
  image = defaultOgImage,
}: PageMetadataOptions): Metadata {
  const url = new URL(canonical, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description,
      url,
      type: "website",
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} product preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle ?? title,
      description,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brandName,
  url: siteUrl,
  logo: new URL("/logo.png", siteUrl).toString(),
  description: brandDescription,
  sameAs: ["https://license-server.uliquid.vip/"],
};

export const deskSoftwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: deskName,
  applicationCategory: "FinancialApplication",
  operatingSystem: "Web",
  url: `${siteUrl}/desk`,
  image: new URL(defaultOgImage, siteUrl).toString(),
  description: deskDescription,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/LimitedAvailability",
    url: `${siteUrl}/desk#request-access`,
  },
};

export const marketMakerSoftwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: marketMakerName,
  applicationCategory: "FinancialTradingSoftware",
  operatingSystem: "Linux (Managed VPS)",
  url: `${siteUrl}/market-maker`,
  image: new URL(defaultOgImage, siteUrl).toString(),
  description: marketMakerDescription,
  offers: {
    "@type": "Offer",
    url: "https://license-server.uliquid.vip/",
  },
};

export function createFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
