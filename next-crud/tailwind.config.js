// tailwind.config.js
module.exports = {
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
      'from-green-400',
      'from-blue-400',
      'from-red-400',
      'to-red-700',
      'to-blue-700',
      'to-green-700',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}