'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

describe("<Row/>", function () {
    it('设置align为bottom', function () {
        var row = _utilsTestTool.shallowRender(_react2['default'].createElement(_Row2['default'], { align: 'stretch' }));
        _assert2['default'](row.props.className.match('stretch'));
    });
});