"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  role: string;
  interest: string;
};

export function RequestAccessForm() {
  const [state, setState] = useState<FormState>({ name: "", email: "", role: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; role?: string; interest?: string }>({});
  const fieldClass =
    "mt-2 w-full rounded-2xl border border-border bg-bg-alt/80 px-4 py-3 text-sm text-text outline-none transition focus:border-border-strong focus:bg-white/[0.04] focus:ring-2 focus:ring-accent-cyan/25";

  const handleChange = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { name?: string; email?: string; role?: string; interest?: string } = {};

    if (!state.name.trim()) nextErrors.name = "Name is required.";
    if (!emailRegex.test(state.email)) nextErrors.email = "Enter a valid email.";
    if (!state.role.trim()) nextErrors.role = "Role is required.";
    if (!state.interest.trim()) nextErrors.interest = "Tell us what you want to access.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <form
      id="request-access"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[30px] border border-border/90 bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.96),hsl(var(--surface-1)/0.9))] p-6 shadow-panel sm:p-8"
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Access Request</p>
        <h3 className="font-display text-2xl font-semibold text-text">Tell us how you want to use Desk</h3>
        <p className="text-sm leading-7 text-muted">
          We use this to understand your trading workflow, vault interests, and automation needs before
          onboarding.
        </p>
      </div>
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="request-access-name">
          Name
        </label>
        <input
          id="request-access-name"
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
        <label className="text-sm font-semibold text-text" htmlFor="request-access-email">
          Email
        </label>
        <input
          id="request-access-email"
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
        <label className="text-sm font-semibold text-text" htmlFor="request-access-role">
          Role
        </label>
        <input
          id="request-access-role"
          className={cn(
            fieldClass,
            errors.role ? "border-red-400" : ""
          )}
          value={state.role}
          onChange={handleChange("role")}
          placeholder="Trader, vault user, allocator, team member..."
          required
        />
        {errors.role ? <p className="mt-2 text-xs text-red-300">{errors.role}</p> : null}
      </div>

      <div>
        <label className="text-sm font-semibold text-text" htmlFor="request-access-interest">
          What are you looking for?
        </label>
        <textarea
          id="request-access-interest"
          className={cn(
            fieldClass,
            errors.interest ? "border-red-400" : ""
          )}
          rows={5}
          value={state.interest}
          onChange={handleChange("interest")}
          placeholder="Tell us what kinds of vaults, strategies, or automation you want to access."
          required
        />
        {errors.interest ? <p className="mt-2 text-xs text-red-300">{errors.interest}</p> : null}
      </div>

      <Button type="submit">Request Access</Button>
      {submitted ? (
        <p className="rounded-2xl border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-3 text-sm text-accent-cyan">
          Thanks. Your Desk access request has been noted.
        </p>
      ) : null}
    </form>
  );
}
