import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  children: ReactNode;
  tone?: "default" | "muted";
};

export function Section({
  className,
  children,
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative px-6 py-16 sm:px-10 sm:py-20 lg:px-16",
        tone === "muted" ? "bg-white/[0.01]" : "",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
