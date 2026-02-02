/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'text-primary': '#FFF5EE',
            'text-secondary': '#000000',
            'home': '#FAC0D1',
            'about': '#61946C',
            'portfolio': '#C75000',
            'projects': '#3D3A4B',
            'cv': '#ECA400'
        },
    },
    fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif'],
        // curly: ['Imperial Script', 'cursive'],
    },
  },
  plugins: [],
}