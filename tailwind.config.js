/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['30px', '34px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '52px'],
      '6xl': ['60px', '64px'],
      '7xl': ['72px', '76px'],
      '8xl': ['96px', '100px'],
      '9xl': ['128px', '132px'],
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0C1024',
        secondary: '#5EEAD4',
        'slate-gray': '#94A3B8',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        hero: "url('')",
        card: "url('')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
