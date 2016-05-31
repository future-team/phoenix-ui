YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Badge",
        "Button",
        "Col",
        "FormGroup",
        "Input",
        "Label",
        "Row",
        "Switch",
        "Tab",
        "TableView",
        "Tabset"
    ],
    "modules": [
        "FORM",
        "GRID",
        "Label(标签)",
        "Tab(选项卡)",
        "UI"
    ],
    "allModules": [
        {
            "displayName": "FORM",
            "name": "FORM",
            "description": "开关切换，仿真ios的开关控件",
            "classes": [
                {
                    "name": "FormGroup"
                },
                {
                    "name": "Switch"
                },
                {
                    "name": "Button"
                },
                {
                    "name": "Input"
                }
            ]
        },
        {
            "displayName": "GRID",
            "name": "GRID",
            "description": "行",
            "classes": [
                {
                    "name": "Row"
                },
                {
                    "name": "Col"
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
                }
            ]
        }
    ]
} };
});