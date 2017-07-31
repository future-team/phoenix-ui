'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

describe("<Grid/>", function () {
    it('默认', function () {
        var grid = _utilsTestTool.shallowRender(_react2['default'].createElement(_Grid2['default'], null));
        _assert2['default'](grid.props.className.match('grid'));
    });
});