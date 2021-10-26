# Webpack Project
This project is to learn basics of webpack.
Reads and implements documentation from https://webpack.js.org/guides/getting-started/
# Steps
1. Create a new webpack project and alter webpack.config.js to process an input file and put it to dist folder.
2. npm run build - Will process the entry file and give us the output file. ( Watch out for scripts in package.json)
3. To do a live reloading, install webpack-dev-server and html-webpack-plugin to process and give us index.html file.
4. Modify your webpack.config.js to include mode, devServer, plugins and then set up dev to webpack-dev-server --open / webapack serve in package.json to serve app and allow live reloading.
5. Next step is to install babel from https://babeljs.io/setup#installation.
6. Install @babel/core and @babel/preset-env and make modifications to webconfig.js and .babelrc files respectively to tell webpack how and what to transpile.
7. Now, if you change your index.js with arrow functions and run npm run build, you'll be able to see a transpiled version under the dist folder.
8. Next step is to introduce and install postcss loader. It is used to introduce vendor prefixes and also prefixes css with respect to browsers (http://autoprefixer.github.io/)
9.Install @postcss-loader and @postcss and create a file called postcss.config.js. Add plugins that needs to be used and pass on their configurations. Eg: autoprefixer needs .browserlistrc
10. Install other dependencies like cssnano(https://cssnano.co/ - Minifier), autoprefixer , rucksackcss(https://www.npmjs.com/package/rucksack-css), mini-css-extract plugin (https://webpack.js.org/plugins/mini-css-extract-plugin/ - Extract css from files) and update webpack.config.js
11.Now on npm run build, css file will be generated based on configurations specified
