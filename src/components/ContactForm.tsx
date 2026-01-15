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
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-surface/70 p-6">
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className={cn(
            "mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue",
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
        <label className="text-sm font-semibold text-text" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className={cn(
            "mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue",
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
        <p className="text-sm text-accent-cyan">Thanks — we’ll get back to you.</p>
      ) : null}
    </form>
  );
}
