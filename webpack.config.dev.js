// third-party libraries
import merge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';

// webpack common configuration
import common from './webpack.config.common.js';

/**
 * @desc development configuration
 */
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  }
});
