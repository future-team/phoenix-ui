YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Input"
    ],
    "modules": [
        "form(表单)"
    ],
    "allModules": [
        {
            "displayName": "form(表单)",
            "name": "form(表单)",
            "description": "- input组件，与基本的input类型相对应，改变了默认的风格，<br/>\n- 使用方式还是与基本的input相同，例如'Input type=\"radio\" name='nba' label=\"76ers\" value=\"76ers\"/'<br/>\n- 支持自定义className，内联style，以及自定义属性<br/>\n- 针对radio和checkbox，有disabled,checked等属性，对应于不同的状态。具体如下<br/>\n主要属性和接口：\n <ul>\n   <li>type:input的具体类型，对应基本input的type。默认为text<br>\n       如：<code>\n            Input type=\"radio\"\n          </code>\n   </li>\n   <li>label:标签内容，针对radio和checkbox类型。默认为空<br>\n       如：<code>\n            Input type=\"radio\" label=\"76ers\"\n          </code>\n   </li>\n   <li>checked:选中状态，同样针对radio和checkbox类型。默认为false<br>\n       如：<code>\n            Input type=\"radio\" label=\"76ers\" checked\n          </code>\n   </li>\n   <li>disabled:不可操作状态，再次针对radio和checkbox类型。默认为false<br>\n       如：<code>\n            Input type=\"radio\" label=\"76ers\" disabled\n          </code>\n   </li>\n </ul>",
            "classes": [
                {
                    "name": "Input"
                }
            ]
        }
    ]
} };
});