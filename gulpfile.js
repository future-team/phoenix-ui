
var gulp = require('gulp'),
    webpack = require('webpack'),
    less = require('gulp-less'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
    open = require('gulp-open'),
    Server = require('karma').Server,
    webpackConfig = require('./webpack/webpack.config.js'),
    exampleConfig = require('./webpack/example.config.js'),
    WebpackDevServer = require("webpack-dev-server"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    projectName = require("./package.json").name,
    devPort = 3005;

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'))
});

gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({uri: 'http://127.0.0.1:' + devPort + '/examples/index.html'}));
});

gulp.task('demoBuild', function (done) {
    var wbpk = Object.create(exampleConfig);
    wbpk.devtool = 'eval';
    wbpk.entry = [
        'webpack-dev-server/client?http://127.0.0.1:' + devPort,
        'webpack/hot/only-dev-server',
        './examples/src/index.js'
    ];
    wbpk.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('phoenix-styles.css')
    ];
    wbpk.module.loaders = [
        {
            test: /date-time\.js$/,
            loaders: ['babel']
        },
        {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        },
        {
            test: /\.less$/,
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
        }
    ];

    var compiler = webpack(wbpk);

    new WebpackDevServer(compiler, {
        publicPath: '/examples/dist/',
        hot: true,
        historyApiFallback: true,
        port: devPort,
        stats: {
            colors: true
        }
    }).listen(devPort, '127.0.0.1', function (err) {
            if (err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://127.0.0.1:" + devPort + "/webpack-dev-server/index.html");
        });
});

gulp.task('webpack', function (done) {
    webpack(webpackConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        done();
    });
});

gulp.task('exampleWebpack', function (done) {
    webpack(exampleConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("exampleWebpack", err);
        gutil.log("[exampleWebpack]", stats.toString({}));
        done();
    });
});

gulp.task('min-webpack', ['webpack'], function (done) {
    var wbpk = Object.create(webpackConfig);
    wbpk.output.filename = projectName+'.min.js';
    wbpk.plugins.push(new webpack.optimize.UglifyJsPlugin());
    webpack(wbpk).run(function (err, stats) {
        if (err) throw new gutil.PluginError("min-webpack", err);
        gutil.log("[min-webpack]", stats.toString({
            // output options
        }));
        done();
    });
});

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('skin', function () {
  gulp.src(['node_modules/phoenix-styles/dist/ios-skin.css']) //多个文件以数组形式传入
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel', 'min-webpack', 'exampleWebpack','skin']);
gulp.task('demo', ['demoBuild', 'open']);
gulp.task('min', ['min-webpack']);
gulp.task('test',['karma']);