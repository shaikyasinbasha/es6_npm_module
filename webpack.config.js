const path = require('path');
var glob = require("glob");

module.exports = {
  entry: './src/index.js',
  //entry: glob.sync("./src/**/*.js"),
  //entry: () => new Promise((resolve) => resolve(['./src/platform.js','./src/api.js'])),
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};