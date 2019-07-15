module.exports = ctx => {
  return {
    plugins: [
      require('postcss-import')({ addDependencyTo: ctx.webpack }),
      require('tailwindcss')(),
      require('postcss-preset-env')({ stage: 0 })
    ]
  }
}
