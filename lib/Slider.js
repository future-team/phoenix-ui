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

var _Drag = require('./Drag');

var _Drag2 = _interopRequireDefault(_Drag);

/**
 * 滑动输入条 Slider
 * @class Slider
 * @module Action
 * @extends Component
 * @constructor
 * @demo slider.js {展示}
 * @demo slider.js {源码}
 * @show true
 * */

var Slider = (function (_Component) {
    _inherits(Slider, _Component);

    _createClass(Slider, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            progress: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            placement: 'top',
            progress: 0,
            componentTag: 'div',
            classMapping: {
                'disabled': 'slider-disabled',
                'top': 'slider-tip-top',
                'bottom': 'slider-tip-bottom'
            }
        },
        enumerable: true
    }]);

    function Slider(props, context) {
        _classCallCheck(this, Slider);

        _Component.call(this, props, context);

        this.state = {
            newProgress: this.props.progress,
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

        this.props.onChange(this.state.newProgress);
    };

    Slider.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default']('slider', this.getProperty(), className) }),
            _react2['default'].createElement(
                'div',
                { className: 'slider-line', ref: function (sliderLine) {
                        _this.sliderLine = sliderLine;
                    } },
                _react2['default'].createElement('div', { className: 'slider-progress', ref: function (sliderProgress) {
                        _this.sliderProgress = sliderProgress;
                    } }),
                _react2['default'].createElement(
                    'div',
                    { className: 'slider-drag', ref: function (sliderBtn) {
                            _this.sliderBtn = sliderBtn;
                        } },
                    _react2['default'].createElement(
                        'div',
                        { className: _classnames2['default']("slider-tip", this.state.tipVisible ? 'show' : 'hide') },
                        this.state.newProgress
                    ),
                    _react2['default'].createElement(_Drag2['default'], { className: 'slider-btn', onDrag: this.onDrag.bind(this), onDrop: this.onDrop.bind(this) })
                )
            )
        );
    };

    return Slider;
})(_utilsComponent2['default']);

exports['default'] = Slider;
module.exports = exports['default'];