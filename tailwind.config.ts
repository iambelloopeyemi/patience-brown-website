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
        seasalt: "#F9F9F9",
        jet: "#353639",
        "yinmn-blue": "#294D78",
      },
    },
  },
  plugins: [],
};
export default config;
