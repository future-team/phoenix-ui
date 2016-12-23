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
        "Slider",
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
        "基础组件",
        "布局组件",
        "提示组件",
        "操作类组件",
        "标签组件",
        "表单组件",
        "辅助组件",
        "选项卡"
    ],
    "allModules": [
        {
            "displayName": "基础组件",
            "name": "基础组件",
            "description": "星级评价(Star)组件<br />\n提供的UI展示属性接口包括<br/>\n<ul>\n    <li>rate：星级评价的分数(满分为50)<code>默认为0</code></li>\n    <li>size：星星的大小(可选md、lg、默认3种size)<code></code></li>\n</ul><br>\n使用方式:\n<pre><code>&#60;Star rate={50} size={10}/&#62;</code>\n</pre>",
            "classes": [
                {
                    "name": "Star"
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
            "displayName": "布局组件",
            "name": "布局组件",
            "description": "<h5>主要栅格化布局组件</h5>\n<pre><code>\n    &#60;Grid&#62;//定义栅格\n        &#60;Col sm={6}&#62;//定义一列，总长度为12份\n            &#60;Row&#62; &#60;/Row&#62;//定义一行\n        &#60;/Col&#62;\n    &#60;/Grid&#62;\n</code></pre>\n\n<strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>\n<strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>\n<strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>\n<h6>点击以上链接进行相关查看</h6>",
            "classes": [
                {
                    "name": "Row"
                },
                {
                    "name": "TableView"
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
            "displayName": "提示组件",
            "name": "提示组件",
            "description": "<h5>提示模块，主要包括一下两个组件:</h5>\n<strong><a href='../classes/Whisper.html'>Whisper</a></strong><br/>\n<strong><a href='../classes/Popover.html'>Popover</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Popover"
                },
                {
                    "name": "Whisper"
                }
            ]
        },
        {
            "displayName": "操作类组件",
            "name": "操作类组件",
            "description": "功能组件-飘字",
            "classes": [
                {
                    "name": "Dialog"
                },
                {
                    "name": "Popup"
                },
                {
                    "name": "Slider"
                },
                {
                    "name": "Swipe"
                },
                {
                    "name": "Toast"
                },
                {
                    "name": "Accordion"
                }
            ]
        },
        {
            "displayName": "标签组件",
            "name": "标签组件",
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
            "displayName": "表单组件",
            "name": "表单组件",
            "description": "表单元素textarea",
            "classes": [
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
                    "name": "FormGroup"
                }
            ]
        },
        {
            "displayName": "辅助组件",
            "name": "辅助组件",
            "description": "拖动Drag",
            "classes": [
                {
                    "name": "Drag"
                },
                {
                    "name": "Animate"
                }
            ]
        },
        {
            "displayName": "选项卡",
            "name": "选项卡",
            "description": "<h5>tab选项卡，主要包括一下两个组件:</h5>\n<strong><a href='../classes/Tabset.html'>tabset</a></strong><br/>\n<strong><a href='../classes/Tab.html'>tab</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Tab"
                },
                {
                    "name": "Tabset"
                }
            ]
        }
    ]
} };
});