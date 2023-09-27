import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "celestial-blue": "#2EA3F2",
        ecru: "#D4B888",
        seasalt: "#F9F9F9",
        jet: "#353639",
        "yinmn-blue": "#294D78",
      },
    },
  },
  plugins: [],
};
export default config;
