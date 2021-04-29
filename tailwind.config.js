module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#292930',
          300: '#797A89', // Text
          400: '#35353E', // Buttons
          500: '#2E2E35', // Buttons Selected
          600: '#292930', // Default
          700: '#25252B',
          800: '#1C1C21', 
          900: '#0D0E13'  // Background
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
