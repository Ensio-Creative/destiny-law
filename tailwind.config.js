module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'recoleta': ['Recoleta', 'sans-serif']
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
