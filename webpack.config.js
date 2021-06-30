const path = require('path'); // Comes from node itself

module.exports = {
  entry: './src/index.js', // Everything webpack needs to bundles flows through this js
  output: { // Take everything from index.js and after bundling output everything to file mentioned in output
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
