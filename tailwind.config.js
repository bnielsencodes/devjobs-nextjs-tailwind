/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#fff",
          200: "#f4f6f8",
          300: "#9daec2",
          400: "#6e8098",
          500: "#19202d",
          600: "#121721",
        },
        accent: "#5964e0",
        "accent-light": "#939bf4",
        placeholder: "rgb(255 255 255 0.25)",
      },
    },
    screens: {
      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
