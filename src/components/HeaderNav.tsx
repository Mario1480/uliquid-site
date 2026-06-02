"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

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
    primaryLabel: "Explore Desk",
    primaryHref: "/desk",
    secondaryLabel: "Request Access",
    secondaryHref: "/desk#request-access",
  };
}

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/";
  const ctas = getHeaderCtas(pathname);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-border/80 bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.92),hsl(var(--surface-1)/0.82))] shadow-panel backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <Link href="/" className="flex min-w-0 items-center gap-3 text-lg font-semibold text-text">
              <Image
                src="/logo-128.png"
                alt="uLiquid logo"
                width={56}
                height={56}
                priority
                className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-glow"
              />
              <div className="min-w-0">
                <span className="block font-display text-xl">uLiquid</span>
                <span className="hidden text-xs uppercase tracking-[0.22em] text-muted sm:block">
                  Desk + Market Maker
                </span>
              </div>
            </Link>
            <nav className="hidden items-center gap-2 text-sm md:flex">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/#products"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-muted hover:bg-white/[0.04] hover:text-text",
                      isActive
                        ? "border border-border-strong/50 bg-white/[0.06] text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                        : "border border-transparent"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <Button href={ctas.secondaryHref} variant="ghost">
                {ctas.secondaryLabel}
              </Button>
              <Button href={ctas.primaryHref}>{ctas.primaryLabel}</Button>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/[0.03] px-3 py-2 text-sm font-semibold text-text transition hover:border-border-strong md:hidden"
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
            <div className="border-t border-border/60 px-4 py-4 text-sm text-muted md:hidden sm:px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-transparent px-3 py-3 hover:border-border hover:bg-white/[0.04] hover:text-text"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <Button href={ctas.secondaryHref} variant="ghost">
                  {ctas.secondaryLabel}
                </Button>
                <Button href={ctas.primaryHref}>{ctas.primaryLabel}</Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
