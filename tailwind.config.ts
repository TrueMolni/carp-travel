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
      error: { 500: "#FF5757" },
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
      "career-mm":
        "linear-gradient(rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)),url('images/career-bg.png')",
      "career-tm":
        "linear-gradient(rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75)),url('images/career-tablet-bg.png')",
      custom: "linear-gradient(rgba(2, 15, 8, 0.75), rgba(2, 15, 8, 0.75))",
      "hero-mm":
        "linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url('images/bg-hero-mobile.png')",
      "hero-tm":
        "linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url('images/bg-hero-tablet.png')",
      "hero-dm":
        "linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url('images/bg-hero-desktop.png')",
      "gallery-mm":
        "linear-gradient(#020F08D9, #020F08D9), url('images/bg-gallery.png')",
      "about-mm":
        "linear-gradient(rgba(2, 15, 8, 0.50), rgba(2, 15, 8, 0.50)), url('images/bg-about.png')",
    },
    backgroundColor: {
      black75: "rgba(2, 15, 8, 0.75)",
    },
    linearGradientColors: {
      "header-mm": [
        "to-b",
        "rgba(2, 15, 8, 0.75) 0%",
        "rgba(2, 15, 8, 0.75) 100%",
      ],
    },
    fontFamily: {
      header: "Alata, sans-serif",
    },
    letterSpacing: {
      default: "2.8px",
    },
    boxShadow: {
      base: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
    },
    screens: {
      mm: { max: "767px" },
      tm: { max: "1279px" },
      tablet: { min: "768px", max: "1279px" },
      desk: { min: "1280px" },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
