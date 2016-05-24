/**
 * Created by slashhuang on 16/2/23.
 * 在config.json中配置相关文件路径即可
 */
var fs =require('fs');
var path = require('path');
require('colors');
//里面filepath对应的数组路径名称为相应静态资源，会放入doc下的docTheme文件夹
var sourceFilePath = require('./config.json');
/**
 * 读取文件
 */
var readFileFunc = function(source,callback,addSource){
     fs.readFile(source, function (err, data) {
        if (err) {
            return console.error(err.red);
        }
        callback(data.toString(),addSource);
         console.log("----------------------------".blue)
         console.log('transform lib/source.js and `var configStaticFile` to string'.green)
    });
};
/**
 * 写入数据
 */
var writeFiles = function (originData,addSource) {
        fs.writeFile(filePath, originData + addSource,  function(err) {
            if (err) {
                return console.error(err.red);
            }
            console.log('success'.bgBlue,"writing lib/source/js and `var configStaticFile` to /doc/assets/js/doc.js ".green);
        });
};
/**
 * 复制js及css至doc文件夹下的docTheme
 */
var CopyFile = function(){
    var basePath=  path.join(__dirname.replace('docTheme',''));
    var destRoot = path.join(__dirname.replace('docTheme','doc'));
    var destDir = destRoot+'/docTheme/';
    fs.mkdir(destRoot+'/docTheme',function(err){
        if (err) {
            return console.error(err);
        }
        console.log('success'.bgBlue,('make dir docTheme in doc').green);
        var fileArr =(function(){
            var initArr = [];
            for(var key in sourceFilePath){
                initArr = initArr.concat(sourceFilePath[key]);
            }
            return initArr;
        }());
        for(var i=0;i<fileArr.length;i++){
            (function(file){
                var readStream = fs.createReadStream(file);
                var writeStream = fs.createWriteStream(destDir+path.basename(file));
                readStream.pipe(writeStream);
                console.log('success'.bgBlue,('copy'+file+' to docTheme').green);
            })(path.join(basePath,'docTheme',fileArr[i]));
        }
    });
};
//复制静态资源
CopyFile();
//添加自定义代码至doc目录的assets/js/doc.js中
var filePath = './doc/assets/js/doc.js';
var addConfig='window["configStaticFile"]='+fs.readFileSync('docTheme/config.json').toString();
var addSource=fs.readFileSync('docTheme/lib/source.js').toString();
readFileFunc(filePath,writeFiles,addConfig+';\n'+addSource);




