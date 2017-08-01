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

describe("<Label/>", function () {
    it('默认为primry & sm', function () {
        var label = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            null,
            '惠'
        ));
        _assert2['default'](label.props.className.match('primary'));
        _assert2['default'](label.props.className.match('sm'));
    });

    it('phStyle设置为info', function () {
        var label = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { phStyle: 'info' },
            '惠'
        ));
        _assert2['default'](label.props.className.match('info'));
    });

    it('phSize设置为lg', function () {
        var label = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { phSize: 'lg' },
            '惠'
        ));
        _assert2['default'](label.props.className.match('lg'));
    });
});