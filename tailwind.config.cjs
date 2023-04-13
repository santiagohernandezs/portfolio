/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue/primary': '#5772FF',
        'white/primary': '#FAFAFA',
        'black/primary': '#282828',
        'black/secondary': '#171717',
        'gray/primary': '#A1A1A1'
      },
      fontFamily: {
        sora: "'Sora', 'sans-serif'",
        poppins: "'Poppins', 'sans-serif'",
        surco: "'Bw Surco Demo', 'sans-serif'",
        montserrat: "'Montserrat', 'sans-serif'",
        arsenica: "'Arsenica Trial', 'sans-serif'"
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite reverse',
        appear: 'appear .3s ease-in-out',
        desappear: 'desappear .3s ease-in-out',
        goDown: 'goDown 1s ease-in-out infinite alternate'
      },
      screens: {
        smallPhone: '320px',
        bigPhone: '428px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px'
      },
      gridColumn: {
        left: '1 / span 2',
        rigth: '2 / span 3'
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0, transform: 'translateY(5px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        desappear: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(5px)' }
        },
        goDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' }
        }
      }
    }
  },
  plugins: []
}
