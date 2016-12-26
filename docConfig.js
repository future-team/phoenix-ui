var projectName = require("./package.json").name;
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
        description:
        '<h1>Phoenix-ui of React</h1>' +
        '<p><strong>'+projectName+'</strong>是基于React框架实现的移动端UI组件库。</p>' +
        '<p>github: <a href="https://github.com/future-team/phoenix-ui">https://github.com/future-team/phoenix-ui</a></p>' +
        '<h2>特性</h2>'+
        '<ul>' +
        '<li>有较丰富的组件可供选择,也将持续丰富和优化</li>' +
        '<li>组件具有拓展性</li>' +
        '<li>具备组件基本的特性,同时提供很大程度的自定义内容的空间</li>' +
        '</ul>' +
        '<h2>安装</h2>'+
        '<p>组件中使用到动画的部分需要额外安装 <strong>react-addons-css-transition-group</strong> 来支持</p>'+
        '<pre>npm install '+projectName+' --save \nnpm install react-addons-css-transition-group --save</pre>'+
        '<h2>使用</h2>'+
        '<h3>CommonJS</h3>'+
        '<pre>var Button = require(\''+projectName+'/lib/Button\')</pre>'+
        '<h3>ES6</h3>'+
        '<pre>import {Button} from \''+projectName+'\'</pre>'+
        '<h3>Browser globals</h3>'+
        '<pre>&#60;script src="./dist/'+projectName+'.js"&#62;&#60;/script&#62;</pre>'+
        '<h2>其他</h2>'+
        '<p>'+projectName+'需要和 <a href="https://github.com/future-team/phoenix-styles">phoenix-styles</a> 配合使用,提供阿波罗默认样式phoenix-styles.min.css,需要IOS样式同时引入skin-ios.min.css即可。</p>'+
        '<h2>推荐PC端React UI组件库 - eagle-ui</h2>'+
        '<p>github: <a href="https://github.com/future-team/eagle-ui">https://github.com/future-team/eagle-ui</a></p>',

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

