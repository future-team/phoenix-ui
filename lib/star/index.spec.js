'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reactLibReactTestUtilsJs = require('react/lib/ReactTestUtils.js');

var _reactLibReactTestUtilsJs2 = _interopRequireDefault(_reactLibReactTestUtilsJs);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<Star/>", function () {
    it('默认sm', function () {
        var star = _reactLibReactTestUtilsJs2['default'].renderIntoDocument(_react2['default'].createElement(_index2['default'], null));
        _assert2['default'](_reactDom.findDOMNode(star).className.match('sm'));
    });

    it('rate设置为20', function () {
        var star = _reactLibReactTestUtilsJs2['default'].renderIntoDocument(_react2['default'].createElement(_index2['default'], { rate: 20 }));
        _assert2['default'](_reactDom.findDOMNode(star).className.match('20'));
    });

    it('phSize设置为lg', function () {
        var star = _reactLibReactTestUtilsJs2['default'].renderIntoDocument(_react2['default'].createElement(_index2['default'], { phSize: 'lg' }));
        _assert2['default'](_reactDom.findDOMNode(star).className.match('lg'));
    });
});