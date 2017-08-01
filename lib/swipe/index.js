'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _drag = require('../drag/');

var _drag2 = _interopRequireDefault(_drag);

var _button = require('../button/');

var _button2 = _interopRequireDefault(_button);

require('../style');

require('phoenix-styles/less/modules/swipe.less');

/**
 * 左滑组件<br/>
 * - 向左滑动出现可操作按钮, 类似IOS列表操作的组件。
 * - 通过buttons设置可操作按钮的文字text、样式phStyle以及点击按钮的回调函数onHandle。
 * - buttons的phStyle默认'primary', 可选primary、info、error、warning、danger、link、gray、success。
 *
 * 示例:
 * ```code
 *     <Swipe buttons={[
 *         {text: '删除', onHandle: this.onDelete, phStyle: 'error'},
 *         {text: '取消', onHandle: this.onCancle, phStyle: 'info'}
 *     ]}>
 *         <div style={{padding: '1rem'}}>
 *             // 内容
 *         </div>
 *     </Swipe>
 * ```
 *
 * @class Swipe
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.3.0
 * @demo swipe|swipe.js {展示}
 * @show true
 * */

var Swipe = (function (_Component) {
    _inherits(Swipe, _Component);

    _createClass(Swipe, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'swipe'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 按钮组
             * @property buttons
             * @type Array
             * */
            buttons: _react.PropTypes.array
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            buttons: [],
            classPrefix: 'swipe',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Swipe(props, context) {
        _classCallCheck(this, Swipe);

        _Component.call(this, props, context);

        this.btnsWidth = 0;
        this.translateX = -1;
        this.preTranslateX = -1;
        this.isBtnsShow = false;
    }

    Swipe.prototype.renderButtons = function renderButtons() {
        var _this = this;

        var buttons = this.props.buttons;

        return _react2['default'].createElement(
            'div',
            { className: this.setPhPrefix('btns'), key: 'buttons', ref: function (buttons) {
                    _this.buttons = buttons;
                } },
            buttons.map(function (button, index) {
                return _react2['default'].createElement(
                    _button2['default'],
                    _extends({ key: index }, button.otherProps, { phStyle: button.phStyle || 'primary',
                        onClick: function () {
                            if (button.onHandle) button.onHandle();
                            _this.setSwipeBack();
                        } }),
                    button.text
                );
            })
        );
    };

    Swipe.prototype.setSwipeBack = function setSwipeBack() {
        this.swipeElem.style.transform = 'translateX(0)';
    };

    Swipe.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        // 获取btns的宽度
        setTimeout(function () {
            _this2.btnsWidth = _this2.buttons.offsetWidth;
            _this2.swipeElem = _this2.dragElem.dragAction;
        }, 0);
    };

    Swipe.prototype.dragCallback = function dragCallback(event, position) {
        // position.start position.move
        if (!this.btnsWidth) return;

        var target = event.currentTarget;
        this.translateX = position.move.x - position.start.x + this.preTranslateX;

        if (position.move.x < position.start.x) {
            this.isBtnsShow = true;
        } else {
            this.isBtnsShow = false;
        }

        if (this.translateX >= 0) this.translateX = 0;
        if (this.translateX <= -this.btnsWidth) this.translateX = -this.btnsWidth;

        target.style.transform = 'translateX(' + this.translateX + 'px)';
    };

    Swipe.prototype.dropCallback = function dropCallback(event, position) {
        // position.end
        if (!this.btnsWidth) return;

        var target = event.currentTarget;

        if (Math.abs(this.translateX) < 10) {
            // 微弱操作保持不变
            this.isBtnsShow = !this.isBtnsShow;

            if (this.isBtnsShow) {
                this.translateX = 0;
            } else {
                this.translateX = -this.btnsWidth;
            }
        } else {
            if (this.isBtnsShow) {
                this.translateX = -this.btnsWidth;
            } else {
                this.translateX = 0;
            }
        }
        // console.log(this.isBtnsShow);

        this.preTranslateX = this.translateX;
        target.style.transform = 'translateX(' + this.translateX + 'px)';
    };

    Swipe.prototype.renderSwipe = function renderSwipe() {
        var _this3 = this;

        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;
        var style = _props.style;
        var children = _props.children;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), className), style: this.getStyles(style) }),
            _react2['default'].createElement(
                _drag2['default'],
                { className: this.setPhPrefix('content'), dragCallback: this.dragCallback.bind(this), dropCallback: this.dropCallback.bind(this),
                    ref: function (drag) {
                        _this3.dragElem = drag;
                    } },
                children
            ),
            this.renderButtons()
        );
    };

    Swipe.prototype.render = function render() {
        return this.renderSwipe();
    };

    return Swipe;
})(_utilsComponent2['default']);

exports['default'] = Swipe;
module.exports = exports['default'];