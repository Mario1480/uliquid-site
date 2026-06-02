import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg) / <alpha-value>)",
        "bg-alt": "hsl(var(--bg-alt) / <alpha-value>)",
        surface: "hsl(var(--surface-1) / <alpha-value>)",
        "surface-2": "hsl(var(--surface-2) / <alpha-value>)",
        "surface-3": "hsl(var(--surface-3) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        "border-strong": "hsl(var(--border-strong) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--text-soft) / <alpha-value>)",
        "brand-primary": "hsl(var(--brand-primary) / <alpha-value>)",
        "brand-secondary": "hsl(var(--brand-secondary) / <alpha-value>)",
        "accent-cyan": "hsl(var(--brand-secondary) / <alpha-value>)",
        "accent-blue": "hsl(var(--brand-primary) / <alpha-value>)",
        "accent-purple": "hsl(var(--brand-tertiary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "sans-serif"],
        display: ["var(--font-geist-sans)", "Geist", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 22px 60px hsl(var(--glow) / 0.2)",
        panel:
          "0 24px 80px hsl(var(--bg) / 0.45), inset 0 1px 0 hsl(var(--text) / 0.05)",
        elevated:
          "0 30px 90px hsl(var(--bg) / 0.55), 0 0 0 1px hsl(var(--text) / 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
