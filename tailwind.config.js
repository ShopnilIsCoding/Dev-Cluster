/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      core: '#F33823',
      sub:'#0ea5e9'
    },
    extend: {},
  },
  plugins: [ require('daisyui'),],
}