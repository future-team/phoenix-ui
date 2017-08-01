'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe("<SearchBar/>", function () {
    it('buttonText传值正确', function () {
        var buttonText = '测试',
            button = undefined;
        var search = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { buttonText: buttonText })),
            input = _utilsTestTool.scry(search, 'input');

        _utilsTestTool.simulate.focus(input);
        button = _utilsTestTool.scry(search, 'button');
        _assert2['default'].equal(button.innerText, buttonText);
    });

    it('placeholder传值正确', function () {
        var placeholder = '测试';
        var search = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { placeholder: placeholder })),
            inputPlaceholder = _utilsTestTool.scry(search, '.ph-input-placeholder');

        _assert2['default'].equal(inputPlaceholder.innerText, placeholder);
    });

    it('focusCallback执行正常', function () {
        var focus = false;
        var search = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { focusCallback: function () {
                focus = true;
            } })),
            input = _utilsTestTool.scry(search, 'input');

        _utilsTestTool.simulate.focus(input);
        _assert2['default'](focus);
    });

    it('blurCallback执行正常', function () {
        var blur = false;
        var search = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { focusCallback: function () {
                blur = true;
            } })),
            input = _utilsTestTool.scry(search, 'input');

        _utilsTestTool.simulate.focus(input);
        _utilsTestTool.simulate.blur(input);
        _assert2['default'](blur);
    });

    it('clickCallback执行正常', function () {
        var click = false,
            button = undefined;
        var search = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { clickCallback: function () {
                click = true;
            } })),
            input = _utilsTestTool.scry(search, 'input');

        _utilsTestTool.simulate.focus(input);
        button = _utilsTestTool.scry(search, 'button');
        _utilsTestTool.simulate.click(button);
        _assert2['default'](click);
    });

    it('queryCallback执行正常', function () {
        var query = false;
        var search = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { queryCallback: function () {
                query = true;
            } })),
            input = _utilsTestTool.scry(search, 'input');

        _utilsTestTool.simulate.focus(input);
        _utilsTestTool.simulate.keyDown(input, { key: "Enter", keyCode: 13 });
        _assert2['default'](query);
    });
});