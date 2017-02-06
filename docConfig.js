var projectName = require("./package.json").name;
var fs = require('fs');

var description = fs.readFileSync('./doc.html');console.log(description);

module.exports = {
    //扫描的文件路径
    paths: ['src/'],
    demoDir:"examples/src/",
    //文档页面输出路径
    outdir: 'doc/',
    //内置主题
    // theme:'ui',
    //自定义主题目录
    //themedir: 'theme-smart-ui/',
    //项目信息配置
    project: {

        //项目名称
        name: projectName,

        //项目描述，可以配置html，会生成到document主页
        description: description,

        //版本信息
        version: '1.0.0',

        //地址信息
        url: '',
        // logo:'dp-logo.png',

        //导航信息
        navs: [
            {
                name: "主页",
                url: ""
            },
            // {
            //     name: "例子",
            //     url: "../examples/"
            // }
        ]
    },
    //demo页面需要加载的js库
    demo: {
        autoComplete : true//,
        //paths : ['examples/','bower_components']
        //link : ['bower_components/react/react.js','bower_components/react/react-dom.js']
    }
};

