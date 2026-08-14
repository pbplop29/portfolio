import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // paper-and-ink scale: 50 is the lightest paper, 950 the darkest ink.
        // every step is verified ≥4.5:1 against ink-50/ink-100 wherever it carries body text.
        ink: {
          50: "#f0efe9",
          100: "#e6e4db",
          200: "#d5d2c7",
          300: "#b0aca0",
          400: "#666152",
          500: "#625d4f",
          600: "#4c4839",
          700: "#383528",
          800: "#24221a",
          900: "#16150f",
          950: "#0e0d09",
        },
        software: {
          DEFAULT: "#4b4fae",
          soft: "#dcdbf5",
          dim: "#2e3170",
        },
        embedded: {
          DEFAULT: "#8a4a2f",
          soft: "#f2ddd0",
          dim: "#5c3320",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
