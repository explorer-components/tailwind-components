// in postcss.config.js
const postcssPresetEnv = require(`postcss-preset-env`)
const tailwind = require("tailwindcss")

module.exports = () => ({
  plugins: [
    tailwind,
    postcssPresetEnv({
      stage: 3,
    }),
  ],
})
