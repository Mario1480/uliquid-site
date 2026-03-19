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
      className="space-y-4 rounded-3xl border border-border bg-surface/70 p-6 shadow-[0_0_18px_rgba(20,129,192,0.2)]"
    >
      <div>
        <label className="text-sm font-semibold text-text" htmlFor="request-access-name">
          Name
        </label>
        <input
          id="request-access-name"
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
        <label className="text-sm font-semibold text-text" htmlFor="request-access-email">
          Email
        </label>
        <input
          id="request-access-email"
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
        <label className="text-sm font-semibold text-text" htmlFor="request-access-role">
          Role
        </label>
        <input
          id="request-access-role"
          className={cn(
            "mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue",
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
            "mt-2 w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-text outline-none focus:ring-2 focus:ring-accent-blue",
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
        <p className="text-sm text-accent-cyan">Thanks. Your Desk access request has been noted.</p>
      ) : null}
    </form>
  );
}
