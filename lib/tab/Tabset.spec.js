'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Tabset = require('./Tabset');

var _Tabset2 = _interopRequireDefault(_Tabset);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

describe("<Tab/>", function () {
    it('默认第一个tab选中', function () {
        var tab = _utilsTestTool.render(_react2['default'].createElement(
            _Tabset2['default'],
            null,
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题1' },
                '横向内容1'
            ),
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题2' },
                '横向内容2'
            )
        )),
            firstTabnav = _utilsTestTool.scry(tab, _Tab2['default']);

        _assert2['default'](_reactDom.findDOMNode(firstTabnav).className.match('active'));
    });

    it('activeIndex传值显示正确', function () {
        var _index = 1;
        var tab = _utilsTestTool.render(_react2['default'].createElement(
            _Tabset2['default'],
            { activeIndex: _index },
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题1' },
                '横向内容1'
            ),
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题2' },
                '横向内容2'
            )
        )),
            tabnav = _utilsTestTool.scry(tab, _Tab2['default'], _index);

        _assert2['default'](_reactDom.findDOMNode(tabnav).className.match('active'));
    });

    it('vertical传值正确', function () {
        var tab = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _Tabset2['default'],
            { vertical: true },
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题1' },
                '竖向内容1'
            ),
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题2' },
                '竖向内容2'
            )
        ));

        _assert2['default'](tab.props.className.match('vertical'));
    });

    it('width传值正确', function () {
        var width = 30;
        var tab = _utilsTestTool.shallowRender(_react2['default'].createElement(
            _Tabset2['default'],
            { vertical: true, width: width },
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题1' },
                '竖向内容1'
            ),
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题2' },
                '竖向内容2'
            )
        ));

        _assert2['default'](tab.props.children[0].props.className.match(width));
    });

    it('点击触发clickCallback', function () {
        var flag = true;
        var tab = _utilsTestTool.render(_react2['default'].createElement(
            _Tabset2['default'],
            { clickCallback: function () {
                    flag = false;
                } },
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题1' },
                '横向内容1'
            ),
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题2' },
                '横向内容2'
            )
        )),
            tabnav = _utilsTestTool.scry(tab, '.ph-tab-nav');

        _utilsTestTool.simulate.click(tabnav);
        _assert2['default'].equal(flag, false);
    });
});