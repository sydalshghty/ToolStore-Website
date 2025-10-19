/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackColor: "#151515",
        whiteColor: "#fff",
        yellowColor: "#ffc10a",
        grayColor: "#777777",
        bgbrands: "#f6f6f6",
        backgroundColor: "#f7f7f7",
      }
    },
  },
  plugins: [],
}

