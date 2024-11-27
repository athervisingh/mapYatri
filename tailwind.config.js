/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        'button-color': 'var(--button-color)',
        'button-select-color': 'var(--button-select-color)',
      },
    },
  },
  plugins: [],
}