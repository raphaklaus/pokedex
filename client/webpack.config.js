const webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebPackPlugin = require('html-webpack-plugin'),
  FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    app: './entry.js',
    vendor: ['angular', 'angular-ui-router']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'stylus-loader']
        })
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)(\?.+)?$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        include: path.join(__dirname, 'images/'),
        use: 'file-loader?name=images/[name].[ext]&context=images/'
      },
      {
        test: /index.html$/,
        loader: 'html-loader?name=[name].[ext]'
      }, {
        test: /\.html$/,
        include: path.resolve(__dirname, 'components/'),
        loader: `ngtemplate-loader?relativeTo=${__dirname}/components/!html-loader`
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash]-bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle-[contenthash].css'),
    new HtmlWebPackPlugin({ template: 'index.html', inject: 'body' }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, './images/favicon.png'),
      background: '#EFFFDE',
      title:'PokeList',
      persistentCache: true,
      inject: true
    })
  ]
};
