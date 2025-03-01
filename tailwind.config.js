/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'rocket-movement': {
          '100%': { transform: 'translate(1200px,-600px)' }
        },
        'spin-earth': {
          '100%': { transform: 'rotate(-360deg)', transition: 'transform 20s' }
        },
        'move-astronaut': {
          '100%': { transform: 'translate(-160px, -160px)' }
        },
        'rotate-astronaut': {
          '100%': { transform: 'rotate(-720deg)' }
        },
        'glow-star': {
          '40%': { opacity: 0.3 },
          '90%, 100%': { opacity: 1, transform: 'scale(1.2)', borderRadius: '999999px' }
        }
      },
      animation: {
        'rocket-movement': 'rocket-movement 70s linear infinite',
        'spin-earth': 'spin-earth 65s infinite linear both',
        'move-astronaut': 'move-astronaut 50s infinite linear both alternate',
        'rotate-astronaut': 'rotate-astronaut 200s infinite linear both alternate',
        'glow-star': 'glow-star 2s infinite ease-in-out alternate'
      }
    },
  },
  plugins: [],
}

