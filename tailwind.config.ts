import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--bg-primary) / <alpha-value>)",
        card: "rgb(var(--bg-card) / <alpha-value>)",
        elevated: "rgb(var(--bg-elevated) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        "t-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "t-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "t-tertiary": "rgb(var(--text-tertiary) / <alpha-value>)",
        "t-muted": "rgb(var(--text-muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-light": "rgb(var(--accent-light) / <alpha-value>)",
        // keep legacy aliases for existing code
        dark: {
          DEFAULT: "#0a0a0a",
          lighter: "#141414",
          card: "#1c1c1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", '"Noto Sans SC"', "system-ui", "-apple-system", "sans-serif"],
        nunito: ["var(--font-nunito)", '"Noto Sans SC"', "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
