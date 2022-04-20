module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      width:{
        'w-media': '81.25vw'
      },
      height: {
        'half-screen': '50vh',
        'h-media': '115vh'
      },
      animation: {
        'fadeIn-1': 'fade 1s linear',
        'fadeIn-3': 'fade 3s linear',
        'border-fadeIn': 'fadeBorder 0.5s ease-in-out',
        'shake-1': 'shake, 2s linear'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        fadeBorder: {
          '0%': { borderWidth: '0' },
          '70%': { borderWidth: '2px',
                    borderColor: '#60a5fa'
          },
          '100%': { borderWidth: '0' }
        },
        shake: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
