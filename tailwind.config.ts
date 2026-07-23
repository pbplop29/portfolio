import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0d10",
          900: "#12151a",
          800: "#1a1f26",
          700: "#242b34",
          600: "#333c47",
          500: "#4b5563",
          400: "#6b7280",
          300: "#9aa3af",
          200: "#c7ccd3",
          100: "#e8eaed",
          50: "#f5f6f7",
        },
        software: {
          DEFAULT: "#3b82f6",
          soft: "#93c5fd",
          dim: "#1d3a63",
        },
        embedded: {
          DEFAULT: "#e8a33d",
          soft: "#f3c98a",
          dim: "#5a4319",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
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
