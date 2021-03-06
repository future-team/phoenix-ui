var webpack = require('webpack'),
    glob = require('glob'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    extend = require('extend'),
    devPort = 3008;

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
            exclude: /node_modules/,
            options: {
                cacheDirectory: true,
                plugins: [
                    'react-hot-loader/babel'
                ]
            }
        },
        // {
        //     test: /\.js?$/,
        //     loaders: ['react-hot', 'babel-loader?cacheDirectory'],
        //     exclude: /node_modules/
        // },
        {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        {
            test: /\.png$/,
            loader: "url-loader",
            query: {mimetype: "image/png"}
        },
        {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=./iconfont/[name].[ext]'
        },{
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        alias: { 
            "phoenix-ui/lib" : path.join(process.cwd(), 'src')
            // "phoenix-styles" : path.join(process.cwd(), 'examples/lib/phoenix-styles')
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('phoenix-styles.css')
    ],
    devtool: 'eval'
});
