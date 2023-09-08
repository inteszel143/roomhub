/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#25D366",
        "secondary": "#484848",
        "tertiary": "#767676",
        "babu": "#00A699",
        "arches": "#FC642D",
      }
    },
  },
  plugins: [],
}

