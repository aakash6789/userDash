/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        // Define custom font weights if needed
        style1: 400,
        style2: 500,
        style3: 600,
      },
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(90deg, #FFFFFF 0%, #FFCB49 100%)',
        'custom-gradient2': 'linear-gradient(90deg, #FFFFFF 0%, #7464FF 100%)',
        'custom-gradient3': 'linear-gradient(90deg, #FFFFFF 0%, #4FD2B5 100%)',
      }
    },
  },
  plugins: [],
}

