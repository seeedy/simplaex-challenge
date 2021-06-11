const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'rivraddon.js'),
  ],
  output: {
    filename: 'rivraddon.js',
    path: path.resolve(__dirname, 'build'),
  },
};
