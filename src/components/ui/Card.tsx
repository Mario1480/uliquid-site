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
        "rounded-2xl border border-border bg-surface/70 p-6 shadow-[0_0_18px_rgba(20,129,192,0.35)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
