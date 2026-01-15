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
        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "accent-cyan": "hsl(var(--accent-cyan) / <alpha-value>)",
        "accent-blue": "hsl(var(--accent-blue) / <alpha-value>)",
        "accent-purple": "hsl(var(--accent-purple) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 20px hsl(var(--accent-cyan) / 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
