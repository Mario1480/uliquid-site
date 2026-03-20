import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SurfacePanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "default" | "accent" | "muted";
};

export function SurfacePanel({
  children,
  className,
  tone = "default",
  ...props
}: SurfacePanelProps) {
  const toneClasses = {
    default:
      "bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.96),hsl(var(--surface-1)/0.9))]",
    accent:
      "bg-[radial-gradient(circle_at_top_left,hsl(var(--brand-secondary)/0.18),transparent_26%),linear-gradient(180deg,hsl(var(--surface-2)/0.98),hsl(var(--surface-1)/0.92))]",
    muted:
      "bg-[linear-gradient(180deg,hsl(var(--surface-1)/0.92),hsl(var(--bg-alt)/0.84))]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-border/90 p-6 shadow-panel backdrop-blur-xl sm:p-8",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </div>
  );
}
