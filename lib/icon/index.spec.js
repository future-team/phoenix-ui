'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<Icon/>", function () {

    it('默认为default&sm', function () {
        var icon = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { phIcon: 'search' }));
        _assert2['default'](icon.props.className.match('default'));
        _assert2['default'](icon.props.className.match('sm'));
    });

    it('phIcon设置为search', function () {
        var icon = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { phIcon: 'search' }));
        _assert2['default'](icon.props.className.match('search'));
    });

    it('phSize设置为xlg', function () {
        var icon = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { phIcon: 'search', phSize: 'xlg' }));
        _assert2['default'](icon.props.className.match('xlg'));
    });

    it('phStyle设置为info', function () {
        var icon = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { phIcon: 'search', phStyle: 'info' }));
        _assert2['default'](icon.props.className.match('info'));
    });
});