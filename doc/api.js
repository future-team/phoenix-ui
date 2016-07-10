YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Badge",
        "Button",
        "ButtonGroup",
        "Col",
        "FormGroup",
        "Grid",
        "Input",
        "Label",
        "Row",
        "Star",
        "Switch",
        "Tab",
        "TableView",
        "Tabset"
    ],
    "modules": [
        "Form",
        "Grid",
        "Label(标签)",
        "Tab(选项卡)",
        "UI"
    ],
    "allModules": [
        {
            "displayName": "Form",
            "name": "Form",
            "description": "开关切换，仿真ios的开关控件",
            "classes": [
                {
                    "name": "FormGroup"
                },
                {
                    "name": "Input"
                },
                {
                    "name": "Switch"
                },
                {
                    "name": "Button"
                },
                {
                    "name": "ButtonGroup"
                }
            ]
        },
        {
            "displayName": "Grid",
            "name": "Grid",
            "description": "<h5>主要栅格化布局组件</h5>\n<pre><code>\n    &#60;Grid&#62;//定义栅格\n        &#60;Col sm={6}&#62;//定义一列，总长度为12份\n            &#60;Row&#62; &#60;/Row&#62;//定义一行\n        &#60;/Col&#62;\n    &#60;/Grid&#62;\n</code></pre>\n\n<strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>\n<strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>\n<strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>\n<h6>点击以上链接进行相关查看</h6>",
            "classes": [
                {
                    "name": "Row"
                },
                {
                    "name": "Col"
                },
                {
                    "name": "Grid"
                }
            ]
        },
        {
            "displayName": "Label(标签)",
            "name": "Label(标签)",
            "description": "<h5>label模块，主要包括一下两个组件:</h5>\n<strong><a href='../classes/Label.html'>label 标签</a></strong><br/>\n<strong><a href='../classes/Badge.html'>bridge 徽章</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Badge"
                },
                {
                    "name": "Label"
                }
            ]
        },
        {
            "displayName": "Tab(选项卡)",
            "name": "Tab(选项卡)",
            "description": "<h5>tab选项卡，主要包括一下两个组件:</h5>\n<strong><a href='../classes/Tabset.html'>tabset</a></strong><br/>\n<strong><a href='../classes/Tab.html'>tab</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Tab"
                },
                {
                    "name": "Tabset"
                }
            ]
        },
        {
            "displayName": "UI",
            "name": "UI",
            "description": "展现形式如表格一般,用来组织数据，显示链接的集合，或一系列的控件。<br />\n使用时需注意组件的子元素需要跳转功能需加上href标签并赋予正确的url，不论什么标签",
            "classes": [
                {
                    "name": "TableView"
                },
                {
                    "name": "Star"
                }
            ]
        }
    ]
} };
});