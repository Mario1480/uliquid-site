"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  exchange: string;
  email: string;
  notes: string;
};

export function RequestExchangeForm() {
  const [state, setState] = useState<FormState>({ exchange: "", email: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ exchange?: string; email?: string }>({});
  const fieldClass =
    "mt-2 w-full rounded-2xl border border-border bg-bg-alt/80 px-4 py-3 text-sm text-text outline-none transition focus:border-border-strong focus:bg-white/[0.04] focus:ring-2 focus:ring-accent-cyan/25";

  const handleChange = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { exchange?: string; email?: string } = {};

    if (!state.exchange.trim()) nextErrors.exchange = "Exchange name is required.";
    if (!emailRegex.test(state.email)) nextErrors.email = "Enter a valid email.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[30px] border border-border/90 bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.96),hsl(var(--surface-1)/0.9))] p-6 shadow-panel sm:p-8"
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Exchange Request</p>
        <h3 className="font-display text-2xl font-semibold text-text">Need another venue connected?</h3>
        <p className="text-sm leading-7 text-muted">
          Tell us which exchange you want to use and any context around trading requirements or timelines.
        </p>
      </div>
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="exchange-name">
          Exchange name
        </label>
        <input
          id="exchange-name"
          className={cn(
            fieldClass,
            errors.exchange ? "border-red-400" : ""
          )}
          value={state.exchange}
          onChange={handleChange("exchange")}
          required
        />
        {errors.exchange ? <p className="mt-2 text-xs text-red-300">{errors.exchange}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="exchange-email">
          Contact email
        </label>
        <input
          id="exchange-email"
          type="email"
          className={cn(
            fieldClass,
            errors.email ? "border-red-400" : ""
          )}
          value={state.email}
          onChange={handleChange("email")}
          required
        />
        {errors.email ? <p className="mt-2 text-xs text-red-300">{errors.email}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="exchange-notes">
          Notes (optional)
        </label>
        <textarea
          id="exchange-notes"
          className={fieldClass}
          rows={4}
          value={state.notes}
          onChange={handleChange("notes")}
        />
      </div>
      <Button type="submit">Request Exchange</Button>
      {submitted ? (
        <p className="rounded-2xl border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-3 text-sm text-accent-cyan">
          Thanks. We&apos;ll get back to you.
        </p>
      ) : null}
    </form>
  );
}
