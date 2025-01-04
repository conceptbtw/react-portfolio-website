/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#100020",
        secondary: "#400080",
        accent: "#8000ff",
      },
    },
  },
  plugins: [],
};
