/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat Brush", "cursive"]
      },
      animation: {
        alert: 'alert 3s ease-in-out',
      },
      keyframes: {
        alert: {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}

