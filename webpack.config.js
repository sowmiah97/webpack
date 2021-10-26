const path = require('path'); // Comes from node itself
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // mode can be set to production or development depending upon the environment we're working in.
  entry: './src/index.js', // Everything webpack needs to bundles flows through this js
  devServer: {
    contentBase: './dist' // devServer tells webpack where to serve all our files from.
  },
  module: {
      rules: [
        {
          test: /\.m?js$/, // This is regex to match type of files  ( Takes all js files )
          exclude: /node_modules/, // Exclude js files in node_modules folder and take files that match test regex
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }, {
          test: /\.scss$/i, // This is regex to match type of files  ( Takes all scss files )
          use: [
            {
              loader: MiniCSSExtractPlugin.loader, // This tells that whenever you come across css files load it throuh the mini MiniCSSExtractPlugin loader
              options: {
                hmr: process.env.NODE_ENV === 'development' // Enable hard module reloading in Development mode
              }
            },
            "css-loader",
            "postcss-loader",// postcss-loader should be configured after css-loader
            "sass-loader"
          ],// THe order in which we specify the loaders is important
        }
      ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css' //Mentioning the name placehoder so that the output file will be in corresponding scss name
    })
  ],
  output: { // Take everything from index.js and after bundling output everything to file mentioned in output
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
