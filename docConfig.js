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
        name: 'phoenix-ui',

        //项目描述，可以配置html，会生成到document主页
        description:
        '<h3>欢迎使用基于react开发的app组件库phoenix-ui，左侧的导航栏为相关组件的名称和链接</h3>' +
        '<p>&nbsp;</p>'+
        '<h4>该组件库为app组件库，什么？你说pc版？不要急我们也有。出门左转github搜索"eagle-ui"</h4>'+
        '<p>&nbsp;</p>'+
        '<h4>知道你很懒，来吧传送门猛戳<a href="http://uedfamily.com/documents/eagle-ui/doc/">eagle-ui</a></h4>'+
        '<p>&nbsp;</p>'+
        '<h4>您可以点击顶部导航栏的<strong><a href="/documents/eagle-ui/examples/">示例</a></strong>，' +
        '查看eagle-ui组件的UI效果及功能演示</h4>'+
        '<p>&nbsp;</p>'+
        '<h4>您可以通过如下方式查看组件的API</h4>'+

        '<ol>' +
        '<li><h4>在输入框中输入组件名字进行查询</h4></li>' +
        '<li><h4>点击左侧API导航栏</h4></li>' +
        '</ol>'+
        '<strong>说明:</strong>左侧导航栏中对应的链接名字即为组件名字'+
        '<p>&nbsp;</p>'+
        '<h4>您可以采用如下形式在项目中应用unicorn-ui</h4>'+
        '<pre>import {CheckboxGroup}(根据您的需要引入组件) from \'phoenix-ui\'使用相关组件</pre>'+
        '或者' +
        '<pre>'+
        '<div>&#60;script src="path to phoenix-ui.js" &#62;&#60;/script&#62;的形式使用phoenix-ui'+'</div></pre>',

        //版本信息
        version: '0.1.0',

        //地址信息
        url: '',
        //logo:'dp-logo.png',

        //导航信息
        navs: [
            {
                name: "主页",
                url: ""
            },
            {
                name: "例子",
                url: "../examples/"
            }
        ]
    },
    //demo页面需要加载的js库
    demo: {
        autoComplete : true//,
        //paths : ['examples/','bower_components']
        //link : ['bower_components/react/react.js','bower_components/react/react-dom.js']
    }
};

