const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: { myAppName: path.resolve(__dirname, './src/index.js') },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',

          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]', // Формат имен классов с хешем
              },
              sourceMap: !production,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !production,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader', // или 'url-loader'
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts', '.scss'],
    alias: {
      '@scss': path.resolve(__dirname, 'scss'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack & React',
      template: './src/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
  mode: production ? 'production' : 'development',
};
