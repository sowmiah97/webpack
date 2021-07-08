const path = require('path'); // Comes from node itself
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // mode can be set to production or development depending upon the environment we're working in.
  entry: './src/index.js', // Everything webpack needs to bundles flows through this js
  devServer: {
    contentBase: './dist' // devServer tells webpack where to serve all our files from.
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: { // Take everything from index.js and after bundling output everything to file mentioned in output
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
