/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#212529',
        'button-color': '#374151',
        'button-select-color': '#0d9488',
      },
    },
  },
  plugins: [],
}