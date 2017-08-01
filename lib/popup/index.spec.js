'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<Popup/>", function () {
    it('visible设置为true', function () {
        var popup = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { visible: true })),
            popupContent = _utilsTestTool.scry(popup, '.ph-popup-content');
        _assert2['default'](popupContent);
    });

    it('align设置为bottom', function () {
        var align = 'bottom';
        var popup = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { visible: true, align: align }));
        _assert2['default'](popup.props.className.match(align));
    });

    it('closeCallback正常执行', function () {
        var close = false;
        var popup = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { visible: true, closeCallback: function () {
                close = true;
            } })),
            popupShadow = _utilsTestTool.scry(popup, '.ph-popup-shadow');

        _utilsTestTool.simulate.click(popupShadow);
        _assert2['default'](close);
    });
});