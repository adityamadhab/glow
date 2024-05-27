/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#019863',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Include the typography plugin
  ],
}

