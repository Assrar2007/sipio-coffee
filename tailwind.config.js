/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#171008',
          dark: '#0e0a05',
          light: '#23190E',
        },
        coffee: {
          DEFAULT: '#2B190F',
          deep: '#1E1109',
        },
        mocha: {
          DEFAULT: '#4A2815',
          light: '#5D331B',
        },
        caramel: {
          DEFAULT: '#D8781E',
          hover: '#C26915',
          light: '#E68B35',
        },
        amber: {
          DEFAULT: '#E48A2A',
        },
        cream: {
          DEFAULT: '#FFF4E5',
          pure: '#FFFDF9',
        },
        beige: {
          DEFAULT: '#F1E2CF',
          subtle: '#E8D5BF',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(23, 16, 8, 0.12)',
        'caramel-glow': '0 10px 30px -5px rgba(216, 120, 30, 0.35)',
      }
    },
  },
  plugins: [],
}
