import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  className?: string;
  children: ReactNode;
};

export function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("px-6 py-16 sm:px-10 lg:px-16", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
