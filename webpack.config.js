module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  entry: {
    javascript: './src/client/index.jsx',
    html: './src/client/index.html'
  },
  output: {
    path: './build/client',
    filename: 'bundle.js'
  }
}
