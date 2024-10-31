/**
 * Generated using https://uicolors.app/create
 */
const globalColors = {
  primary: {
    '50': '#fefee8',
    '100': '#fffec2',
    '200': '#fffa87',
    '300': '#fff043',
    '400': '#ffe010',
    '500': '#f6cc03',
    '600': '#ce9b00',
    '700': '#a46e04',
    '800': '#88560b',
    '900': '#734610',
    '950': '#432405',
  },
  secondary: {},
  neutral: {},
  error: {},
  success: {},
  warning: {},
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: globalColors
    },
  },
  plugins: [],
}
