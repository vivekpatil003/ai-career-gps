module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d4ff',
        'neon-pink': '#ff4dd8',
        'neon-green': '#7CFC00',
        'neon-yellow': '#ffea00',
        'bg-deep': '#07070a'
      },
      boxShadow: {
        'neon-lg': '0 0 20px rgba(0,212,255,0.18), 0 0 40px rgba(255,77,216,0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
