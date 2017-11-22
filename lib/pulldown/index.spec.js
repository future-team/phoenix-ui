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

describe("<PullDown/>", function () {

    it('mode设置为button', function () {
        var pullup = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { mode: 'button' })),
            button = _utilsTestTool.scry(pullup, '.ph-button');
        _assert2['default'](button);
    });

    it('phStyle设置为info', function () {
        var phStyle = 'info';
        var pullup = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { mode: 'button', phStyle: phStyle })),
            button = _utilsTestTool.scry(pullup, '.ph-button');
        _assert2['default'](button.className.match(phStyle));
    });

    it('tips传值正确', function () {
        var tips = ['more', '', '', '', ''];
        var pullup = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { tips: tips, status: 0 })),
            pullupTip = _utilsTestTool.scry(pullup, '.ph-pullup-tip');
        _assert2['default'](pullupTip.innerText, tips[0]);
    });
});