import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  type = "button",
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles = {
    primary:
      "border-transparent bg-gradient-to-r from-accent-cyan to-accent-blue text-slate-950 shadow-glow hover:-translate-y-0.5 hover:brightness-110",
    secondary:
      "border-border bg-white/[0.03] text-text shadow-panel hover:-translate-y-0.5 hover:border-border-strong hover:bg-white/[0.06]",
    ghost:
      "border-transparent bg-transparent text-muted hover:border-border/60 hover:bg-white/[0.03] hover:text-text",
  };

  if (href) {
    return (
      <Link href={href} className={cn(base, styles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}
