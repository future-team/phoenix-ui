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

    it('heading传值正确', function () {
        var heading = '测试';
        var tab = _utilsTestTool.render(_react2['default'].createElement(
            _Tabset2['default'],
            null,
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: heading },
                '横向内容1'
            )
        )),
            tabnav = _utilsTestTool.scry(tab, '.ph-tab-nav');

        _assert2['default'].equal(tabnav.innerText, heading);
    });

    it('点击触发clickCallback', function () {
        var flag = true;
        var tab = _utilsTestTool.render(_react2['default'].createElement(
            _Tabset2['default'],
            null,
            _react2['default'].createElement(
                _Tab2['default'],
                { heading: '标题1', clickCallback: function () {
                        flag = false;
                    } },
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