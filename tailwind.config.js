/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#e7f5f0',
        'dark-green': '#0d6651',
        'light-gray': '#f8f9fa',
        'accent-purple': '#7c4dff',
        'accent-teal': '#00bcd4',
        'accent-pink': '#ff4081',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'card': '0 15px 35px rgba(0, 0, 0, 0.1)',
        'hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0d6651 0%, #00bcd4 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7c4dff 0%, #ff4081 100%)',
      }
    },
  },
  plugins: [],
} 