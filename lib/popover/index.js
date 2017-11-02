'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../utils/Tool');

var _utilsTool2 = _interopRequireDefault(_utilsTool);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

require('../style');

require('phoenix-styles/less/modules/popover.less');

var SHOW_CLASS = 'show';

/**
 * 气泡组件<br/>
 * - 通过getTarget返回当前点击元素，必需。
 * - 可通过placement设置气泡的显示位置, 可选top、bottom、left、right。
 * - 当设置的位置不足够放置气泡，以下顺序顺延(top->bottom->left->right, bottom->top->left->right, left->right->top->bottom, right->left->top->bottom)。
 * - 可通过distance设置气泡到点击对象的位置。
 * - 可通过clickCallback定义气泡显隐时额外的回调函数。
 *
 * 示例:
 * ```code
 *  <Button phSize='lg' ref={(button)=>{this.button = button}}>按钮</Button>
 *  <Popover getTarget={()=>{return this.button}} placement='top'>
 *      <div className='ph-popover-text'>
 *          一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。
 *      </div>
 *  </Popover>
 * ```
 * ```code
 *  <Button phSize='lg' ref={(button)=>{this.button1 = button}}>按钮</Button>
 *  <Popover getTarget={()=>{return this.button1}} placement='right'>
 *      <ul className='ph-popover-list'>
 *          <li className='ph-popover-item'>未上线单店</li>
 *          <li className='ph-popover-item'>未上线连锁店</li>
 *      </ul>
 *  </Popover>
 * ```
 *
 * @class Popover
 * @module 提示组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo popover|popover.js {展示}
 * @show true
 * */

var Popover = (function (_Component) {
    _inherits(Popover, _Component);

    _createClass(Popover, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'popover'
             * */
            classPrefix: _propTypes2['default'].string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _propTypes2['default'].string,
            /**
             * 返回气泡的目标元素
             * @method getTarget
             * @type Function
             * @return {object} 目标元素的ref
             * */
            getTarget: _propTypes2['default'].func,
            /**
             * 气泡的位置,默认bottom
             * @property placement
             * @type String
             * */
            placement: _propTypes2['default'].string,
            /**
             * 气泡距离点击物的位置,默认5
             * @property distance
             * @type Number
             * */
            distance: _propTypes2['default'].number,
            /**
             * 气泡显隐时可执行的额外函数,自定义
             * @method clickCallback
             * @param {boolean} visible 当前显隐的状态
             * @type Function
             * */
            clickCallback: _propTypes2['default'].func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            placement: 'bottom',
            distance: 5,
            classPrefix: 'popover',
            componentTag: 'div',
            classMapping: {
                'top': 'top',
                'bottom': 'bottom',
                'left': 'left',
                'right': 'right'
            }
        },
        enumerable: true
    }]);

    function Popover(props, context) {
        _classCallCheck(this, Popover);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Popover');

        this.documentClickHandle = this.documentClickHandle.bind(this);
        this.targetClickHandle = this.targetClickHandle.bind(this);

        this.adaptePlacement = {
            'top': ['top', 'bottom', 'left', 'right'],
            'bottom': ['bottom', 'top', 'left', 'right'],
            'left': ['left', 'right', 'top', 'bottom'],
            'right': ['right', 'left', 'top', 'bottom']
        };
        this.placement = this.adaptePlacement[props.placement];
        this.placementCount = 0;

        this.el = document.createElement('div');
    }

    Popover.prototype.componentDidMount = function componentDidMount() {
        var _this = this;

        // 获取点击的对象target，并绑定点击事件
        var target = this.props.getTarget();
        if (!target) _utilsTool2['default'].warning('Popover 必须传递 getTarget[func]!');

        this.target = _reactDom.findDOMNode(target);
        this.target.addEventListener('click', this.targetClickHandle, false);

        // 将popover动态插入body
        // this.renderPortal();
        document.body.appendChild(this.el);

        this.bubble = _reactDom.findDOMNode(this.popoverMain);

        setTimeout(function () {
            document.addEventListener('click', _this.documentClickHandle, false);
            _this.getTargetPosition();
        }, 300);
    };

    Popover.prototype.renderPortal = function renderPortal() {
        var _this2 = this;

        this.node = document.createElement('div');
        document.body.appendChild(this.node);

        var popoverProps = this.otherProps;
        popoverProps.className = _classnames2['default'](this.getProperty(true), this.props.className);
        popoverProps.style = this.getStyles(this.props.style);
        popoverProps.ref = function (popover) {
            _this2.popover = popover;
        };

        var element = _react2['default'].createElement('div', popoverProps, this.popoverArrow(), this.popoverMain());

        _reactDom2['default'].render(element, this.node);
    };

    Popover.prototype.popoverArrow = function popoverArrow() {
        var _this3 = this;

        return _react2['default'].createElement('div', { className: _utilsTool2['default'].setPhPrefix('popover-arrow'), ref: function (popover) {
                _this3.popoverArrow = popover;
            } });
    };

    Popover.prototype.popoverMain = function popoverMain() {
        var _this4 = this;

        return _react2['default'].createElement(
            'div',
            { className: _utilsTool2['default'].setPhPrefix('popover-main'), ref: function (popover) {
                    _this4.popoverMain = popover;
                } },
            _react2['default'].createElement(
                'div',
                { className: _utilsTool2['default'].setPhPrefix('popover-content') },
                this.props.children
            )
        );
    };

    Popover.prototype.targetClickHandle = function targetClickHandle() {
        var clickCallback = this.props.clickCallback;

        if (this.hasClass(this.popover, SHOW_CLASS)) {
            this.removeClass(this.popover, SHOW_CLASS);
        } else {
            this.addClass(this.popover, SHOW_CLASS);
        }
        if (clickCallback) clickCallback(!!this.hasClass(this.popover, SHOW_CLASS));
    };

    Popover.prototype.documentClickHandle = function documentClickHandle(event) {
        event.stopPropagation();
        var el = event.target;
        // alert(event)
        if (el == this.target || _utilsTool2['default'].contains(this.target, el) || _utilsTool2['default'].contains(this.bubble, el)) return;

        this.removeClass(this.popover, SHOW_CLASS);
    };

    Popover.prototype.getTargetPosition = function getTargetPosition() {
        document.body.style.position = 'relative';

        this.win = {};
        this.position = {};
        this.size = {};
        this.bubbleSize = {};

        this.win.width = parseInt(document.documentElement.clientWidth);
        this.win.height = parseInt(_utilsTool2['default'].getClientHeight());

        this.position.x = parseInt(this.target.offsetLeft);
        this.position.y = parseInt(this.target.offsetTop);

        this.size.width = parseInt(this.target.offsetWidth);
        this.size.height = parseInt(this.target.offsetHeight);

        this.bubbleSize.width = parseInt(this.bubble.offsetWidth);
        this.bubbleSize.height = parseInt(this.bubble.offsetHeight);
        console.log(this.bubble.offsetWidth);
        this.calcTooltipPosition(this.props.placement);
    };

    Popover.prototype.calcTooltipPosition = function calcTooltipPosition(placement) {
        var distance = this.props.distance;
        var topBottomLeft = this.position.x + this.size.width / 2 - this.bubbleSize.width / 2;
        var leftRightTop = this.position.y + this.size.height / 2 - this.bubbleSize.height / 2;

        this.style = {};

        this.placementCount++;
        var place = this.placement[this.placementCount];

        switch (placement) {
            case 'top':
                this.style.top = this.position.y - this.bubbleSize.height - distance;
                this.style.left = topBottomLeft;

                if (this.style.top < 0) {
                    this.calcTooltipPosition(place);
                    return;
                }
                if (this.style.left < 0) this.style.left = 0;
                break;
            case 'bottom':
                this.style.top = this.position.y + this.size.height + distance;
                this.style.left = topBottomLeft;

                if (this.style.top > this.win.height - this.bubbleSize.height) {
                    this.calcTooltipPosition(place);
                    return;
                }
                if (this.style.left < 0) this.style.left = 0;
                break;
            case 'left':
                this.style.left = this.position.x - this.bubbleSize.width - distance;
                this.style.top = leftRightTop;

                if (this.style.left < 0) {
                    this.calcTooltipPosition(place);
                    return;
                }
                if (this.style.top < 0) this.style.top = 0;
                break;
            case 'right':
                this.style.left = this.position.x + this.size.width + distance;
                this.style.top = leftRightTop;

                if (this.style.left > this.win.width - this.bubbleSize.width) {
                    this.calcTooltipPosition(place);
                    return;
                }
                if (this.style.top < 0) this.style.top = 0;
                break;
            default:
                this.style.top = 0;
                this.style.left = 0;
        }

        this.calcArrowPosition(placement);
    };

    Popover.prototype.calcArrowPosition = function calcArrowPosition(placement) {
        var distance = this.props.distance;
        var topBottomLeft = this.position.x + this.size.width / 2;
        var leftRightTop = this.position.y + this.size.height / 2;

        this.arrowStyle = {};

        switch (placement) {
            case 'top':
                this.arrowStyle.top = this.position.y - distance;
                this.arrowStyle.left = topBottomLeft;
                break;
            case 'bottom':
                this.arrowStyle.top = this.position.y + this.size.height + distance;
                this.arrowStyle.left = topBottomLeft;
                break;
            case 'left':
                this.arrowStyle.left = this.position.x - distance;
                this.arrowStyle.top = leftRightTop;
                break;
            case 'right':
                this.arrowStyle.left = this.position.x + this.size.width + distance;
                this.arrowStyle.top = leftRightTop;
                break;
            default:
                this.arrowStyle.top = 0;
                this.arrowStyle.left = 0;
        }

        this.setPopoverStyle(placement);
    };

    Popover.prototype.setPopoverStyle = function setPopoverStyle(placement) {
        this.popoverArrow.style.top = this.arrowStyle.top + 'px';
        this.popoverArrow.style.left = this.arrowStyle.left + 'px';

        this.popoverMain.style.top = this.style.top + 'px';
        this.popoverMain.style.left = this.style.left + 'px';

        if (this.props.placement !== placement) {
            this.addClass(this.popover, _utilsTool2['default'].setPhPrefix('popover-' + placement));
            this.removeClass(this.popover, _utilsTool2['default'].setPhPrefix('popover-' + this.props.placement));
        }
    };

    Popover.prototype.componentWillUnmount = function componentWillUnmount() {
        this.target.removeEventListener('click', this.targetClickHandle, false);
        document.removeEventListener('click', this.documentClickHandle, false);
        document.body.removeChild(this.el);
    };

    Popover.prototype.renderPopover = function renderPopover(props) {
        var _this5 = this;

        var className = props.className;
        var style = props.style;
        var children = props.children;

        return _reactDom2['default'].createPortal(_react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(true), className),
                style: this.getStyles(style),
                ref: function (popover) {
                    _this5.popover = popover;
                } },
            _react2['default'].createElement('div', { className: _utilsTool2['default'].setPhPrefix('popover-arrow'), ref: function (popover) {
                    _this5.popoverArrow = popover;
                } }),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool2['default'].setPhPrefix('popover-main'), ref: function (popover) {
                        _this5.popoverMain = popover;
                    } },
                _react2['default'].createElement(
                    'div',
                    { className: _utilsTool2['default'].setPhPrefix('popover-content') },
                    this.props.children
                )
            )
        ), this.el);
    };

    Popover.prototype.render = function render() {
        return this.renderPopover(this.props);
    };

    return Popover;
})(_utilsComponent2['default']);

exports['default'] = Popover;
module.exports = exports['default'];