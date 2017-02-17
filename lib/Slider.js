'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('./utils/Tool');

var _Drag = require('./Drag');

var _Drag2 = _interopRequireDefault(_Drag);

/**
 * 滑动输入条组件<br/>
 * - 滑动进度条确定当前进度的百分比。
 * - 可通过设置process确定初始进度百分比, 范围从0-100。
 * - 可通过placement设置当前进度提示框的位置, 可选top/bottoom。
 * - 可通过onChange设置拖拽进度条松开时的回调函数。
 * - 可通过disabled设置进度条只读。
 *
 * 主要属性和接口：
 * - process:初始进度百分比, 默认0 <br/>
 * 如: `<Slider progress={10}/>`
 * - placement:进度提示框的位置, 默认top <br/>
 * 如: `<Slider placement="bottom" />`
 * - onChange:拖拽进度条松开时的回调函数 <br/>
 * 如: `<Slider onChange={(progress)=>{console.log(progress);} />`
 * - disabled:进度条只读, 不可操作 <br/>
 * 如: `<Slider disabled/>`
 *
 * @class Slider
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo slider|slider.js {展示}
 * @show true
 * */

var Slider = (function (_Component) {
    _inherits(Slider, _Component);

    _createClass(Slider, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'slider'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 初始进程,默认0
             * @property progress
             * @type String
             * */
            progress: _react.PropTypes.number,
            /**
             * 进程提示的位置,默认top
             * @property placement
             * @type String
             * @default 'top'
             * */
            placement: _react.PropTypes.string,
            /**
             * 改变进程时的回调函数
             * @method onChange
             * @type Function
             * */
            onChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            placement: 'top',
            progress: 0,
            classPrefix: 'slider',
            componentTag: 'div',
            classMapping: {
                'disabled': 'disabled',
                'top': 'tip-top',
                'bottom': 'tip-bottom'
            }
        },
        enumerable: true
    }]);

    function Slider(props, context) {
        _classCallCheck(this, Slider);

        _Component.call(this, props, context);

        this.state = {
            newProgress: props.progress,
            tipVisible: false
        };
    }

    Slider.prototype.componentDidMount = function componentDidMount() {
        this.sliderLength = parseInt(this.sliderLine.offsetWidth);
        this.newProgressWidth = this.sliderLength * this.props.progress / 100;

        this.setSliderPosition(this.newProgressWidth + 'px');
    };

    Slider.prototype.setSliderPosition = function setSliderPosition(distance) {
        this.sliderProgress.style.width = distance;
        this.sliderBtn.style.left = distance;
    };

    Slider.prototype.onDrag = function onDrag(event, position) {
        this.preX = position.start.x;
        this.X = position.move.x;
        this.distance = this.X - this.preX;

        this.prevProgressWidth = this.newProgressWidth + this.distance;

        if (this.newProgressWidth + this.distance <= 0) this.prevProgressWidth = 0;
        if (this.newProgressWidth + this.distance >= this.sliderLength) this.prevProgressWidth = this.sliderLength;

        this.setSliderPosition(this.prevProgressWidth + 'px');

        this.setState({
            tipVisible: true,
            newProgress: parseInt(this.prevProgressWidth / this.sliderLength * 100)
        });
    };

    Slider.prototype.onDrop = function onDrop(event, position) {
        this.setState({
            tipVisible: false
        });

        this.newProgressWidth = this.prevProgressWidth;

        if (this.props.onChange) this.props.onChange(this.state.newProgress);
    };

    Slider.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix("slider-line"), ref: function (sliderLine) {
                        _this.sliderLine = sliderLine;
                    } },
                _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("slider-progress"), ref: function (sliderProgress) {
                        _this.sliderProgress = sliderProgress;
                    } }),
                _react2['default'].createElement(
                    'div',
                    { className: _utilsTool.setPhoenixPrefix("slider-content"), ref: function (sliderBtn) {
                            _this.sliderBtn = sliderBtn;
                        } },
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("slider-tip"), this.state.tipVisible ? 'show' : 'hide') },
                        this.state.newProgress
                    ),
                    _react2['default'].createElement(_Drag2['default'], { className: _utilsTool.setPhoenixPrefix("slider-btn"), onDrag: this.onDrag.bind(this), onDrop: this.onDrop.bind(this) })
                )
            )
        );
    };

    return Slider;
})(_utilsComponent2['default']);

exports['default'] = Slider;
module.exports = exports['default'];