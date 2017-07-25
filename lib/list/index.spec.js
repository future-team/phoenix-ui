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

describe("<List/>", function () {
    it('List.Item: 设置disabled属性', function () {
        var list = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _index2['default'].Item,
                { disabled: true },
                'item'
            )
        )),
            listitem = _utilsTestTool.scry(list, _index2['default'].Item);

        _assert2['default'](_reactDom.findDOMNode(listitem).className.match('disabled'));
    });

    it('List.Item: 设置error属性', function () {
        var list = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _index2['default'].Item,
                { error: true },
                'item'
            )
        )),
            listitem = _utilsTestTool.scry(list, _index2['default'].Item);

        _assert2['default'](_reactDom.findDOMNode(listitem).className.match('error'));
    });

    it('List.Item: 设置required属性', function () {
        var list = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _index2['default'].Item,
                { required: true },
                'item'
            )
        )),
            listitem = _utilsTestTool.scry(list, _index2['default'].Item);

        _assert2['default'](_reactDom.findDOMNode(listitem).className.match('required'));
    });

    it('List.Item: 设置navigate属性', function () {
        var list = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _index2['default'].Item,
                { navigate: true },
                'item'
            )
        )),
            listitem = _utilsTestTool.scry(list, _index2['default'].Item);

        _assert2['default'](_reactDom.findDOMNode(listitem).className.match('navigate'));
    });

    it('List.Col: 设置heading属性', function () {
        var list = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _index2['default'].Item,
                null,
                _react2['default'].createElement(
                    _index2['default'].Col,
                    { heading: true },
                    'col'
                )
            )
        )),
            listcol = _utilsTestTool.scry(list, _index2['default'].Col);

        _assert2['default'](_reactDom.findDOMNode(listcol).className.match('heading'));
    });

    it('List.Col: 设置tail属性', function () {
        var list = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _index2['default'].Item,
                null,
                _react2['default'].createElement(
                    _index2['default'].Col,
                    { tail: true },
                    'col'
                )
            )
        )),
            listcol = _utilsTestTool.scry(list, _index2['default'].Col);

        _assert2['default'](_reactDom.findDOMNode(listcol).className.match('tail'));
    });
});