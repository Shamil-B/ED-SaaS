import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5ebff",
          100: "#ead6ff",
          200: "#d5adff",
          300: "#c085ff",
          400: "#ab5cff",
          500: "#952ffd",
          600: "#7825ca",
          700: "#5a1b97",
          800: "#3c1264",
          900: "#1e0932",
        },
        dark: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#474747",
          700: "#292929",
          800: "#1a1a1a",
          900: "#0a0a0a",
        },
        light: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#f0f0f0",
          400: "#e0e0e0",
          500: "#c2c2c2",
          600: "#a3a3a3",
          700: "#858585",
          800: "#666666",
          900: "#474747",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
