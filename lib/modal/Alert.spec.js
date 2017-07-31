'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

describe("<Alert/>", function () {
    var _this = this;

    beforeEach(function () {
        _this.btnText = '测试';

        _this.confirm = false;
        _this.confirmCallback = function () {
            _this.confirm = true;
        };

        _this.buttons = [{ text: _this.btnText, onHandle: _this.confirmCallback }];
    });

    it('buttons设置正确', function () {
        var alert = _utilsTestTool.render(_react2['default'].createElement(_Alert2['default'], { visible: true, buttons: _this.buttons })),
            button = _utilsTestTool.scry(alert, '.ph-button');

        _assert2['default'].equal(button.innerText, _this.btnText);
        _utilsTestTool.simulate.click(button);
        _assert2['default'](_this.confirm);
    });

    it('title传值正确', function () {
        var title = '测试';
        var alert = _utilsTestTool.render(_react2['default'].createElement(_Alert2['default'], { visible: true, title: title })),
            alertTitle = _utilsTestTool.scry(alert, '.ph-dialog-title');

        _assert2['default'].equal(alertTitle.innerHTML, title);
    });

    it('content传值正确', function () {
        var content = '测试';
        var alert = _utilsTestTool.render(_react2['default'].createElement(_Alert2['default'], { visible: true, content: content })),
            alertBody = _utilsTestTool.scry(alert, '.ph-dialog-body');

        _assert2['default'].equal(alertBody.innerHTML, content);
    });
});