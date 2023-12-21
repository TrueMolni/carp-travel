import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      accent: { 500: "#FFF" },
      high: { 500: "#FF2B77" },
      medium: { 500: "#E2A300" },
      low: { 500: "6BD475" },
      divider: { 500: "#ACA7C3" },
      text: { 500: "#3F3F3F" },
      hover: { 500: "#6243FF" },
    },
    padding: {
      "5px": "5px",
    },
    buttonStyles: {
      base: "px-4 py-2 bg-blue-500 text-white rounded-md",
    },
    backgroundImage: {
      "wave-pattern": "url('/src/shared/images/bg/bg-wave.png')",
      "wave-texture": "url('/src/shared/images/bg/bg-wave.svg')",
    },
    fontFamily: {
      header: "Alata, sans-serif",
    },
    boxShadow: {
      base: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
    },
    screens: {
      mm: { max: "767px" },
      tm: { max: "1279px" },
    },
  },
  plugins: [],
};
export default config;
