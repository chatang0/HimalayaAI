import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration for the HARL frontend.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8"
        },
        accent: "#F97316"
      }
    }
  },
  plugins: []
};

export default config;

