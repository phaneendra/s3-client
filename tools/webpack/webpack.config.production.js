/**
 * Build config for electron 'Renderer Process' file
 */

import webpack from 'webpack';
import validate from 'webpack-validator';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import autoprefixer from 'autoprefixer';

const projectroot = path.join(__dirname, '../../');

const config = validate(merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: [
    'babel-polyfill',
    projectroot + './app/index'
  ],

  output: {
    publicPath: projectroot + './dist/'
  },

  module: {
    loaders: [{
      // Extract all .global.css to style.css as is
      test: /\.global\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader'
      )
    }, {
      // Pipe other styles through css modules and apend to style.css
      test: /(^((?!\.global).)*\.css|\.scss|)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
    }]
  },

  postcss: [autoprefixer],

  plugins: [
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    // https://github.com/webpack/webpack/issues/864
    new webpack.optimize.OccurrenceOrderPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // Minify without warning messages and IE8 support
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),

    // Set the ExtractTextPlugin output filename
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
  target: 'electron-renderer'
}));

export default config;
