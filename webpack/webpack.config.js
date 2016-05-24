/**
 * Created by panqianjin on 16/5/19.
 */
var webpack = require('webpack'),
    path = require('path'),
    extend = require('extend');
var projectName = require("../package.json").name;
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
        }
    }],
    module:{
        loaders:[{
            test:/\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        },{
            test:/\.less$/,
            loaders: "styles-loader!css-loader!less-loader"
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        }]
    }
};