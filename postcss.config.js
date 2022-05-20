let tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
      tailwindcss('./tailwind.config.js'),
      require('postcss-easy-import'),
      require('postcss-nested'),
      require('autoprefixer'),
    ]
  }