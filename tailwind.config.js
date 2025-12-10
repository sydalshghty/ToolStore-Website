/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayColor: "#191C1F",
        whiteColor: "#FFFFFF",
        yellowColor: "#EBC80C",
        secondaryColor: "#1B6392",
        gray500: "#77878F",
        gray900: "#191C1F",
        secondary700: "#1B6392"
      }
    },
  },
  plugins: [],
}

