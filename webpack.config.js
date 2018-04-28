const path = require('path')
const webpack = require('webpack')

const base = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}

const client = {
  ...base,
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      isBrowser: true,
    })
  ]
}

const server = {
  ...base,
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      isBrowser: false,
    })
  ],
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [require('webpack-node-externals')()]
}

module.exports = [client, server]
