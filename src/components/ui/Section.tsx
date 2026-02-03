import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  children: ReactNode;
};

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("px-6 py-16 sm:px-10 lg:px-16", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
