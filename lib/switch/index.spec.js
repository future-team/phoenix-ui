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

describe("<Switch/>", function () {

    it('checked传值正确', function () {
        var checked = true;
        var switchs = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { checked: checked }));

        _assert2['default'].equal(switchs.props.children[0].props.checked, checked);
    });

    it('改变时触发onChange', function () {
        var checked = true;
        var switchs = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { onChange: function () {
                checked = false;
            } })),
            checkbox = _utilsTestTool.scry(switchs, 'input');

        _utilsTestTool.simulate.change(checkbox);
        _assert2['default'].equal(checked, false);
    });
});