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
    <footer className="px-6 pb-8 pt-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-border/80 bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.9),hsl(var(--surface-1)/0.82))] shadow-panel">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_2fr] lg:px-10 lg:py-12">
          <div className="space-y-4">
            <div>
              <p className="font-display text-2xl font-semibold text-text">uLiquid</p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-accent-cyan">
                Trading infrastructure, productized
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted">
            Specialized crypto products for liquidity operations and vault-based trading, spanning Market
            Maker and uLiquid Desk.
            </p>
            {isDeskPage ? (
              <p className="max-w-md text-sm leading-7 text-muted">
                Desk pages keep vaults, bots, AI workflows, and how-it-works links close by while preserving
                the shared brand surface below.
              </p>
            ) : null}
            <div className="text-sm text-muted">
              Contact: <span className="font-semibold text-text">hello@uliquid.vip</span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-muted">
              <a
                href="https://x.com/uliquidvip?s=21"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-white/[0.03] px-3 py-2 hover:border-border-strong hover:text-text"
              >
                X / Twitter
              </a>
              <a
                href="https://t.me/uliquid_support"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-white/[0.03] px-3 py-2 hover:border-border-strong hover:text-text"
              >
                Telegram
              </a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text">{title}</p>
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
        <div className="border-t border-border/60 px-6 py-4 text-center text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} uLiquid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
