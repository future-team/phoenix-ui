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

describe("<Checkbox/>", function () {

    it('label传值显示正常', function () {
        var label = '测试';
        var checkbox = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { label: label }));

        _assert2['default'].equal(checkbox.props.children[1].props.children, label);
    });

    it('checked传值正确', function () {
        var checked = true;
        var checkbox = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { checked: checked }));

        _assert2['default'].equal(checkbox.props.children[0].props.children[0].props.checked, checked);
    });

    it('onChange正常执行', function () {
        var checked = true;
        var checkbox = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { onChange: function () {
                checked = false;
            } })),
            checkboxElem = _utilsTestTool.scry(checkbox, 'input');

        _utilsTestTool.simulate.change(checkboxElem);
        _assert2['default'].equal(checked, false);
    });
});