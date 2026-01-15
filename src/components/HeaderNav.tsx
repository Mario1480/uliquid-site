import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="text-lg font-semibold text-text">
          uLiquid
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/app" variant="secondary">
            Login
          </Button>
          <Button href="/app">Start Free Trial</Button>
        </div>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4 border-t border-border/40 px-6 py-3 text-xs text-muted md:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-text">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
