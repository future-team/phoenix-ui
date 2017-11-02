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
 * - 书写时PullUp组件在可加载列表的后面。
 * - 通过mode设置加载更多的模式，有点击按钮加载更多，以及滑到最底端自动加载，可选 [auto,button] 2种参数。
 * - 通过status设置当前状态，只需要在请求结束返回相应状态，包含请求成功返回2，请求成功并再没有数据返回4，请求失败返回3。
 * - 可通过tips设置按钮文字和状态提示语，默认['加载更多','','加载成功','加载失败','没有更多']，分别对应status的状态。
 * - 可通过phStyle设置按钮的样式，如果当前mode为auto设置无效。
 * - 可通过loadCallback设置点击按钮加载或滑到底部自动加载的回调函数，如果状态为4不执行。
 * - 如果当前列表存在自定义的滚动条，需要通过getTarget传递滚动的目标，且滚动元素的子元素必须只有一个。
 *
 * 主要属性和接口：
 * - mode:加载更多的模式，默认auto。
 * - status:当前状态:0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多。
 * - tips:按钮文字和状态提示语，默认['加载更多','','加载成功','加载失败','没有更多']。
 * - phStyle:按钮的样式，默认'primary'。
 * - loadCallback:点击按钮加载或滑到底部自动加载的回调函数。
 * - getTarget: 如果当前列表存在自定义的滚动条，需要传递滚动的目标。
 * 
 * 示例：
 * ```code
 *  <div style={{height:'300px',overflow:'auto'}} ref={(list)=>this.list=list}>
 *      <div> // 用到getTarget需要保证只有一个子元素，包裹住滚动的所有内容
 *          <List>...</List> // 可加载列表的位置
 *          <PullUp mode='button' status={this.state.status} 
 *              tips={['点击加载更多','加载中...','加载成功！','加载失败！','没有更多']} 
 *              phStyle='primary' 
 *              loadCallback={this.loadCallback.bind(this)}
 *              getTarget={()=>{return list;}} />
 *      </div>
 *  </div>
 * ```
 * 
 * @class PullUp
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo pullup|pullup.js {展示}
 * @show true
 * */
var MAX_HEIGHT = 800;

var PullUp = (function (_Component) {
    _inherits(PullUp, _Component);

    _createClass(PullUp, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'pullup'
             * */
            classPrefix: _propTypes2['default'].string,
            /**
            * 加载更多的模式，可选[auto,button], 默认auto
            * @property mode
            * @type String
            * @default 'auto'
            **/
            mode: _propTypes2['default'].string,
            /**
             * 加载状态：0初始状态, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
             * @property status
             * @type Number
             * @default 0
             **/
            status: _propTypes2['default'].number,
            /**
             * 加载5个状态的文字描述，默认['加载更多','','加载成功','加载失败','没有更多']
             * @property tips
             * @type Array
             * @default ['加载更多','加载中','加载成功','加载失败','没有更多']
             **/
            tips: _propTypes2['default'].array,
            /**
             * 按钮颜色，默认primary
             * @property phStyle
             * @type Array
             * @default 'primary'
             **/
            phStyle: _propTypes2['default'].string,
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
            status: 4, // 0初始状态, 1加载中, 2加载成功, 3加载失败, 4没有更多
            mode: 'auto',
            phStyle: 'primary',
            tips: ['加载更多', '', '加载成功', '加载失败', '没有更多'],
            classPrefix: 'pullup',
            classMapping: {}
        },
        enumerable: true
    }]);

    function PullUp(props, context) {
        _classCallCheck(this, PullUp);

        // 记得做数据没有触底的判断
        _Component.call(this, props, context);
        new _utilsLogger2['default']('PullUp');

        this.state = {
            status: props.status
        };

        if (props.mode == 'button') return;

        this.touchBottom = false;
        this.distanceY = 0;

        this.scrollHandle = this.scrollHandle.bind(this);
        this.scrollElem = window;
    }

    PullUp.prototype.scrollHandle = function scrollHandle(e) {
        var status = this.state.status;
        var getTarget = this.props.getTarget;
        var target = e.target;

        if (getTarget) {
            this.scrollTop = target.scrollTop;
            this.bodyHeight = target.clientHeight;
            this.documentHeight = target.children[0].offsetHeight;
        } else {
            this.scrollTop = _utilsTool.getScrollTop();
            this.bodyHeight = _utilsTool.getClientHeight();
            this.documentHeight = _utilsTool.getDocumentHeight();
        }
        // console.log('this.scrollTop', this.scrollTop)
        // console.log('this.bodyHeight', this.bodyHeight)
        // console.log('this.documentHeight', this.documentHeight)

        this.pullTop = this.documentHeight - this.pullUp.offsetHeight;
        // if(!this.pullHeight) this.pullHeight = this.pullUp.offsetHeight

        if (this.scrollTop + this.bodyHeight >= this.pullTop) {
            this.touchBottom = true;

            if (status == 3) return;
            this.loadCallback();
        } else {
            this.touchBottom = false;
        }
    };

    PullUp.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.status !== this.state.status) {
            this.setState({
                status: nextProps.status
            });
        }
    };

    PullUp.prototype.componentDidMount = function componentDidMount() {
        var _this = this;

        var pullUpElem = _reactDom.findDOMNode(this.pullUp);

        this.dragElem = pullUpElem.parentNode;
        this.prevElem = pullUpElem.previousElementSibling;
        this.addClass(this.dragElem, 'animated');
        this.addClass(this.prevElem, 'hardware');

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

    PullUp.prototype.dragEventHandle = function dragEventHandle(elem) {
        this.touchStartHandle = this.touchStartHandle.bind(this);
        elem.addEventListener('touchstart', this.touchStartHandle, false);

        this.touchMoveHandle = this.touchMoveHandle.bind(this);
        elem.addEventListener('touchmove', this.touchMoveHandle, false);

        this.touchEndHandle = this.touchEndHandle.bind(this);
        elem.addEventListener('touchend', this.touchEndHandle, false);

        this.touchCancelHandle = this.touchCancelHandle.bind(this);
        elem.addEventListener('touchcancel', this.touchCancelHandle, false);
    };

    PullUp.prototype.componentDidUpdate = function componentDidUpdate() {
        var status = this.state.status;

        // 只有加载成功并传值才重置状态
        if (status == 2) {
            this.setState({
                status: 0
            });
        }
    };

    PullUp.prototype.loadCallback = function loadCallback() {
        var loadCallback = this.props.loadCallback;
        var status = this.state.status;

        // 如果已经没有更多，不再继续请求数据的操作
        if (status == 4 || status == 1) return;

        // 状态置为加载中(状态为0或3时执行)
        this.setState({
            status: 1
        }, function () {
            if (loadCallback) loadCallback();
        });
    };

    PullUp.prototype.touchStartHandle = function touchStartHandle(e) {
        // preventDefault(e)
        if (!this.touchBottom) return;

        this.distanceY = 0;
        this.starY = event.touches[0].pageY;
    };

    PullUp.prototype.touchMoveHandle = function touchMoveHandle(e) {
        // preventDefault(e)
        if (!this.touchBottom) return;

        this.moveY = event.touches[0].pageY;
        this.distanceY = this.moveY - this.starY;

        if (this.distanceY >= 0) return;

        this.distanceY = Math.abs(this.distanceY);

        this.transform = Math.min(1, MAX_HEIGHT / this.distanceY) * Math.min(MAX_HEIGHT, this.distanceY);
        this.dragElem.style.transform = 'translateY(' + -this.transform + 'px)';
    };

    PullUp.prototype.touchEndHandle = function touchEndHandle(e) {
        // preventDefault(e)
        if (!this.touchBottom) return;

        this.starY = this.moveY;

        this.dragElem.style.transform = 'translateY(0)';

        if (Math.abs(this.distanceY) <= 80) return;

        this.loadCallback();
    };

    PullUp.prototype.touchCancelHandle = function touchCancelHandle() {
        this.dragElem.style.transform = 'translateY(0)';
    };

    PullUp.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.mode == 'button') return;

        this.scrollElem.removeEventListener('scroll', this.scrollHandle, false);

        this.dragElem.removeEventListener('touchstart', this.touchStartHandle, false);
        this.dragElem.removeEventListener('touchmove', this.touchMoveHandle, false);
        this.dragElem.removeEventListener('touchend', this.touchEndHandle, false);
    };

    PullUp.prototype.renderContent = function renderContent() {
        var _props = this.props;
        var mode = _props.mode;
        var tips = _props.tips;
        var phStyle = _props.phStyle;
        var status = this.state.status;

        if (mode == 'button') {
            return _react2['default'].createElement(
                _button2['default'],
                { phStyle: status == 3 ? 'error' : phStyle, disabled: status == 4 || status == 1,
                    onClick: this.loadCallback.bind(this) },
                this.renderIcon(status),
                tips[status]
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhPrefix('pullup-tip') },
                this.renderIcon(status),
                tips[status]
            );
        }
    };

    PullUp.prototype.renderIcon = function renderIcon(status) {
        if (status == 1) {
            return _react2['default'].createElement(_icon2['default'], { className: 'gfs-icon-loading', phIcon: 'loading-gray', phSize: 'sm' });
        }
    };

    PullUp.prototype.renderPullUp = function renderPullUp() {
        var _this2 = this;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { ref: function (pullUp) {
                    _this2.pullUp = pullUp;
                }, className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.renderContent()
        );
    };

    PullUp.prototype.render = function render() {
        return this.renderPullUp();
    };

    return PullUp;
})(_utilsComponent2['default']);

exports['default'] = PullUp;
module.exports = exports['default'];