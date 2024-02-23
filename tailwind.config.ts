import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          inverse: "hsl(var(--primary-inverse))",
        },
        destructive: "hsl(var(--destructive))",
        warning: "hsl(var(--warning))",
        disabled: "hsl(var(--disabled))",
      },
      opacity: {
        "15": "0.15",
      },
      boxShadow: {
        top: "0px 1px 0px 0px hsla(var(--button-inset-shadow) / var(--button-inset-shadow-opacity)) inset",
        xs: "0 2px 4px 1px rgba(0,0,0,0.04),0 1px 1px 1px rgba(0,0,0,0.02)",
      },
    },
  },
  plugins: [],
};
export default config;
