"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const defaultFooterLinks = {
  Products: [
    { label: "Desk Overview", href: "/desk" },
    { label: "Desk Features", href: "/desk/features" },
    { label: "Market Maker", href: "/market-maker" },
    { label: "Market Maker Pricing", href: "/market-maker/pricing" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Contact", href: "/company#contact" },
    { label: "Careers", href: "/company" },
  ],
  Desk: [
    { label: "Desk FAQ", href: "/desk/faq" },
    { label: "Hyperliquid Vaults", href: "/desk/vaults" },
    { label: "Bots & Automation", href: "/desk/bots-automation" },
    { label: "AI Workflows", href: "/desk/ai-workflows" },
    { label: "How It Works", href: "/desk/how-it-works" },
  ],
  Resources: [
    { label: "Market Maker Docs", href: "/market-maker/docs" },
    { label: "Market Maker Exchanges", href: "/market-maker/exchanges" },
    { label: "Blog", href: "/blog" },
    { label: "Crypto Market Maker", href: "/crypto-market-maker" },
    { label: "License Manager", href: "https://license-server.uliquid.vip/" },
    { label: "Security", href: "/market-maker/security" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

const deskFooterLinks = {
  Products: [
    { label: "Desk Overview", href: "/desk" },
    { label: "Desk Features", href: "/desk/features" },
    { label: "Market Maker", href: "/market-maker" },
    { label: "Market Maker Pricing", href: "/market-maker/pricing" },
  ],
  Desk: [
    { label: "Desk FAQ", href: "/desk/faq" },
    { label: "Hyperliquid Vaults", href: "/desk/vaults" },
    { label: "Bots & Automation", href: "/desk/bots-automation" },
    { label: "AI Workflows", href: "/desk/ai-workflows" },
    { label: "How It Works", href: "/desk/how-it-works" },
  ],
  Resources: [
    { label: "Desk Overview", href: "/desk" },
    { label: "Desk Features", href: "/desk/features" },
    { label: "Blog", href: "/blog" },
    { label: "License Manager", href: "https://license-server.uliquid.vip/" },
    { label: "Market Maker Docs", href: "/market-maker/docs" },
    { label: "Security", href: "/market-maker/security" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Contact", href: "/company#contact" },
    { label: "Careers", href: "/company" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  const pathname = usePathname() || "/";
  const isDeskPage = pathname.startsWith("/desk");
  const footerLinks = isDeskPage ? deskFooterLinks : defaultFooterLinks;

  return (
    <footer className="border-t border-border/70 bg-surface/50">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_2fr] lg:px-16">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-text">uLiquid</p>
          <p className="text-sm text-muted">
            Specialized crypto products for liquidity operations and vault-based trading, spanning Market
            Maker and uLiquid Desk.
          </p>
          {isDeskPage ? (
            <p className="text-sm text-muted">
              Desk pages keep vaults, bots, AI workflows, and how-it-works links close by, while preserving
              shared brand resources below.
            </p>
          ) : null}
          <div className="text-sm text-muted">
            Contact: <span className="text-text">hello@uliquid.vip</span>
          </div>
          <div className="flex gap-3 text-xs text-muted">
            <a
              href="https://x.com/uliquidvip?s=21"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-3 py-1 hover:text-text"
            >
              X / Twitter
            </a>
            <a
              href="https://t.me/uliquid_support"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-3 py-1 hover:text-text"
            >
              Telegram
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-3 text-sm font-semibold text-text">{title}</p>
              <ul className="space-y-2 text-sm text-muted">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} uLiquid. All rights reserved.
      </div>
    </footer>
  );
}
