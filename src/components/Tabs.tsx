"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type TabItem = {
  title: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
};

export function Tabs({ items }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const lastIndex = items.length - 1;
      let nextIndex = activeIndex;

      if (event.key === "ArrowRight") nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
      if (event.key === "ArrowLeft") nextIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = lastIndex;

      setActiveIndex(nextIndex);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product details"
        className="flex flex-wrap gap-2 rounded-full border border-border bg-surface/60 p-2"
        onKeyDown={onKeyDown}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <button
              key={item.title}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple text-slate-950"
                  : "text-muted hover:text-text"
              )}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const panelId = `${baseId}-panel-${index}`;
        const tabId = `${baseId}-tab-${index}`;

        return (
          <div
            key={item.title}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isActive}
            className="mt-6"
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
