/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sur-green': '#006c35',
        'sur-red': '#c8102e',
        'sur-yellow': '#fcd116',
        'sur-white': '#ffffff',
      },
    },
  },
  plugins: [],
}