/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:"#3A00B0",
          300:"#171647",
          900:"#000523",
        }
      }
    },
  },
  plugins: [],
}