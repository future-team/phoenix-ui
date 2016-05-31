YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Col",
        "Row",
        "TableView"
    ],
    "modules": [
        "UI",
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