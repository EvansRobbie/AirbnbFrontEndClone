/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb': '#FF5A5F',
        'airbnbBackground':'rgba(0, 0, 0, 0.05)',
        'airbnbMobile':'rgba(0, 0, 0, 0.2)'
      },
      margin:{
        '84':'315px',
        '90':'365px'
      },
      height:{
        '70':'280px',
      },
      boxShadow:{
        '3xl':'0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        'sans': ['Cereal',]
      },
      screens: {
        'mobile': '400px',
        
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
  
}