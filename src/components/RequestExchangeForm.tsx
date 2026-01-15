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
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-surface/70 p-6">
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="exchange-name">
          Exchange name
        </label>
        <input
          id="exchange-name"
          className={cn(
            "mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue",
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
            "mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue",
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
          className="mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue"
          rows={4}
          value={state.notes}
          onChange={handleChange("notes")}
        />
      </div>
      <Button type="submit">
        Request exchange
      </Button>
      {submitted ? (
        <p className="text-sm text-accent-cyan">Thanks — we’ll get back to you.</p>
      ) : null}
    </form>
  );
}
