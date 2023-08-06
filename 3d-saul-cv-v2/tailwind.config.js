/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        montserrat: ["Montserrat","sans-serif"]
      },
      colors: {
        primary: "#ff0a65",
        menuText: "#281236",
        menu: "#ff0ac2",
        cover: "#ff0a65",
        border: "rgba(66, 6, 129, 1)"
      },
      backgroundImage: {
        gradient: "linear-gradient(0deg, rgba(34, 4, 66, 1) 0%, rgba(66, 6, 129, 1) 100%)"
      },
      animation: {
        cover: "cover 0.5s forwards ease-out"
      },
      keyframes: {
        cover: {
          "100%": { width: "100%" },
        }
      }
    },
  },
  plugins: [],
}
