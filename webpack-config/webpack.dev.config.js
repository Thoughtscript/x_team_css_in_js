'use strict'

const extractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack')

module.exports = {
  devConfig: () => [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js',
      minChunks:  module =>  module.context && module.context.indexOf('node_modules') >= 0
    }),
    new extractTextPlugin({
      filename: '[name].min.css',
      allChunks: true
    })
  ]
}