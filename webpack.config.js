const path = require('path');
const publicPath = process.env.PUBLIC_URL || '/';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]?[hash]',
            limit: 10000,
          }
        }]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      title: 'this is app title!',
      template: path.resolve(__dirname, './public/app.html'),
      inject: true,
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new CleanWebpackPlugin({ filename: 'app.js' }),
  ],
};
