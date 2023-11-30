import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "medium-purple": {
          "50": "#f4f4fe",
          "100": "#ebebfc",
          "200": "#dadafa",
          "300": "#bfbcf6",
          "400": "#9e95f0",
          "500": "#8472e9",
          "600": "#6a4bdc",
          "700": "#5b38c9",
          "800": "#4b2fa8",
          "900": "#3f288a",
          "950": "#25185d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
