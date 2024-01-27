import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "tusker-medium": ['"Tusker Grotesk 5500"'],
        "tusker-bold": ['"Tusker Grotesk 5700"'],
        "barlow-condensed": ['"Barlow Condensed"'],
      },
    },
  },
  plugins: [],
};
export default config;
