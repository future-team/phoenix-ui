# phoenix-ui注释编写规范
### 对module的注释（编写位置：写在对应模块的最具代表性的class组件头部）。
```
	/**
	 *模块描述(这块区域统一采用html形式描述，不用markdown): 
     * <h5>form表单模块集成了常见的表单元素形式:</h5>
     * <strong><a href='../classes/Input.html'>input输入框</a></strong><br>
     * 、、、、、、、、　
     * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
     *
     * @module 模块名称(例如form(表单))
     * @main 模块名称(例如form(表单))
     * @static
     **/	
```

### 对class的注释
```	
    /**
     * 组件相关信息的描述
     * 提供的UI展示属性接口(这块区域统一采用html形式描述，不用markdown)
     * <pre>
     *      描述
     *</pre>
     * @class 组件名字
     * @module 模块英文名(模块中文名)
     * @constructor
     * @demo empty.html {UI展示}
     * @demo src/modules/例子名.js {源码}
     * @show true
     * */
```
### 对属性的注释
```
    /**
     * 属性描述(是否显示下划线)
     * @property 属性名
     * @type 属性数据类型
     * @default 默认值
     * */
```
### 对方法的注释

```
    /**
     * 方法描述(回调方法，主要作用将value传给父级元素。默认为null)
     * @event  getValueCallback
     * @param {type} name description
     * @param {类型} 参数名 描述
     * @default null
     * */
```

## 查看文档UI展示

```
	$ npm run docBuild
	$ cd doc
	open index.html
```


