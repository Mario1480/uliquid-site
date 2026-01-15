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
          <div key={item.question} className="rounded-2xl border border-border bg-surface/70">
            <button
              id={buttonId}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-text"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "text-xl text-muted transition",
                  isOpen ? "rotate-45 text-text" : "rotate-0"
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
                "overflow-hidden px-5 text-sm text-muted transition-all",
                isOpen ? "max-h-60 pb-4" : "max-h-0"
              )}
            >
              <p className="pt-2">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
