import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003d9b",
        "primary-container": "#0052cc",
        "primary-fixed": "#dae2ff",
        "on-primary-fixed": "#001848",
        surface: "#faf9ff",
        "surface-container": "#e9edff",
        "on-surface": "#051a3e",
        "on-surface-variant": "#434654",
        outline: "#737685",
        "outline-variant": "#c3c6d6",
      },
    },
  },
  plugins: [],
};
export default config;
