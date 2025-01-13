import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'custom': '81.98px', // Define a custom line height
      },
      letterSpacing: {
        '1-5': '1.5%', // Custom letter spacing value
        '2': '2%', // Custom letter spacing value
      },
      colors: {
        productBg: '#f1f0ff', // Add your custom background color
        heading: "#151875",
      },
    },
  },
  plugins: [],
};
export default config;
