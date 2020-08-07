module.exports = {
  entry: './webpack/javascript/app.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/source/javascript/',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
}
