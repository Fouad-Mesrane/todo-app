/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4F5A",
      },
      backgroundColor : {
        primary : "#FF4F5A"
      }
    },
  },
  plugins: [],
};
