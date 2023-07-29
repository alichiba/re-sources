/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'grayslate' : '#293132',
        'seagray' : '#2B2D42',
        'aliceblue' : '#E9F1F7'
      }
    },
  },
  plugins: [],
}

