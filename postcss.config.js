module.exports = {
  plugins: {
    autoprefixer: {}, //You can pass in extra configurations if needed
    cssnano: {}, // If this is removed output main.css will not be minified
    'rucksack-css': {} // the font-size responsive is tranformed into calc function under dist/main.css bcoz of rucksac
  }
}
