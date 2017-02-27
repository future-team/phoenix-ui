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
        "Icon",
        "Input",
        "Label",
        "Menu",
        "MenuBody",
        "MenuHeader",
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
            "description": "<h5>基础组件，主要包括:</h5>\n<strong><a href='../classes/Star.html'>Star 星级</a></strong><br/>\n<strong><a href='../classes/Button.html'>Button 按钮</a></strong><br>\n <strong><a href='../classes/ButtonGroup.html'>ButtonGroup 按钮组</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Button"
                },
                {
                    "name": "ButtonGroup"
                },
                {
                    "name": "Star"
                }
            ]
        },
        {
            "displayName": "布局组件",
            "name": "布局组件",
            "description": "<h5>主要栅格化布局组件</h5>\n<strong><a href='../classes/Grid.html'>Grid 外框</a></strong><br>\n<strong><a href='../classes/Row.html'>Row 行排列</a></strong><br>\n<strong><a href='../classes/Col.html'>Col 竖排列</a></strong><br>\n<strong><a href='../classes/TableView.html'>TableView 仿表格组件</a></strong><br>\n<h6>点击以上链接进行相关查看</h6>",
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
            "description": "<h5>操作类组件，主要包括组件:</h5>\n<strong><a href='../classes/Accordion.html'>Accordion 手风琴</a></strong><br/>\n<strong><a href='../classes/Dialog.html'>Dialog 弹框</a></strong><br>\n<strong><a href='../classes/Toast.html'>Toast 飘字</a></strong><br>\n<strong><a href='../classes/Popup.html'>Popup 弹层</a></strong><br>\n<strong><a href='../classes/Slider.html'>Slider 滑动输入条</a></strong><br>\n<strong><a href='../classes/Swipe.html'>Swipe 左滑动</a></strong><br>\n<strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
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
                    "name": "Menu"
                },
                {
                    "name": "MenuBody"
                },
                {
                    "name": "MenuHeader"
                },
                {
                    "name": "Accordion"
                }
            ]
        },
        {
            "displayName": "标签组件",
            "name": "标签组件",
            "description": "<h5>标签组件，主要包括组件:</h5>\n<strong><a href='../classes/Label.html'>Label 标签</a></strong><br/>\n<strong><a href='../classes/Badge.html'>Badge 徽章</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Icon"
                },
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
            "description": "<h5>表单组件，主要包括组件:</h5>\n<strong><a href='../classes/Input.html'>Input 文本框/单选框/多选框</a></strong><br/>\n<strong><a href='../classes/Textarea.html'>Textarea 多行文本框</a></strong><br>\n<strong><a href='../classes/FormGroup.html'>FormGroup 表单组</a></strong><br/>\n<strong><a href='../classes/Switch.html'>Switch 开关</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Input"
                },
                {
                    "name": "Switch"
                },
                {
                    "name": "FormGroup"
                },
                {
                    "name": "TextArea"
                }
            ]
        },
        {
            "displayName": "辅助组件",
            "name": "辅助组件",
            "description": "拖拽组件<br/>\n- 兼容移动端的touch和pc端的mouse事件。\n- 可通过onDrag设置抓取的回调函数, 返回抓取在屏幕上的位置, 分别保存在start和move中, 以x和y的形式展示。\n- 可通过onDrop设置松开瞬间的回调函数, 返回松开时在屏幕上的位置, 保存在end中, 以x和y的形式展示。\n\n示例:\n```code\n    <Drag onDrag={::this.onDrag} onDrop={::this.onDrop} style={{height:0}}>\n        <div className=\"box\" ref={(box)=>{this.box = box}}>Drag</div>\n    </Drag>\n```\n```code\n    onDrag(event,position){\n        this.prePosition = position.start;\n        this.nowPosition = position.move;\n\n        this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;\n        this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;\n        console.log(this.distanceX, this.distanceY);\n    }\n    onDrop(event,position){\n        this.preDistanceX = this.distanceX;\n        this.preDistanceY = this.distanceY;\n    }\n```",
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