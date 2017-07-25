'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var DEFULT_IMAGE = 'http://file.digitaling.com/eImg/uimages/20150907/1441607165383971.gif',
    IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg',
    LAZY_URL = 'http://imglf1.ph.126.net/V0-JUTmkXrb0nkcfTVfH9g==/6630709324908900349.jpg';

describe("<Image/>", function () {

    it('phSize默认default', function () {
        var image = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { src: IMAGE_URL }));
        _assert2['default'](image.props.className.match('default'));
    });

    it('phSize设置为cover', function () {
        var image = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { src: IMAGE_URL, phSize: 'cover' }));
        _assert2['default'](image.props.className.match('cover'));
    });

    it('src传值正确', function () {
        var image = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { src: IMAGE_URL })),
            imageElem = _utilsTestTool.scry(image, 'img');

        _utilsTestTool.simulate.load(imageElem);
        _assert2['default'].equal(imageElem.src, IMAGE_URL);
    });

    it('defaultSrc传值正确', function () {
        var image = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { defaultSrc: DEFULT_IMAGE, src: '...' })),
            imageElem = _utilsTestTool.scry(image, 'img');

        _utilsTestTool.simulate.load(imageElem);
        _assert2['default'].equal(imageElem.src, DEFULT_IMAGE);
    });

    // it('lazy懒加载', ()=>{

    // })

    it('loadCallback回调正常执行', function () {
        var load = false;
        var image = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { src: IMAGE_URL, loadCallback: function () {
                load = true;
            } })),
            imageElem = _utilsTestTool.scry(image, 'img');

        _utilsTestTool.simulate.load(imageElem);
        _assert2['default'](load);
    });
});