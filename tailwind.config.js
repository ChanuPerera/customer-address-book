/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./formkit.theme.mjs" // <-- add your theme file
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}