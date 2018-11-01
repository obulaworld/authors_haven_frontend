// third-party libraries
import Path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * @desc Common configuration
 */
module.exports = {
  entry: Path.join(__dirname, 'src', 'index.js'),
  output: {
    path: Path.join(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  resolve: {
    modules: [Path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: Path.join(__dirname, 'src'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(__dirname,'src', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: [
          'file-loader',
        ]
      }
    ]
  }
}
