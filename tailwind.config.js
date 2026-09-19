/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",     // Pink CTA color (Order Your Custom Art)
        primaryDark: "#db2777",
        cream: "#fff8f5",       // Page background
        softpink: "#ffe4ef",
        softgreen: "#e6f7ec",
        softpeach: "#ffece0",
        softblue: "#e6f1ff",
      },
      fontFamily: {
        heading: ["'Baloo 2'", "cursive"],
        body: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
