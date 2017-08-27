var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [
  'react/dist/react.min.js',
  'react-router/dist/react-router.min.js',
  'moment/min/moment.min.js'
];
var config = {
  entry: './index.js',
  resolve: {
    alias: {}
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    noParse: [],
    loaders: [
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader'},
      {test:/\.css$/, loader: 'style-loader!css-loader'},
      {test:/\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
    ]
  }
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
