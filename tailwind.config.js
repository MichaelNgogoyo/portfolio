  /** @type {import('tailwindcss').Config} */
  import colors from "tailwindcss/colors";


module.exports = {
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        'warm-gray': colors.warmGray,
      },
    },
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

