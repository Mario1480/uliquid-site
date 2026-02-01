"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/exchanges", label: "Exchanges" },
  { href: "/security", label: "Security" },
  { href: "/docs", label: "Docs" },
  { href: "/company", label: "Company" },
];

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-text">
          <Image
            src="/logo.png"
            alt="uLiquid logo"
            width={64}
            height={64}
            className="h-15 w-15 drop-shadow-[0_0_18px_rgba(20,129,192,0.35)]"
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
          <Button href="https://license-server.uliquid.vip/" variant="secondary">
            Go to License Manager
          </Button>
          <Button href="https://license-server.uliquid.vip/">Buy License</Button>
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
            <Button href="https://license-server.uliquid.vip/" variant="secondary">
              Go to License Manager
            </Button>
            <Button href="https://license-server.uliquid.vip/">Buy License</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
