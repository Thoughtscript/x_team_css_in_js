'use strict'

const opts = {
  isProd: require('./production.config.js').production,
  reactAppRoot: '../reactApps/styled-components',
  outPath: `../public/styled-components/built`
}

const extractTextPlugin = require('extract-text-webpack-plugin'),
  resolve = dir => require('path').join(__dirname, dir),
  config = (!opts.isProd) ? require('./webpack.dev.config').devConfig()
    : require('./webpack.prod.config').prodConfig()

module.exports = {
  entry: [resolve(opts.reactAppRoot + '/entry.jsx')],
  output: {
    path: resolve(opts.outPath),
    filename: 'built.min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: config,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [resolve(opts.reactAppRoot)]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [resolve(opts.reactAppRoot)]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {minimize: true}},
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('postcss-smart-import'),
                  require('autoprefixer'),
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  }
}