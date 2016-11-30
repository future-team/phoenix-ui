YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Accordion",
        "Animate",
        "Badge",
        "Button",
        "ButtonGroup",
        "Col",
        "Dialog",
        "Drag",
        "FormGroup",
        "Grid",
        "Input",
        "Label",
        "Popover",
        "Popup",
        "Row",
        "Star",
        "Swipe",
        "Switch",
        "Tab",
        "TableView",
        "Tabset",
        "TextArea",
        "Toast",
        "Whisper"
    ],
    "modules": [
        "Action",
        "Basic",
        "Form",
        "Grid",
        "Label(标签)",
        "Tab(选项卡)",
        "Tooltip",
        "Tooltips",
        "UI"
    ],
    "allModules": [
        {
            "displayName": "Action",
            "name": "Action",
            "description": "功能组件-飘字",
            "classes": [
                {
                    "name": "Dialog"
                },
                {
                    "name": "Popup"
                },
                {
                    "name": "Swipe"
                },
                {
                    "name": "Toast"
                },
                {
                    "name": "Accordion"
                },
                {
                    "name": "Animate"
                }
            ]
        },
        {
            "displayName": "Basic",
            "name": "Basic",
            "description": "拖动Drag",
            "classes": [
                {
                    "name": "Drag"
                }
            ]
        },
        {
            "displayName": "Form",
            "name": "Form",
            "description": "表单元素textarea",
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
                    "name": "TextArea"
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
            "displayName": "Tooltip",
            "name": "Tooltip",
            "description": "辅助功能组件 - 倾听者",
            "classes": [
                {
                    "name": "Whisper"
                }
            ]
        },
        {
            "displayName": "Tooltips",
            "name": "Tooltips",
            "description": "功能组件-气泡",
            "classes": [
                {
                    "name": "Popover"
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