var webpack = require('webpack'),
    path = require('path'),
    extend = require('extend'),
    projectName = require("../package.json").name;

module.exports = {
    entry: [path.join(process.cwd(),'src/index.js')],
    devtoll:'source-map',
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output: {
        library: 'Phoenix',
        libraryTarget: 'umd',
        path: path.join(process.cwd(),'dist'),
        filename: projectName+'.js'
    },
    externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react/lib/ReactDOM': {
            root: 'ReactDOM',
            commonjs2: 'react/lib/ReactDOM',
            commonjs: 'react/lib/ReactDOM',
            amd: 'react/lib/ReactDOM'
        },
        'react-addons-css-transition-group': 'ReactCSSTransitionGroup'
    }],
    module:{
        loaders:[{
            test:/\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        },{
            test:/\.(css|less)$/,
            loader: "style-loader!css-loader!less-loader"
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=./iconfont/[name].[ext]'
        }]
    },
    plugins: [
        
    ]
};