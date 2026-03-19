"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/market-maker", label: "Market Maker" },
  { href: "/desk", label: "Desk" },
  { href: "/market-maker/pricing", label: "Pricing" },
  { href: "/market-maker/docs", label: "Docs" },
  { href: "/company", label: "Company" },
];

function getHeaderCtas(pathname: string) {
  if (pathname.startsWith("/desk")) {
    return {
      primaryLabel: "Request Access",
      primaryHref: "/desk#request-access",
      secondaryLabel: "Explore Vaults",
      secondaryHref: "/desk/vaults",
    };
  }

  if (
    pathname.startsWith("/market-maker") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/guides") ||
    pathname.startsWith("/use-cases") ||
    pathname === "/faq" ||
    pathname === "/crypto-market-maker" ||
    pathname === "/app"
  ) {
    return {
      primaryLabel: "Buy License",
      primaryHref: "https://license-server.uliquid.vip/",
      secondaryLabel: "Go to License Manager",
      secondaryHref: "https://license-server.uliquid.vip/",
    };
  }

  return {
    primaryLabel: "Explore Market Maker",
    primaryHref: "/market-maker",
    secondaryLabel: "Request Access",
    secondaryHref: "/desk#request-access",
  };
}

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/";
  const ctas = getHeaderCtas(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-text">
          <Image
            src="/logo.png"
            alt="uLiquid logo"
            width={64}
            height={64}
            className="h-14 w-14 drop-shadow-[0_0_18px_rgba(20,129,192,0.35)]"
          />
          <span>uLiquid</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href={ctas.secondaryHref} variant="secondary">
            {ctas.secondaryLabel}
          </Button>
          <Button href={ctas.primaryHref}>{ctas.primaryLabel}</Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-sm font-semibold text-text transition hover:border-accent-blue md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1.5">
            <span className="h-0.5 w-full bg-text" />
            <span className="h-0.5 w-full bg-text" />
            <span className="h-0.5 w-full bg-text" />
          </span>
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-border/40 bg-background/95 px-6 py-4 text-sm text-muted md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 hover:text-text"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={ctas.secondaryHref} variant="secondary">
              {ctas.secondaryLabel}
            </Button>
            <Button href={ctas.primaryHref}>{ctas.primaryLabel}</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
