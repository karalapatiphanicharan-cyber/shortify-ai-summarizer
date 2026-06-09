/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#FACC15",
        success: "#22C55E",
        background: "#F8FAFC",
      },
      borderWidth: {
        '4': '4px',
      },
    },
  },
  plugins: [],
}
