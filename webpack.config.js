const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query : {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: [["transform-object-rest-spread", { "useBuiltIns": true }]]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/img' }]),
  ]
}
