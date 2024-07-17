/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#19a463",
        "green-dark": "#013a12",
        "gray-dark": "#7a646a",
        gray: "#f7f7f7",
        "gray-light": "#e4e5e7",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
