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

describe("<Swipe/>", function () {
    var _this = this;

    beforeEach(function () {
        _this.btnText = '测试';
        _this.handle = false;
        _this.onHandle = function () {
            _this.handle = true;
        };

        _this.buttons = [{ text: _this.btnText, onHandle: _this.onHandle }];
    });

    it('buttons传值正确', function () {
        var popover = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            { buttons: _this.buttons },
            _react2['default'].createElement(
                'p',
                null,
                'Swipe'
            )
        )),
            drag = _utilsTestTool.scry(popover, '.ph-swipe-content'),
            button = _utilsTestTool.scry(popover, '.ph-button');

        _assert2['default'](button.innerText, _this.btnText);
        // simulate.touchStart(drag, nativeTouchData(0, 0))
        // simulate.touchEnd(drag, nativeTouchData(0, 0))
        // simulate.click(button)
        // assert(this.handle)
    });
});