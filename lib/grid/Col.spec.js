'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

describe("<Col/>", function () {
    it('设置width为20', function () {
        var col = _utilsTestTool.shallowRender(_react2['default'].createElement(_Col2['default'], { width: '20' }));
        _assert2['default'](col.props.className.match('20'));
    });

    it('设置offset为20', function () {
        var col = _utilsTestTool.shallowRender(_react2['default'].createElement(_Col2['default'], { offset: '20' }));
        _assert2['default'](col.props.className.match('offset-20'));
    });

    it('设置align为bottom', function () {
        var col = _utilsTestTool.shallowRender(_react2['default'].createElement(_Col2['default'], { align: 'bottom' }));
        _assert2['default'](col.props.className.match('bottom'));
    });
});