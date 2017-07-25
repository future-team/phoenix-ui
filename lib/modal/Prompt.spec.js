'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Prompt = require('./Prompt');

var _Prompt2 = _interopRequireDefault(_Prompt);

describe("<Prompt/>", function () {
    var _this = this;

    beforeEach(function () {
        _this.btnText = '测试';
        _this.inputText = '测试';

        _this.confirm = false;
        _this.confirmCallback = function () {
            _this.confirm = true;
        };

        _this.buttons = [{ text: _this.btnText, onHandle: _this.confirmCallback }];
        _this.inputs = [{ value: _this.inputText }];
    });

    it('inputs设置正确', function () {
        var prompt = _utilsTestTool.render(_react2['default'].createElement(_Prompt2['default'], { visible: true, inputs: _this.inputs })),
            input = _utilsTestTool.scry(prompt, 'input');

        _assert2['default'].equal(input.value, _this.inputText);
    });

    it('buttons设置正确', function () {
        var prompt = _utilsTestTool.render(_react2['default'].createElement(_Prompt2['default'], { visible: true, buttons: _this.buttons })),
            button = _utilsTestTool.scry(prompt, '.ph-button');

        _assert2['default'].equal(button.innerText, _this.btnText);
        _utilsTestTool.simulate.click(button);
        _assert2['default'](_this.confirm);
    });

    it('title传值正确', function () {
        var title = '测试';
        var prompt = _utilsTestTool.render(_react2['default'].createElement(_Prompt2['default'], { visible: true, title: title })),
            promptTitle = _utilsTestTool.scry(prompt, '.ph-dialog-title');

        _assert2['default'].equal(promptTitle.innerHTML, title);
    });

    it('content传值正确', function () {
        var content = '测试';
        var prompt = _utilsTestTool.render(_react2['default'].createElement(_Prompt2['default'], { visible: true, content: content })),
            promptBody = _utilsTestTool.scry(prompt, '.ph-dialog-prompt-text');

        _assert2['default'].equal(promptBody.innerHTML, content);
    });
});