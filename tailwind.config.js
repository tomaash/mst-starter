// See default config for what's available:
// https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: defaultTheme.colors.gray[300]
    }
  }
}
