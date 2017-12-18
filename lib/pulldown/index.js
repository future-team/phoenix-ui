'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../utils/Tool');

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('../style');

require('phoenix-styles/less/modules/pullup.less');

/**
 * 加载更多组件<br/>
 * - 书写时PullDown组件在可加载列表的前面。
 * - 可通过loadCallback设置下拉的执行回调。
 * - 如果当前列表存在自定义的滚动条，需要通过getTarget传递滚动的目标，且滚动元素的子元素必须只有一个。
 * - 只有getTarget的元素(默认window)滚到最顶端的时候，才能触发下拉。
 *
 * 主要属性和接口：
 * - loadCallback:点击按钮加载或滑到底部自动加载的回调函数。
 * - getTarget: 如果当前列表存在自定义的滚动条，需要传递滚动的目标。
 * 
 * 示例：
 * ```code
 *  <div style={{height:'300px',overflow:'auto'}} ref={(list)=>this.list=list}> // 用到getTarget需要保证只有一个子元素，包裹住滚动的所有内容
 *      <div> 
 *          <List>...</List> // 可加载列表的位置
 *          <PullDown loadCallback={this.loadCallback.bind(this)}
 *              getTarget={()=>{return list;}} />
 *      </div>
 *  </div>
 * ```
 * 
 * @class PullDown
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 3.3.0
 * @demo pulldown|pulldown.js {展示}
 * @show true
 * */
var MAX_HEIGHT = 800,
    MAX_DISTANCE = 200 / 2;

var PullDown = (function (_Component) {
    _inherits(PullDown, _Component);

    _createClass(PullDown, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'pulldown'
             * */
            classPrefix: _propTypes2['default'].string,
            /**
             * 滑到底部自动加载的回调函数，用户在该函数内自定义请求
             * @method loadCallback
             * @type Function
             * @default null
             **/
            loadCallback: _propTypes2['default'].func,
            /**
             * 如果当前列表存在自定义的滚动条，需要传递滚动的目标
             * @method getTarget
             * @type Function
             * @default null
             * @return {object} 目标元素的ref
             **/
            getTarget: _propTypes2['default'].func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'pulldown',
            classMapping: {}
        },
        enumerable: true
    }]);

    function PullDown(props, context) {
        _classCallCheck(this, PullDown);

        // 记得做数据没有触底的判断
        _Component.call(this, props, context);
        new _utilsLogger2['default']('PullDown');

        this.touchTop = true;
        this.distanceY = 0;
        this.start = false;

        this.scrollHandle = this.scrollHandle.bind(this);
        this.scrollElem = window;
    }

    PullDown.prototype.scrollHandle = function scrollHandle(e) {
        var getTarget = this.props.getTarget;
        var offsetTop = this.nextElem.offsetTop;
        var scrollTop = _utilsTool.getScrollTop();

        if (getTarget) {
            scrollTop = target.scrollTop;
        }
        // console.log('offsetTop', offsetTop)
        // console.log('scrollTop', scrollTop)

        if (scrollTop > 0) {
            this.touchTop = false;
        } else {
            this.touchTop = true;
        }
    };

    PullDown.prototype.componentDidMount = function componentDidMount() {
        var _this = this;

        var pullDownElem = _reactDom.findDOMNode(this.pullDown);

        this.dragElem = pullDownElem.parentNode;
        this.nextElem = pullDownElem.nextElementSibling;
        this.addClass(this.dragElem, 'animated');
        this.addClass(this.nextElem, 'hardware');

        this.dragEventHandle(this.dragElem);

        if (this.props.getTarget) {
            setTimeout(function () {
                _this.scrollElem = _this.props.getTarget();
                _this.scrollElem.addEventListener('scroll', _this.scrollHandle, false);
            }, 0);
        } else {
            this.scrollElem.addEventListener('scroll', this.scrollHandle, false);
        }
    };

    PullDown.prototype.dragEventHandle = function dragEventHandle(elem) {
        this.touchStartHandle = this.touchStartHandle.bind(this);
        elem.addEventListener('touchstart', this.touchStartHandle, false);

        this.touchMoveHandle = this.touchMoveHandle.bind(this);
        elem.addEventListener('touchmove', this.touchMoveHandle, false);

        this.touchEndHandle = this.touchEndHandle.bind(this);
        elem.addEventListener('touchend', this.touchEndHandle, false);

        this.touchCancelHandle = this.touchCancelHandle.bind(this);
        elem.addEventListener('touchcancel', this.touchCancelHandle, false);
    };

    PullDown.prototype.loadCallback = function loadCallback() {
        var loadCallback = this.props.loadCallback;

        if (loadCallback) loadCallback();
    };

    PullDown.prototype.touchStartHandle = function touchStartHandle(e) {
        if (!this.touchTop) return;
        this.start = true;

        this.distanceY = 0;
        this.starY = event.touches[0].pageY;
    };

    PullDown.prototype.touchMoveHandle = function touchMoveHandle(e) {
        if (!this.touchTop || !this.start) return;

        this.moveY = event.touches[0].pageY;
        this.distanceY = this.moveY - this.starY;

        if (this.distanceY <= 0) return;else _utilsTool.preventDefault(e);

        this.distanceY = Math.abs(this.distanceY);
        if (this.distanceY >= MAX_DISTANCE) this.distanceY = MAX_DISTANCE;

        this.transform = Math.min(1, MAX_HEIGHT / this.distanceY) * Math.min(MAX_HEIGHT, this.distanceY);
        this.dragElem.style.marginTop = this.transform + 'px';
    };

    PullDown.prototype.touchEndHandle = function touchEndHandle() {
        if (!this.touchTop || !this.start) return;

        this.starY = this.moveY;

        this.resetDragElem();

        if (Math.abs(this.distanceY) <= 80 || this.distanceY <= 0) return;

        this.loadCallback();
        this.start = false;
    };

    PullDown.prototype.touchCancelHandle = function touchCancelHandle() {
        this.resetDragElem();
    };

    PullDown.prototype.resetDragElem = function resetDragElem() {
        this.dragElem.style.marginTop = '0';
    };

    PullDown.prototype.componentWillUnmount = function componentWillUnmount() {
        this.scrollElem.removeEventListener('scroll', this.scrollHandle, false);

        this.dragElem.removeEventListener('touchstart', this.touchStartHandle, false);
        this.dragElem.removeEventListener('touchmove', this.touchMoveHandle, false);
        this.dragElem.removeEventListener('touchend', this.touchEndHandle, false);
    };

    PullDown.prototype.renderPullDown = function renderPullDown() {
        var _this2 = this;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, {
                ref: function (pullDown) {
                    _this2.pullDown = pullDown;
                },
                className: _classnames2['default'](this.getProperty(true), this.props.className)
            }),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhPrefix('pulldown-tip') },
                _react2['default'].createElement(_icon2['default'], { className: 'gfs-icon-loading', phIcon: 'loading-gray', phSize: 'sm' })
            )
        );
    };

    PullDown.prototype.render = function render() {
        return this.renderPullDown();
    };

    return PullDown;
})(_utilsComponent2['default']);

exports['default'] = PullDown;
module.exports = exports['default'];