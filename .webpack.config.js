const path = require('path');

module.exports = {
  entry: './src/_scripts/slides.js',
  output: {
    filename: 'slides.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};