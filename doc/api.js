YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Col",
        "Row",
        "Tab",
        "Tabset"
    ],
    "modules": [
        "Tab(选项卡)",
        "grid"
    ],
    "allModules": [
        {
            "displayName": "grid",
            "name": "grid",
            "description": "列",
            "classes": [
                {
                    "name": "Col"
                },
                {
                    "name": "Row"
                }
            ]
        },
        {
            "displayName": "Tab(选项卡)",
            "name": "Tab(选项卡)",
            "description": "tab选项卡组件\n- 标签内容为heading属性，children部分为对应要显示的内容<br/>\n- 此外支持自定义类名,事件等操作<br/>\n具体属性和接口如下：\n<ul>\n    <li>heading; 标签卡的显示内容，默认‘tab’ 。\n        虽然有默认值但是这应该是必填的。</li>\n      <li>\n        例如:\n         <code>\n           Tabset activeIndex ={0} width={30}\n              Tab heading='tab1' className='测试'>hahadhdad1\n              /Tab\n           /Tabset\n         </code>\n      </li>\n      <li>clickCallback: 点击事件的回调函数，默认为null</li>\n</ul>",
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