var { defaultConfig } = require('./src/theme/default-config')

module.exports = {
  ...defaultConfig,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}
