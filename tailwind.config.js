/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-orange": "#f35525",
        "my-secoundry":"#7a7a7a"
     },
     screens:{
      "3xl": "1650px"
     }
    },
    
  },
  plugins: [],
}