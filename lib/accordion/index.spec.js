'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<Accordion/>", function () {

    it('visible设置为true', function () {
        var visible = true;
        var accordion = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            { visible: visible },
            _react2['default'].createElement(
                _index2['default'].Header,
                null,
                '标题一'
            ),
            _react2['default'].createElement(
                _index2['default'].Body,
                null,
                '内容一'
            )
        )),
            accordionBody = _utilsTestTool.scry(accordion, '.ph-accordion-body');

        // console.log('height',findDOMNode(accordionBody).style.height)
    });

    it('clickCallback执行正常', function () {
        var visible = false;
        var accordion = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            { visible: visible, clickCallback: function (v) {
                    visible = v;
                } },
            _react2['default'].createElement(
                _index2['default'].Header,
                null,
                '标题一'
            ),
            _react2['default'].createElement(
                _index2['default'].Body,
                null,
                '内容一'
            )
        )),
            accordionHeader = _utilsTestTool.scry(accordion, '.ph-accordion-header');

        _utilsTestTool.simulate.click(accordionHeader);

        _assert2['default'](visible);
    });

    it('hideIcon设置正常', function () {
        var accordion = _utilsTestTool.render(_react2['default'].createElement(
            _index2['default'],
            { hideIcon: true },
            _react2['default'].createElement(
                _index2['default'].Header,
                null,
                '标题一'
            ),
            _react2['default'].createElement(
                _index2['default'].Body,
                null,
                '内容一'
            )
        )),
            accordionIcon = _utilsTestTool.scry(accordion, '.gfs-icon');

        _assert2['default'](!accordionIcon);
    });
});