'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<Button/>", function () {
    it('默认primry & sm', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            null,
            'btn'
        ));
        _assert2['default'](button.props.className.match('primary'));
        _assert2['default'](button.props.className.match('sm'));
    });

    it('phStyle设置为info', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { phStyle: 'info' },
            'btn'
        ));
        _assert2['default'](button.props.className.match('info'));
    });

    it('phSize设置为lg', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { phSize: 'lg' },
            'btn'
        ));
        _assert2['default'](button.props.className.match('lg'));
    });

    it('添加block属性', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { block: true },
            'btn'
        ));
        _assert2['default'](button.props.className.match('block'));
    });

    it('添加disabled属性', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { disabled: true },
            'btn'
        ));
        _assert2['default'](button.props.className.match('disabled'));
    });

    it('添加active属性', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { active: true },
            'btn'
        ));
        _assert2['default'](button.props.className.match('active'));
    });

    it('添加hollow属性', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { hollow: true },
            'btn'
        ));
        _assert2['default'](button.props.className.match('hollow'));
    });

    it('添加stable属性', function () {
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { stable: true },
            'btn'
        ));
        _assert2['default'](button.props.className.match('stable'));
    });

    it('添加phIcon', function () {
        var phIcon = 'search';
        var button = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { phIcon: phIcon },
            'btn'
        ));

        _assert2['default'].equal(button.props.children[0].props.phIcon, phIcon);
    });
});