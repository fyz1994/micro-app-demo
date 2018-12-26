const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: process.cwd() + '/build',
    filename: '[name].js',
    publicPath: '/build/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    publicPath: '/build/',
    contentBase: './',
    historyApiFallback: {
      index: '/src/index.html',
    },
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./"),
    ],
    alias: {
      'single-spa': path.resolve(__dirname, 'node_modules/single-spa/lib/single-spa.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            ['babel-preset-env', {
              targets: {
                "browsers": ["last 2 versions"],
              },
            }],
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
            'syntax-dynamic-import',
            'transform-function-bind',
            ["import", { "libraryName": "antd", "style": "css" }]
          ],
        },
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    })
  ],
};
