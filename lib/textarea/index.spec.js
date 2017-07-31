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

describe("<Textarea/>", function () {

    it('设置count和maxLength', function () {
        var textarea = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { count: true, maxLength: 100 })),
            countElem = _utilsTestTool.scry(textarea, '.ph-textarea-count');

        _assert2['default'](countElem);
    });

    it('getValueCallback获取输入值', function () {
        var value = '测试';
        var textarea = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { value: value }));

        _assert2['default'].equal(textarea.getValueCallback(), value);
    });
});