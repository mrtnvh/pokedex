/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '1/1': '100%'
      },
      colors: {
        red: {
          '300': '#f58989',
          '500': '#F00000',
          '800': '#cc0000'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
