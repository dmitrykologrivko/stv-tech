/**
 * Generated using https://uicolors.app/create
 */
const globalColors = {
  brand: {
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
      colors: globalColors,
      backgroundColor: {
        'brand-primary': globalColors.brand[500],
        'brand-primary-hover': globalColors.brand[600],
        'brand-primary-active': globalColors.brand[700],
        'brand-primary-disabled': globalColors.brand[400],
      },
      textColor: {
        'brand-onprimary': globalColors.brand[950],
        'brand-onprimary-active': globalColors.brand[900],
        'brand-onprimary-disabled': globalColors.brand[400],
      },
    },
  },
  plugins: [],
}
