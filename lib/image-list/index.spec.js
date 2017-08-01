'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg';

describe("<ImageList/>", function () {

    it('column传值正确', function () {
        var column = 4;
        var image = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { column: column }));

        _assert2['default'](image.props.className.match(column));
    });
});