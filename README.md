# phoenix-ui
一个基于React的移动端UI组件库。

## Install
```
    $ npm install phoenix-ui --save
    $ npm install react-addons-css-transition-group --save
```

## Usage

```
    // CommonJS
    var Button = require('phoenix-ui/lib/Button');
    // ES6
    import {Button} from 'phoenix-ui';

    //react
    <Button phSize="xs" phStyle="primary">按钮</Button>
```

## Documentation
文档随时更新,请关注:
[http://future-team.github.io/phoenix-ui/doc/index.html](http://future-team.github.io/phoenix-ui/doc/index.html)

## Examples

[http://future-team.github.io/phoenix-ui/examples/index.html](http://future-team.github.io/phoenix-ui/examples/index.html)

```
    $ cd phoenix-ui
    $ npm install
    $ bower install
    生成文件：
    build：npm run build || gulp build
    开发调试：
    demo：npm run demo || gulp demo
    测试：
    npm run test
    生成文档：
    npm run docBuild
    查看示例：
    $npm install anywhere -g
    $ anywhere
```

## Command

```
	$ npm run demo
	$ npm run build
	$ npm run doc
	$ npm run test
```

## Repair

`version 1.1.3` 统一组件使用方式; Textarea bug处理&使用方式优化; 优化手风琴使用方式; 增加弹框可操控参数; <br/>
`version 1.1.1` 样式统一加ph前缀，配合Phoenix-styles@v1.1.1使用 <br/>
`version 1.1.0` 增加Drag对鼠标事件的支持;文案类整理 <br/>
`version 1.0.0` 新增Whisper/Popover、Slider、Animate、Drag <br/>
`version 0.4.0` 新增Popup、Accordion、Modal改Dialog <br/>
`version 0.3.0` 新增Textarea、Swipe、Modal、Toast <br/>
`version 0.2.0` 修复tab相关bug和优化 <br/>