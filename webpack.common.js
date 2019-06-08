const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'client',
  entry: ['@babel/polyfill', './src/app/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World!',
      filename: 'index.html',
      favicon: './assets/favicon.png',
      template: './assets/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/assets/manifest.json'),
        to: path.join(__dirname, '/build/manifest.json'),
      },
      {
        from: path.join(__dirname, '/assets/*.svg'),
        to: path.join(__dirname, '/build'),
        flatten: true,
      },
      {
        from: path.join(__dirname, '/assets/browser'),
        to: path.join(__dirname, '/build/browser'),
      },
      {
        from: path.join(__dirname, '/assets/os'),
        to: path.join(__dirname, '/build/os'),
      },
    ]),
  ],
};
