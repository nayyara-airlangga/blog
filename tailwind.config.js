/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.(js|jsx|ts|tsx)', './blog/**/*.(md|mdx)'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false
  },
  theme: {
    screens: {
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    extend: {}
  },
  plugins: []
}
