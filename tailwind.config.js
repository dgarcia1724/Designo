/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
    },
    extend: {
      colors: {
        // Primary
        primaryPeach: "#E7816B",
        primaryBlack: "#1D1C1E",
        primaryWhite: "#FFFFFF",
        // Secondary
        secondaryLightPeach: "#FFAD9B",
        secondaryDarkGray: "#333136",
        secondaryLightGray: "#F1F3F5",
      },
    },
  },
  plugins: [],
};
