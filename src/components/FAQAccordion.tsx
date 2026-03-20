"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-[26px] border bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.94),hsl(var(--surface-1)/0.88))] shadow-panel",
              isOpen ? "border-border-strong/50" : "border-border/90"
            )}
          >
            <button
              id={buttonId}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-text sm:px-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/[0.04] text-xl text-muted transition",
                  isOpen ? "rotate-45 border-border-strong/60 text-text" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "overflow-hidden px-5 text-sm text-muted transition-all sm:px-6",
                isOpen ? "max-h-60 pb-5" : "max-h-0"
              )}
            >
              <p className="pt-1 leading-7">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
