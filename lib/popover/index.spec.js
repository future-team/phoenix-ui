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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

describe("<Popover/>", function () {
    var _this = this;

    beforeEach(function () {
        var button = _utilsTestTool.render(_react2['default'].createElement(
            _button2['default'],
            { ref: function (button) {
                    _this.button = button;
                } },
            'btn'
        ));

        _this.getTarget = function () {
            return _this.button;
        };
    });

    // it('getTarget获取正常', ()=>{
    //     const popover = render(<Popover getTarget={this.getTarget}/>)
    //     simulate.click(this.button)
    // })
});