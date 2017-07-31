'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reactLibReactTestUtilsJs = require('react/lib/ReactTestUtils.js');

var _reactLibReactTestUtilsJs2 = _interopRequireDefault(_reactLibReactTestUtilsJs);

var _utilsTestTool = require('../utils/TestTool');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<ButtonGroup/>", function () {
    it('默认default', function () {
        var buttonGroup = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            null,
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组1'
            ),
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组2'
            )
        ));
        _assert2['default'](buttonGroup.props.className.match('default'));
    });

    it('activeIndex设置为1', function () {
        var activeIndex = 1;
        var buttonGroup = _reactLibReactTestUtilsJs2['default'].renderIntoDocument(_react2['default'].createElement(
            _index2['default'],
            { phType: 'justify', activeIndex: activeIndex },
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组1'
            ),
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组2'
            )
        ));

        var button = _reactLibReactTestUtilsJs2['default'].scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[activeIndex];

        _assert2['default'](!button.className.match('hollow'));
    });

    it('phType设置为tacked', function () {
        var buttonGroup = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _index2['default'],
            { phType: 'tacked' },
            _react2['default'].createElement(
                _button2['default'],
                { block: true },
                '垂直按钮组1'
            ),
            _react2['default'].createElement(
                _button2['default'],
                { block: true },
                '垂直按钮组2'
            )
        ));
        _assert2['default'](buttonGroup.props.className.match('tacked'));
    });

    it('点击按钮是否选中(justify)', function () {
        var buttonGroup = _reactLibReactTestUtilsJs2['default'].renderIntoDocument(_react2['default'].createElement(
            _index2['default'],
            { phType: 'justify' },
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组1'
            ),
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组2'
            )
        ));
        var button = _reactLibReactTestUtilsJs2['default'].scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0];

        _reactLibReactTestUtilsJs2['default'].Simulate.click(button);
        _assert2['default'](!button.className.match('hollow'));
    });

    it('点击是否执行clickCallback', function () {
        var flag = false;
        var buttonGroup = _reactLibReactTestUtilsJs2['default'].renderIntoDocument(_react2['default'].createElement(
            _index2['default'],
            { phType: 'justify', clickCallback: function () {
                    flag = true;
                } },
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组1'
            ),
            _react2['default'].createElement(
                _button2['default'],
                null,
                '水平按钮组2'
            )
        ));
        var button = _reactLibReactTestUtilsJs2['default'].scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0];

        _reactLibReactTestUtilsJs2['default'].Simulate.click(button);
        _assert2['default'].equal(flag, true);
    });
});