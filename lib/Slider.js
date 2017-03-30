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
 * - 可通过tipStay设置初始和松开按钮时提示是否消失，默认false不显示。
 * - 可通过range制定范围，默认0-100，必需是长度为2的数组，第一个数字表示初始，第二个数字表示终点。
 * - 可通过showRange判断是否在进度条前后显示范围，默认不显示。
 * - 可通过duration设置固定移动的距离，默认1。
 * - 可通过onSliderChange设置拖拽进度条松开时的回调函数。
 * - 可通过disabled设置进度条只读。
 * - 使用Slider前确保父级是有宽度的元素；使用flex需要加一层宽度100%的外壳。
 *
 * 主要属性和接口：
 * - process:初始进度百分比, 默认0 <br/>
 * 如: `<Slider progress={10}/>`
 * - placement:进度提示框的位置, 默认top <br/>
 * 如: `<Slider placement="bottom" />`
 * - tipStay:初始和松开按钮时提示是否消失，默认false <br/>
 * 如: `<Slider tipStay />`
 * - range:范围，默认[0,100]。 <br/>
 * 如: `<Slider range={[20,50]} />`
 * - showRange:是否在进度条前后显示范围，默认不显示。 <br/>
 * 如: `<Slider showRange />`
 * - duration:固定移动的距离，默认1。 <br/>
 * 如: `<Slider duration={20} />`
 * - onSliderChange:拖拽进度条松开时的回调函数 <br/>
 * 如: `<Slider onSliderChange={(progress)=>{console.log(progress);} />`
 * - disabled:进度条只读, 不可操作 <br/>
 * 如: `<Slider disabled/>`
 *
 * @class Slider
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.0.0
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
            * 范围，默认0-100，可传固定范围的数组如：[25,50]
            * @property range
            * @type Array
            * @default [0,100]
            * */
            range: _react.PropTypes.array,
            /**
             * 是否在进度条前后显示范围
             * @property showRange
             * @type Boolean
             * @default false
             * */
            showRange: _react.PropTypes.bool,
            /**
            * 每次移动的固定距离，默认1
            * @property duration
            * @type Number
            * @default 1
            * */
            duration: _react.PropTypes.number,
            /**
             * 初始及松开按钮时是否显示进度
             * @property tipStay
             * @type Boolean
             * @default false
             * */
            tipStay: _react.PropTypes.bool,
            /**
             * 改变进程时的回调函数
             * @method onSliderChange
             * @type Function
             * */
            onSliderChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            placement: 'top',
            progress: 0,
            range: [0, 100],
            showRange: false,
            duration: 1,
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

        this.range = this.validateRange();
        this.eachPer = (this.range[1] - this.range[0]) / 100;

        this.duration = this.validateDuration();
        this.eachDur = this.duration / (this.range[1] - this.range[0]);

        this.state = {
            newProgress: props.progress,
            tipVisible: props.tipStay || false,
            tipProgress: parseInt(props.progress * this.eachPer + this.range[0])
        };
    }

    Slider.prototype.validateRange = function validateRange() {
        var range = this.props.range;var defaultRange = [0, 100];
        if (!range instanceof Array) return defaultRange;
        if (range.length != 2) {
            console.error('Invalid prop `range` of length not equal to 2.');
            return defaultRange;
        }
        if (range[0] >= range[1]) {
            console.error('Invalid prop `range[0]` must be less than or equal to `range[1]`.');
            return defaultRange;
        }
        return range;
    };

    Slider.prototype.validateDuration = function validateDuration() {
        var duration = this.props.duration;var defaultDuration = 1;
        if (duration <= 0) {
            console.error('Invalid prop `duration` have to be Positive.');
            return defaultDuration;
        }
        if ((this.range[1] - this.range[0]) % duration != 0) {
            // 不能整除的情况
            console.error('Prop `duration` can not be divided by `range`.');
            return defaultDuration;
        }
        return duration;
    };

    Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this = this;

        if (this.state.newProgress != nextProps.progress) {
            this.setState({
                newProgress: nextProps.progress
            }, function () {
                _this.newProgressWidth = _this.sliderLength * _this.state.newProgress / 100;
                _this.setSliderPosition(_this.newProgressWidth + 'px');
            });
        }
    };

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
        var newProgress = undefined;

        this.preX = position.start.x;
        this.X = position.move.x;
        this.distance = this.X - this.preX;

        this.prevProgressWidth = this.newProgressWidth + this.distance;

        if (this.newProgressWidth + this.distance <= 0) this.prevProgressWidth = 0;
        if (this.newProgressWidth + this.distance >= this.sliderLength) this.prevProgressWidth = this.sliderLength;

        if (this.duration != 1) {
            var eachSec = Math.round(this.prevProgressWidth / (this.sliderLength * this.eachDur), 0);
            this.prevProgressWidth = eachSec * (this.sliderLength * this.eachDur);
            newProgress = eachSec * this.eachDur * 100;
        } else {
            newProgress = this.prevProgressWidth / this.sliderLength * 100;
        }

        this.setSliderPosition(this.prevProgressWidth + 'px');

        this.setState({
            tipVisible: true,
            newProgress: newProgress,
            tipProgress: parseInt(newProgress * this.eachPer + this.range[0])
        });
    };

    Slider.prototype.onDrop = function onDrop(event, position) {
        if (!this.props.tipStay) {
            this.setState({
                tipVisible: false
            });
        }

        this.newProgressWidth = this.prevProgressWidth;

        if (this.props.onSliderChange) this.props.onSliderChange(this.state.tipProgress);
    };

    Slider.prototype.renderSliderRange = function renderSliderRange() {
        if (this.props.showRange) {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'strong',
                    { className: _utilsTool.setPhoenixPrefix("slider-range-start") },
                    this.range[0]
                ),
                _react2['default'].createElement(
                    'strong',
                    { className: _utilsTool.setPhoenixPrefix("slider-range-end") },
                    this.range[1]
                )
            );
        } else {
            return '';
        }
    };

    Slider.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;
        var showRange = _props.showRange;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className, showRange ? _utilsTool.setPhoenixPrefix('keep-range') : '') }),
            this.renderSliderRange(),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix("slider-line"), ref: function (sliderLine) {
                        _this2.sliderLine = sliderLine;
                    } },
                _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("slider-progress"), ref: function (sliderProgress) {
                        _this2.sliderProgress = sliderProgress;
                    } }),
                _react2['default'].createElement(
                    'div',
                    { className: _utilsTool.setPhoenixPrefix("slider-content"), ref: function (sliderBtn) {
                            _this2.sliderBtn = sliderBtn;
                        } },
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("slider-tip"), this.state.tipVisible ? 'show' : 'hide') },
                        this.state.tipProgress
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