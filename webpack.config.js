const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:9009',
    'webpack/hot/only-dev-server',
    './app'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
    },
      {test: /\.woff(\d+)?$/, loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'},
      {test: /\.ttf$/, loader: 'file?prefix=font/'},
      {test: /\.eot$/, loader: 'file?prefix=font/'},
      {test: /\.svg$/, loader: 'file?prefix=font/'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  }
};
