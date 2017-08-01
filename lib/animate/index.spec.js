'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<Animate/>", function () {
    it('默认transitionName为fade', function () {
        var animate = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], null));
        _assert2['default'].equal(animate.props.transitionName, 'fade');
    });

    it('transitionName传值生效', function () {
        var transitionName = 'slide';
        var animate = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { transitionName: transitionName }));

        _assert2['default'].equal(animate.props.transitionName, transitionName);
    });
});