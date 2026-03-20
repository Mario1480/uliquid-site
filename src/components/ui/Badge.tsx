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
        "inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-cyan shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}
