import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-border/90 bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.96),hsl(var(--surface-1)/0.9))] p-6 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-border-strong/60",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </div>
  );
}
