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

describe("<Input/>", function () {

    it('type默认为text', function () {
        var input = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], null));
        _assert2['default'].equal(input.props.children[0].props.type, 'text');
    });

    it('type设置为password', function () {
        var input = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { type: 'password' }));
        _assert2['default'].equal(input.props.children[0].props.type, 'password');
    });

    it('设置clear属性', function () {
        var input = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { value: '123', clear: true })),
            inputElem = _utilsTestTool.scry(input, 'input');

        _utilsTestTool.simulate.focus(inputElem);
        _assert2['default'](_reactDom.findDOMNode(input).className.match('clear'));
    });

    it('设置visible属性', function () {
        var input = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { type: 'password', visible: true }));
        _assert2['default'](_reactDom.findDOMNode(input).className.match('visible'));
    });

    it('设置error属性', function () {
        var input = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { error: true })),
            inputElem = _utilsTestTool.scry(input, 'input');
        // 没有focus时显示
        _assert2['default'](_reactDom.findDOMNode(input).className.match('error'));

        _utilsTestTool.simulate.focus(inputElem);
        // focus时不显示
        _assert2['default'](!_reactDom.findDOMNode(input).className.match('error'));
    });

    it('设置phReg-初始有值', function () {
        var reg = /^[a-zA-Z$_]\w{5,17}$/,
            value = '123';
        var input = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { value: value, phReg: reg }));

        _assert2['default'](_reactDom.findDOMNode(input).className.match('error'));
    });

    it('设置phReg-初始空值', function () {
        var reg = /^[a-zA-Z$_]\w{5,17}$/,
            value = '123';
        var input = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { phReg: reg })),
            inputElem = _utilsTestTool.scry(input, 'input');

        _reactDom.findDOMNode(inputElem).value = value;
        _utilsTestTool.simulate.change(inputElem);
        _utilsTestTool.simulate.focus(inputElem);
        _utilsTestTool.simulate.blur(inputElem);

        // assert(findDOMNode(input).className.match('error'))
    });

    it('getValueCallback获取输入值', function () {
        var value = '测试';
        var input = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { value: value }));

        _assert2['default'].equal(input.getValueCallback(), value);
    });
});