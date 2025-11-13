/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // pakai class .dark di <html>
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // pastikan ini mencakup semua file React
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  