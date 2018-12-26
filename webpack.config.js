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
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './src')),
  ],
};
