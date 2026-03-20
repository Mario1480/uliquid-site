"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const fieldClass =
    "mt-2 w-full rounded-2xl border border-border bg-bg-alt/80 px-4 py-3 text-sm text-text outline-none transition focus:border-border-strong focus:bg-white/[0.04] focus:ring-2 focus:ring-accent-cyan/25";

  const handleChange = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    if (!state.name.trim()) nextErrors.name = "Name is required.";
    if (!emailRegex.test(state.email)) nextErrors.email = "Enter a valid email.";
    if (!state.message.trim()) nextErrors.message = "Message is required.";

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
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Contact</p>
        <h3 className="font-display text-2xl font-semibold text-text">Start the conversation</h3>
        <p className="text-sm leading-7 text-muted">
          Tell us which product path you are exploring and what outcome you need help with.
        </p>
      </div>
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className={cn(
            fieldClass,
            errors.name ? "border-red-400" : ""
          )}
          value={state.name}
          onChange={handleChange("name")}
          required
        />
        {errors.name ? <p className="mt-2 text-xs text-red-300">{errors.name}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
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
        <label className="text-sm font-semibold text-text" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className={cn(
            fieldClass,
            errors.message ? "border-red-400" : ""
          )}
          rows={5}
          value={state.message}
          onChange={handleChange("message")}
          required
        />
        {errors.message ? <p className="mt-2 text-xs text-red-300">{errors.message}</p> : null}
      </div>
      <Button type="submit">Send message</Button>
      {submitted ? (
        <p className="rounded-2xl border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-3 text-sm text-accent-cyan">
          Thanks. We&apos;ll get back to you.
        </p>
      ) : null}
    </form>
  );
}
