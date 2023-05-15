/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      dropShadow: {
        bottom: '0 3px 3px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      colors: {
        'persian-green-100': '#e6f7f6',
        'persian-green-200': '#c0ebe8',
        'persian-green-300': '#9adfd9',
        'persian-green-400': '#74d3ca',
        'persian-green-500': '#4ec7bb',
        'persian-green-600': '#3daea2',
        'persian-green-700': '#2d9490',
        'persian-green': '#109e92',

        'space-cadet-100': '#4c4e6e',
        'space-cadet-200': '#3d3f5c',
        'space-cadet-300': '#2e3049',
        'space-cadet': '#33364d',

        'platinum-100': '#f5f5f5',
        'platinum-200': '#ebebeb',
        'platinum-300': '#e1e1e1',
        platinum: '#E3E3E3',

        'flame-100': '#fdeee9',
        'flame-200': '#fbdcd3',
        'flame-300': '#f9cabd',
        'flame-400': '#f7b8a7',
        'flame-500': '#f5a691',
        'flame-600': '#f39885',
        'flame-700': '#f18b79',
        'flame-800': '#ef7e6d',
        'flame-900': '#ed7061',
        flame: '#E4572E',

        'baby-powder': '#FBFEF9',
      },
    },
  },
  plugins: [],
};
