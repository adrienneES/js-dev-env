import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //generate an external css file with hash in the file name
    new ExtractTextPlugin('[name].[contenthash].css'),

    // hash the filenames using MD5 so that their names change when
    //  content changews
    new webpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin( {
      template : 'src/index.html',
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
      },
      inject: true
    }),
    // eliminate duplicat packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new   webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
