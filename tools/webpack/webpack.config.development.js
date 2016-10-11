/* eslint-disable max-len */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 */

import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import autoprefixer from 'autoprefixer';

const port = process.env.PORT || 3000;
const projectroot = path.join(__dirname, '../../');

export default merge(baseConfig, {
  debug: true,

  devtool: 'cheap-module-eval-source-map',

  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
    'babel-polyfill',
    projectroot + './app/index'
  ],

  output: {
    publicPath: `http://localhost:${port}/dist/`
  },

  module: {
    loaders: [{
      // Extract all .global.css to style.css as is
      test: /\.global\.css$/,
      loaders: [
        'style-loader',
        'css-loader'
      ]
    }, {
      // Pipe other styles through css modules and apend to style.css
      test: /(^((?!\.global).)*\.css)$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      ]
    }, {
      test: /(\.scss)$/,
      // ExtractTextPlugin does not work with HMR, but it will be included in webpack prod config
      // loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      // loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }, // Font Definitions
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  postcss: [autoprefixer],

  // sassLoader: {
  //   includePaths: [path.resolve(projectroot, 'app/theme')],
  //   data: '@import "./_config.scss";'
  // },

  plugins: [
    // https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
    new webpack.HotModuleReplacementPlugin(),

    // “If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin.”
    // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
    new webpack.NoErrorsPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
  target: 'electron-renderer'
});
