import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  className?: string;
  children: ReactNode;
};

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
