import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration for the HARL frontend.
 * Uses a calm, modern dark theme suitable for a research lab site.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8"
        },
        accent: "#22c55e"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

