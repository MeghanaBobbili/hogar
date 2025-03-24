/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B00FF',     // Electric Indigo / Deep Violet
        secondary: '#00F0FF',   // Soft Neon Aqua
        dark: '#1C1C28',        // Gunmetal / Charcoal
        accent1: '#FFCC00',     // Signal Yellow
        accent2: '#FF2CF8',     // Magenta Fizz
        light: '#F5F7FA',       // Mist White
        textPrimary: '#E6E8EC', // Off-white or Pale Gray
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 