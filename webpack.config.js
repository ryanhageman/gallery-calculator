module.exports = {
  entry: './assets/javascripts/app.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/source/javascripts/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}