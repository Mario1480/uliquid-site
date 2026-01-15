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
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles = {
    primary:
      "bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple text-slate-950 shadow-md hover:shadow-glow",
    secondary:
      "border border-border bg-surface/60 text-text hover:border-accent-blue",
    ghost: "text-text hover:text-white",
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
