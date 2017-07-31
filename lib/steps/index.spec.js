'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utilsTestTool = require('../utils/TestTool');

var _index2 = require('./index');

var _index3 = _interopRequireDefault(_index2);

var LIST = ['合作信息', '公司信息', '资质信息'];

describe("<Steps/>", function () {
    it('currentStep设置为1', function () {
        var _index = 1;
        var steps = _utilsTestTool.render(_react2['default'].createElement(_index3['default'], { list: LIST, currentStep: _index })),
            stepsItem = _utilsTestTool.scry(steps, '.ph-steps-list', _index);

        _assert2['default'](stepsItem.className.match('active'));
    });

    it('clickCallback正常执行', function () {
        var click = false;
        var steps = _utilsTestTool.render(_react2['default'].createElement(_index3['default'], { list: LIST, clickCallback: function () {
                click = true;
            } })),
            stepsItem = _utilsTestTool.scry(steps, '.ph-steps-list');

        _utilsTestTool.simulate.click(stepsItem);
        _assert2['default'](click);
    });

    it('readOnly设置成功', function () {
        var click = false;
        var steps = _utilsTestTool.render(_react2['default'].createElement(_index3['default'], { list: LIST, readOnly: true, clickCallback: function () {
                click = true;
            } })),
            stepsItem = _utilsTestTool.scry(steps, '.ph-steps-list');

        _utilsTestTool.simulate.click(stepsItem);
        _assert2['default'](!click);
    });
});