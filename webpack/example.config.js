/**
 * Created by panqianjin on 16/5/19.
 */
var webpack = require('webpack'),
    glob = require('glob'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    extend = require('extend');

module.exports = extend({},{
    entry: [path.join(process.cwd(), 'examples/src/index.js')],
    output: {
        libraryTarget: 'umd',
        path: path.join(process.cwd(), 'examples/dist'),
        filename: 'examples.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            // loader: "style-loader!css-loader!less-loader"
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=./iconfont/[name].[ext]'
        }]
    },
    resolve: {
        alias: { "phoenix-ui" : "../../src/index.js" }
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('phoenix-styles.css')
    ]
});