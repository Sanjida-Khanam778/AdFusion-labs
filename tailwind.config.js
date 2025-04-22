/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", 'sans-serif']
      },
      colors: {
        primary: '#1D4ED8',   // Blue
        secondary: '#818CF8', // Amber
        accent: '#CBD5E1',    // Green (optional)
        button: '#6366F1',  // Button color
      },
    },
  },
  plugins: [],
}

