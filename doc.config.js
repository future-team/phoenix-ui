const p = require('./package.json')
var alias = {}
alias[p.name] = 'src'
module.exports={
    // 模块名称
    moduleName: p.name,
    // 文档目录,非必填
    // docDir:'',
    // 输出
    // outDir:'',
    // 页面模板
    // htmlTemplatePath:'',
    // Favicon
    // htmlAppFavicon:'',
    // title
    // htmlTitle:'',
    // 页面需要载入的js列表
    htmlLoaderJs:[],
    // 页面中需要载入的css列表
    htmlLoaderStyle:[],
    // 框架
    framework:'React',
    // 平台
    platform:'pc',
    // 示例代码块默认是否显示
    defaultShowDemo:true,
    // tetris菜单是否展示
    isTetrisMenuShow: true,
    // 默认打开的页面
    homePage:'readme.html',
    // 是否需要配置系统模板化输出
    isTemplate:true,
    // 文档模板容器路径,路径或npm包名
    template:'',
    // 主菜单
    /*
    menu:[
        {
            name:'doc介绍',
            pageName:'intro',
            subMenu:[]
        },
        {
            name:'开发指南',
            pageName:'guide',
            subMenu:[
                {
                    name:'调试',
                    pageName:'debug'
                },
                {
                    name:'开发规范',
                    pageName:'standard'
                }
            ]
        }
    ],*/
    // 侧边栏菜单
    /*sidebarMenu:[
        {
            name:'components 组件',
            pageName:'',
            subMenu:[
                {
                    name:'common 公共组件',
                    pageName:'common',
                    subMenu: [{
                        name:'button 按钮',
                        pageName:'button',
                        subMenu: []
                    }, {
                        name:'layout 布局',
                        pageName:'layout',
                        subMenu: []
                    }]
                }
            ]
        },
        {
            name:'datepicker 日期选择器',
            pageName:'datepicker',
            subMenu:[]
        }
    ],*/
    // 组件别名
    alias:alias,
    // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
    externals:{}
}