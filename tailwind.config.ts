import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.(js|jsx|ts|tsx)', './blog/**/*.(md|mdx)'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      screens: {
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      },
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        dark: {
          DEFAULT: '#141414',
          primary: '#141414',
          secondary: '#242424'
        },
        primary: {
          DEFAULT: '#2cb8f9',
          darker: '#1F81AE'
        },
        secondary: {}
      }
    }
  },
  plugins: []
} satisfies Config
