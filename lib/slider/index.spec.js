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

describe("<Slider/>", function () {

    it('progress传值正确', function () {
        var progress = 50;
        var slider = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { progress: progress })),
            sliderText = _utilsTestTool.scry(slider, '.ph-slider-text');

        _assert2['default'].equal(sliderText.innerText, progress);
    });

    it('tipMode设置为tooltip', function () {
        var slider = _utilsTestTool.render(_react2['default'].createElement(_index2['default'], { tipStay: true, tipMode: 'tooltip' })),
            sliderBtn = _utilsTestTool.scry(slider, '.ph-slider-btn'),
            sliderTip = _utilsTestTool.scry(slider, '.ph-slider-tip');
        _assert2['default'](sliderTip.className.match('show'));
    });

    it('placement设置为bottom', function () {
        var slider = _utilsTestTool.shallowRender(_react2['default'].createElement(_index2['default'], { placement: 'bottom' }));
        _assert2['default'](slider.props.className.match('bottom'));
    });
});