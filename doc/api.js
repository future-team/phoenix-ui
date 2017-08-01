YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Accordion",
        "Alert",
        "Animate",
        "Badge",
        "Button",
        "ButtonGroup",
        "Checkbox",
        "Col",
        "Dialog",
        "Drag",
        "FilterCheckbox",
        "FilterContainer",
        "FilterItem",
        "FilterItemGroup",
        "FilterPanel",
        "FilterPanelSimple",
        "Grid",
        "Icon",
        "Image",
        "ImageList",
        "Input",
        "Label",
        "List",
        "Menu",
        "MenuBody",
        "MenuHeader",
        "MenuItem",
        "MenuList",
        "Popover",
        "Popup",
        "Prompt",
        "PullUp",
        "Radio",
        "Row",
        "SearchBar",
        "Slider",
        "Star",
        "Steps",
        "Swipe",
        "Switch",
        "Tab",
        "Tabset",
        "TextArea",
        "Toast"
    ],
    "modules": [
        "列表组件",
        "基础组件",
        "布局组件",
        "弹出框组件",
        "提示组件",
        "搜索组件",
        "操作类组件",
        "标签组件",
        "筛选控件",
        "菜单组件",
        "表单组件",
        "辅助组件",
        "选项卡"
    ],
    "allModules": [
        {
            "displayName": "列表组件",
            "name": "列表组件",
            "description": "List<br/>\n- ListItem：根据需要可添加disabled、error、required、navigate属性。\n- ListCol：根据需要可添加heading(标题样式)、tail(尾部右对齐样式)属性。\n\n示例：\n```\n <List>\n     <List.Header>标题</List.Header>\n         <List.Item className=\"clickable\">\n             <List.Col>\n                 <label>选择一</label>\n             </List.Col>\n         </List.Item>\n </List>\n```\n```\n <List>\n     <List.Item navigate>\n         <List.Col heading>\n             <label>性别</label>\n         </List.Col>\n         <List.Col tail>\n             <Input type=\"text\" placeholder=\"男/女\" disabled />\n         </List.Col>\n     </List.Item>\n </List>\n```",
            "classes": [
                {
                    "name": "List"
                }
            ]
        },
        {
            "displayName": "基础组件",
            "name": "基础组件",
            "description": "<h5>基础组件，主要包括:</h5>\n<strong><a href='../classes/Star.html'>Star 星级</a></strong><br/>\n<strong><a href='../classes/Button.html'>Button 按钮</a></strong><br>\n <strong><a href='../classes/ButtonGroup.html'>ButtonGroup 按钮组</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Image"
                },
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
                    "name": "Col"
                },
                {
                    "name": "Grid"
                },
                {
                    "name": "Row"
                }
            ]
        },
        {
            "displayName": "弹出框组件",
            "name": "弹出框组件",
            "description": "<h5>弹出框组件，主要包括组件:</h5>\n<strong><a href='../classes/Dialog.html'>Dialog 基础弹框</a></strong><br/>\n<strong><a href='../classes/Alert.html'>Alert弹框</a></strong><br>\n<strong><a href='../classes/Prompt.html'>Prompt弹框</a></strong>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "Alert"
                },
                {
                    "name": "Dialog"
                },
                {
                    "name": "Prompt"
                }
            ]
        },
        {
            "displayName": "提示组件",
            "name": "提示组件",
            "description": "气泡组件<br/>\n- 通过getTarget返回当前点击元素，必需。\n- 可通过placement设置气泡的显示位置, 可选top、bottom、left、right。\n- 当设置的位置不足够放置气泡，以下顺序顺延(top->bottom->left->right, bottom->top->left->right, left->right->top->bottom, right->left->top->bottom)。\n- 可通过distance设置气泡到点击对象的位置。\n- 可通过clickCallback定义气泡显隐时额外的回调函数。\n\n示例:\n```code\n <Button phSize='lg' ref={(button)=>{this.button = button}}>按钮</Button>\n <Popover getTarget={()=>{return this.button}} placement='top'>\n     <div className='ph-popover-text'>\n         一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。\n     </div>\n </Popover>\n```\n```code\n <Button phSize='lg' ref={(button)=>{this.button1 = button}}>按钮</Button>\n <Popover getTarget={()=>{return this.button1}} placement='right'>\n     <ul className='ph-popover-list'>\n         <li className='ph-popover-item'>未上线单店</li>\n         <li className='ph-popover-item'>未上线连锁店</li>\n     </ul>\n </Popover>\n```",
            "classes": [
                {
                    "name": "Popover"
                }
            ]
        },
        {
            "displayName": "搜索组件",
            "name": "搜索组件",
            "description": "SearchBar<br/>\n- 可通过buttonText设置按钮的文字。\n- 可通过clickCallback设置点击按钮的回调。\n- 可通过queryCallback设置回车/搜索动作的回调函数。\n- 可通过focusCallback设置聚焦的回调；可通过blurCallback设置失焦的回调。\n- className/style属性加在外层，其余属性均赋予input元素。\n\n主要属性和接口：\n- buttonText: 按钮文字 <br/>\n如：`<SearchBar buttonText=\"no\" />`\n- clickCallback: 点击按钮的回调 <br/>\n如：`<SearchBar clickCallback={(value)=>{console.log(value)}} />`\n- queryCallback: 回车/搜索动作的回调函数 <br/>\n如：`<SearchBar queryCallback={(value)=>{console.log(value)}} />`\n- focusCallback: 聚焦的回调 <br/>\n如：`<SearchBar focusCallback={()=>{console.log(\"focus\")}} />`\n- blurCallback: 失焦的回调 <br/>\n如：`<SearchBar blurCallback={()=>{console.log(\"blur\")}} />`",
            "classes": [
                {
                    "name": "SearchBar"
                }
            ]
        },
        {
            "displayName": "操作类组件",
            "name": "操作类组件",
            "description": "<h5>操作类组件，主要包括组件:</h5>\n<strong><a href='../classes/Accordion.html'>Accordion 手风琴</a></strong><br/>\n<strong><a href='../classes/Toast.html'>Toast 飘字</a></strong><br>\n<strong><a href='../classes/Popup.html'>Popup 弹层</a></strong><br>\n<strong><a href='../classes/Slider.html'>Slider 滑动输入条</a></strong><br>\n<strong><a href='../classes/Swipe.html'>Swipe 左滑动</a></strong><br>\n<strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br>\n<strong><a href='../classes/LoadingList.html'>LoadingList 加载更多</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "ImageList"
                },
                {
                    "name": "Popup"
                },
                {
                    "name": "Slider"
                },
                {
                    "name": "Steps"
                },
                {
                    "name": "Toast"
                },
                {
                    "name": "Accordion"
                },
                {
                    "name": "PullUp"
                },
                {
                    "name": "Swipe"
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
            "displayName": "筛选控件",
            "name": "筛选控件",
            "description": "<h5>筛选控件，主要包括组件:</h5>\n<strong><a href='../classes/FilterContainer.html'>FilterContainer 单选筛选</a></strong><br/>\n<strong><a href='../classes/FilterCheckbox.html'>FilterCheckbox 多选筛选</a></strong><br>\n<strong><a href='../classes/FilterPanelSimple.html'>FilterPanelSimple 简单面板</a></strong><br>\n<strong><a href='../classes/FilterPanel.html'>FilterPanel 面板</a></strong><br>\n<strong><a href='../classes/FilterItemGroup.html'>FilterItemGroup 主菜单</a></strong><br>\n<strong><a href='../classes/FilterItem.html'>FilterItem 筛选项</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "FilterCheckbox"
                },
                {
                    "name": "FilterContainer"
                },
                {
                    "name": "FilterItem"
                },
                {
                    "name": "FilterItemGroup"
                },
                {
                    "name": "FilterPanel"
                },
                {
                    "name": "FilterPanelSimple"
                }
            ]
        },
        {
            "displayName": "菜单组件",
            "name": "菜单组件",
            "description": "<h5>菜单组件，主要包括组件:</h5>\n<strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br/>\n<strong><a href='../classes/MenuHeader.html'>MenuHeader 菜单头部</a></strong><br>\n<strong><a href='../classes/MenuBody.html'>MenuBody 菜单主体</a></strong><br>\n<strong><a href='../classes/MenuList.html'>MenuList 菜单导航列表</a></strong><br>\n<strong><a href='../classes/MenuItem.html'>MenuItem 菜单导航列表项</a></strong><br>\n<h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>",
            "classes": [
                {
                    "name": "MenuBody"
                },
                {
                    "name": "MenuHeader"
                },
                {
                    "name": "MenuItem"
                },
                {
                    "name": "MenuList"
                },
                {
                    "name": "Menu"
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
                    "name": "Radio"
                },
                {
                    "name": "Switch"
                },
                {
                    "name": "Checkbox"
                },
                {
                    "name": "TextArea"
                }
            ]
        },
        {
            "displayName": "辅助组件",
            "name": "辅助组件",
            "description": "拖拽组件<br/>\n- 兼容移动端的touch和pc端的mouse事件。\n- 可通过dragCallback设置抓取的回调函数, 返回抓取在屏幕上的位置, 分别保存在start和move中, 以x和y的形式展示。\n- 可通过dropCallback设置松开瞬间的回调函数, 返回松开时在屏幕上的位置, 保存在end中, 以x和y的形式展示。\n\n示例:\n```code\n    <Drag dragCallback={::this.dragCallback} dropCallback={::this.dropCallback} style={{height:0}}>\n        <div className='box' ref={(box)=>{this.box = box}}>Drag</div>\n    </Drag>\n```\n```code\n    dragCallback(event,position){\n        this.prePosition = position.start;\n        this.nowPosition = position.move;\n\n        this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;\n        this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;\n        console.log(this.distanceX, this.distanceY);\n    }\n    dropCallback(event,position){\n        this.preDistanceX = this.distanceX;\n        this.preDistanceY = this.distanceY;\n    }\n```",
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