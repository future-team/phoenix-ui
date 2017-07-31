var webpack = require('webpack');
var extend = require('extend');


module.exports =extend({},{
    devtoll:'inline-source-map',
    output:{
        pathinfo:true
    },
    externals: {
        'jsdom': 'window',
        // 'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel?cacheDirectory'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=./iconfont/[name].[ext]'
            }
        ]
    }
});