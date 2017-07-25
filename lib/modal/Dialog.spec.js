'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

describe("<Dialog/>", function () {
    it('visible设置为true', function () {
        var visible = true;
        var dialog = _utilsTestTool.render(_react2['default'].createElement(
            _Dialog2['default'],
            { visible: visible },
            _react2['default'].createElement(
                _Dialog2['default'].Body,
                null,
                _react2['default'].createElement(
                    'p',
                    null,
                    '可自定义表格内容'
                )
            )
        )),
            dialogBody = _utilsTestTool.scry(dialog, _Dialog2['default'].Body);

        _assert2['default'](dialogBody);
    });

    it('closeButton设置为true', function () {
        var dialog = _utilsTestTool.render(_react2['default'].createElement(_Dialog2['default'], { visible: true, closeButton: true })),
            closeBtn = _utilsTestTool.scry(dialog, '.gfs-icon');

        _assert2['default'](closeBtn);
    });

    it('closeCallback正常执行', function () {
        var close = false;
        var dialog = _utilsTestTool.render(_react2['default'].createElement(_Dialog2['default'], { visible: true, closeButton: true, closeCallback: function () {
                close = true;
            } })),
            closeBtn = _utilsTestTool.scry(dialog, '.ph-dialog-close');

        _utilsTestTool.simulate.click(closeBtn);
        _assert2['default'](close);
    });

    it('shadowDisabled设置为true', function () {
        var close = false;
        var dialog = _utilsTestTool.render(_react2['default'].createElement(_Dialog2['default'], { visible: true, closeCallback: function () {
                close = true;
            }, shadowDisabled: true })),
            dialogShadow = _utilsTestTool.scry(dialog, '.ph-dialog-shadow');

        _utilsTestTool.simulate.click(dialogShadow);
        _assert2['default'](!close);
    });
});