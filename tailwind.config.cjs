/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#2f3336',
        text: '#71767b',
        verify: { blue: '#1d9bf0' },
      },
    },
  },
  plugins: [],
};
